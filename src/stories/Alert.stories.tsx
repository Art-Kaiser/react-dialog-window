import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import DialogWindow from "../components/DialogWindow";

export default {
    title: 'Example/Alert',
    component: DialogWindow,
} as ComponentMeta<typeof DialogWindow>

const Template: ComponentStory<typeof DialogWindow> = (args, children) => <DialogWindow {...args}/>;

export const Base = Template.bind({})
Base.args = {
    title: 'Заголовок',
    type: 'alert',
    animated: true,
    text: 'Test text alert',
    backgroundColor: 'white',
    blackout: false,
    position: 'center',
    buttons: {
        titleSuccess: "",
        titleReject: "Отказаться",
    },
    children: <ul style={{ border: '2px solid black', width: '50px' }}>
        <li style={{ color: "red" }}>rule 1</li>
        <li style={{ color: "red" }}>rule 2</li>
        <li style={{ color: "red" }}>rule 3</li>
        <li>rule 4</li>
        <li style={{ color: "lightgreen"}}>rule 5</li>
    </ul>
}