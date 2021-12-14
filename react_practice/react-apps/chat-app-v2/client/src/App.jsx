import React from "react";
import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelContainer, ChannelListContainer, Auth } from "./components";

const apiKey = process.env.REACT_APP_APIKEY;

const client = StreamChat.getInstance(apiKey);

const authToken = false

const App = () => {

  if (!authToken) {
    return <Auth />
  } 
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team dark">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
