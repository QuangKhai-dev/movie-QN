import Lottie from 'lottie-react';
import React from 'react';
import Cinema from '../../assets/cinema-animation.json';
import Login from '../../pages/user/Login';
import Register from '../../pages/user/Register';

const UserLayout = ({Component}) => {


  return (
    <div className='user__layout'>
      <div className="user__layout-left">
        <Lottie animationData={Cinema} />
      </div>
      <div className="user__layout-right">
        <Component />
      </div>
    </div>
  )
}

export default UserLayout