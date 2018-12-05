# 코딩 스타일

### 이중 if vs and 연산자

```javascript
// 이중 if
if (!!checked) {
    this.selectedOrder = {orderId, orderNumber};
} else {
    if (this.checkedReturnIds.length == 0) {
        this.selectedOrder = {orderId: 0, orderNumber: ''};
    }
}       

// and 연산
if (!!checked == false && this.checkedReturnIds.length == 0) {
    this.selectedOrder = {orderId: 0, orderNumber: ''};
}
else if (!!checked == true) {
    this.selectedOrder = {orderId, orderNumber};
}

// 참고로 전..... 긍정을 먼저...ㅋㅋㅋ
if (!!checked == true) {
    this.selectedOrder = {orderId, orderNumber};
}
else if (!!checked == false && this.checkedReturnIds.length == 0) {
    this.selectedOrder = {orderId: 0, orderNumber: ''};
}
```



### Javascript `!!` 연산자

```javascript
if (checked !== null) {
}
if (!!checked) {
}
```



### 들여쓰기(탭 or 스페이스(몇번?))

```javascript
this.$store.dispatch('returns/downloadOrdersCSV')
    .then(() => {
        this.toast({
            title: 'Return',
            message: this.toastMessage
        })
	})
    .catch(error => {
    	this.$store.dispatch('openDangerModal', this.exportCSVErrorMessage);
	});
```

```css
<style scoped>
.return-list {
  padding-top: 0px !important;
}
</style>
```

```html
<div>
    <div>
        <p>
            <a href="blabla">
                <span>
                    <image></image>
                </span>
            </a>
        </p>
    </div>
</div>
```



### 중첩 괄호 처리

```javascript
const kkum = 'test';
if(kkum === 'test') {} //1
if( kkum === 'test' ) {} //2
if (kkum === 'test'){} //3

if( a( b( c() ) ) ){} // 1
if(a(b(c()))){} // 2

// 3
let resultC = c();
let resultB = b(resultC);
let resultA = a(retultB);
if (resultA) {}
```



### 자바스크립트 변수선언(camel? snake?)

```javascript
let responseFromServer = {
    order_id: 1,
    product_name: 2
}

let orderId = 2;

// order_id 가 json 응답을때는 snake, javascript에서 변수 선언시에는 camel
let temp = responseFromServer.order_id;
let temp2 = orderId;
```



### html에서 attribute 선언

```html
<div id="main-container">
    <div id="sub_container">
        <div id="childContainer">
        </div>
    </div>
</div>
```

**더 생각나는거 있으신가요?**

