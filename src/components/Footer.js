import React,{useState} from "react"
const Footer=()=>{

  const [copyDate,setCopyDate]=useState(new Date().getFullYear())

  return(
    <footer className="wrapper">
      <span>
        Copyright @ 2017 - {copyDate} - youistudio.com, All Rights Reserved.
      </span>
    </footer>
  )
}
export default Footer;