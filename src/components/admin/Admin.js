import React from "react";
import {Link} from 'react-router-dom'
import './Admin.css'
const Admin = () => {
  return <div className="container">
      <h2>Admin</h2>
      <Link to="/admin/blog" style={{marginLeft: '30px', fontSize: "24px"}}>
      ბლოგი
      </Link>
      <Link to="/admin/products" style={{marginLeft: '30px', fontSize: '24px'}}>
      პროდუქცია
      </Link>
  </div>;
};

export default Admin;
