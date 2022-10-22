import Button from './Button'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: 'button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'button'
}
