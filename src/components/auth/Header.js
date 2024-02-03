import React, { useState } from "react";
import "../../utils/Header.css";
import { Icon } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import Body from "./Body";
const tagOptions = [
  {
    key: "Important",
    text: "Important",
    value: "Important",
  },
  {
    key: "Announcement",
    text: "Announcement",
    value: "Announcement",
  },
  {
    key: "Cannot Fix",
    text: "Cannot Fix",
    value: "Cannot Fix",
  },
  {
    key: "News",
    text: "News",
    value: "News",
  },
];
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="header">
      <div className="header-brand">
        <h2 style={{ margin: 0 }}>PG-Management</h2>
        <button className="payment">
          <Icon name="credit card outline" size="large" color="Black" /> Payment
        </button>
      </div>

      <div className="header-buttons">
        <button className="header-button">Post Your Property</button>
      </div>

      <div>
        <button className="header-b"> <Link to="/signup">Sign up</Link></button>
      </div>
      <div>
        <button className="header-g" ><Link to="/login">log in</Link></button>
      </div>

    
      <Dropdown button className="icon" floating labeled icon="tasks" options={tagOptions} search text="Menu"/>
    </header>
    <Body/>
    </>
  );
};

export default Header;
