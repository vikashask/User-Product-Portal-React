import React from "react";

const MessageBar = (props) => {
    if(props.errorMsg){
        return (
            <div className={props.className}>
            {props.errorMsg}<b className="font-size16">{props.pass}</b>
            </div>
        )
    }else{
        return null
    }
   
}

export default MessageBar;