# 👩🏻‍💻 WINNIG I - CHART & BOARD 만들기

## JUSTCODE 6기 기업협업 3주차 과제 (WINNIG I)
#### WINNING.I 기업과제 가이드에 따라 admin site로 정의하고 프로젝트를 진행했습니다.
#### 과제 SAMPLE을 참고하여 저의 판단 및 해석으로 프로젝트 진행했습니다.
#### 그 동안 프로젝트를 진행해보며 활용해보고 싶었던 라이브러리와 기술 스택으로 진행했습니다!
#### 시간 관계 상 모든 기능이 구현 된 것은 아니지만, 필수 구현 사항은 모두 진행할 수 있도록 했습니다.

<br />

---

## **[📌배포 사이트]( https://eden-winning-i.netlify.app )**
🚨 배포 사이트를 들어가기 전에 서버를 꼭 켜야됩니다. 🚨
아래 서버 실행 방법을 참고하셔서 서버를 키신 후에 배포 사이트 이용 바랍니다.
 <br/>

---

# 🗓 개발 기간

<br />

**기간** : 10월 18일 ~ 20일
<br />
<br />


---

# 🚧 프로그램 실행 방법 및 파일 프로젝트 구조

  <br />

## 🔡 서버 설치 및 프로그램 실행 방법

<br />

1. Node.js를 설치합니다.

```
https://nodejs.org/
```
<br />

2.  터미널에서 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

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

## 📂 파일 프로젝트 구조

- `db.json`: json-server 파일
- `src/pages`: main 페이지와 그 외 페이지 폴더
- `src/components`: components 폴더
- `src/api`: api 통신 폴더
  <br />
  <br />

---

# 🛠 적용 기술 및 구현 기능

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

## 📑 구현 기능 (Page 혹은 Component 단위 설명)
 <br/>
 
#### ✅ api
- .env 파일에 API 주소 저장 관리
- api/client.jsx에서 `axios`사용해 API 호출

 <br/>

#### ✅ Login & Logout
- `antd`를 활용해 레이아웃 구현
- 로그인 시에 차트페이지 이동
- 로그아웃 시에 로그인 페이지 이동

  <br />

#### ✅ Side Bar
- `antd`를 활용해 슬라이드 사이드 바 구현
- 버튼 클릭 시에 열고 닫을 수 있게 구현

  <br />

#### ✅ Chart
- `apex-charts` 라이브러리를 활용해 차트 레이아웃과 확대, 축소, 파일 저장 등의 기능을 구현
- `json-server`를 이용해 데이터를 동적으로 구현
- `dom-to-image`과 `file-saver`를 활용해 Chart 페이지를 캡쳐 후 저장할 수 있게 구현
- 1280px을 기준으로 반응형 구현

  <br />

#### ✅ Board
- `antd`를 활용해 레이아웃 구현
- `json-server`데이터를 받아서 Board 페이지 목록 구현
- 게시글 10개 단위로 페이지네이션 
- POST 버튼 클릭 시 게시글 작성 페이지로 이동
- 게시글 클릭 시 상세 페이지로 이동

  <br />
#### ✅ Board 작성 페이지
- `antd`와 `toast-ui-editor`를 활용해 Markdown & WYSIWYG 에디터 구현, color-syntax 선택 가능하게 레이아웃, 작성 기능 구현
- 게시글 작성 후 Register 버튼 클릭 시 게시글 DB에 저장되게 구현
- 게시글 DB 등록 후 Board 페이지로 이동

  <br />
#### ✅ Board 상세 페이지
- `antd`와 `toast-ui-viewer`를 활용해 레이아웃 구현
- `json-server`데이터를 받아서 상세 페이지 구현
- 상세 페이지 하단 EDIT 버튼 클릭 시 게시글 수정 가능하게 구현
- 상세 페이지 하단 DELETE 버튼 클릭 시 게시글 삭제 기능 구현
  
  <br />
