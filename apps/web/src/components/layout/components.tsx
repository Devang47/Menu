import React from 'react'
import ArrowRight from '~/icons/ArrowRight'
import Header from '../common/Register/Header'
import Button from '../primitives/Button/Button'
import Dropdown from '../primitives/Dropdown/Dropdown'
import GoBack from '../primitives/GoBack/GoBack'
import TextInput from '../primitives/TextInput/TextInput'

function Components() {
  return (
    <div className="flex items-start justify-start gap-10 py-10 flex-col px-10">
      <Header />

      <TextInput className="" label="Placeholder here:" />
      <TextInput className="" />
      <GoBack className="" />
      <Button className="w-32 px-6" />
      <Button className="w-32 px-6" primary>
        Button <ArrowRight />
      </Button>
      <Button className="rounded-[7px]">+</Button>

      <Dropdown
        options={[
          { value: 'first', id: 0 },
          { value: 'second', id: 1 },
          { value: 'third', id: 2 }
        ]}
      />
    </div>
  )
}

export default Components
