# 👩🏻‍💻 WINNIG I - CHART & BOARD 만들기

### JUSTCODE 6기 기업협업 2주차 과제 (WINNIG I)

<br />

### **[📌링크]()**

---

<br />

## 🗓 개발 기간

<br />

**기간** : 10월 18일 ~ 20일
<br />
<br />

---

## 🚧 프로그램 실행 방법 및 파일 프로젝트 구조

  <br />

### 서버 설치 및 프로그램 실행 방법

<br />

1. Node.js를 설치합니다.

```
https://nodejs.org/
```
<br />

2.  터미널을 키고 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/daydreamplace/winning-i.git

cd winning-i
```

<br />

3.  클론 받은 폴더로 이동해 패키지를 다운 받습니다.

```
npm i
```

<br />

4.  json-server를 설치합니다.

```
npm install -g json-server
```

<br />
5.  터미널에서 json-server를 실행합니다.

```
json-server ./db.json --port 4000
```

<br />

6.  프로젝트를 실행합니다.

```
npm run dev
```

<br />

7. 브라우저가 켜지고 아래의 정보를 입력하시면 프로젝트를 확인 할 수 있습니다.
```
email : admin@gmail.com
password : 1234@qwer"
```

   <br />
   <br />
   <br />

### 파일 프로젝트 구조

- `db.json`: json-server 파일
- `src/pages`: Index 페이지 폴더
- `src/components`: components 폴더
  <br />
  <br />

---

## 🛠 적용 기술 및 구현 기능

<br />

### 적용 기술

- JavaScript
- React.js
- react-dom
- react-router-dom
- styled-components
- axios
- react-icons
- antd
- toast-ui-editor
- react-apexcharts

<br />

### 구현 기능
#### WINNING.I 기업과제 가이드에 따라 admin page로 정의하고, 필요한 기능들을 추가하려고 했습니다.

- ✅ Login & Logout
  - 로그인 시에 차트페이지 이동
  - 로그아웃 시에 로그인 페이지 이동

  <br />

- ✅ Side Bar
 - 슬라이드 사이드 바 구현
 - 버튼 클릭 시에 열고 닫을 수 있게 구현

  <br />

- ✅ Chart
  - apex-charts 라이브러리를 활용해 확대, 축소, 저장 등의 기능을 구현
  - json-server를 이용해 데이터를 동적으로 구현
  - Chart 페이지를 캡쳐 후 자동저장되게 구현

  <br />

- ✅ Board
  - toast-ui 라이브러리를 활용해 Markdown WYSIWYG 에디터 둘 다 사용가능하게 구현

  <br />
