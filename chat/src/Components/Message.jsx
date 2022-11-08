import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="userInfo">
        <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png" />
        <span>just now</span>
      </div>
      <div className="userContent">
        <p>Hello</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" /> 
      </div>
    </div>
  );
};

export default Message;
