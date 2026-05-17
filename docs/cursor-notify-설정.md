# Cursor 메일 알림 설정 (notify.env)

설정 파일은 **프로젝트 밖**에 있습니다 (Git에 올라가지 않음).

| 항목 | 경로 |
|------|------|
| 설정 | `%USERPROFILE%\.cursor\notify.env` |
| 예시 | `%USERPROFILE%\.cursor\notify.env.example` |

## 편집 방법

**방법 1 — 메모장**

```powershell
notepad $env:USERPROFILE\.cursor\notify.env
```

**방법 2 — Cursor에서 파일 열기**

1. `Ctrl+O` (파일 열기)
2. 주소창에 붙여넣기: `C:\Users\USER\.cursor\notify.env`

채팅의 `C:\Users\USER\.cursor\notify.env` 링크는 워크스페이스 밖이라 **열리지 않을 수 있습니다.**

## Gmail

- `SMTP_PASS` = [앱 비밀번호](https://myaccount.google.com/apppasswords) **16자** (로그인 비밀번호 아님)
- `SMTP_USER` = 앱 비밀번호를 만든 Gmail (`cxr542@gmail.com`)

## 테스트 (한글)

```powershell
$utf8 = [System.Text.UTF8Encoding]::new($false)
$sub = "$env:TEMP\cursor-notify-subject.txt"
$body = "$env:TEMP\cursor-notify-body.txt"
[System.IO.File]::WriteAllText($sub, "테스트: 한글", $utf8)
[System.IO.File]::WriteAllText($body, "[작업 요약]`n- 설정 확인", $utf8)
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.cursor\hooks\notify-task-complete.ps1" -SubjectFile $sub -BodyFile $body -Force
```

로그: `%USERPROFILE%\.cursor\hooks\notify.log`
