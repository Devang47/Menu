import GoBackBtn from './GoBack'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'GoBackBtn',
  component: GoBackBtn
} as ComponentMeta<typeof GoBackBtn>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof GoBackBtn> = (args) => (
  <GoBackBtn {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
