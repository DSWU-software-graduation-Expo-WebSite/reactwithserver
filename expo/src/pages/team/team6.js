import "./team_1.css";
import Arrayprc from "../projects/arrayprc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";
import images from '../developers/image/index.js';
import React from 'react'

import t6 from "../../img/t6.png"


import s1 from "./team_img/6-1.jpg"
import s2 from "./team_img/6-2.jpg"
import s3 from "./team_img/6-3.jpg"
import s4 from "./team_img/6-4.jpg"
import s5 from "./team_img/6-5.jpg"
import s6 from "./team_img/6-6.jpg"
import s7 from "./team_img/6-7.jpg"
import s8 from "./team_img/6-8.jpg"



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


function URECAR(){
    const objectId = "653fb357666671886318b03b"
    const[cbValue,setcbValue]=useState('');
    const[pwValue,setpwValue]=useState('');
    const[pnValue,setpnValue]=useState('');
    const[ctValue,setctValue]=useState('');

   
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

    const saveCreateBy = event => {
        let nextState ;
        nextState = event.target.value;
        setcbValue(nextState);
        console.log(event.target.value);
      };

    const savePassWord = event => {
        let nextState ;
        nextState = event.target.value;
        setpwValue(nextState);
        console.log(event.target.value);
      };

      const savePhoneNumber = event => {
        let nextState ;
        nextState = event.target.value;
        setpnValue(nextState);
        console.log(event.target.value);
      };

      const saveContent = event => {
        let nextState ;
        nextState = event.target.value;
        setctValue(nextState);
        console.log(event.target.value);
      };

    const sendComment = () => {
      if(cbValue)
       axios.post("http://localhost:3000/projects/"+objectId+"/comments", {
    
        "createBy" : cbValue,
        "password" : pwValue,
        "phone" : pnValue,
        "check_agree" : "0",
        "content" :ctValue
        
}).then((response) => {
    console.log("200", response.data);
    if (response.status === 200) {
   
    }
}).catch((error) => console.log(error.response));
    }




    const commentClick =() =>{
      Swal.fire({
        title: '개인정보 수집 및 활용 동의서',
        html:'<div classname="alertpopup"><hr></hr>[수집하는 개인정보 항목]<hr></hr>이름, 연락처, 비밀번호<hr></hr>[개인정보의 수집 및 이용목적]<hr></hr>방명록 작성자의 댓글 수정 및 삭제 시 확인절차로 사용됩니다.<hr></hr>[개인정보의 보유 및 이용기간 및 파기]<hr></hr>이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기하며, 보유기간은 최대 3년을 넘기지 않는 것을 원칙으로 한다.<hr></hr>[부적절한 게시글 삭제]<hr></hr>욕설, 비방, 부적절한 게시글(홍보, 광고, 음란물 등)은 예고 없이 삭제됩니다.</div>',
        showDenyButton: true,
        confirmButtonText: '동의',
        denyButtonText: `취소`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          if(cbValue==''){
            Swal.fire('작성자 이름을 작성해주세요.', '', 'info');
          }
          else if(pwValue==''){
       
            Swal.fire('비밀번호를 작성해주세요', '', 'info');
          }
          else if(pnValue==''){
            
            Swal.fire('핸드폰 번호를 작성해주세요', '', 'info');
          }
          else if(ctValue==''){
            
            Swal.fire('내용을 작성해주세요', '', 'info');
          }
          else{
            sendComment();
            
            Swal.fire('댓글작성이 완료되었습니다.', '', 'success')
            //4초 delay
            setTimeout(5000);
            window.location.reload();
       
            
          }
          
        } else if (result.isDenied) {
          Swal.fire('댓글을 작성할 수 없습니다.', '', 'info')
        }
      })

    }



 
    const commentId = useRef(0);

    const editComment = (e) =>{

      commentId.current = e.target.getAttribute("commentId");

      //댓글 삭제를 위한 알림창 띄우기
      Swal.fire({
        title: '댓글 수정',
        html:
        '<input id="phone" type="phone" placeholder="Enter your phonenumber\n" /><br />' +
        '<input id="password" type="password" placeholder="Enter your password\n" /><br/>' +
        '<input id="content" type="content" placeholder="수정할 내용을 입력해주세요\n" /><br/>',
        showDenyButton: true,
        confirmButtonText: '수정하기',
        denyButtonText: `취소`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          const phone = document.getElementById('phone').value; // 문자열로 변환
          const password = document.getElementById('password').value;
          const content = document.getElementById('content').value; // 문자열로 변환
          
      //댓글 수정 API 호출하기 ,64fe0b75d198dbed47e2e9fa는 projectId이다.
      fetch(`/projects/`+objectId+`/comments/${commentId.current}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "password" : password, "phone" : phone, "content" : content}),
      })
        .then((response) => {
          if (response.status === 200) {
            // 성공적으로 댓글 삭제됨
            
            Swal.fire('댓글수정을 완료하셨습니다.', '', 'success');
            window.location.reload();
            
          } else {
            // 댓글 삭제 실패 또는 권한 오류
            
   
            console.error('댓글 수정 실패 또는 권한 오류');
          
          }
        })
        .catch((error) => {
          console.error('API 호출 중 오류 발생:', error);
        });


       
          
        } else if (result.isDenied) {
          window.location.reload();
          Swal.fire('댓글삭제를 취소하셨습니다.', '', 'info')
   
        }
      })

    }


    

    const deleteComment = (e) => {
      commentId.current = e.target.getAttribute("commentId");

      //댓글 삭제를 위한 알림창 띄우기
      Swal.fire({
        title: '댓글 삭제',
        html:'<input id="phone" type="phone" placeholder="Enter your new phonenumber" /><br />' +
        '<input id="password" type="password" placeholder="Enter your new password..." />' ,
        showDenyButton: true,
        confirmButtonText: '삭제하기',
        denyButtonText: `취소`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          const phone = document.getElementById('phone').value; // 문자열로 변환
          const password = document.getElementById('password').value; // 문자열로 변환
    
          console.log(phone);
          console.log(password);

          
      //댓글 삭제 API 호출하기 
      
      
      fetch(`/projects/`+objectId+`/comments/${commentId.current}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "password" : password, "phone" : phone}),
      })
        .then((response) => {
          if (response.status === 200) {
            // 성공적으로 댓글 삭제됨
            
            console.log('댓글 삭제 성공');
            
            Swal.fire('댓글삭제를 완료하셨습니다.', '', 'success');
            window.location.reload();
            
          } else {
            // 댓글 삭제 실패 또는 권한 오류
            
   
            console.error('댓글 삭제 실패 또는 권한 오류');
          
          }
        })
        .catch((error) => {
          console.error('API 호출 중 오류 발생:', error);
        });


       
          
        } else if (result.isDenied) {
          window.location.reload();
          Swal.fire('댓글삭제를 취소하셨습니다.', '', 'info')
   
        }
      })

    };


      function PlusData () {
    
            axios.put("http://localhost:3000/projects/"+objectId+"/likeplus")
            .then(()=> {
              console.log('업데이트가 성공했습니다.');
            })
            .catch(error => {
              console.error('업데이트 중 오류 발생:', error);
            });

            
        }
        function MinusData () {
    
            axios.put('http://localhost:3000/projects/'+objectId+'/likeminus')
            .then(()=> {
              console.log('업데이트가 성공했습니다.');
            })
            .catch(error => {
              console.error('업데이트 중 오류 발생:', error);
            });

            
        }

        async function fetchData() {
            try {
            const response = await axios.get('http://localhost:3000/projects/'+objectId+'/likes');

            const jsonString = JSON.stringify(response.data);
             const dataArray = JSON.parse(jsonString);


    
             setLikes(dataArray.likes);

            } catch (error) {
            console.error('에러 발생:', error);
            }
        }

        async function fetchData2() {
            try {
            const response = await axios.get('http://localhost:3000/projects/'+objectId+'/comments');
            const jsonString = JSON.stringify(response.data);
            // console.log(jsonString);
            const dataArray = JSON.parse(jsonString);
            //console.log(dataArray);
    
    
            setData(dataArray);
            
            
            setLoading(false);
            } catch (error) {
            console.error('에러 발생:', error);
            setLoading(false);
            }
        }

    useEffect(() => {

        fetchData();
        fetchData2();

   
    
        /// 새로고침 시 좋아요 상태 유지하기
            const saved = localStorage.getItem("like6");
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
        localStorage.setItem("like6", 1);
    }

    const unliking = () =>{
    
        setLike(false);
        fetchData();
        MinusData();
        localStorage.setItem("like6", 0);
    }
    
    const bts = [
        {
          team: "U'RECAR!",
          what: "Computer Vision 기반 간편한 주차 예약 및 관리 서비스 ",
          link: "/Urecar",
        }];

    const members = [
        
        { name: "박상은" , role:"모바일 프로그래밍 및 인공지능 데이터 수집 및 개선", say:"끊임없이 발전하겠습니다."},      
         
        { name: "박세림" , role:"서버 구축 및 데이터베이스 설계, 인공지능데이터 수집 및 설계", say:"끊임없이 도전하며 앞으로 나아가겠습니다."},
        { name: "이나래", role :"서버 구축 및 데이터베이스 설계, 인공지능데이터 수집 및 설계", say:"미래를 향한 도전의 길에서 열정과 끈기로 무장하겠습니다."},
        { name: "이소영"  , role:"모바일 프로그래밍 및 인공지능데이터 수집 및 개선", say:"더 나은 세상을 만들기까지 멈추지 않겠습니다!"}

    ];

    const professors = [
        {name:"유제혁"}
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
                        | 개발Jeans | 지도교수 : 유제혁 | 
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
                        서울은 인구밀집도가 높아 공공 주차 공간의 부족으로 주차가 어려운 도시입니다. 많은 운전자들이 주차 공간을 찾기 위해 여러 주차장을 직접 돌아다니며 빈 주차 공간을 찾아다니는 번거로움을 겪고 있습니다. 이러한 비효율적인 주차 방식은 시간과 연료 낭비로 이어지며 도시 교통 혼잡과 환경 문제를 야기할 수 있습니다. 또한, 주차공간을 증설하는 것은 큰 사회적 비용과 시공사업에 따른 혼란을 초래하여 비현실적인 해결책이 될 수 있습니다.
<br></br> “Urecar” 모바일 어플리케이션 서비스는 인공지능 기반 주차공간 예약/관리 플랫폼 서비스로 사용자의 주차경험을 간편하고 효율적으로 만들고자 개발한 서비스입니다. 혼잡한 주차시간에 주차 걱정을 할 필요가 없도록 나만의 주차자리를 예약하는 기능에 포인트를 두었습니다.
<br></br>“Urecar” 모바일 어플리케이션 서비스 사용자들에게 주차에 대한 새로운 해결책을 제공하여 도시 생활의 편의성을 높이고, 동시에 도시 전반의 주차 효율성을 향상시키는데 기여합니다. 서울시의 주요한 도시 문제를 해결하고자 하는 “Urecar”. 모든 시민들에게 보다 편리하고 지속 가능한 도시 생활을 선사합니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            서비스소개<hr></hr>
                        </div>
                        <div className="DESC_box">
                        지금까지 주차 문제를 해결하기 위해서는 단순히 주차장을 더 건설하는 것만으로는 한계가 있었습니다. 그래서 저희는 더 나은 대안과 문제 해결책을 모색하기 위해 "인공지능 실시간 주차 관리 시스템"을 개발하였습니다.이미 주차 공간이 남음에도 불구하고, 사용자가 주차 공간에 대한 파악이 부족한 문제를 해결하기 위해, 저희는 개인 주차 공간을 실시간으로 관리하는 시스템을 구축하였습니다. 이제 사용자는 운전 중에 주차장을 돌아다니거나 인터넷으로 검색할 필요 없이, 저희의 앱을 통해 주차 공간의 실시간 정보를 확인하며 관리할 수 있습니다. 이로써 사용자는 시간을 낭비하지 않고 주차 공간을 찾아가며 스트레스를 최소화할 수 있습니다. 또한, 이 시스템은 주차 공간을 효율적으로 활용하고 교통 혼잡을 해소하는 데에도 큰 도움을 줄 것입
니다.
<br></br>더불어, 우리의 시스템은 기존 주차 예약 시스템과는 다른 혁신적인 기능을 제공합니다. 기존 주차 예약 시스템은 중간에 관리자가 개입하여 관리하는 비용이 들었다면, 우리의 '
개인 슬롯 별' 예약 및 실시간 번호판 인식을 통해 관리자가 아닌 사용자가 슬롯을 직접 예약하고 관리할 수 있습니다. 번호판 인식을 통해 어느 주차장의 어떤 슬롯에 주차했는지, 입/출차 시간은 어떠한지 등의 정보를 실시간으로 확인할 수 있습니다. 이를 통해 주차 공간을 최대한 활용하고, 카메라를 활용하여 주차 공간을 사용하는 차량을 감시하여 효과적인 관리를 할 수 있습니다. 또한, 예약 기능을 통해 시간이 촉박한 사용자나 주차 공간을 찾기 어려운 상황에서 편의성을 제공하며, 자원을 절약하고 더 나은 교통 환경을 조성할 수 있습니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            SKILL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Python, JAVA, C
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TOOL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        PyCharm, AndroidStudio, Visual Studio Code, MySQL
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEVICE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        라즈베리파이3+
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEMO<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <YouTube
           
           videoId={"9gTHn2GNTGY"} //동영상 주소
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
                        <img className="team_img" src={t6} alt="Team" />
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM SAY<hr></hr>
                        </div>
                        <div className="DESC_box">
                        주차를 빠르고 편하게. 개발진스에게 맡기세요!
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

        
                            <div className={"team_cmt_container"}>
                                  <div className='cmtcontainer'>

                                  <textarea placeholder="응원의 글을 남겨주세요!"
                                      className='contentbox'
                                      type = "text"
                                      name = "cm"
                                      value={ctValue}
                                      onChange={saveContent}/>

                                    <div className='frombox'>
                                      <div className='sub_frombox'>

                                        <input className='namebox'
                                        name="cb"
                                        placeholder="name"
                                        value={cbValue}
                                        onChange={saveCreateBy} />

                                        <input className='pswdbox'
                                        type="text"
                                        name="pw"
                                        placeholder="password"
                                        value={pwValue}
                                        onChange={savePassWord}/>

                                      </div>
                                      
                                      <input className='phonenumbox'
                                        type="text"
                                        name="pn"
                                        placeholder="phone number"
                                        value={pnValue}
                                        onChange={savePhoneNumber}/>

                                      </div> 
                                    <input type='submit' className="btn" value='등록' onClick={()=>(commentClick()
                                    )}></input>

                                  </div>
                                  
                                  {data.map((comment) => (
                                      <div className="comment" key={comment.commentId}>
                                      
                                        <p className='content'>{comment.content}</p>
                                        <p className='writer'>from. {comment.createBy}</p>
                                        <p className='date'> {comment.createDate}</p>
                                        
                                        <div className='forEditor'>
                                          <span className='edit' commentId={comment.commentId} onClick={editComment}>수정하기<AiFillEdit></AiFillEdit></span>
                                          <span className='delete'commentId={comment.commentId} onClick={deleteComment} >삭제하기<AiOutlineCloseCircle></AiOutlineCloseCircle></span>
                                        </div>
                                      </div>
                                    ))}
                              </div>
   
                                                              
    


                    </div>

          

      
        

    );
}

export default URECAR;
