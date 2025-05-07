import React from 'react'
import { userLocalStorage } from '../../utils/config'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const UserNav = () => {

  const { user } = useSelector(state => state.userSlice);
  console.log("🚀 ~ file: UserNav.jsx:9 ~ UserNav ~ user", user);

  let handleLogOut = () => {
    userLocalStorage.remove();
    window.location.href = '/dangnhap';
  }

  return (
    user ? <div className='user'>
      <span className='user__name'> {user.hoTen}</span>
      <ul className="user__menu">
        <li><Link to={'/thongtin'}>Thông tin</Link></li>
        <li><span onClick={()=>handleLogOut()}>Đăng xuất</span></li>
      </ul>
    </div> :
      <div>
        <Link to={"/dangnhap"} className="btns btns-orange me-3">
          Đăng nhập
        </Link>
        <Link to={"/dangky"} className="btns btns-outline-orange">
          Đăng ký
        </Link>
      </div>



  )
}
