# 솔루션 교육 강사 자기소개 사이트 (cxr542)

[자기소개서.md](자기소개서.md) 내용을 바탕으로 한 **정적 1페이지 프로필**입니다.  
HTML · CSS · JavaScript만 사용하며, [adri-fluid-dark](.cursor/skills/adri-fluid-dark/SKILL.md) 에디토리얼 다크 테마를 적용했습니다.

- **공개:** https://cxr542.github.io/
- **Repo:** https://github.com/cxr542/cxr542.github.io

## 로컬 미리보기

```bash
cd cxr542   # cursorstudy 루트 기준
npx serve .
```

브라우저에서 터미널에 표시된 주소로 엽니다. `index.html`을 직접 열어도 됩니다.

## 구조

| 파일 | 설명 |
|------|------|
| `index.html` | 자기소개 본문 |
| `styles/main.css` | 스타일 |
| `styles/tokens.css` | 디자인 토큰 |
| `js/main.js` | 스크롤 reveal, 모바일 메뉴 |
| `자기소개서.md` | 원본 텍스트 |

## GitHub Pages 배포

```bash
git push origin main
```

Settings → Pages → `main` / root. 사용자 사이트 저장소(`cxr542.github.io`)면 https://cxr542.github.io/ 에 배포됩니다.

## 디자인 스킬

Cursor에서 `@adri-fluid-dark` — 디자인 토큰·레이아웃 가이드 (폴더명 `cxr542`와 별개).
