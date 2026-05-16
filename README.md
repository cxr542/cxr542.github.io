# 의상 디자이너 자기소개 사이트

[자기소개서.md](자기소개서.md) 내용을 바탕으로 한 **정적 1페이지 포트폴리오**입니다.  
HTML · CSS · JavaScript만 사용하며, [adri-fluid-dark](.cursor/skills/adri-fluid-dark/SKILL.md) 에디토리얼 다크 테마를 적용했습니다.

## 로컬 미리보기

```bash
cd "C:\Users\USER\OneDrive - 오케스트로\01. 개인\cursorstudy\adri-fluid-dark"
npx serve .
```

브라우저에서 `http://localhost:3000` (또는 터미널에 표시된 주소)로 엽니다.

`index.html`을 브라우저로 직접 열어도 됩니다.

## 구조

| 파일 | 설명 |
|------|------|
| `index.html` | 자기소개 본문 (5개 섹션 + 연락) |
| `styles/main.css` | 스타일 (`styles/tokens.css` import) |
| `styles/tokens.css` | adri-fluid-dark 디자인 토큰 (GitHub Pages 배포용) |
| `js/main.js` | 스크롤 reveal, 모바일 메뉴, 헤더 |
| `자기소개서.md` | 원본 텍스트 (수정 후 HTML에 반영) |

## 콘텐츠 수정

1. `index.html`에서 `<span class="placeholder">[이름]</span>` 등을 실제 값으로 교체
2. 연락처·포트폴리오: `#contact-email`, `#contact-portfolio`의 `href`와 표시 텍스트를 실값으로 교체 (`example.com`이 아니면 헤더 포트폴리오 버튼이 외부 링크로 전환됨)
3. (선택) `assets/images/`의 사진을 본인 작업물로 교체 — 출처는 [`assets/images/CREDITS.md`](assets/images/CREDITS.md) 참고

## GitHub Pages 배포

로컬에서 `main` 브랜치에 초기 커밋이 준비되어 있습니다. GitHub에 **새 저장소**를 만든 뒤:

```powershell
cd "C:\Users\USER\OneDrive - 오케스트로\01. 개인\cursorstudy\adri-fluid-dark"
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

1. GitHub **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main`, Folder: **`/ (root)`**
2. 1~2분 후 `https://<username>.github.io/<repo>/` 접속
3. 배경이 검정·amber 강조면 `styles/tokens.css` 로드 성공 (흰 배경이면 Network 탭에서 404 확인)

저장소 이름이 `<username>.github.io`이면 사용자 사이트 루트에 배포됩니다.

배포에 포함되는 파일: `index.html`, `styles/`(含 `tokens.css`), `js/`, `.nojekyll` — `.cursor/`는 `.gitignore`로 제외됩니다.

## 디자인 스킬

Cursor 채팅에서 `@adri-fluid-dark`를 붙이면 동일한 디자인 가이드를 적용할 수 있습니다.
