import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';


export default {
    title: 'Surfaces/Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>;


const Template: ComponentStory<typeof Footer> =  (args: any) => <Footer {...args} />;

export const Default = Template.bind({});