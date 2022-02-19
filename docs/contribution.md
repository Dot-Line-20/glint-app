# 개발자 기여방법 안내
메인 코드 보호와 코드 리뷰를 위해 기여자는 브랜치를 만들고 PR을 작성해주셔야합니다.

## 1. 저장소 Fork
웹 페이지 오른쪽 상단에 있는 `Fork`를 눌러 자신의 저장소로 fork합니다.

## 2. 로컬로 가져오기
fork된 저장소를 로컬로 가져오기 위해 clone해줍니다.
```
git clone https://github.com/[본인 github ID]/[fork한 저장소]
```

예시
```
git clone https://github.com/kraccoon-dev/self-develop
```
## 3. 브랜치 만들기
새로운 변경사항에 대한 간단한 설명으로 브랜치를 만들어줍니다.
```
git branch -b [branch name]
```

예시
```
git branch -b add_login_page
```

## 4. PR작성
먼저 수정한 파일을 `push`해줍니다.

예시
```
git add .
git commit -m 'add: login'
git push origin [branch name]
```

push가 완료되면 본인이 fork한 저장소로 가줍니다.

push가 정상적으로 처리됐다면 상단에 `create pull request`박스가 뜹니다.

버튼을 누르고 PR을 작성해주시면 리뷰어가 검토 후 메인 브렌치로 머지할것입니다.

이때 더욱 빠른 리뷰를 위해 `@`를 이용하여 코드오너를 맨션해주세요. 

주의: 머지되지 않은 PR에서 변경된 파일을 다른 브렌치에서 수정하면 충돌이 발생합니다.
