import { ComponentMeta, ComponentStory } from "@storybook/react";
import RoundedButton from "./RoundedButton";
export default {
  title: "Inputs/RoundedButton",
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args:any) => (
  <RoundedButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: "Meu Botão",
    variant: "contained",

}


