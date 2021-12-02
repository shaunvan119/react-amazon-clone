import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <img 
            className="header_logo" 
            src="https://m.media-amazon.com/images/G/35/gc/designs/livepreview/amazon_logo_noto_email_v2016_au-main._CB444479176_.png"
            />

            <div className="header_search">
             <input 
             className="header_searchInput" 
             type="text"/> 
             <SearchIcon className="header_searchIcon"/> 
            </div>

            <div className="header_nav">
            <div className="header_option">
               <span className="header_optionLineOne">Hello</span>
               <span className="header_optionLineTwo">Sign In</span>

            </div>
            <div className="header_option">
               <span className="header_optionLineOne">Returns</span>
               <span className="header_optionLineTwo">& Orders</span>

            </div>
            <div className="header_option">
               <span className="header_optionLineOne">Your p</span>
               <span className="header_optionLineTwo">Sign In</span>

            </div>
         </div>
        </div>
    )
}

export default Header


