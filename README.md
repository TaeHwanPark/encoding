#  encoding

> Git: https://github.com/kkum04/encoding

## Build Setup

``` bash
# Vue Cli 설치
npm install -g vue-cli

# npm 설치
npm install

# dev mode로 실행(localhost:8080)
npm run dev
```

## Encoding

> **문자 인코딩**(文字―, [영어](https://ko.wikipedia.org/wiki/%EC%98%81%EC%96%B4): character encoding) 또는 줄여서 **인코딩**은 [문자](https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%9E%90)나 [기호](https://ko.wikipedia.org/wiki/%EA%B8%B0%ED%98%B8)들의 집합을 [컴퓨터](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0)에서 저장하거나 통신에 사용할 목적으로 [부호화](https://ko.wikipedia.org/wiki/%EB%B6%80%ED%98%B8%ED%99%94)하는 방법을 가리킨다. 문자 인코딩을 통해 부호화되어, [복호화](https://ko.wikipedia.org/wiki/%EB%B3%B5%ED%98%B8%ED%99%94)하면 본래의 문자나 기호를 뜻하게 되는 [부호](https://ko.wikipedia.org/wiki/%EB%B6%80%ED%98%B8_(%EC%A0%95%EB%B3%B4))를 **문자 코드**(文字―, [영어](https://ko.wikipedia.org/wiki/%EC%98%81%EC%96%B4): character code)라고 한다.



### 인코딩 종류

- ASCII, UTF-8, UTF-16, EUC-KR

##### ASCII

> **ASCII** 아스키 코드. American Standard Code for Information Interchange의 줄임말.

- 7bit 문자 인코딩(!8bit)

- 128개의 문자를 표현

- carriage return?, line feed ?

  > [ASCII](https://ko.wikipedia.org/wiki/ASCII) 시스템에서는 새줄 문자로 라인 피드(line feed, LF, '\n', 0x0A), [캐리지 리턴](https://ko.wikipedia.org/wiki/%EC%BA%90%EB%A6%AC%EC%A7%80_%EB%A6%AC%ED%84%B4)(carriage return, CR, '\r', 0x0D)이 주로 사용된다. 라인 피드는 [프린터](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A6%B0%ED%84%B0)에서 [종이](https://ko.wikipedia.org/wiki/%EC%A2%85%EC%9D%B4)가 한 줄씩 인쇄되며 나오는 것을 뜻한다. 캐리지 리턴은 프린터에서 실제 [인쇄](https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%87%84)를 수행하는 장치가 한 줄의 끝에서 시작 위치로 돌아가는 것을 뜻한다. 

  - windows os => \r\n 
  - Unix => \n

##### EUC

> **확장 유닉스 코드**(Extended Unix Code, EUC)란 [한국어](https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B5%AD%EC%96%B4), [중국어](https://ko.wikipedia.org/wiki/%EC%A4%91%EA%B5%AD%EC%96%B4), [일본어](https://ko.wikipedia.org/wiki/%EC%9D%BC%EB%B3%B8%EC%96%B4) 문자 전산화에 주로 사용되는 8[비트](https://ko.wikipedia.org/wiki/%EB%B9%84%ED%8A%B8) [문자 인코딩](https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%9E%90_%EC%9D%B8%EC%BD%94%EB%94%A9) 방식이다.

- EUC-KR
  - 한글 완성형 인코딩 방식
  - 다국어 버전에 제한적이라 현재는 거의 사용되지 않음 Unicode로 대체되는 중.

### 

 ##### Unicode

> **유니코드**(Unicode)는 전 세계의 모든 문자를 [컴퓨터](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0)에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 [표준](https://ko.wikipedia.org/wiki/%ED%91%9C%EC%A4%80)이며, 유니코드 협회(Unicode Consortium)가 제정한다. 

- carriage return?, line feed?
  - LF, CR, LF+CR 등등 모든 문자를 줄바꿈으로 사용한다. Unicode 사용해야 함.ㅠ.ㅠ

###### UTF-8

> **UTF-8**은 [유니코드](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C)를 위한 가변 길이 [문자 인코딩](https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%9E%90_%EC%9D%B8%EC%BD%94%EB%94%A9) 방식

- 하나의 문자를 나타내기 위해 1~4byte를 이용함



###### UTF-16

> **UTF-16**(16-bit Unicode Transformation Format)은 유니코드 문자 인코딩 방식의 하나이다. 주로 사용되는 [기본 다국어 평면](https://ko.wikipedia.org/wiki/%EA%B8%B0%EB%B3%B8_%EB%8B%A4%EA%B5%AD%EC%96%B4_%ED%8F%89%EB%A9%B4) (BMP, Basic multilingual plane)에 속하는 문자들은 그대로 16비트 값으로 인코딩이 되고 그 이상의 문자는 특별히 정해진 방식으로 32비트로 인코딩이 된다.

- 하나의 문자를 나타내기 위해 2 or 4 byte 를 이용한다.





### SBCS, MBCS, WBCS

- SBCS 하나의 문자를 1byte로 표현(ASCII)
- MBCS 하나의 문자를 다양한 바이트로 표현(EUC, Unicode 등등)
- WBCS 하나의 문자를 2byte로 표현(Windows의 UNICODE)



*문자열 길이를 어떻게 계산하나?*

- 예전엔 문자열 길이가 byte 길이의 -1이다.(null 문자 때문에)
- Windows Unicode에서는  length(string) / sizeof(byte) 로 처리했음..ㅠ.ㅠ
- 지금은??????? 



### BOM

> **바이트 순서 표시**(Byte Order Mark, **BOM**)는 [유니코드](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C) 문자

- 텍스트 스트림이 저장되는 바이트 순서 또는 [엔디언](https://ko.wikipedia.org/wiki/%EC%97%94%EB%94%94%EC%96%B8)
- 텍스트 스트림이 유니코드라는 사실(높은 수준의 신뢰를 위함)
- 여러 유니코드 인코딩 중 텍스트 스트림이 인코딩된 것

##### 인코딩별 BOM

- UTF-8: `0xEF, 0xBB, 0xBF`
- UTF-16: `U+FEFF`
- UTF-32: UTF-16과 동일



### Big Endian, Little Endian

> 엔디언은 보통 큰 단위가 앞에 나오는 **빅 엔디언**(Big-endian)과 작은 단위가 앞에 나오는 **리틀 엔디언**(Little-endian)으로 나눌 수 있다.

| 종류     | 0x1234    | 0x12345678          |
| ------ | --------- | ------------------- |
| 빅 엔디언  | '12' '34' | '12' '34' '56' '78' |
| 리틀 엔디언 | '34' '12' | '78' '56' '34' '12' |

- 네트워크는 Big Endian, 윈도우는 Little Endian 네트워크 통신은 어떻게??



###csv 다운로드 한글 왜 깨지나?

- 자바 프로그램은 UTF-8 로 저장.
- CSV파일에는 유니코드를 나타내는 정보가 들어가 있지 않음
- Windows 는 기본 언어 셋인 EUC-KR로 로드