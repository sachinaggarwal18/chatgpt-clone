import "./chatList.css"
import {Link} from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">New Chat</Link>
      <Link to="/dashboard">Explore Converse AI</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">My Chat List</Link>
        <Link to="/">My Chat List</Link>
        <Link to="/">My Chat List</Link>
        <Link to="/">My Chat List</Link>
        <Link to="/">My Chat List</Link>
        <Link to="/">My Chat List</Link>
        <Link to="/">My Chat List</Link>
        <Link to="/">My Chat List</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="logo2.png" alt="" />
        <div className="texts">
            <span>Upgrade to <b>Converse AI+</b></span>
            <span>Get access to pro features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList
