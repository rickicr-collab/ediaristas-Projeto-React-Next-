import { ComponentMeta, ComponentStory } from '@storybook/react';

import Link from './Link';

export default {
    title: 'components/navigations/Link',
    component: Link,
}as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: any) => <Link {...args} />

export const Default = Template.bind({});

Default.args = {
  children: 'Meu Link',
  href:'/#',
  
 
}