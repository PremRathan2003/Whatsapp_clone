import React, { useState } from 'react';
import './ChatScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaperclip, faMicrophone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdAddIcCall, MdOutlineVideoCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';

const contacts = [
  { id: 1, name: 'John Doe', online: true, imageUrl: 'https://i.pinimg.com/564x/fc/f1/af/fcf1afe324cfc320003af203dad55f94.jpg' },
  { id: 2, name: 'Jane Doe', online: false, imageUrl: 'https://i.pinimg.com/564x/1e/18/58/1e1858eb95856e0cf1251f24ad90660e.jpg' },
  { id: 3, name: 'Alice Smith', online: true, imageUrl: 'https://i.pinimg.com/564x/59/dc/28/59dc282b75261978ca5acf3c2a8fca62.jpg' },
  { id: 4, name: 'Rehman', online: false, imageUrl: 'https://i.pinimg.com/474x/49/79/0a/49790a25b182b01f0cd10d4658eaef75.jpg' },
  { id: 5, name: 'Eva Williams', online: true, imageUrl: 'https://i.pinimg.com/736x/8f/ec/3d/8fec3d1d4d3cf051e8f3dbc072636257.jpg' },
  { id: 6, name: 'Lena', online: false, imageUrl: 'https://i.pinimg.com/564x/a8/aa/46/a8aa463f670c1b6432a1b16000258f86.jpg' },
];

function ChatScreen({ selectedContact }) {
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State to manage EmojiPicker visibility

  const [messages, setMessages] = useState({
    1: [
      { id: 1, text: 'Hello there!', sender: 'John Doe' },
      { id: 2, text: 'How are you doing?', sender: 'John Doe' },
    ],
    2: [
      { id: 3, text: 'Hi! What\'s up?', sender: 'Jane Doe' },
      { id: 4, text: 'Did you see that movie?', sender: 'Jane Doe' },
    ],
    // Add more contacts as needed
    3: [],
    4: [
      {id: 7, text: "Prem..."}
    ],
    5: [],
    6: [
      {id: 5, text: "Hey!"},
      {id: 6, text: "How are you :-)"}
    ],
  });

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = { id: messages[selectedContact.id].length + 1, text: inputMessage, sender: 'You' };
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedContact.id]: [...prevMessages[selectedContact.id], newMessage],
      }));
      setInputMessage('');
      setIsTyping(false); // Reset typing state after sending message
    }
  };

  const handleChange = (e) => {
    setInputMessage(e.target.value);
    setIsTyping(e.target.value !== '');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleEmojiClick = (emoji) => {
    setInputMessage(emoji.native+inputMessage);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const chatMessages = messages[selectedContact.id] || [];
  const selectedContactData = contacts.find((contact) => contact.id === selectedContact.id);

  return (
    <div className="chatScreen">
      <div className="chat-header">
        <div className='chat-name-pic'>
            <img src={selectedContactData.imageUrl} alt={selectedContactData.name} className="contact-image" />
            <h3 className='chat-name'>
            {selectedContactData.name}
            </h3>
        </div>
        <div className='chat-icons'>
            <MdAddIcCall size={20} className='menu-items'/>
            <MdOutlineVideoCall size={22} className='menu-items'/>
            <FaSearch size={18} className='menu-item'/>
            <CiMenuKebab size={20} className='menu-items'/>
        </div>
      </div>
      <div className='chats-msg-input-container'>
      <div className="chat-messages">
          {chatMessages.map((message) => (
            <div key={message.id} className={message.sender === 'You' ? 'sent' : 'received'}>
              {message.sender !== 'You' && (
                <img src={selectedContactData.imageUrl} alt={selectedContactData.name} className="message-image" />
              )}
              <span className="message-sender">{message.text}</span> 
              {message.sender === 'You' && (
                <img src="https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706279328/WhatsApp_Image_2024-01-25_at_10.49.15_PM_plkf2c-Circle_ddu9lg.jpg" alt="You" className="message-image" />
              )}
            </div>
          ))}
        </div>
        <div className="input-box">
          <FontAwesomeIcon icon={faPaperclip}  className='menu-items'/>
          {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          <FontAwesomeIcon icon={faSmile} className='menu-items' onClick={toggleEmojiPicker} /> {/* Emoji icon */}
          <input type="text" placeholder="Type a message" className='msg-inbox' value={inputMessage} onChange={handleChange} onKeyPress={handleKeyPress} />
          {isTyping ? (
          <IoSendSharp icon={faTimes} className='menu-items' onClick={sendMessage} /> // send icon
        ) : (
          <FontAwesomeIcon icon={faMicrophone} className='menu-items'  /> // mic icon
        )}
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
