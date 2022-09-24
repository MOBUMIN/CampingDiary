```
┌───────────────────────────────────────────────┐
                                       _       
     __ _  ___   ___  _ __ _ __ ___   (_) ___  
    / _` |/ _ \ / _ \| '__| '_ ` _ \  | |/ _ \ 
   | (_| | (_) | (_) | |  | | | | | |_| | (_) |
    \__, |\___/ \___/|_|  |_| |_| |_(_)_|\___/ 
    |___/                                      
			     🌩 𝘼𝙣𝙮𝙤𝙣𝙚 𝙘𝙖𝙣 𝙙𝙚𝙫𝙚𝙡𝙤𝙥!
└───────────────────────────────────────────────┘
```

# goormIDE
구름IDE에 오신 것을 환영합니다!

구름IDE는 개발자들을 위한 강력한 클라우드IDE입니다.

`즐거운 코딩하세요! -구름IDE팀-`

## Make a WEB with Open API!
 * 기술
	* 본 프로젝트는 `Next.js` `Recoil` `Tailwind CSS`를 중점적으로 사용합니다.
 * 대상
 	* Next.js를 공부해보고 싶은 학생 및 취준생
	* 백엔드 개발 없이 API를 사용하고 싶은 프론트엔드 개발자
	* Recoil로 상태관리를 해보고 싶은 분
 * 상세 설명
	* `OpenWeatherMap API`와 `The Solar System OpenData API`를 이용한 간단한 예시를 준비해두었습니다.
	* OpenWeatherMap은 API Key를 받아야 제대로 동작하니, API Key를 받아서 `.env`에 넣어주세요!
	* 경로는 alias를 통해 간편히 import 할 수 있도록 해두었습니다.
	* 날씨를 알 수 있는 API와, 태양계를 알 수 있는 API로 여러분의 아이디어를 개발해보세요!
 * 폴더구조
 ```
/public
	favicon.ico
	vercel.svg
/src
	/components
		/[Name]
			[Name].jsx
			index.js
	/constants
		[Name].js
	/hooks
		[Name].js
	/pages
		/[Name]
			[NamePage].jsx
			index.js
		_app.js
		index.js
	/states
		[NameStore].js
/styles
	global.css
 ```

## 🎨 Usage
0. [구름 블로그 포스팅](https://blog.goorm.io/openapi/)으로 실행법 확인

1. URL과 포트 확인
   1. 상단 메뉴바의 `프로젝트 > 실행URL과포트` 클릭하기
   2. 3000포트로 도메인이 등록되어있는지 확인하기
   3. 등록되어 있지 않다면 등록하기
   
2. 의존성 확인
   1. `node_modules`가 설치되어 있는지 확인하기
   2. 설치되어 있지 않다면 `npm install` 명령어를 터미널에 입력하기
   
3. 프로젝트 시작하기
   * `npm run dev` 명령어를 터미널에 입력하기


## 🔧 Tip & Guide

* 명령어 기능
	* 우측 상단에 프로젝트 실행만으로 프로젝트를 실행하실 수 있습니다.
	* 상단 메뉴바의 `프로젝트 > 공통/빌드/실행/테스트` 메뉴로도 실행하실 수 있습니다.
	
* URL과 PORT
	* `프로젝트 > 실행URL과 포트`에서 포트와 URL을 확인 및 변경하실 수 있습니다.
	* 처음에는 Default 값이 들어가 있습니다.

* 유용한 단축키
	
| Shortcuts name     | Command (Mac) | Command (Window) |
| ------------------ | :-----------: | :--------------: |
| Copy in Terminal   | ⌘ + C         | Ctrl + Shift + C |
| Paste in Terminal  | ⌘ + V         | Ctrl + Shift + V |
| Search File        | ⌥ + ⇧ + F     | Alt + Shift + F  |
| Terminal Toggle    | ⌥ + ⇧ + B     | Alt + Shift + B  |
| New Terminal       | ⌥ + ⇧ + T     | Alt + Shift + T  |
| Code Formatting    | ⌥ + ⇧ + P     | Alt + Shift + P  |
| Show All Shortcuts | ⌘ + H         | Ctrl + H         |

## 💬 Support & Documentation

가이드를 보고 싶으시다면, [https://help.goorm.io/ko/goormide](https://help.goorm.io/en/goormide)를 방문해주세요!