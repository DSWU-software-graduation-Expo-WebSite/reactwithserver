import "./team_1.css";
import Arrayprc from "../projects/arrayprc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";
import images from '../developers/image/index.js';
import React from 'react'
import Footer from '../../Footer/footer.jsx'
import t1 from "../../img/t1.png"
import s1 from "./team_img/1-1.jpg"
import s2 from "./team_img/1-2.jpg"
import s3 from "./team_img/1-3.jpg"
import s4 from "./team_img/1-4.jpg"
import s5 from "./team_img/1-5.jpg"
import s6 from "./team_img/1-6.jpg"
import s7 from "./team_img/1-7.jpg"
import s8 from "./team_img/1-8.jpg"
import s9 from "./team_img/1-9.jpg"
import s10 from "./team_img/1-10.jpg"
import s11 from "./team_img/1-11.jpg"
import s12 from "./team_img/1-12.jpg"
import s13 from "./team_img/1-13.jpg"
import s14 from "./team_img/1-14.jpg"
import s15 from "./team_img/1-15.jpg"
import s16 from "./team_img/1-16.jpg"
import s17 from "./team_img/1-17.jpg"
import s18 from "./team_img/1-18.jpg"
import s19 from "./team_img/1-19.jpg"
import s20 from "./team_img/1-20.jpg"
import s21 from "./team_img/1-21.jpg"
import s22 from "./team_img/1-22.jpg"
import s23 from "./team_img/1-23.jpg"
import s24 from "./team_img/1-24.jpg"
import s25 from "./team_img/1-25.jpg"
import s26 from "./team_img/1-26.jpg"



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


function REBIT(){
    const objectId = "653e2822cbe87b12494b363b"

   
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);







 
    const commentId = useRef(0);




    

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
            const saved = localStorage.getItem("like");
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
        localStorage.setItem("like", 1);
    }

    const unliking = () =>{
    
        setLike(false);
        fetchData();
        MinusData();
        localStorage.setItem("like", 0);
    }
    
    const bts = [
        {
            team: "RE:BIT",
            what: ": 딥러닝 활용 환경보호 습관 유도 게임 어플리케이션",
            link: "/ADMIN",
        }];

    const members = [
        
        { name: "구연우" , groupName: "RE:BIT" , role:"딥러닝 데이터 수집 및 모델 학습", say:"3학년 1학기 여름방학부터 4학년 2학기까지, 아주 긴 시간동안 함께 협력하며 개발자로서 성장할 수 있는 좋은 경험이었습니다. 이 모든 과정에서 한명이라도 없었다면 끝까지 해내지 못했을 것이라 생각합니다. 토이프로젝트부터 기획, 개발까지 함께 달려 지금의 결과물을 만들어낸 은비언니, 다영, 유정이와 프로젝트 진행에 있어 많은 조언을 주신 이재호 교수님께 감사드립니다."},      
        { name: "김유정" , groupName: "RE:BIT" , role:"프론트엔드 및 서버 프로그래밍", say:"1년이란 긴 시간 동안 한 프로젝트의 기획부터 개발까지 참여하여 앱을 만들어 나가는 과정 속에서 협업의 중요성을 깨닫고 성장할 수 있었습니다. 팀원들 없이는 완성시키지 못했을 텐데, 박은비, 유다영, 구연우 님과 매주 프로젝트에 조언을 주신 이재호 교수님께 감사 인사드립니다."},  
        { name: "박은비" , groupName: "RE:BIT" , role:"서버 및 게임 프로그래밍", say:"1년 6개월이라는 기간 동안 기획부터 개발까지 프로젝트의 전 과정을 경험해볼 수 있었던 뜻깊은 시간이었습니다. 쉼 없이 개발하고 소통하며 개발자로서 갖추어야 할 역량들을 키울 수 있었습니다. 프로젝트 전반에 걸쳐 많은 조언과 도움을 주신 이재호 교수님, 서로 믿고 의지하며 포기하지 않고 프로젝트를 완료한 팀원 유다영, 김유정, 구연우님께 감사인사를 드립니다."},
        { name: "유다영", groupName: "RE:BIT", role :"프론트엔드 및 게임 프로그래밍", say:"졸업 프로젝트를 무사히 마칠 수 있었던 이유는 “믿음”이라고 생각합니다. 서로를 신뢰했기에 프로젝트의 큰 그림을 그릴 수 있었습니다. 개발자로 성장할 수 있는 좋은 경험을 선사해준 이재호 교수님과 박은비, 김유정, 구연우 언니에게 이 자리를 빌려 감사드립니다."}
     

    ];

    const professors = [
        {name:"이재호"}
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
                        | UNICORN | 지도교수 : 이재호 | 
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

                         
                    </Swiper>

               
     
                <div className="team_used">

                    <div className="INFO_box">
                        <div className="NAME_box">
                            기획의도<hr></hr>
                        </div>
                        <div className="DESC_box">
                        본 프로젝트는 일회용품 사용을 줄이고 올바른 분리수거 문화 확립을 위하여 기획하게 
되었다. 코로나 19 이후 비대면 서비스가 증가하면서, 배달 음식 소비 또한 증가하였다. 
이는 플라스틱 용기 사용량의 증가와 직결되며, 매일 1,189개의 일회용 플라스틱 배달 용
기가 사용되는 상황에 이르게 되었다.
 이와 같은 일회용 배달 용기 사용 증가는 탄소 배출을 35배 증가시켰으며, 플라스틱 폐
기물 발생량을 15.4% 증가시켰다. 또한, 한국 소비자원에 따르면 한국인의 80%는 올바른 
분리수거 상식을 가지고 있지 못하며 재활용 상식 평가 결과 평균 점수가 100점 만점에 
54점이라고 한다. 이러한 상황에서 다회용기 사용을 줄이고 올바른 분리수거 지식 습득과 
습관 형성의 필요성을 느끼게 되어 환경 보호 활동을 습관화 할 수 있는 게임 앱인 
“ReBit”을 기획, 개발하게 되었다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            서비스소개<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Rebit (Little, Recycle Habit)은 일회용품 사용을 줄이고 올바른 분리수거 문화 확립을 수행할 수 있는 게임 애플리케이션이다.
다음과 같은 세 가지 주요 기능을 담고 있다.<br></br>첫 번째, [용기내] 기능으로 사용자 위치 기반으로 다회용기 포장 가능 음식점을 지도에 표현하여 다회용기 사용을 유도한다. 다회용기 부피 추론 딥러닝 모델을 활용하여 사용자의 다회용기가 해당 음식점 포장 용기로 적합한지 판단한다.
<br></br>두 번째, [분리해] 기능으로 환경부 지정 공식 분리수거 방식을 제공해 올바른 분리수거를 유도한다. 이미지 인식 딥러닝 모델을 통해 쓰레기를 인식해 사용자 위치 기반으로 지자체에 따른 분리수거 방식을 제공한다.
<br></br>세 번째, 위의 [용기내] 와 [분리해] 기능을 융합하여 사용자가 쉽고 재미있게 환경 보호 습관을 기를 수 있도록 하는 [다곰이 캐릭터 키우기 게임] 을 제공한다. 이와 같은 3가지 기능의 애플리케이션인 [ReBit]을 통해 환경 보호 습관 확립에 긍정적인 영향을 미치고자 한다.

                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            SKILL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Kotlin, Java, C#, Python, Android, Spring Boot, Spring MVC, Spring 
JDBC, Spring Data JPA, Mysql, PyTorch, TensorFlow, Git
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TOOL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Android Studio, Unity, Visual Studio Code, Pycharm, Vim, Intellij, 
Datagrip, Postman, Github, Figma, JUnit
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEVICE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Android Phone, AWS (EC2, RDS, S3)
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM IMAGE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <img className="team_img" src={t1} alt="Team" />
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM SAY<hr></hr>
                        </div>
                        <div className="DESC_box">
                        지구와 나를 살리는 작은 습관, little REcycle haBIT
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

export default REBIT;
