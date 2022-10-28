import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  withUnderline?: boolean
  type?: 'h1' | 'h2' | 'h3' | 'h4'
}

function Heading({
  children,
  type = 'h1',
  className,
  withUnderline = false
}: Props) {
  return (
    <div
      className={clsx(
        'text-light-1 font-bold text-2xl',
        withUnderline && 'half-underline',
        className
      )}
      dangerouslySetInnerHTML={{
        __html: `<${type} className='' >${children}</${type}>`
      }}
    ></div>
  )
}

export default Heading
