import Header from './Header'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Header',
  component: Header
} as ComponentMeta<typeof Header>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {}
