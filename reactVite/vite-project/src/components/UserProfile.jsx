import React, { useState } from 'react';

function UserProfile() {
  const [name, setNameto] = useState('John Doe');
  const [college, setCollegeto] = useState('abes');

  function modifyName(){
    setNameto('shreem');
  };
  
  function modifyCollege(){
    setCollegeto('uni');
  };

  return (
    <div>
      <h1>Student Details</h1>
      <h2>Name: {name}</h2>
      <h2>College: {college}</h2>

      <div>
        <button onClick={modifyName}>Modify Name</button>
        <button onClick={modifyCollege}>Modify College</button>
      </div>
    </div>
  );
}

export default UserProfile;