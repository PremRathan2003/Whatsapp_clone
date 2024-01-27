import React, { useState } from 'react';
import './App.css';
import ChatScreen from './components/ChatScreen/ChatScreen'
import ContactList from './components/ContactList/ContactList'

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="app">
      <ContactList onContactClick={handleContactClick} />
      {selectedContact ? (
        <ChatScreen selectedContact={selectedContact} />
      ) : (
        <div className="welcome-screen">
          <h2>Welcome to WhatsApp Clone</h2>
          <p>Select a contact to start chatting</p>
        </div>
      )}
    </div>
  );
}

export default App
