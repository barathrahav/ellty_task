import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [selectedPages, setSelectedPages] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleCheckboxChange = (name) => {
    setSelectedPages((prevSelectedPages) => ({
      ...prevSelectedPages,
      [name]: !prevSelectedPages[name],
    }));
  };

  const handleDone = () => {
    console.log('Selected pages:', selectedPages);
  };

  return (
    <div className="checkbox-container">
      <label
        className="checkbox-label"
        onDoubleClick={() => handleCheckboxChange('allPages')}
      >
        All pages
        <input
          type="checkbox"
          name="allPages"
          checked={selectedPages.allPages}
          readOnly
        />
        <span className="hover-checkmark"></span>
      </label>
      <div className="separator"></div>
      <label
        className="checkbox-label"
        onDoubleClick={() => handleCheckboxChange('page1')}
      >
        Page 1
        <input
          type="checkbox"
          name="page1"
          checked={selectedPages.page1}
          readOnly
        />
        <span className="hover-checkmark"></span>
      </label>
      <label
        className="checkbox-label"
        onDoubleClick={() => handleCheckboxChange('page2')}
      >
        Page 2
        <input
          type="checkbox"
          name="page2"
          checked={selectedPages.page2}
          readOnly
        />
        <span className="hover-checkmark"></span>
      </label>
      <label
        className="checkbox-label"
        onDoubleClick={() => handleCheckboxChange('page3')}
      >
        Page 3
        <input
          type="checkbox"
          name="page3"
          checked={selectedPages.page3}
          readOnly
        />
        <span className="hover-checkmark"></span>
      </label>
      <label
        className="checkbox-label"
        onDoubleClick={() => handleCheckboxChange('page4')}
      >
        Page 4
        <input
          type="checkbox"
          name="page4"
          checked={selectedPages.page4}
          readOnly
        />
        <span className="hover-checkmark"></span>
      </label>
      <div className="separator"></div>
      <button className="done-button" onClick={handleDone}>Done</button>
    </div>
  );
};

export default App;
