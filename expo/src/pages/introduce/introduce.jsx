import "./introduce.css"
import Front from "../front"
import React, { useEffect,useState,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination ,Autoplay} from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import{AiOutlineArrowDown} from 'react-icons/ai';
import poster1 from '../../img/poster/poster1.png'
import poster2 from '../../img/poster/poster2.png'
import 박해인 from'../../img/gpc/박해인.jpg'
import 구연우 from'../../img/gpc/구연우.jpg'
import 노정우 from'../../img/gpc/노정우.jpg'
import 강채은 from'../../img/gpc/강채은.jpg'
import 고서영 from'../../img/gpc/고서영.jpg'
import 김연수 from'../../img/gpc/김연수.jpg'
import 김주영 from'../../img/gpc/김주영.jpg'
import 백수민 from'../../img/gpc/백수민.jpg'
import 안은현 from'../../img/gpc/안은현.jpg'
import 오주원 from'../../img/gpc/오주원.jpg'
import 유다영 from'../../img/gpc/유다영.png'
import 이현주 from'../../img/gpc/이현주.jpg'
import 장소영 from'../../img/gpc/장소영.jpg'
import 정수현 from'../../img/gpc/정수현.jpg'
import 조은솔 from'../../img/gpc/조은솔.jpg'

SwiperCore.use([Navigation, Pagination,Autoplay]);


function Introduce(){

    const [isScroll, setIsScroll] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [currentScrollPosition,setcurrentScrollPosition] = useState();
    const [lastScrollPosition, setLastScrollPosition] = useState(window.scrollY);

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const forthRef = useRef(null);
    const fifthRef = useRef(null);
    const sixthRef = useRef(null);
    const seventhRef = useRef(null);

    const mfirstRef = useRef(null);
    const msecondRef = useRef(null);
    const mthirdRef = useRef(null);
    const mforthRef = useRef(null);
    const mfifthRef = useRef(null);
    const msixthRef = useRef(null);
    const mseventhRef = useRef(null);

    const[count, setCount] = useState(0);
    const[clickCnt, setClickCnt] = useState(0);

    const scrolling = () => {
        setcurrentScrollPosition(window.scrollY);
        //console.log('스크롤 아래로 이동 중');
        if (currentScrollPosition > lastScrollPosition) {
            if(isScroll){
                setCount(count+1);
                if(5<count&&count<10){
                    firstRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                }
                else if(15<count&&count<20){
                    secondRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                }
                else if(25<count&&count<30){
                    thirdRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                }
                else if(35<count&&count<40){
                    forthRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                }
                else if(45<count&&count<50){
                    fifthRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                }
                else if(55<count&&count<60){
                    sixthRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                }
                else if(65<count&&count<70){
                    seventhRef.current.scrollIntoView({ behavior: "auto", block: "center" });
                }
                else{
                 //setIsScroll(false);
                 console.log("count")
                }


            }
            // 스크롤이 위로 이동 중       
        } else if (currentScrollPosition < lastScrollPosition) {
            console.log('스크롤 위로 이동 중');
            if(currentScrollPosition==0){
                setCount(0);
            }
 
            
        }
        setLastScrollPosition(currentScrollPosition);


      };

      const clickng = () => {
        
        if(clickCnt==0){
            mfirstRef.current.scrollIntoView({ behavior: "auto", block: "center" });
            setClickCnt(clickCnt+1);
        }
        else if(clickCnt==1){
            msecondRef.current.scrollIntoView({ behavior: "auto", block: "center" });
            setClickCnt(clickCnt+1);
        }
        else if(clickCnt==2){
            mthirdRef.current.scrollIntoView({ behavior: "auto", block: "center" });
            setClickCnt(clickCnt+1);
        }
        else if(clickCnt==3){
            mforthRef.current.scrollIntoView({ behavior: "auto", block: "center" });
            setClickCnt(clickCnt+1);
        }
        else if(clickCnt==4){
            mfifthRef.current.scrollIntoView({ behavior: "auto", block: "center" });
            setClickCnt(clickCnt+1);
        }
        else if(clickCnt==5){
            msixthRef.current.scrollIntoView({ behavior: "auto", block: "center" });
            setClickCnt(clickCnt+1);
        }
        else if(clickCnt==6){
            mseventhRef.current.scrollIntoView({ behavior: "auto", block: "center" });
            setClickCnt(clickCnt+1);
        }
        else{
         //setIsScroll(false);
         setClickCnt(0);
        }

      };

    useEffect(() => {
    
   
    window.addEventListener('scroll', scrolling);
    return () => {
        window.removeEventListener('scroll', scrolling); 
    };},[count,isScroll,currentScrollPosition,lastScrollPosition,isVisible,clickCnt]);




    
return(
    <div className="outerofintroduce">
        <div className="introduce_mobile" onClick={clickng}>
        <div className="front">
        <Front text={"@Introduce"} ></Front>
    </div>
    <div className="first_scene" ref={mfirstRef}>
        <div>
            <span>
                25
            </span>
            <span>
                참여개발자
            </span>
            <div className="developer_swiper">
            <Swiper className="mySwiper"
                
                spaceBetween={10}
                slidesPerView={1}
                navigation         
                autoplay={{ delay: 1500 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide className="slide">강수연  구연우  김선경  김유정</SwiperSlide>
                   <SwiperSlide className="slide">김지혜  노정우  문지영  박상은</SwiperSlide>
                   <SwiperSlide className="slide">박세림  박소정  박은비  박해인</SwiperSlide>
                   <SwiperSlide className="slide">양예지  유다영  이나래  이소영</SwiperSlide>
                   <SwiperSlide className="slide">이수진  이유진  이희래  정현아</SwiperSlide>
                   <SwiperSlide className="slide">조승아  최예진  추수현  한채연  허현우</SwiperSlide>
                   </Swiper>
            </div>
            <span className="arrow_icon">
                화면을 클릭하세요
            </span>
        
        </div>
      
    </div>
    <div className="first_scene" ref={msecondRef}>
        <div>
            <span>
                7
            </span>
            <span>
                프로젝트
            </span>
            <div className="developer_swiper">
            <Swiper className="mySwiper"
                
                spaceBetween={10}
                slidesPerView={1}
                navigation         
                autoplay={{ delay: 500 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide className="slide">RE:BIT<br></br>딥러닝 활용 환경보호 습관 유도 게임 어플리케이션</SwiperSlide>
                   <SwiperSlide className="slide">PUPPY WATCH<br></br>딥러닝 활용 반려견 행동 패턴분석 어플리케이션</SwiperSlide>
                   <SwiperSlide className="slide">AIKIOSK<br></br>AI 실시간 사용자 맞춤형 키오스크</SwiperSlide>
                   <SwiperSlide className="slide">FULLHOUSE MALL<br></br>인테리어 플랜을 위한 3D 가구 배치 시뮬레이션 체험 쇼핑몰</SwiperSlide>
                   <SwiperSlide className="slide">admin<br></br>소상공인을 위한 무인매장 인공지능 솔루션 어플리케이션</SwiperSlide>
                   <SwiperSlide className="slide">U'recar!<br></br>Computer Vision 기반 간편한 주차 예약 및 관리 서비스</SwiperSlide>
                   <SwiperSlide className="slide">BBANG YA<br></br>슬기로운 빵세권 라이프 어플리케이션</SwiperSlide>
                  
                        
                   </Swiper>
            </div>
            <span className="arrow_icon">
            click here
            </span>
        </div>
      
        
    </div>
    <div className="first_scene" ref={mthirdRef}>
        <div>
            <span>
                15
            </span>
            <span>
                준비위원회
            </span>
            <div className="developer_swiper">
            <Swiper className="mySwiper"
                
                spaceBetween={10}
                slidesPerView={1}
                navigation         
                autoplay={{ delay: 1500 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide className="slide">강채은&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고서영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;구연우</SwiperSlide>
                   <SwiperSlide className="slide">김연수&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;김주영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;노정우</SwiperSlide>
                   <SwiperSlide className="slide">박해인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;백수민&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;안은현</SwiperSlide>
                   <SwiperSlide className="slide">오주원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;유다영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이현주</SwiperSlide>
                   <SwiperSlide className="slide">장소영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정수현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;조은솔</SwiperSlide>
                  
                        
                   </Swiper>
            </div>
            <span className="arrow_icon">
            click here
        </span>
        </div>
      
        
    </div>

    <div className="first_scene" ref={mforthRef}>
        <div>
            <span className="everywhere">
                everywhere?
            </span>
           
            <span className="arrow_icon">
            click here
        </span>
        </div>
      
        
    </div>

    <div className="first_scene" ref={mfifthRef}>
        <div>
            <span className="everywhere">
                software!
            </span>
           
            <span className="arrow_icon">
            click here
        </span>
        </div>
      
        
    </div>

    <div className="first_scene" ref={msixthRef}>
        
        <div>
            <div className="poster">
                <div className="poster_container">
                <img src={poster1} width={"45%"}></img>
                <img src={poster2} width={"45%"}></img>
                </div>
            
            <div className="poster_detail">
                <div className="mobilePosterTitle">
                : 제 1회 소프트웨어전공 졸업전시
                </div>
                <div className="subTitle">
                software+(int)telligence
                <br></br>
                soft+telligence
                </div>
                <div className="subContent">
           
                덕성여대 소프트웨어전공 학생들이 1년동안<br></br>
                많은시간과 노력을 들여 만든 작품집입니다.<br></br>
                모든 학우분들 정말 수고 많으셨고 <br></br>여러분들의 모든 앞날을 응원합니다.<br></br>
                </div>
              
            </div>

            </div>
            <span className="arrow_icon">
            <AiOutlineArrowDown size={44}/>
        </span>

    </div>
      
    </div>

    <div className="first_scene" ref={mseventhRef}>
        <div>
            <div className="gpc_container">
                <div className="gpc1">
                    <span>졸업준비위원회
                        
                        </span>
                </div>
                <div className="gpc_sub_container">

                <div className="gpc2">
                    위원장<br></br>
                    부위원장<br></br>
                    위원회
                </div>

                <div className="gpc3">
                    박해인<br></br>
                    구연우 노정우<br></br>
                    강채은 고서영 김연수 김주영 백수민 안은현 오주원 유다영 이현주 장소영 정수현 조은솔
                
                </div>

                </div>
                <div className="gpc1">
                    <span>졸업전시 Archive 홈페이지 제작
                        
                        </span>
                </div>
                <div className="gpc_sub_container">

                <div className="gpc2">
                개발총괄<br></br>
                Front-end<br></br><br></br>
                Back-end
                </div>

                <div className="gpc3">
                박해인<br></br>
                김연수 김주영 백수민 이현주 유다영 정수현 조은솔<br></br>
                강채은 고서영 구연우 안은현 오주원 장소영 
                </div>

                </div>

                <div className="developer_swiper">
            <Swiper className="mySwiper"
                
                spaceBetween={10}
                slidesPerView={1}
                navigation         
                autoplay={{ delay: 1500 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide className="slide"><img alt= "?" src={박해인} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={구연우} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={노정우} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={강채은} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={고서영} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={김연수} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={김주영} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={백수민} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={안은현} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={오주원} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={유다영} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={이현주} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={장소영} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={정수현} width="40%"/></SwiperSlide>
                   <SwiperSlide className="slide"><img alt= "?" src={조은솔} width="40%"/></SwiperSlide>
                
                   </Swiper>
            </div>
              

            </div>



        </div>
        

      
    </div>


        </div>


        <div className="introduce">


        <div className="front">
        <Front text={"@Introduce"} ></Front>
    </div>
    <div className="first_scene" ref={firstRef}>
        <div>
            <span>
                25
            </span>
            <span>
                참여개발자
            </span>
            <div className="developer_swiper">
            <Swiper className="mySwiper"
                
                spaceBetween={10}
                slidesPerView={1}
                navigation         
                autoplay={{ delay: 1500 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide className="slide">강수연  구연우  김선경  김유정  김지혜  노정우  문지영  박상은</SwiperSlide>
                   <SwiperSlide className="slide">박세림  박소정  박은비  박해인  양예지  유다영  이나래  이소영</SwiperSlide>
                   <SwiperSlide className="slide">이수진  이유진  이희래  정현아  조승아  최예진  추수현  한채연  허현우</SwiperSlide>
                   </Swiper>
            </div>
            <span className="arrow_icon">
                <AiOutlineArrowDown size={44}/>
            </span>
        
        </div>
      
    </div>
    <div className="first_scene" ref={secondRef}>
        <div>
            <span>
                7
            </span>
            <span>
                프로젝트
            </span>
            <div className="developer_swiper">
            <Swiper className="mySwiper"
                
                spaceBetween={10}
                slidesPerView={1}
                navigation         
                autoplay={{ delay: 500 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide className="slide">RE:BIT<br></br>딥러닝 활용 환경보호 습관 유도 게임 어플리케이션</SwiperSlide>
                   <SwiperSlide className="slide">PUPPY WATCH<br></br>딥러닝 활용 반려견 행동 패턴분석 어플리케이션</SwiperSlide>
                   <SwiperSlide className="slide">AIKIOSK<br></br>AI 실시간 사용자 맞춤형 키오스크</SwiperSlide>
                   <SwiperSlide className="slide">FULLHOUSE MALL<br></br>인테리어 플랜을 위한 3D 가구 배치 시뮬레이션 체험 쇼핑몰</SwiperSlide>
                   <SwiperSlide className="slide">admin<br></br>소상공인을 위한 무인매장 인공지능 솔루션 어플리케이션</SwiperSlide>
                   <SwiperSlide className="slide">U'recar!<br></br>Computer Vision 기반 간편한 주차 예약 및 관리 서비스</SwiperSlide>
                   <SwiperSlide className="slide">BBANG YA<br></br>슬기로운 빵세권 라이프 어플리케이션</SwiperSlide>
                  
                        
                   </Swiper>
            </div>
            <span className="arrow_icon">
            <AiOutlineArrowDown size={44}/>
            </span>
        </div>
      
        
    </div>
    <div className="first_scene" ref={thirdRef}>
        <div>
            <span>
                15
            </span>
            <span>
                준비위원회
            </span>
            <div className="developer_swiper">
            <Swiper className="mySwiper"
                
                spaceBetween={10}
                slidesPerView={1}
                navigation         
                autoplay={{ delay: 500 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide className="slide">강채은&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고서영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;구연우</SwiperSlide>
                   <SwiperSlide className="slide">김연수&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;김주영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;노정우</SwiperSlide>
                   <SwiperSlide className="slide">박해인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;백수민&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;안은현</SwiperSlide>
                   <SwiperSlide className="slide">오주원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;유다영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이현주</SwiperSlide>
                   <SwiperSlide className="slide">장소영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정수현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;조은솔</SwiperSlide>
                  
                        
                   </Swiper>
            </div>
            <span className="arrow_icon">
            <AiOutlineArrowDown size={44}/>
        </span>
        </div>
      
        
    </div>

    <div className="first_scene" ref={forthRef}>
        <div>
            <span className="everywhere">
                everywhere?
            </span>
            <span className="arrow_icon">
            <AiOutlineArrowDown size={44}/>
        </span>
        </div>
   
    </div>

    <div className="first_scene" ref={fifthRef}>
        <div>
            <span className="everywhere">
                software!
            </span>
            <span className="arrow_icon">
            <AiOutlineArrowDown size={44}/>
        </span>
        </div>
      
        
    </div>

    <div className="first_scene" ref={sixthRef}>
        
        <div>
            <div className="poster">
            <img src={poster1} width={"30%"}></img>
            <img src={poster2} width={"30%"}></img>
            <div className="poster_detail">
                <div className="title">
                : 제 1회 소프트웨어전공 졸업전시
                
                </div>
                <div className="subTitle">
                <br></br>
                software+(int)telligence
                <br></br>
                soft+telligence
                </div>
                <div className="subContent">
                <br></br>
                덕성여대 소프트웨어전공 학생들이 1년동안<br></br>
                많은시간과 노력을 들여 만든 작품집입니다.<br></br>
                모든 학우분들 정말 수고 많으셨고 <br></br>여러분들의 모든 앞날을 응원합니다.<br></br>
                </div>
              
            </div>

            </div>
            <span className="arrow_icon">
            <AiOutlineArrowDown size={44}/>
        </span>

    </div>
      
        
    </div>

    <div className="first_scene" ref={seventhRef}>
        <div>
            <div className="gpc_container">
              
                  <div className="gpc1">
                    <span>졸업준비위원회
                        
                        </span>
                </div>

                <div className="gpc2">
                    위원장<br></br>
                    부위원장<br></br>
                    위원회
                </div>

                <div className="gpc3">
                    박해인<br></br>
                    구연우 노정우<br></br>
                    강채은 고서영 김연수 김주영 백수민 안은현 오주원<br></br> 유다영 이현주 장소영 정수현 조은솔
                
                </div>

                </div>

                <div className="gpc_container">
              
              <div className="gpc1">
                <span>졸업전시 Archive<br></br>홈페이지 제작
                    </span>
            </div>

            <div className="gpc2">
                개발총괄<br></br>
                Front-end<br></br>
                Back-end
            </div>

            <div className="gpc3">
                박해인<br></br>
                김연수 김주영 백수민 이현주 유다영 정수현 조은솔<br></br>
                강채은 고서영 구연우 안은현 오주원 장소영 
            
            </div>

            </div>



              

            </div>



        </div>
        

      
    </div>

        </div>

   
 
);


};export default Introduce;