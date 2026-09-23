import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('John Doe');
  const [college, setCollege] = useState('abes');

  const modifyName = () => {
    setName('shreem');
  };
  
  const modifyCollege = () => {
    setCollege('uni');
  };

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>College:</strong> {college}</p>

      <div>
        <button onClick={modifyName}>Modify Name</button>
        <button onClick={modifyCollege}>Modify College</button>
      </div>
    </div>
  );
}

export default UserProfile;