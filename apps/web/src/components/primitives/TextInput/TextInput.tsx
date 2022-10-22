import React from 'react'
import clsx from 'clsx'

type Props = {
  placeholder?: string
  className?: string
  label?: string
}

const TextInput = React.forwardRef(
  (
    { placeholder = 'Enter text here...', className = '', label = '' }: Props,
    ref: any
  ) => (
    <div className="w-60">
      {label ? (
        <div className="text-[10px] md:text-xs font-bold text-light-2 mb-1.5">
          {label}
        </div>
      ) : (
        ''
      )}
      <input
        className={clsx(
          'py-2.5 px-5 text-sm md:text-[15px] rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 focus:border-highlight outline-none w-full duration-75',
          className
        )}
        placeholder={placeholder}
        ref={ref}
        type="text"
      />
    </div>
  )
)

export default TextInput
