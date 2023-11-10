import React, { useEffect,useState,useRef } from 'react';

import './GraduateList.css';
import images from './image/index.js';

import Front from "../front"



const GraduateList = () => {
    const members = [
        { name: "강수연", groupName: "디지털\n인클루전"},
        { name: "구연우" , groupName: "UNICORN" },
        { name: "김선경" , groupName: "SELECT" },
        { name: "김유정" , groupName: "UNICORN" },
        { name: "김지혜" , groupName: "FULL HOUSE" },
        { name: "노정우" , groupName: "FULL HOUSE" },
        { name: "문지영" , groupName: "덕성전자" },
        { name: "박상은" , groupName: "개발JEANS" },
        { name: "박세림" , groupName: "개발JEANS" },
        { name: "박소정" , groupName: "빵야" },
        { name: "박은비" , groupName: "UNICORN" },
        { name: "박해인" , groupName: "덕성전자" },
        { name: "양예지" , groupName: "SELECT" },
        { name: "유다영" , groupName: "UNICORN" },
        { name: "이나래" , groupName: "개발JEANS" },
        { name: "이소영" , groupName: "개발JEANS" },
        { name: "이수진" , groupName: "덕성전자" },
        { name: "이유진" , groupName: "디지털\n인클루전" },
        { name: "이희래" , groupName: "SELECT" },
        { name: "정현아" , groupName: "디지털\n인클루전" },
        { name: "조승아" , groupName: "디지털\n인클루전" },
        { name: "최예진" , groupName: "빵야" },
        { name: "추수현" , groupName: "SELECT" },
        { name: "한채연" , groupName: "FULL HOUSE" },
        { name: "허현우" , groupName: "빵야" }
    ];


 
  
    const scrolling = () => {
        setcurrentScrollPosition(window.scrollY);
        //console.log('스크롤 아래로 이동 중');
        if (currentScrollPosition > lastScrollPosition) {
            console.log('스크롤 아래로 이동 중');
            if(isScroll){
                homeRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                setIsVisible(true);
                setIsScroll(false);
            }
            // 스크롤이 아래로 이동 중
            
        } else if (currentScrollPosition < lastScrollPosition) {
            console.log('스크롤 위로 이동 중');
 
            
        }
        setLastScrollPosition(currentScrollPosition);

    
      };

      const clickng = () => {
        homeRef.current.scrollIntoView({ behavior: "auto", block: "center" });
        setIsVisible(true);
      }
    

      
    
    const [text, setText] = useState('초기 텍스트');
    const [isVisible, setIsVisible] = useState(false);
    const [isScroll, setIsScroll] = useState(true);
    const [currentScrollPosition,setcurrentScrollPosition] = useState();
    const [lastScrollPosition, setLastScrollPosition] = useState(window.scrollY);
    const homeRef = useRef(null);

    useEffect(()=>{
        setText("@Developers");
        window.addEventListener('scroll', scrolling);
        return () => {
            window.removeEventListener('scroll', scrolling); 
          };},[isScroll,currentScrollPosition,lastScrollPosition,isVisible]);


    



    return (
        <div className='outer_dev'>
            <div className={"front"} >
            <Front text={text}></Front>
            </div>
            <div className="front_mobile" onClick={clickng}>
            <Front text={text} ></Front>
            </div>
        <div className={`GraduateList ${isVisible ? 'show' : ''}`} ref={homeRef}>
    
                {members.map((m,i) => (
                    //<div className='Group-Container'>
                        <div className="Member-Container">
                            <div className='MemberWrap'>
                                <React.Fragment key={m.name}>
                                
                                    <div className={'d'+i}>
                                        <div className='img'>
                                            <img src={images[m.name]} alt='사진' width='150' height='150' />
                                        </div>
                                        <div className='name'>
                                            {m.name}

                                        </div>
                                        <div className='group'>
                                        {m.groupName}

                                        </div>
                                       
                                    </div>
                               
                                </React.Fragment>
                            </div>
                        </div>
                    //</div>
                ))}
            </div>



        </div>
    );
};

export default GraduateList;