import clsx from 'clsx'
import React from 'react'
import Heading from '../Heading'

type Props = {
  className?: string
}

function Header({ className }: Props) {
  return (
    <header
      className={clsx(className, 'flex items-center justify-between w-full')}
    >
      <Heading withUnderline type="h1">
        Register
      </Heading>

      <div className="progress text-sm text-light-3 font-bold">1/4</div>
    </header>
  )
}

export default Header
