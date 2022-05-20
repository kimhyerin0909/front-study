# NEXTJS - nomadcoder
## create project and build project
1. npx create-next-app@latest (@latest : 가장 최신 버전, --typescript : typescript로 만들 수 있다.
2. project name 설정
3. code [project name]
4. npm run dev -> build
## framework vs library
**framework**는 우리가 코드를 적절한 곳에 넣어야 하고 framework를 수정할 수는 없다.

    export  default  function  Potato() {
	    return  "about us";
    }
page/about.js에서 위와 같은 코드를 작성한 후 실행시켜보자.
localhost:3000/about 에서 about us를 띄운 화면을 볼 수 있다.
이처럼 규칙에 따라 적절한 곳에 코드를 두면 된다.

반면 **library**(reactjs)는 우리가 원할 때 부르고, 사용할 수 있고 코드를 작성할 때 자유도가 높다.