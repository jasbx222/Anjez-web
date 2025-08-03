import React from "react";
import PropTypes from 'prop-types'; // Optional for type-checking props
import group from "../assets/object.png"; 

// Group component that accepts `text` prop
function Group({ text }) {
  return (
    <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
      <h6 style={{ color: '#001976', fontWeight: '600', fontSize: '16px', lineHeight: '24px' }}>
        {text}
      </h6>
      <img src={group} alt="Group" className="me-2" />
    </div>
  );
}
export default Group;