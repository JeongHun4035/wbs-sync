'use client'

import { useState } from 'react'

import { idRules, passwordRules } from '~/app/validations/login'
import Input from '~/app/components/Input'

export const LoginForm = () => {
  const [activeLoginForm, setActiveLoginForm] = useState<boolean>(false)

  const [id, setId] = useState<string>('')  
  const [idValidate, setIdValidate] = useState<boolean>(false)
  const [idValidMessage, setIdValidMessage] = useState<string>('')

  const [password, setPassword] = useState<string>('')  
  const [passwordValidate, setPasswordValidate] = useState<boolean>(false)
  const [passwordValidMessage, setPasswordValidMessage] = useState<string>('')

  const loginFormActive = () => setActiveLoginForm(true)

  const handleCheck = () => {
    if (!id) {
      setIdValidMessage('아이디를 입력해주세요.')
      setIdValidate(true)
    } else {
      setIdValidate(false)
    }

    if (!password) {
      setPasswordValidMessage('비밀번호를 입력해주세요.')
      setPasswordValidate(true)
    } else {
      setPasswordValidate(false)
    }
  }

  return (
    <div className="w-full">
      {!activeLoginForm && (
        <button
          type="button"
          onClick={loginFormActive}
          className="w-full rounded-md bg-indigo-600 hover:bg-indigo-500 py-2 text-sm font-semibold"
        >
          LOGIN
        </button>
      )}

      <div
        className={`
          overflow-hidden transition-all duration-700 ease-in-out
          ${activeLoginForm ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col gap-3 mt-2">
          <Input
            placeholder="아이디"
            value={id}
            onValueChange={setId}
            validationMode={idValidate}
            validationRules={idRules}
            validationMessage={idValidMessage}
          />

          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onValueChange={setPassword}
            validationMode={passwordValidate}
            validationRules={passwordRules}
            validationMessage={passwordValidMessage}
          />

          <button
            type="button"
            onClick={handleCheck}
            className="mt-1 w-full rounded-md bg-indigo-600 hover:bg-indigo-500 py-2 text-sm font-semibold"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}
