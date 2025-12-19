# Lab Study LMS - 연구실 안전교육 관리 시스템

성실대 화학안전 LMS 프로젝트입니다.

## 🚀 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

브라우저에서 http://localhost:3000 으로 접속하세요.

## 📦 GitHub Pages 배포 방법

### 1. GitHub 저장소 생성
1. GitHub에 로그인
2. 새 저장소 생성 (이름: `lab-study-lms`)
3. 저장소를 public으로 설정

### 2. package.json 수정
`package.json` 파일에서 `homepage` 부분을 수정하세요:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/lab-study-lms"
```
`YOUR_GITHUB_USERNAME`을 본인의 GitHub 사용자명으로 변경하세요.

### 3. Git 설정 및 배포
```bash
# 원격 저장소 연결 (이미 연결되어 있지 않다면)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/lab-study-lms.git

# 변경사항 커밋
git add .
git commit -m "Initial commit"

# main 브랜치로 푸시
git branch -M main
git push -u origin main

# GitHub Pages에 배포
npm run deploy
```

### 4. GitHub Pages 설정 확인
1. GitHub 저장소 페이지로 이동
2. Settings > Pages 메뉴 선택
3. Source가 `gh-pages` 브랜치로 설정되어 있는지 확인
4. 몇 분 후 `https://YOUR_GITHUB_USERNAME.github.io/lab-study-lms` 에서 확인 가능

## 🎯 주요 기능

- **학생 모드**: 교육 이수 현황 확인, 이러닝 수강, 교육 등록
- **관리자 모드**: 구성원 관리, 승인 처리, 통계 및 보고서
- **반응형 디자인**: 모바일 최적화 UI

## 🛠 기술 스택

- React 19
- Tailwind CSS
- Lucide React (아이콘)
- GitHub Pages (호스팅)

## 📱 사용 방법

앱 우측 상단의 버튼으로 학생 모드와 관리자 모드를 전환할 수 있습니다.
