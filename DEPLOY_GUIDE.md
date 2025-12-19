# 🚀 GitHub Pages 배포 가이드

## 단계별 배포 방법

### 1단계: GitHub 저장소 생성

1. https://github.com 접속 및 로그인
2. 우측 상단 `+` 버튼 클릭 → `New repository` 선택
3. Repository name: `lab-study-lms` 입력
4. Public 선택 (GitHub Pages는 무료 계정에서 Public만 가능)
5. `Create repository` 클릭

### 2단계: package.json 수정

`lab-study-lms/package.json` 파일을 열어서 다음 부분을 수정하세요:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/lab-study-lms",
```

**중요**: `YOUR_GITHUB_USERNAME`을 본인의 실제 GitHub 사용자명으로 변경하세요!

예시:
- GitHub 사용자명이 `kimhakak`이라면
- `"homepage": "https://kimhakak.github.io/lab-study-lms",`

### 3단계: Git 초기화 및 원격 저장소 연결

터미널에서 `lab-study-lms` 폴더로 이동 후 실행:

```bash
# 현재 디렉토리 확인
pwd

# lab-study-lms 폴더로 이동 (필요시)
cd lab-study-lms

# Git 상태 확인 (이미 초기화되어 있음)
git status

# 원격 저장소 연결 (YOUR_GITHUB_USERNAME을 본인 것으로 변경!)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/lab-study-lms.git

# 또는 이미 연결되어 있다면 URL 변경
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/lab-study-lms.git
```

### 4단계: 코드 푸시

```bash
# 모든 변경사항 추가
git add .

# 커밋
git commit -m "Initial commit: Lab Study LMS"

# main 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 5단계: GitHub Pages 배포

```bash
# 빌드 및 배포 (자동으로 gh-pages 브랜치 생성)
npm run deploy
```

이 명령어는:
1. 프로젝트를 빌드하고 (`npm run build`)
2. `build` 폴더를 `gh-pages` 브랜치에 배포합니다

### 6단계: GitHub Pages 설정 확인

1. GitHub 저장소 페이지로 이동
2. `Settings` 탭 클릭
3. 왼쪽 메뉴에서 `Pages` 클릭
4. Source가 `gh-pages` 브랜치로 설정되어 있는지 확인
5. 상단에 배포 URL이 표시됨: `https://YOUR_GITHUB_USERNAME.github.io/lab-study-lms`

### 7단계: 사이트 확인

배포 후 1-2분 정도 기다린 후 브라우저에서 접속:
```
https://YOUR_GITHUB_USERNAME.github.io/lab-study-lms
```

## 🔄 업데이트 방법

코드를 수정한 후 다시 배포하려면:

```bash
# 변경사항 커밋
git add .
git commit -m "Update: 설명"
git push

# 재배포
npm run deploy
```

## ⚠️ 문제 해결

### 404 에러가 발생하는 경우
- `package.json`의 `homepage` 설정이 올바른지 확인
- GitHub 저장소 이름과 URL이 일치하는지 확인
- GitHub Pages 설정에서 Source가 `gh-pages` 브랜치인지 확인

### 배포가 안 되는 경우
```bash
# gh-pages 브랜치 확인
git branch -a

# 캐시 삭제 후 재배포
rm -rf node_modules/.cache
npm run deploy
```

### 스타일이 깨지는 경우
- Tailwind CSS가 제대로 설치되었는지 확인
- `npm install` 다시 실행
- `npm run build`로 빌드 테스트

## 📱 로컬 테스트

배포 전 로컬에서 테스트:

```bash
# 개발 서버 실행
npm start

# 프로덕션 빌드 테스트
npm run build
npx serve -s build
```

## 🎉 완료!

이제 전 세계 어디서나 접속 가능한 웹사이트가 완성되었습니다!
