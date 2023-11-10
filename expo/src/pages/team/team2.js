import "./team_1.css";
import Arrayprc from "../projects/arrayprc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";
import images from '../developers/image/index.js';
import React from 'react'

import t2 from "../../img/t2.png"
import s1 from "./team_img/2-1.jpg"
import s2 from "./team_img/2-2.jpg"
import s3 from "./team_img/2-3.jpg"
import s4 from "./team_img/2-4.jpg"
import s5 from "./team_img/2-5.jpg"
import s6 from "./team_img/2-6.jpg"
import s7 from "./team_img/2-7.jpg"
import s8 from "./team_img/2-8.jpg"

import Footer from '../../Footer/footer.jsx'



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


function PUPPYWATCH(){
    const objectId = "653ee50b666671886318b037"
    const[cbValue,setcbValue]=useState('');
    const[pwValue,setpwValue]=useState('');
    const[pnValue,setpnValue]=useState('');
    const[ctValue,setctValue]=useState('');



  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



          
      //댓글 삭제 API 호출하기 
      


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
            const saved = localStorage.getItem("like2");
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
        localStorage.setItem("like2", 1);
    }

    const unliking = () =>{
    
        setLike(false);
        fetchData();
        MinusData();
        localStorage.setItem("like2", 0);
    }
    
    const bts = [
        {
            team: "PUPPY WATCH",
            what: ": 딥러닝 활용 반려견 행동 패턴분석 어플리케이션",
            link: "/PUPPYWATCH",
        }];

    const members = [
        
        { name: "김선경" , role:" 라즈베리파이 제어 및 서버 통신, 모델 학습", say:"안녕히 계세요 여러분~ 전 이 졸전의 아이디어와 프로젝트를 벗어던지고 취업을 향해 떠납니다."},      
         
        { name: "이희래" , role:"센서 제어 및 서버 프로그래밍, 데이터베이스 설계, 모델 학습", say:"졸업하는 우리를 봐 졸업해"},
        { name: "추수현", role :"태깅앱 & 사용자앱 제작, 디자인", say:" 힘들지 않아 거친 졸전 속에 뛰어든 건 나니까 I'm okay"},
        { name: "양예지"  , role:"태깅앱 & 사용자앱 제작, 디자인", say:"3년 동안 뒷바라지해준 소프트웨어의 엄마 이희래, 아빠 추수현, 언니 김선경 그동안 고마웠고, 내가 많이 사랑하고 존경하는 언니들이야.그동안 언니들 속 썩여서 미안했고, 언니들 보면서 많은 것을 깨닫고 배울 수 있어서 감사했어나의 롤모델은 언니들로 언니들을 통해 배우고 성장하는 나 예지가 될게, 사랑해뚜이야 내가 소프트웨어의 귀요미인데, 너때문에 내 자리를 위협 당한거 같애조금만 덜 귀여워주길 바라"}

    ];

    const professors = [
        {name:"이형규"}
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
                        | SELECT | 지도교수 : 이형규 | 
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


               
                         
                    </Swiper>

               
     
                <div className="team_used">

                    <div className="INFO_box">
                        <div className="NAME_box">
                            기획의도<hr></hr>
                        </div>
                        <div className="DESC_box">
                        증가하는 반려견 양육 현황과 하나의 가족으로 인정하는 사회적 분위기 속에서 반려견과 견주의 행복에 초점을 맞춰 프로젝트를 기획하였습니다.<br></br>많은 견주들이 반려견의 행동을 확인하기 위해 홈캠을 사용하는데, 홈캠의 경우에는 보안 문제가 있습니다. 이것을 보완하면서 반려견의 활동량을 측정할 수 있는 Life Tracker를 제작하였습니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            서비스소개<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Puppy-Watch의 핵심 기능은 세 가지 입니다. 첫째, 센서를 사용해 반려견의 행동을 실시간으로 파악하여 사용자에게 제공합니다. 반려견에게 CC2650STK센서를 부착하고 센서로부터 수집한 데이터를 MLP 모델을 사용하여 현재 반려견이 어떤 행동을 하고 있는지 추론합니다. 추론한 행동을 데이터베이스에 저장하면 앱에서 이를 읽어서 사용자에게 현재 반려견이 하고있는 행동을 제공해줍니다.<br></br>둘째, 반려견의 이상행동을 확인할 수 있습니다. 지정된 시간 이외의 시간에 먹는 행동이 탐지되거나 뜯는 행동이 감지되면 사용자에게 알람을 띄워 이상행동을 알려줍니다. 사용자에게 전송된 이상행동 기록은 리스트로 이력을 확인할 수 있습니다.<br></br> 셋째, 반려견의 행동 통계를 확인할 수 있습니다.반려견이 하루동안 어떤 행동을 했는지 확인할 수 있습니다. 가장 많이 한 행동은 무엇인지 파악하고 그에 따라 반려견의 운동량을 조절할 수 있습니다. <br></br>Puppy-Watch는 사생활 보호를 비롯하여 반려견의 행동 데이터 분석과 반려견의 건강 및 행복 관리에 기여할 것으로 기대되며, 반려견과 견주의 삶에 행복을 가져올 것을 기대합니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            SKILL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        kotlin, Java, Python, TensorFlowLite, BluPy, Flask
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TOOL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        AndroidStudio, PyCharm, Colab, AWS EC2, AWS RDS, Figma
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEVICE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        라즈베리파이4, CC2650STK, 갤럭시 S8, 블루투스 스피커
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEMO<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <YouTube
           
           videoId={"GOVjMYxtsQ0"} //동영상 주소
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

        <YouTube
                  
                  videoId={"_Kvgu2tdDXs"} //동영상 주소
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
                        <img className="team_img" src={t2} alt="Team" />
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM SAY<hr></hr>
                        </div>
                        <div className="DESC_box">
                        세상의 모든 개는 건강해야한다.
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

export default PUPPYWATCH;
