import React, { useState } from 'react';
import './ContactList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HiUserGroup } from "react-icons/hi";
import { IoLogoIonic } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";


const contacts = [
    { id: 1, name: 'John Doe', online: true, imageUrl: 'https://i.pinimg.com/564x/fc/f1/af/fcf1afe324cfc320003af203dad55f94.jpg' },
    { id: 2, name: 'Jane Doe', online: false, imageUrl: 'https://i.pinimg.com/564x/1e/18/58/1e1858eb95856e0cf1251f24ad90660e.jpg' },
    { id: 3, name: 'Alice Smith', online: true, imageUrl: 'https://i.pinimg.com/564x/59/dc/28/59dc282b75261978ca5acf3c2a8fca62.jpg' },
    { id: 4, name: 'Rehman', online: false, imageUrl: 'https://i.pinimg.com/474x/49/79/0a/49790a25b182b01f0cd10d4658eaef75.jpg' },
    { id: 5, name: 'Eva Williams', online: true, imageUrl: 'https://i.pinimg.com/736x/8f/ec/3d/8fec3d1d4d3cf051e8f3dbc072636257.jpg' },
    { id: 6, name: 'Lena', online: false, imageUrl: 'https://i.pinimg.com/564x/a8/aa/46/a8aa463f670c1b6432a1b16000258f86.jpg' },
    // Add more contacts as needed
  ];

function ContactList({ onContactClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contactList">
        <div className='menu-bar'>
           <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706279328/WhatsApp_Image_2024-01-25_at_10.49.15_PM_plkf2c-Circle_ddu9lg.jpg" alt = "profile" className='profile-photo' />
        <div className='menu-icons'>
            <HiUserGroup size={23} className='menu-item' />
            <IoLogoIonic size={23} className='menu-item'/>
            <MdMessage size={23} className='menu-item' />
            <CiMenuKebab size={23} className='menu-item'/>
        </div>
        </div>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h3>
        Contacts{' '}
      </h3>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} onClick={() => onContactClick(contact)} className='contact-pic-name'>
            <img src={contact.imageUrl} alt={contact.name} className="contact-image" />
            <div className="contact-details">
              <span className="contact-name">{contact.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
