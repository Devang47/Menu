import React from 'react'
import ArrowRight from '~/icons/ArrowRight'
import Logo from '~/icons/Logo'
import Header from '../common/Header/Header'
import Button from '../primitives/Button/Button'
import Card from '../primitives/Card/Card'
import GoBack from '../primitives/GoBack/GoBack'
import TextInput from '../primitives/TextInput/TextInput'
import SelectDropdown from '../primitives/SelectDropdown/SelectDropdown'
import Navbar from '../common/Navbar'
import LoadingScreen from '../common/LoadingScreen'

function Components() {
  return (
    <div className="flex items-start justify-start gap-10 py-10 flex-col px-10">
      <Navbar />
      <Header className="mt-12" />

      <Logo />
      <Logo variant="secondary" />

      <Card>
        <div className="h-40 w-60"></div>
      </Card>

      <TextInput id="testing" className="" label="Placeholder here:" />
      <TextInput id="testing" className="" />
      <TextInput
        id="testing"
        className=""
        isTextarea
        label="Placeholder here:"
      />
      <GoBack className="" />
      <Button label="testing" className="w-32 px-6" />
      <Button label="testing" className="w-32 px-6" primary>
        Button <ArrowRight />
      </Button>
      <Button label="testing" className="rounded-[7px]">
        +
      </Button>

      <SelectDropdown
        options={[
          { value: 'first', id: 0 },
          { value: 'second', id: 1 },
          { value: 'third', id: 2 }
        ]}
      />

      {/* <LoadingScreen /> */}
    </div>
  )
}

export default Components
