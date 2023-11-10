import "./team_1.css";
import Arrayprc from "../projects/arrayprc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";
import images from '../developers/image/index.js';
import React from 'react'

import t7 from "../../img/t7.png"

import Footer from '../../Footer/footer.jsx'
import s1 from "./team_img/7-1.jpg"
import s2 from "./team_img/7-2.jpg"
import s3 from "./team_img/7-3.jpg"
import s4 from "./team_img/7-4.jpg"
import s5 from "./team_img/7-5.jpg"


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


function BBANGYA(){
    const objectId = "653fb35f666671886318b03c"
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
            const saved = localStorage.getItem("like7");
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
        localStorage.setItem("like7", 1);
    }

    const unliking = () =>{
    
        setLike(false);
        fetchData();
        MinusData();
        localStorage.setItem("like7", 0);
    }
    
    const bts = [
        {
          team: "BBANG YA",
          what: "슬기로운 빵세권 라이프 어플리케이션 ",
          link: "/BBANGYA",
        }];

    const members = [
        
        { name: "박소정" , role:"서버 프로그래밍, 모바일 프로그래밍, 데이터 수집, DB 연동 및 관리, beacon 기능", say:"이번 캡스톤 프로젝트를 하면서 가장 크게 느낀 점은 팀 구성원 간의 소통과 존중을 통한 협력이 필요하다는 점이었다. 서로의 의견을 잘 경청해야 좋은 아이디어가 나올 수 있었다. 앱 개발은 처음이었기에 잦은 에러로 매우 힘들었지만 여기까지 오며성장한 모두가 자랑스럽고 잘 버텨줘서 고맙단 말을 하고 싶다."},      
         
        { name: "최예진" , role:"모바일 프로그래밍, 데이터 수집, Beacon 연결 및 기능, 데이터 모델 훈련 및 분석", say:"1년이라는 길고도 짧은 시간 동안 진행된 프로젝트를 하면서 협업의 중요성에 대해서 잘 알게 되었다. 이전에 학습한 툴을 사용해보기도 하고 낯선 툴과 개발 환경들을 접해보면서 다양하게 많이 배울 수 있었다. 각종 에러를 해결하며 열심히 잘 달려와 준 팀원들 정말 고생 많았고 고맙다."},
        { name: "허현우", role :"모바일 프로그래밍, 서버 프로그래밍, 알고리즘 프로그래밍", say:" 그간 학교에서 배웠던 지식을 바탕으로 모바일 프로그래밍부터 알고리즘까지 폭 넓게 다뤄보고 팀원들과 함께 치열하게 개발에 몰두할 수 있어 즐거웠습니다!"}
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
                        | 빵야! | 지도교수 : 강지헌 | 
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
  
               
                         
                    </Swiper>

               
     
                <div className="team_used">

                    <div className="INFO_box">
                        <div className="NAME_box">
                            기획의도<hr></hr>
                        </div>
                        <div className="DESC_box">
                        빵을 좋아하는 사람들이 ‘베이커리에 대한 정보’를 서로 공유할 수 있는 플랫폼을 제공하여 소비자가 편리하게 베이커리의 정보를 확인할 수 있도록 ‘빵야!’ 어플리케이션을 기획하였습니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            서비스소개<hr></hr>
                        </div>
                        <div className="DESC_box">
                 

                        ‘빵야!’ 어플리케이션은 소비자의 리뷰를 분석하여
<br></br>1. 이번주 가장 핫한 빵과 이와 관련된 베이커리 인기순/거리순으로 추천하는 기능
<br></br>2. 베이커리 리뷰의 평균 평점 순으로 정렬된 전국의 베이커리 랭킹 정보를 제공하는 기능
<br></br>3. 소비자의 현재 위치 기준 반경 500m 이내의 빵집 위치를 알려주는 근처 베이커리 위치 정보 제공 서비스
<br></br>4. 빵BTI 검사를 통한 빵 추천 서비스 등을 소비자에게 제공합니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            SKILL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Python, JAVA, PHP, SQL, HTML
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TOOL<hr></hr>
                        </div>
                        <div className="DESC_box">PyCharm, AndroidStudio, VisualStudio, Node.js
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEVICE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Beacon
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM IMAGE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <img className="team_img" src={t7} alt="Team" />
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM SAY<hr></hr>
                        </div>
                        <div className="DESC_box">
                        빵과 디저트를 사랑하는 사람을 위한 슬기로운 빵세권 라이프 어플리케이션
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

export default BBANGYA;
