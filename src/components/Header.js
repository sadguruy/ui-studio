import React,{useState} from "react";
import data from "../assets/mockData.json";

const Header = ()=>{
  const [headerData,setHeaderData]=useState(data.header)
  const handleOnClick=(elegant)=>{
    console.log(elegant)
  }

  return(
    <header className="wrapper header" id="header">
      <div className="wrapper_inner">
        <div className="wrapper">
          <a className="logo">
            <span className="youi">youi</span><span className="studio">studio<span>.com</span></span>
          </a>
          <a className="nav_icon"><span></span></a>
          <div className="navigation">
            <ul>
              {
                headerData && headerData.length>0 && headerData.map((item,index)=>{
                  return (
                    <li key={index}>
                      <a onClick={()=>handleOnClick(item.id)} href={item.hash?item.hash:"/"} className={item.class&&item.class}>
                        {item.icon && <i className={item.icon}></i>}
                        {!item.icon && item.name}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
