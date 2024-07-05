import React from 'react';
import'./Css Files/workingHours.css';

const WorkingHours = () => {
  return (
    <div className='workingHours'>
      <div className='workingHoursContent'>
        <h2>Working Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
        <button className='bookButton'>Book Now</button>
      </div>
    </div>
  );
};

export default WorkingHours;
