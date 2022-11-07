import React from 'react';
import attachment from "../Image/attach.png";
import img from "../Image/img.png";
import images from "../Image/images.png";
  
const input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something...."/>
      <div className="inputIcons">
        <img src={attachment}/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
           <img src={img}/>
        </label>
        <button>
          Send
          {/* <img src={images}/> */}
        </button>
      </div>
    </div>
  )
}
  
export default input