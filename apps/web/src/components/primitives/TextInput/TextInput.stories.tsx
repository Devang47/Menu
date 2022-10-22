import TextInput from './TextInput'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TextInput',
  component: TextInput
} as ComponentMeta<typeof TextInput>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const Label = Template.bind({})
Label.args = {
  label: 'Placeholder here'
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {}
