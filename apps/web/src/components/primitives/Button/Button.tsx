import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children?: React.ReactNode
  primary?: boolean
  onClick?: () => void
}

function Button({
  className = '',
  children = 'Button',
  onClick,
  primary
}: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'font-semibold py-2 px-4 text-center text-sm bg-dark-1 text-light-1 border rounded border-light-4 duration-75 flex items-center gap-1.5 justify-center',
        primary && 'primary bg-highlight border-highlight',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
