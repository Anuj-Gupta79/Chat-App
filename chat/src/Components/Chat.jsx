import React from 'react'
import add from "../Image/add.png";
import cam from "../Image/cam.png";
import more from "../Image/more.png";
import Messages from './Messages';
import Input from "./input";


const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Admin</span>
        <div className="icon">
          <img src={cam}></img>
          <img src={add}></img>
          <img src={more}></img>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat