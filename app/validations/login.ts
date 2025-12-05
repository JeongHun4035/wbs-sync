export const idRules = [
  { rule: (v: string) => v.length > 0, message: '아이디를 입력해주세요.' },
]

export const passwordRules = [
  { rule: (v: string) => v.length > 0, message: '비밀번호를 입력해주세요.' },
]
