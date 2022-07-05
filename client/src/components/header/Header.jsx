import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Collect moments not things</span>
            <span className="headerTitleLg">Travel</span>
        </div>
        <img className="headerImg" src="https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg" alt=""></img>
    </div>
  )
}

