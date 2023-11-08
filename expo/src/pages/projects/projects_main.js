import React, { useEffect,useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Arrayprc from "./arrayprc";
import "./projects_main.css";


import Front from "../front"




function Arrayprc2() {
    const navigate = useNavigate();
    const bts = [
        {
            team: "RE:BIT",
            what: "딥러닝 활용 환경보호 습관 유도 게임 어플리케이션 ",
            link: "/REBIT",
            who:"By. 구연우, 김유정, 박은비, 유다영"
        },
        {
            team: "PUPPY WATCH",
            what: "딥러닝 활용 반려견 행동 패턴분석 어플리케이션 ",
            link: "/PUPPYWATCH",
            who:"By. 김선경, 양예지, 이희래, 추수현"
        },
        {
            team: "AIKIOSK",
            what: "AI 실시간 사용자 맞춤형 키오스크 ",
            link: "/AIKIOSK",
            who:"By. 강수연, 이유진, 정현아, 조승아"
        },
        {
            team: "FULLHOUSE MALL",
            what: "인테리어 플랜을 위한 3D 가구 배치 시뮬레이션 체험 쇼핑몰 ",
            link: "/FULLHOUSEMALL",
            who:"By. 김지혜, 노정우, 한채연"
        },
        {
            team: "ADMIN",
            what: "소상공인을 위한 무인매장 인공지능 솔루션 어플리케이션 ",
            link: "/ADMIN",
            who:"By. 문지영, 박해인, 이수진"
        },
        {
            team: "U'RECAR!",
            what: "Computer Vision 기반 간편한 주차 예약 및 관리 서비스 ",
            link: "/Urecar",
            who:"By. 박상은, 박세림, 이나래, 이소영"
        },
        {
            team: "BBANG YA",
            what: "슬기로운 빵세권 라이프 어플리케이션 ",
            link: "/BBANGYA",
            who:"By. 박소정, 최예진, 허현우"
        },
    ];

 

    const [text, setText] = useState('초기 텍스트');
    const [isScroll, setIsScroll] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const homeRef = useRef(null);
    const mobileRef = useRef(null);
    const targetRef = useRef(null);
    const [currentScrollPosition,setcurrentScrollPosition] = useState();
    const [lastScrollPosition, setLastScrollPosition] = useState(window.scrollY);


  
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
        mobileRef.current.scrollIntoView({ behavior: "auto", block: "center" });
        setIsVisible(true);
      }
    
    
    useEffect(() => {
        setText("@Projects");
        window.addEventListener('scroll', scrolling);
        return () => {
          window.removeEventListener('scroll', scrolling); 
        };},[currentScrollPosition,lastScrollPosition,isScroll,isVisible]);


    
    return (
        <div className="outerofproject" 
        //onScroll={handleScroll}
        >
            <div className="front" >
            <Front text={text} ref={targetRef}></Front>
            </div>
            <div className="front_mobile" onClick={clickng}>
                    <Front text={text} ></Front>
                  </div>
           

           <div className="project_sub" >
            <div className="every">
                <div className={`oval_text_p ${isVisible ? 'show' : ''}`} ref={homeRef} >
                {bts.map((bt, index) => (
                    <div key={index} >
                        <div className="items">
                        <Arrayprc team={bt.team} subject={bt.what} link={bt.link}/>
                            </div>
                   
                    </div>
                ))}
                </div>

                </div>
                
            </div>

            <div className="projectMobile">

            <div className={`projectlo ${isVisible ? 'show' : ''}` } ref={mobileRef}>
            {bts.map((bt, index)=>(
                  <div key={index} >
                      <div className="mobileTitle" onClick={() =>navigate(bt.link)}>
                          <div className="projectName">
                          {bt.team}
                      </div>
                      <div className="projectDetail">
                        {bt.what}
                      </div>
                      <div className="projectWho">
                        {bt.who}
                      </div>
                 
                      </div>
             
              </div>

               
                ))}
            </div>

        </div>

        </div>
       
    );
}

export default Arrayprc2;