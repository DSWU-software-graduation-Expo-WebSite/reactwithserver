
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './header_new.css'
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars ,faXmark, faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";

import {AiFillHome} from 'react-icons/ai';

//이름 반드시...대문자로
function Header_new(){

    //뒤로가기
    const navigate = useNavigate();
    //함수만들기
    const onClickBtn = () => {
        navigate("/"); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
      };

    //default 값은 false 값으로 상태 설정
    const [isOpen, setIsOpen] = useState(false);


   
    return (
        <div className="outer_header">        
          <nav className="navBar">
            <ul className="navBar_menus"  >
            <li className="navBar_menus_menu">
            <Link to='/'>HOME</Link>
            </li>
            <li className="navBar_menus_menu">
            <Link to='/introduce'>INTRODUCE</Link>
            </li>
            <li className="navBar_menus_menu">
            <Link to="/developers">DEVELOPERS</Link>
            </li>
            <li className="navBar_menus_menu">
            <Link to="/projects">PROJECTS</Link>
            </li>
            <li className="navBar_menus_menu">
            <Link to='/professor'>THANKS TO</Link>
            </li>
            <li className="navBar_menus_menu">
            <Link to="/guestbook">GUESTBOOK</Link>
            </li>

            <li className="navBar_menus_menu">
            <a href ="https://www.instagram.com/softelligence_/">INSTAGRAM</a>
            </li>
            <li className="navBar_menus_menu">
            <a href ="https://www.youtube.com/watch?v=nceSqc9wnAk&t=11s">YOUTUBE</a>
            </li>
        
            </ul>
          </nav>

          {/*모바일 버전 클릭 안했을때 */}
          {!isOpen && <nav className="mobilenavBar">

          <div className="backBtn" onClick={()=>(
                onClickBtn()
 
               
            )}>
                <AiFillHome size="18"></AiFillHome>
            </div>

          <div className="toggleBtn" onClick={()=>(
                setIsOpen(!isOpen)
            )}><FontAwesomeIcon icon={faBars}  size="18"  ></FontAwesomeIcon>
            </div>
            
            <div className="navBar_mobile_logo">
                SOFT+TELLIGENCE
                </div>
         

            </nav> }

          {/*모바일 버전 클릭 했을때 */}

            {isOpen&&<nav className="mobilenavBarClick">
            <div className="toggleBtnCancel" onClick={()=>(
                setIsOpen(!isOpen)
            )}><FontAwesomeIcon icon={faXmark} size="2x" ></FontAwesomeIcon>
            </div>

            <ul className="toggleMenus">  
                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <Link to='/'>HOME</Link>
                </li>
                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <Link to='/introduce'>INTRODUCE</Link>
                </li>
          
                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <Link to="/developers">DEVELOPERS</Link>
                </li>
                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <Link to="/projects">PROJECTS</Link>
                </li>

                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <Link to='/professor'>THANKS TO</Link>
                </li>
                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <Link to="/guestbook">GUEST BOOK</Link>
                </li>
                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <a href ="https://www.instagram.com/softelligence_/">INSTAGRAM</a>
                </li>
                <li onClick={()=>(
                    setIsOpen(!isOpen)
                )}>
                <a href ="https://www.youtube.com/watch?v=nceSqc9wnAk&t=11s">YOUTUBE</a>
                </li>
              
              
            </ul>  


            </nav> }

        </div>

    );
  }

  export default Header_new;