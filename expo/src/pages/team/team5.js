import "./team_1.css";
import Arrayprc from "../projects/arrayprc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";
import images from '../developers/image/index.js';
import React from 'react'
import Footer from '../../Footer/footer.jsx'
import t5 from "../../img/t5.png"

import s1 from "./team_img/5-1.png"
import s2 from "./team_img/5-2.png"
import s3 from "./team_img/5-3.png"
import s4 from "./team_img/5-4.png"
import s5 from "./team_img/5-5.png"
import s6 from "./team_img/5-6.png"
import s7 from "./team_img/5-7.png"
import s8 from "./team_img/5-8.png"
import s9 from "./team_img/5-9.png"
import s10 from "./team_img/5-10.png"
import s11 from "./team_img/5-11.png"
import s12 from "./team_img/5-12.png"
import s13 from "./team_img/5-13.png"
import s14 from "./team_img/5-14.png"
import s15 from "./team_img/5-15.png"
import s16 from "./team_img/5-16.png"
import s17 from "./team_img/5-17.png"
import s18 from "./team_img/5-18.png"
import s19 from "./team_img/5-19.png"
import s20 from "./team_img/5-20.png"
import s21 from "./team_img/5-21.png"
import s22 from "./team_img/5-22.png"
import s23 from "./team_img/5-23.png"
import s24 from "./team_img/5-24.png"
import s25 from "./team_img/5-25.png"
import s26 from "./team_img/5-26.png"
import s27 from "./team_img/5-27.png"
import s28 from "./team_img/5-28.png"
import s29 from "./team_img/5-29.png"
import s30 from "./team_img/5-30.png"
import s31 from "./team_img/5-31.png"
import s32 from "./team_img/5-32.png"
import s33 from "./team_img/5-33.png"
import s34 from "./team_img/5-34.png"
import s35 from "./team_img/5-35.png"
import s36 from "./team_img/5-36.png"
import s37 from "./team_img/5-37.png"



import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useState, useEffect,useRef } from "react";
import {AiOutlineHeart,AiFillHeart,AiFillEdit,AiOutlineCloseCircle} from "react-icons/ai"

import Swal from "sweetalert2";

SwiperCore.use([Navigation, Pagination]);


function ADMIN(){
    const objectId = "653fb33e666671886318b03a"
    const[cbValue,setcbValue]=useState('');
    const[pwValue,setpwValue]=useState('');
    const[pnValue,setpnValue]=useState('');
    const[ctValue,setctValue]=useState('');

   
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);







    


      function PlusData () {
    
            axios.put("http://3.36.64.144/projects/"+objectId+"/likeplus")
            .then(()=> {
              console.log('업데이트가 성공했습니다.');
            })
            .catch(error => {
              console.error('업데이트 중 오류 발생:', error);
            });

            
        }
        function MinusData () {
    
            axios.put('http://3.36.64.144/projects/'+objectId+'/likeminus')
            .then(()=> {
              console.log('업데이트가 성공했습니다.');
            })
            .catch(error => {
              console.error('업데이트 중 오류 발생:', error);
            });

            
        }

        async function fetchData() {
            try {
            const response = await axios.get('http://3.36.64.144/projects/'+objectId+'/likes');

            const jsonString = JSON.stringify(response.data);
             const dataArray = JSON.parse(jsonString);


    
             setLikes(dataArray.likes);

            } catch (error) {
            console.error('에러 발생:', error);
            }
        }


    useEffect(() => {

        fetchData();
   

   
    
        /// 새로고침 시 좋아요 상태 유지하기
            const saved = localStorage.getItem("like5");
            if (saved ==1) {
              setLike(true);
            }
        }, );







    let [like,setLike] = useState();
    let [likes, setLikes] = useState(0);



    const liking = () => {
        setLike(true);
        fetchData();
        PlusData();
        localStorage.setItem("like5", 1);
    }

    const unliking = () =>{
    
        setLike(false);
        fetchData();
        MinusData();
        localStorage.setItem("like5", 0);
    }
    
    const bts = [
        {
          team: "ADMIN",
          what: "소상공인을 위한 무인매장 인공지능 솔루션 어플리케이션 ",
          link: "/ADMIN",
        }];

    const members = [
        
        { name: "문지영" , role:"YOLOv5-엣지 컴퓨팅 시스템 연동, 라즈베리 파이 제어, CCTV 영상 처리", say:"나는야 코드 마술사"},      
         
        { name: "박해인" , role:"실시간 모바일 프로그래밍, 데이터베이스 설계 및 구축 , 서버 프로그래밍", say:"“말은 쉽지, 코드를 보여줘” - 리누스 토르발스"},
        { name: "이수진", role :" YOLOv5 데이터 처리 및 객체/수량 인식 모델 구현, 안드로이드 출입기록 시스템 구현", say:"창의와 열정 넘치는 무인매장 프로젝트의 非常天王, 이.수.진."},
    

    ];

    const professors = [
        {name:"강지헌"}
    ]
 
    return (

        <div className = "entire">
            <div className="title">
            {bts.map((bt, index) => (
            <div className="items">
                <Arrayprc team={bt.team} subject={bt.what}/>
                </div>))}
            </div>
            
                {bts.map((bt)=>(
                    <div className="mobileTitle">
                          <div className="projectName">
                          {bt.team}
                      </div>
                      <div className="projectDetail">
                        {bt.what}
                      </div>
                      <div className="by">
                        | 덕성전자 | 지도교수 : 강지헌 | 
                      </div>
                  
                      </div>
                ))}
          
            
            <div className="content">
                <Swiper className="Swiper"
                
                 spaceBetween={50}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide><img className="main" alt= "?" src={s1} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s2} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s3} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s4} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s5} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s6} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s7} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s8} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s9} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s10} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s11} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s12} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s13} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s14} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s15} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s16} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s17} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s18} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s19} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s20} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s21} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s22} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s23} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s24} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s25} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s26} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s27} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s28} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s29} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s30} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s31} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s32} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s33} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s34} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s35} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s36} width="100%"/></SwiperSlide>
                    <SwiperSlide><img className="main" alt= "?" src={s37} width="100%"/></SwiperSlide>
                       
                    </Swiper>

               
     
                <div className="team_used">

                    <div className="INFO_box">
                        <div className="NAME_box">
                            기획의도<hr></hr>
                        </div>
                        <div className="DESC_box">
                        최근 다양한 형태의 무인매장을 우리 주변 곳곳에서 흔히 접할 수 있습니다. 바로 최저임금 상승으로 인한 인건비 부담이 가장 큰 원인인데요. 그럼에도 불구하고 무인매장은 도난에 취약하기 때문에 소상공인들은 쉽사리 무인매장화를 결정하지 못하고 있습니다.그러한 소상공인들을 돕기 위해  값 비싼 도난방지 시스템 대신 최소한의 비용으로 도난상황에 
쉽게 대처할 수 있는 무인매장 인공지능 솔루션을 어플리케이션 " Admin"을 기획하였습니다.</div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            서비스소개<hr></hr>
                        </div>
                        <div className="DESC_box">
                        무인매장 인공지능 솔루션 어플리케이션은 ComputerVision AI 기술을 이용하여 안전한 무인매장 관리 서비스를 제공합니다. 손님과 사장님을 위해 제공되는 두 가지 버전의 어플리케이션을 통해 편리한 서비스와 효율적인 매장 관리를 실현합니다.
<br></br>무인매장 운영자 버전의 어플은 다양한 기능을 제공합니다. 실시간 제품 재고 확인을 통해 재고 상태를 파악하고, 고객들의 출입 기록과 연락처를 관리하여 고객 관리에 활용할 수 
있습니다. 또한, 도난 의심 상황 시 해당 시간대의 매장 영상을 확인하여 보안을 강화할 수 있습니다.
<br></br>고객 버전의 어플은 QR 코드를 통해 무인매장 출입이 가능하며, 제품의 실시간 재고 상태를 확인하여 원하는 상품을 빠르게 찾을 수 있습니다.
덕성전자의 무인매장 인공지능 솔루션 어플리케이션은 고객들에게 편의를 제공하고, 사장님들에게는 효율적인 매장 관리를 제공합니다. 이를 통해 더욱더 발전된 매장 경험을 제공합니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            SKILL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Python, JAVA, MySQL
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TOOL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        PyCharm, AndroidStudio, VisualStudio, Flask, Spring, Firebase, YOLOv5-ultralytics, AWS
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEVICE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        RaspberryPi4, Coral Accelerator, Logitec C310
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEMO<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <YouTube
           
           videoId={"tiEzQ0BMBrc"} //동영상 주소
           opts={{
           width: "80%",
           playerVars: {
           autoplay: 0, //자동 재생 여부 
           modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
           loop: 1, //반복 재생
           //반복 재생으로 재생할 플레이 리스트
           },
           }}
           onReady={(e) => {
           e.target.mute(); //소리 끔
           }}
           onEnd={(e)=>{e.target.stopVideo(0);}} //비디오 전부 재생됐을때
   />
                        </div>
                        
                        </div>


                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM IMAGE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <img className="team_img" src={t5} alt="Team" />
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM SAY<hr></hr>
                        </div>
                        <div className="DESC_box">
                        “포스트 삼성전자”
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            MEMBER<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <div className="MEM_DESC_box">
                        {members.map((m,i)=>(
                                 <div className="box_container">

                                 <div className="box">
                                     <img className="profile" src={images[m.name]}/>
                                 </div>
                                 <div className="mem_name">
                                     {m.name}
                                 </div>
                                 <div className="mem_role">
                                    {m.role}
                                </div>
                                <div className="mem_say">
                                    "{m.say}"
                                </div>
     
                                 </div>
                        ))}
                        </div>


                        </div>
                    
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            PROFESSOR<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <div className="MEM_DESC_box">
                        {professors.map((m,i)=>(
                                 <div className="box_container">

                                 <div className="box">
                                     <img className="profile" src={images[m.name]}/>
                                 </div>
                                 <div className="mem_name">
                                     {m.name}
                                 </div>
                           
     
                                 </div>
                        ))}
                        </div>


                        </div>
                        
                        </div>
                    
                    </div>
                    <div className="pageInfo">
                        
                        <div className="likes" >
                        {!like ? <AiOutlineHeart size="70" onClick={liking}></AiOutlineHeart> : <AiFillHeart size="70" onClick={unliking}></AiFillHeart>}
                        {likes}
                        </div>

                    </div>

            </div>

        
       <Footer></Footer>
                                                              
    


                    </div>

          

      
        

    );
}

export default ADMIN;
