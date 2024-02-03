import React, { useState } from 'react'
import "../../utils/Body.css";
import { Dropdown } from 'semantic-ui-react'

const Body = () => {
    const [activeTab, setActiveTab] = useState('buy'); 
    const [selectedLocation, setSelectedLocation] = useState('Select Location');
    const [searchQuery, setSearchQuery] = useState('');

    const stateNames = [
      { key: 'state1', value: 'State 1', text: 'Bihar' },
      { key: 'state2', value: 'State 2', text: 'chhattisgarh' },
      { key: 'state3', value: 'State 3', text: 'Banglore' },
      // Add more state names as needed
    ];

     const handleLocationChange = (event, data) => {
    setSelectedLocation(data.value);
  };

    const handleSearchSubmit = () => {
      // Handle search submission logic here
      console.log('Search submitted with query:', searchQuery);
    };

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
       
    
    }

  return (
    <>
    <div className='bsty'>
      <h2>World's Largest Pg-Management Property Site</h2>
      </div>
      <div className='container'>
        <div className='bicon'>
          <i className="book icon"></i>
          <p>Rental agreement</p>
        </div>
        <div className='ticon'>
          <i className="truck icon"></i>
          <p>Next Day delivery</p>
        </div>
      </div>
   


 {/* <div className='tab-container'>
      <div className={`tab ${activeTab === 'buy' ? 'active' : ''}`} onClick={() => handleTabClick('buy')}>
        Buy
      </div>
      <div className={`tab ${activeTab === 'rent' ? 'active' : ''}`} onClick={() => handleTabClick('rent')}>
        Rent
      </div>
      <div className={`tab ${activeTab === 'commercial' ? 'active' : ''}`} onClick={() => handleTabClick('commercial')}>
        Commercial
      </div>
       
    </div> */}

    {/* mmmmmmm */}
    {/* <div className="location-selector-container"> */}
    <div className='vv'>
    <div className="location-selector-container">
      {/* <div className="dropdown">
        <Dropdown
          placeholder="Select Location"
          fluid
          selection
          options={stateNames}
          onChange={handleLocationChange}
          value={selectedLocation}
        />
      </div> */}
      </div>
      {/* </div> */}

      {/* <div className="search-box-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>
          <img src="search-icon.png" alt="Search" />
        </button>
      </div> */}
      {/* <div className="logo-container">
        <img src="logo.png" alt="Logo" />
      </div> */}

      </div>
    </>
  )
}

export default Body
