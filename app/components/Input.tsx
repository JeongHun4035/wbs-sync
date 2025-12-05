'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

type RuleSet = {
  rule: (value: string) => boolean
  message: string
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  validationMode?: boolean
  validationRules?: RuleSet[]
  validationMessage?: string
  onValueChange?: (value: string) => void
}

export default function Input({
  validationMode = false,
  validationRules = [],
  validationMessage,
  className = '',
  value: controlledValue,
  onChange,
  onValueChange,
  ...props
}: InputProps) {
  const [innerValue, setInnerValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const value =
    typeof controlledValue === 'string' ? controlledValue : innerValue

  useEffect(() => {
    if (!validationMode) {
      setErrorMessage('')
      return
    }

    if (validationMessage) {
      setErrorMessage(validationMessage)
      return
    }

    for (const ruleObj of validationRules) {
      if (!ruleObj.rule(value)) {
        setErrorMessage(ruleObj.message)
        return
      }
    }

    setErrorMessage('')
  }, [validationMode, validationMessage, validationRules])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value

    onChange?.(e)
    onValueChange?.(next)

    if (controlledValue === undefined) {
      setInnerValue(next)
    }
  }

  const clearValue = () => {
    onValueChange?.('')
    if (controlledValue === undefined) {
      setInnerValue('')
    }
  }

  const hasError = errorMessage.length > 0

  return (
    <div className="flex flex-col w-full">
      <div className={`relative ${hasError ? 'animate-input-shake' : ''}`}>
        <input
          {...props}
          value={value}
          onChange={handleChange}
          className={`
            w-full rounded-md px-3 py-2 pr-9 text-sm
            bg-indigo-800/70 border
            ${hasError ? 'border-orange-400' : 'border-indigo-500/40'}
            placeholder:text-indigo-200/60
            focus:outline-none focus:ring-2
            ${hasError ? 'focus:ring-orange-400' : 'focus:ring-indigo-400'}
            focus:border-transparent
            transition
            ${className}
          `}
        />

        {value.length > 0 && (
          <button
            type="button"
            onClick={clearValue}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-200 hover:text-white transition"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <p
        className={`
          mt-1 ml-2 text-[11px] leading-none text-orange-400
          transition-opacity duration-150
          ${hasError ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {errorMessage}
      </p>
    </div>
  )
}
