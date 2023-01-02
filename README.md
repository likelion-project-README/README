# README

## 개요

- 멋쟁이사자처럼 프론트엔드스쿨 3기 팀 프로젝트로 진행한 README 프로젝트입니다.
- README 서비스는 자신의 책 취향을 공유할 수 있는 SNS입니다.
- 커뮤니티에서 책 정보를 나누고 추천할 수 있습니다. 또한 책 글귀 정보를 나누며 개인의 취향을 공유할 수 있습니다. 다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 화면에서 확인할 수 있습니다.
- 좋은 글귀나 피드에 좋아요를 누르거나 댓글을 남길 수 있습니다.
- 읽지 않는 책을 자신의 프로필에 올려 판매할 수 있습니다.
- 사용자 간 채팅을 통해 거래를 진행할 수 있습니다.

## 팀원 구성

| **고지연** | **김민제** | **양희지** | **지창언** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @yeon1615](https://github.com/yeon1615) | [<img src="https://avatars.githubusercontent.com/u/112460466?v=4" height=150 width=150> <br/> @Cheorizzang](https://github.com/Cheorizzang) | [<img src="https://avatars.githubusercontent.com/u/112460506?v=4" height=150 width=150> <br/> @heejiyang](https://github.com/heejiyang) | [<img src="https://avatars.githubusercontent.com/u/76766459?v=4" height=150 width=150> <br/> @journey-ji](https://github.com/journey-ji) |

## 1. 개발 환경 및 배포 URL

### 개발환경

- Front : HTML, React, styled-components, Recoil
- Back-end : 제공된 API 활용
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, notion
- 서비스 배포 환경 : Netlify
- 디자인 : Figma


### 배포 URL

- URL : 
- 테스트용 ID & PW :


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
     │     ├── accountnameValidAPI.js
     │     └── addProductAPI.js
     │          .
     │          .
     │          .
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

## 3. 역할 분담

### 고지연

- UI
    - 페이지 : 홈, 검색, 게시글 작성, 게시글 수정, 게시글 상세, 채팅방
    - 공통 컴포넌트 : 게시글 템플릿, 버튼
- 기능
    - 유저 검색, 게시글 등록 및 수정, 게시글 상세 확인, 댓글 등록, 팔로워 게시글 불러오기, 좋아요 기능
    

### 김민제

- UI
    - 페이지 : 프로필 설정, 프로필 수정, 팔로잉&팔로워 리스트, 상품 등록, 상품 수정, 채팅 리스트, 404 페이지
    - 공통 컴포넌트 : 탭메뉴, InputBox, Alert 모달, 댓글
- 기능
    - 프로필 설정 및 수정 페이지 유저 아이디 유효성 및 중복 검사, 상품 등록 및 수정

### 양희지

- UI
    - 페이지 : splash 페이지, sns 로그인 페이지, 로그인, 회원가입
    - 공통 컴포넌트 : 상품 카드, 사용자 배너
- 기능
    - splash 페이지, sns 로그인 페이지, 로그인 유효성 및 중복 검사 , 회원가입 유효성 및 중복 검사, 이메일 검증, 프로필 설정

### 지창언

- UI
    - 페이지 : 사용자 프로필 페이지
    - 공통 컴포넌트 : 탑배너
- 기능
    - 팔로우 & 언팔로우, 로그아웃, 하단 모달창, 댓글 삭제, 게시글 삭제, 상품 삭제, 사용자 게시글 앨범형 이미지, 탑 배너 뒤로가기 버튼, Alert 모달


## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2022-12-09 ~ 2022-12-31
- UI구현 : 2022-12-09 ~ 2022-12-16
- 기능 구현 : 2022-12-17 ~ 2022-12-31

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 GitHub Wiki를 사용해 기록했습니다.

## 5. UI

## 6. 페이지 기능

## 7. 개발하며 느낀 점
