# 🚀 Vercel 배포 가이드

Vercel로 배포하면 `lab-study-lms.vercel.app` 같은 깔끔한 URL을 얻을 수 있습니다!

## 방법 1: Vercel 웹사이트에서 배포 (가장 쉬움!)

### 1단계: Vercel 가입
1. https://vercel.com 접속
2. "Sign Up" 클릭
3. GitHub 계정으로 로그인

### 2단계: 프로젝트 Import
1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. GitHub 저장소 목록에서 `lab-study-lms` 선택
3. "Import" 클릭

### 3단계: 배포 설정
- Framework Preset: **Create React App** (자동 감지됨)
- Build Command: `npm run build` (자동 설정됨)
- Output Directory: `build` (자동 설정됨)
- Install Command: `npm install` (자동 설정됨)

"Deploy" 버튼 클릭!

### 4단계: 완료!
몇 분 후 다음과 같은 URL로 접속 가능:
```
https://lab-study-lms.vercel.app
```

또는 Vercel이 자동으로 생성한 URL:
```
https://lab-study-lms-xxxxx.vercel.app
```

## 방법 2: CLI로 배포

터미널에서 실행:

```bash
cd lab-study-lms

# Vercel 로그인 (브라우저가 열림)
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 🎨 커스텀 도메인 설정 (선택사항)

Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Domains
3. 원하는 도메인 추가

무료로 `.vercel.app` 서브도메인을 커스터마이징할 수도 있습니다!

## 🔄 자동 배포

GitHub에 푸시하면 자동으로 Vercel에 배포됩니다:

```bash
git add .
git commit -m "Update"
git push
```

## 📊 장점

- ✅ 사용자명 노출 안 됨
- ✅ 더 빠른 배포 속도
- ✅ 자동 HTTPS
- ✅ 자동 배포 (Git push만 하면 됨)
- ✅ 무료!

## 🆚 GitHub Pages vs Vercel

| 기능 | GitHub Pages | Vercel |
|------|--------------|--------|
| URL | username.github.io/repo | project.vercel.app |
| 배포 속도 | 느림 (1-2분) | 빠름 (30초) |
| 자동 배포 | 수동 (npm run deploy) | 자동 (git push) |
| 커스텀 도메인 | 가능 | 가능 (더 쉬움) |
| 비용 | 무료 | 무료 |

## 💡 추천

개인 프로젝트나 포트폴리오라면 **Vercel**을 추천합니다!
