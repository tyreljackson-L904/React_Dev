// YourComponent.stories.js | YourComponent.stories.jsx

import React from "react";

import Home from "../ResultsTabs/Home";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Home",
  component: Home,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Home {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  user: {},
};
