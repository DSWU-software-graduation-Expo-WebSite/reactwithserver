import "./team_1.css";
import Arrayprc from "../projects/arrayprc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";
import images from '../developers/image/index.js';
import React from 'react'

import t3 from "../../img/t3.png"


import s1 from "./team_img/3-1.jpg"
import s2 from "./team_img/3-2.jpg"
import s3 from "./team_img/3-3.jpg"
import s4 from "./team_img/3-4.jpg"
import s5 from "./team_img/3-5.jpg"
import s6 from "./team_img/3-6.jpg"
import s7 from "./team_img/3-7.jpg"



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


function AIKIOSK(){
    const objectId = "653fb325666671886318b038"
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
       axios.post("http://3.36.64.144/projects/"+objectId+"/comments", {
    
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

        async function fetchData2() {
            try {
            const response = await axios.get('http://3.36.64.144/projects/'+objectId+'/comments');
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
            const saved = localStorage.getItem("like3");
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
        localStorage.setItem("like3", 1);
    }

    const unliking = () =>{
    
        setLike(false);
        fetchData();
        MinusData();
        localStorage.setItem("like3", 0);
    }
    
    const bts = [
        {
            team: "AIKIOSK",
            what: ": AI 실시간 사용자 맞춤형 키오스크",
            link: "/AIKIOSK",
        }];

    const members = [
        
        { name: "강수연" , role:"젯슨 나노 시스템 구축 / 걸음걸이 분류 모델 기능 구현", say:"짧지 않은 기간 동안 서로를 믿고 함께해 줘서 고마웠고, 여러 가지 방면으로 발전할 수 있는 잊지 못할 경험이었던 것 같아. 다들 수고 많았어:)"},      
         
        { name: "이유진" , role:"키오스크 UI 제작 및 기능 구현 / 통합 시스템 구축 / 데이터베이스 설계", say:"처음 준비를 시작할 때 걱정 반 기대 반이었는데 무사히 잘 마친 것 같아 다행인 것 같아. 함께하는 시간동안 즐거웠고 우리팀 모두 수고했어!!"},
        { name: "정현아", role :"젯슨 나노 환경설정 / Yolo 모델 학습 및 성능 향상 / 음성발화 인식 기술 구현", say:"이 프로젝트를 통해 사용자의 특징을 실시간으로 추출하여 맞춤형 서비스를 제공하는 키오스크 시스템을 개발하게 되어 뿌듯했고 함께 고생해준 팀원들, 고맙고 수고했어!"},
        { name: "조승아"  , role:"키오스크 UI 제작 및 기능 구현 / 통합 시스템 구축 / 서버 구축", say:"1년 동안 순탄했던 적 보다 역경이 더욱 많았던 것 같은데 덕분에 잘 마칠 수 있었던 거 같아. 같이 졸업 전시 준비를 할 수 있어서 너무 좋았고, 또 나의 부족한 점을 채워줘서 고마웠고 수고했어"}
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
                        | 디지털 인클루젼 | 지도교수 : 이형규 | 
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
                   
               
                         
                    </Swiper>

               
     
                <div className="team_used">

                    <div className="INFO_box">
                        <div className="NAME_box">
                            기획의도<hr></hr>
                        </div>
                        <div className="DESC_box">
                        최근 키오스크의 이점 중 비접촉성, 공간 활용, 인력 및 비용 효율성이 더욱 강조되면서 매장 내에서 키오스크 사용이 급증하고 있습니다. 이러한 새로운 도입은 많은 이용자에게 편리함을 제공하고 있지만, 동시에 노인, 장애인, 어린이 등 디지털 취약한 계층의 어려움을 증가시키고 있습니다. 이러한 문제를 해결하기 위해 "배리어 프리 키오스크"를 개발하여 모든 사람이 원활하게 소비할 수 있는 환경을 조성하는 것이 목표입니다. 이 키오스크는 사용자의 특성을 실시간으로 감지하고 각 사용자에게 맞춤형 인터페이스를 제공합니다. 개인정보 보호 측면에서 얼굴인식 대신 실시간 무자각 인증 방식을 사용하며, 객체 인식, 걸음걸이 특징 분석, 사용자 음성 인식 등과 같은 기술을 활용합니다. 이를 통해 디지털 격차를 줄이고 사회적 포용성을 높이며, 효율적이고 편리한 키오스크 환경을 조성하고자 합니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            서비스소개<hr></hr>
                        </div>
                        <div className="DESC_box">
                        본 프로젝트는 사용자의 특별한 기다림 없이 실시간으로 사용자의 특징을 추출하여, 이에 맞춰 키오스크의 인터페이스 디자인을 변경하는 시스템 개발을 목표로 하였습니다. 장애인, 노인, 어린이 등의 디지털 취약 계층을 포함하여 사용자를 총 9개의 카테고리로 세분화하였으며, 사용자의 연령, 건강 상태 등을 고려한 특성 파악을 통해 이에 적합한 변형된 키오스크 서비스를 제공하고 있습니다. 이를 위해 YOLO를 활용한 객체 인식, MediaPipe를 활용한 걸음걸이 특징 분석, 사용자 발화 인식 분석의 통합적인 세 가지 기술을 사용하여 사용자의 특징을 추출합니다. 사용자 맞춤형 화면은 주문 시작 화면, 메뉴 선택 화면, 지급 방식 선택 화면, 주문 완료 화면 등 총 4개의 화면으로 구성됩니다. 본 프로젝트는 NVIDIA사의 Jetson nano 보드를 사용하여 고성능 GPU를 기반으로 실시간 영상 처리를 수행합니다. <br></br> 최종적으로 본 프로젝트를 통해 사용자의 편의성을 높이고, 디지털 취약 계층을 포함한 다양한 사용자에게 맞춤형 서비스를 제공하는 키오스크 시스템을 구현하였습니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            SKILL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        Python, HTML , CSS, JavaScript, MySQL
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TOOL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        PyCharm, Jupyter, VisualStudio
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEVICE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        NVIDIA사의 Jetson nano 보드
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM IMAGE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <img className="team_img" src={t3} alt="Team" />
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM SAY<hr></hr>
                        </div>
                        <div className="DESC_box">
                        막연하게 사회적 약자를 위한 프로젝트를 해보고 싶다는 생각에 시작하였지만 진행하다 
보니, 그분들의 시선에서 어떤 게 불편하고 어떤 부분이 개선되었으면 좋겠는지 구체화하
여 생각해 볼 수 있는 기회가 되었던 것 같습니다. 일상에서 당연하게 느끼는 것들이 누군
가에게는 큰 장벽이 될 수 있다는 사실을 다시금 상기시켜 준 프로젝트였고 빠른 주문이 
가능한 키오스크가 어떤 누군가에게는 매장 문을 열고 들어가기까지 두려움에 떨게 만드
는 요소가 될 수 있음을 상기할 수 있었습니다. 이번 프로젝트를 시작으로 누구나 편리한 
삶을 누리는 사회가 될 수 있도록 노력하겠습니다.
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

export default AIKIOSK;
