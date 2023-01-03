# 📖 README

![readme_mockup](https://user-images.githubusercontent.com/112460466/210376494-5216ae05-6fb5-47c3-830d-5d01e66d6a75.png)

- 배포 URL :
- Test ID :
- Test PW : 

<br>

## 프로젝트 소개

- README는 책을 좋아하는 사람들이 자신의 책 취향을 공유하고, 다 읽은 책을 판매할 수 있는 SNS입니다.
- 개인의 프로필 페이지에 좋아하는 구절 등 책에 대한 정보를 작성하고 판매하고 싶은 상품을 등록할 수 있습니다.
- 검색을 통해 책 취향이 비슷한 다른 유저들의 피드를 구경할 수 있습니다.
- 다양한 유저들을 팔로우하며 마음에 드는 게시글에 좋아요를 누르거나 댓글을 작성할 수 있습니다.
- 유저 간 채팅 기능을 활용해 책 거래 및 소통의 편의성을 증진시킬 예정입니다.

<br>

## 팀원 구성

| **고지연** | **김민제** | **양희지** | **지창언** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @yeon1615](https://github.com/yeon1615) | [<img src="https://avatars.githubusercontent.com/u/112460466?v=4" height=150 width=150> <br/> @Cheorizzang](https://github.com/Cheorizzang) | [<img src="https://avatars.githubusercontent.com/u/112460506?v=4" height=150 width=150> <br/> @heejiyang](https://github.com/heejiyang) | [<img src="https://avatars.githubusercontent.com/u/76766459?v=4" height=150 width=150> <br/> @journey-ji](https://github.com/journey-ji) |

<br>

## 1. 개발 환경

- Front : HTML, React, styled-components, Recoil
- Back-end : 제공된 API 활용
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, notion
- 서비스 배포 환경 : Netlify
- 디자인 : Figma

<br>

## 2. 프로젝트 구조

```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── public
│    └── index.html
│
└── src
     ├── App.jsx
     ├── index.jsx
     │
     ├── api
     │     └── mandarinAPI.js
     │
     ├── asset
     │     ├── fonts
     │     ├── css_sprites.png
     │     ├── logo-404.svg
     │     └── logo-home.svg
     │          .
     │          .
     │          .
     │
     ├── atoms
     │     ├── LoginData.js
     │     └── LoginState.js
     │
     ├── common
     │     ├── alert
     │     │     ├── Alert.jsx
     │     │     └── Alert.Style.jsx
     │     ├── button
     │     ├── comment
     │     ├── inputBox
     │     ├── post
     │     ├── postModal
     │     ├── product
     │     ├── tabMenu
     │     ├── topBanner
     │     └── userBanner
     │
     ├── pages
     │     ├── addProduct
     │     │     ├── AddProduct.jsx
     │     │     └── AddProduct.Style.jsx
     │     ├── chatList
     │     ├── chatRoom
     │     ├── emailLogin
     │     ├── followerList
     │     ├── followingList
     │     ├── home
     │     ├── join
     │     ├── page404
     │     ├── postDetail
     │     ├── postEdit
     │     ├── postUpload
     │     ├── productEdit
     │     ├── profile
     │     ├── profileEdit
     │     ├── profileSetting
     │     ├── search
     │     ├── snsLogin
     │     └── splash
     │
     └── styles
     	   └── Globalstyled.jsx
```

<br>

## 3. 역할 분담

### 고지연

- **UI**
    - 페이지 : 홈, 검색, 게시글 작성, 게시글 수정, 게시글 상세, 채팅방
    - 공통 컴포넌트 : 게시글 템플릿, 버튼
- **기능**
    - 유저 검색, 게시글 등록 및 수정, 게시글 상세 확인, 댓글 등록, 팔로워 게시글 불러오기, 좋아요 기능
    
### 김민제

- **UI**
    - 페이지 : 프로필 설정, 프로필 수정, 팔로잉&팔로워 리스트, 상품 등록, 상품 수정, 채팅 목록, 404 페이지
    - 공통 컴포넌트 : 탭메뉴, InputBox, Alert 모달, 댓글
- **기능**
    - 프로필 설정 및 수정 페이지 유저 아이디 유효성 및 중복 검사, 상품 등록 및 수정

### 양희지

- **UI**
    - 페이지 : splash 페이지, sns 로그인 페이지, 로그인, 회원가입
    - 공통 컴포넌트 : 상품 카드, 사용자 배너
- **기능**
    - splash 페이지, sns 로그인 페이지, 로그인 유효성 및 중복 검사 , 회원가입 유효성 및 중복 검사, 이메일 검증, 프로필 설정

### 지창언

- **UI**
    - 페이지 : 사용자 프로필 페이지
    - 공통 컴포넌트 : 탑배너, 하단 모달창
- **기능**
    - 팔로우 & 언팔로우, 로그아웃, 하단 모달창, 댓글 삭제, 게시글 삭제, 상품 삭제, 사용자 게시글 앨범형 이미지, 탑 배너 뒤로가기 버튼, Alert 모달
    
<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2022-12-09 ~ 2022-12-31
- UI구현 : 2022-12-09 ~ 2022-12-16
- 기능 구현 : 2022-12-17 ~ 2022-12-31

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 GitHub Wiki에 회의 내용을 기록했습니다.

<br>

## 5. 페이지 기능

## 6. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
- styled-component
    - props에 따른 조건부 스타일링이 가능합니다.
    - 컴포넌트 스타일링이 가능하여 React의 컴포넌트화에 최적화되어 있습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 따로 네이밍을 고려할 필요가 없습니다.
    - S dot naming 을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.
    - Sass 문법을 사용할 수 있습니다.
    
### Recoil

- 최상위 컴포넌트를 만들어 props로 유저 정보를 내려주는 방식의 경우, 불필요한 props 전달이 발생합니다. 따라서, 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.
- redux가 아닌 recoil을 채택한 이유
    - recoil은 React만을 위한 라이브러리로 사용법도 기존의 useState 훅을 사용하는 방식과 유사해 훅을 사용해본 경험이 있는 경우에는 쉽게 진입할 수 있습니다.
    - 또한 Redux보다 훨씬 적은 코드라인으로 작동 가능하다는 장점이 있습니다.
- 로그인과 최초 프로필 설정 시 유저 정보를 atom에 저장하며 필요한 페이지나 컴포넌트에서 구독하는 방식으로 사용했습니다.
- recoil-persist 라이브러리를 사용해 로컬 스토리지에 로그인 정보를 저장하여 로그인 상태를 유지하도록 했습니다.

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- **코드 품질 관리**는 eslint에, **코드 포맷팅**은 prittier에 일임해 사용했습니다.
- airbnb의 코딩 컨벤션을 참고해 사용했고, 예외 규칙은 팀원들과 협의했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

### 브랜치 전략

- github-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.
    
