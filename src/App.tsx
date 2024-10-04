import React from 'react';
import './App.css';
import Carousel from './Carousel'

const App: React.FC = () => {
  // const data = [
  //   {
  //     id: 1,
  //     title: 'Commit',
  //     content: 'Failed to compile',
  //     status: 'Failed',
  //   },
  //   {
  //     id: 2,
  //     title: 'Analytics',
  //     content: 'Traffic Overview: Projects - 2,543 visits, Groups - 2123 visits, Orders - 2493 visits, Templates - 1023 visits.',
  //     status: 'Github Traffic',
  //   },
  //   {
  //     id: 3,
  //     title: 'Upgrade',
  //     content: 'Billing information: Please upgrade your plan to access premium features.',
  //     status: 'Billing Details',
  //   },
  // ];

  return (
    <div className='app-container'>
      <Carousel/>
    </div>
  );
};

export default App;
