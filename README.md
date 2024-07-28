### 배포 사이트
https://fandom-k-706.netlify.app/
### 프로젝트 소개
- 프로젝트 이름: Fandom-K
- 진행팀: 스프린트 7기 6팀 프로젝트
- 프로젝트 기간: 24.06.10 ~ 24.06.23
### 프로젝트 설명
자신이 좋아하는 아이돌에게 후원 및 인기투표를 하는 사이트입니다.  
후원 및 인기투표는 크레딧을 통해서 할 수 있고 크레딧을 충전할 수도 있습니다.  
후원 상황과 투표수를 실시간으로 확인 할 수 있고 마이페이지에서 관심있는 아이돌을 관리할 수 있습니다.
### 팀원 소개
|<img src="https://avatars.githubusercontent.com/u/144973656?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/166676502?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/58417470?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/166773598?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/166521974?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/155536270?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|:-:|:-:|
|고용빈|강효성|이태진|장아영(팀장)|오성준|강한솔|
|[@yongb2n](https://github.com/yongb2n)|[@kanghyosung1](https://github.com/kanghyosung1)|[@lemon-code21](https://github.com/lemon-code21)|[@yellowjang](https://github.com/yellowjang)|[@yeram7591](https://github.com/yeram7591)|[@engdawn](https://github.com/engdawn)|
### 기술 스택
#### 환경
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1719149936326?alt=media&token=75b1ec0c-95df-48e5-9491-67d213a7ef77)](https://github.com/msdio/stackticon)
#### 언어
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1719149812927?alt=media&token=341a0be5-9b6d-4389-9e98-afff8d6ea3ac)](https://github.com/msdio/stackticon)
#### 라이브러리
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1719150049721?alt=media&token=5dc141b9-87b8-46fc-8777-eda06c2fe334)](https://github.com/msdio/stackticon)
#### 협업
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1719150091555?alt=media&token=63818702-ba4e-47f1-9d8d-b603a298c84e)](https://github.com/msdio/stackticon)
### Git 브랜치 전략
![image](https://github.com/yellowjang/Fandom-K/assets/58417470/bfbb8978-6a63-4ca5-ba95-b4c68ca76106)
- 원격 레포지토리에서는 main, develop 브랜치에서만 작업
- 로컬에서 개별 develop 브랜치를 base로 기능별로 브랜치를 생성하여 작업  
  (브랜치 구분을 위한 개별 고유 숫자 지정. ex) 이태진의 브랜치명: feature/6-000)
- 원격 develop에 머지 이후 원격 레포지토리에서 feature브랜치는 삭제하여 관리
- 버그 수정 및 최종 점검 이후 main 브랜치에 머지


### 코드 컨벤션
#### ESLint(.eslintrc.cjs)
```javascript:.eslintrc.cjs
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  rules: {
    'no-console': 1,
    'react-hooks/exhaustive-deps': 0,
    'no-unused-expression': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
  }
```
#### Prettier(.prettierrc)
```json:.prettierrc
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleAttributePerLine": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```
### 주요 기능
![image](https://github.com/yellowjang/Fandom-K/assets/58417470/f2171e6a-8782-4bb4-8651-db59fe4de99b)
### 페이지 및 기능에 대한 화면
#### 랜딩 페이지
![image](https://github.com/yellowjang/Fandom-K/assets/58417470/de51c8a6-0523-4431-9c54-f55ed84b3ea7)
#### 리스트 페이지
![image](https://github.com/yellowjang/Fandom-K/assets/58417470/c6f2e2f8-39f9-4240-be7f-228df5541c05)
![image](https://github.com/yellowjang/Fandom-K/assets/58417470/ab6065c5-da36-4837-bd6a-ad9c33665599)
#### 마이 페이지
![image](https://github.com/yellowjang/Fandom-K/assets/58417470/fc4746b8-7403-45d2-953e-729be0beb781)


### 주요 기능 목록
#### 공통
- 반응형 디자인
- 페이지 이동 애니메이션
#### Landing Page(/)
- 디자인 및 애니메이션
#### List Page(/list)
- 크레딧 관리((localstorage 이용)
- 후원 목록 표시
- 아이돌 투표 순위 표시
- 크레딧 충전 모달창
- 후원하기 모달창
- 투표하기 모달창
- 각 컴포넌트별 동적인 애니메이션
#### My Page(/mypage)
- 내가 관심있는 아이돌 선택 및 저장(localstorage 이용)
#### NotFound Page(/*)
- 잘못된 페이지 표시 기능

