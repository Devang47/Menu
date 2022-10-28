import React from 'react'
import LoadingIcon from '~/icons/LoadingIcon'

function LoadingScreen() {
  return (
    <section className="fixed inset-0 w-full h-full bg-black/80 flex items-center justify-center z-20">
      <div className="container bg-dark-1 p-3.5 w-fit rounded">
        <LoadingIcon />
      </div>
    </section>
  )
}

export default LoadingScreen
