import React from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const Chatpage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">How can I assist you today?</div>
          <div className="message user">What's the weather like today?</div>
          <div className="message">It's sunny with a high of 25°C.</div>
          <div className="message user">Can you set a reminder for me?</div>
          <div className="message">Sure! What should I remind you about?</div>
          <div className="message user">Remind me to call John at 5 PM.</div>
          <div className="message">Reminder set for 5 PM to call John.</div>
          <div className="message user">What's the latest news?</div>
          <div className="message">The stock market saw a 2% increase today.</div>
          <div className="message user">Can you help me with math?</div>
          <NewPrompt/>
        </div>  
      </div>
    </div>
  );
}

export default Chatpage;