import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('John Doe');
  const [college, setCollege] = useState('abes');

  function modifyName(){
    setName('shreem');
  };
  
  function modifyCollege(){
    setCollege('uni');
  };

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>College: {college}</p>

      <div>
        <button onClick={modifyName}>Modify Name</button>
        <button onClick={modifyCollege}>Modify College</button>
      </div>
    </div>
  );
}

export default UserProfile;