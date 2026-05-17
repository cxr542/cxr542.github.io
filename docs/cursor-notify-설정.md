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

## Gmail SMTP

- `SMTP_PASS` = [앱 비밀번호](https://myaccount.google.com/apppasswords) **16자** (로그인 비밀번호 아님)
- `SMTP_USER` = 앱 비밀번호를 만든 Gmail (`cxr542@gmail.com`)

## Gmail 라벨 `AI Notify` (받은편지함 옆 폴더)

Cursor/스크립트는 **라벨을 만들지 않습니다.** Gmail에서 라벨 + 필터를 한 번 설정해야 합니다.

- Gmail에 보이는 이름: **`AI Notify`** (공백·대문자). `ai_notify` 같은 시스템 이름이 아닙니다.
- 알림 메일 제목은 스크립트가 **`[Cursor]`** 로 시작합니다 (예: `[Cursor] 완료: …`).
- 본문 첫 줄에 **`Cursor 작업 완료 알림`** 이 포함됩니다.

### 1) 라벨 만들기

1. Gmail → 왼쪽 **라벨 더보기** → **새 라벨 만들기**
2. 이름: **`AI Notify`**
3. (선택) **라벨 목록에 표시** 체크 — 왼쪽 사이드바에 고정

### 2-A) 필터 가져오기 (XML)

1. Gmail → **설정**(톱니) → **모든 설정 보기** → **필터 및 차단된 주소**
2. **가져오기** → 파일 선택:  
   `C:\Users\USER\.cursor\gmail-filter-ai-notify.xml`
3. 가져온 필터에 **라벨 적용: AI Notify** 가 있는지 확인
4. **기존 대화에도 필터 적용** 을 켜면, 이미 받은 Cursor 알림에도 라벨이 붙습니다

가져오기가 실패하면 **2-B** 수동 필터를 사용하세요.

### 2-B) 수동 필터 (가장 확실)

1. Gmail 검색창에 아래를 붙여넣고 검색 (**대괄호는 반드시 따옴표** — 없으면 0건 나올 수 있음):

   ```
   subject:"[Cursor]"
   ```

2. 검색 결과가 나오면 → **검색 옵션** → **필터 만들기**
3. **다음 작업:** **라벨 적용** → `AI Notify` → **기존 대화에도 적용** 체크 → **필터 만들기**

검색이 0건이면 아래 **「검색 없이 필터 만들기」** 를 쓰세요.

### 2-C) 검색 없이 필터 만들기 (검색이 안 될 때)

1. Gmail → **설정** → **모든 설정 보기** → **필터 및 차단된 주소**
2. 맨 아래 **새 필터 만들기** (또는 **필터 만들기**)
3. **제목에 다음 단어 포함** 칸에만 입력: `[Cursor]`  
   (보낸 사람·본문 조건은 **비워 두기** — 조건이 많을수록 안 맞음)
4. **필터 만들기** → **라벨 적용: AI Notify** → **기존 대화에도 필터 적용** → **필터 만들기**

### 3) 확인

- 왼쪽에 **`AI Notify`** 라벨이 보이고, 숫자가 0이 아니면 성공
- 라벨이 안 보이면: **라벨 더보기** 펼치기, 또는 라벨 설정에서 **목록에 표시**
- 필터 전에 온 메일은 **2-B 5단계(기존 대화 적용)** 또는 검색 후 일괄 **라벨 적용**

### 자주 하는 오해

| 상황 | 설명 |
|------|------|
| 메일은 오는데 라벨만 없음 | 필터/라벨을 Gmail에서 아직 안 만든 경우 |
| `ai_notify` 로 찾음 | 표시 이름은 **`AI Notify`** |
| 예전 알림만 라벨 없음 | 필터는 **이후** 메일만 자동 적용 → 기존 대화 적용 필요 |
| 제목에 `[Cursor]` 없는 옛 메일 | 2026-05-17 이전 일부 메일은 수동 라벨 또는 검색 `from:me "Cursor 작업 완료 알림"` |

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
