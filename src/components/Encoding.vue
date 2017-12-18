<template>
  <div class="encoding-form">
    <div class="html ui top attached segment">
      <div class="ui form">
        <h4 class="ui dividing header">입력</h4>
        <div class="field">
          <label>UTF-8</label>
          <div class="fields">
            <div class="field wide twelve">
              <input type="text" placeholder="Input text" v-model="input">
            </div>
          </div>
        </div>

        <h4 class="ui dividing header">출력</h4>

        <div class="field">
          <label>EUC-KR</label>

          <div class="field wide twelve">
            <input type="text" placeholder="EUC-KR" :value="EUCKR">
          </div>
        </div>

        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>UTF-8</label>
              <input type="text" placeholder="UTF-8" :value="UTF8">
            </div>

            <div class="field">
              <label>UTF-16</label>
              <input type="text" placeholder="UTF-16" :value="UTF16">
            </div>
          </div>
        </div>

        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>UTF-16LE</label>
              <input type="text" placeholder="UTF-16LE" :value="UTF16LE">
            </div>

            <div class="field">
              <label>UTF-16BE</label>
              <input type="text" placeholder="UTF-16BE" :value="UTF16BE">
            </div>
          </div>
        </div>

        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>ascii</label>
              <input type="text" placeholder="ascii" :value="ascii">
            </div>

            <div class="field">
              <label>UTF-16BE</label>
              <input type="text" placeholder="UTF-16BE" :value="UTF16BE">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import iconv from 'iconv-lite'


  console.dir(iconv);
  export default {
    name: 'Encoding',
    data() {
      return {
        msg: 'Welcome to Your Vue.js ',
        input: 'kkum'
      }
    },
    methods: {
      hexEncode(buffer) {
        console.dir(buffer);

        var hex, i;

        var result = "";
        for (i = 0; i < buffer.length; i++) {
          hex = buffer[i].toString(16);

          if (hex.length < 2) hex += '0';
          result += ' ' + hex;
        }

        return result
      }
    },
    computed: {
      EUCKR() {
        return this.hexEncode(iconv.encode(this.input, "EUC-KR"));
      },
      UTF8() {
        return this.hexEncode(iconv.encode(this.input, 'UTF-8'));
      },
      UTF16() {
        return this.hexEncode(iconv.encode(this.input, 'UTF-16'));
      },
      UTF16LE() {
        return this.hexEncode(iconv.encode(this.input, 'UTF-16LE'));
      },
      UTF16BE() {
        return this.hexEncode(iconv.encode(this.input, 'UTF-16BE'));
      },
      ascii() {
        return this.hexEncode(iconv.encode(this.input, 'ascii'));
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .encoding-form {
    width: 80%;
    margin-left: 10%;
    margin-top: 100px;
  }
</style>
