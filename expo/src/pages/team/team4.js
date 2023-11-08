import "./team_1.css";
import Arrayprc from "../projects/arrayprc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";
import images from '../developers/image/index.js';
import React from 'react'

import t4 from "../../img/t4.png"


import s1 from "./team_img/4-1.png"



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


function FULLHOUSEMALL(){
    const objectId = "653fb337666671886318b039"
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
          Swal.fire('댓글수정을 취소하셨습니다.', '', 'info')
   
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
            const saved = localStorage.getItem("like4");
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
        localStorage.setItem("like4", 1);
    }

    const unliking = () =>{
    
        setLike(false);
        fetchData();
        MinusData();
        localStorage.setItem("like4", 0);
    }
    
    const bts = [
        {
            team: "FULLHOUSEMALL",
            what: "인테리어 플랜을 위한 3D 가구 배치 시뮬레이션 체험 쇼핑몰 ",
            link: "/FULLHOUSEMALL"
        }];

    const members = [
        
        { name: "김지혜" , role:"웹 프론트, 웹 배너 및 로고 디자인",say:"수고하셨습니다."},      
        { name: "노정우" , role:"웹 프론트, 서버 프로그래밍, 가구 배치 시뮬레이션 설계 및 프로그래밍, 3D 모델링",say:"졸업시켜주세요."},
        { name: "한채연", role :"데이터 크롤링, DB 설계, 가구 3D 모델링, 웹 배너 디자인, 웹 프론트", say:"좋은 경험이 되었습니다."}
   

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
                        | FULLHOUSE | 지도교수 : 이재호 | 
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
               
                         
                    </Swiper>

               
     
                <div className="team_used">

                    <div className="INFO_box">
                        <div className="NAME_box">
                            기획의도<hr></hr>
                        </div>
                        <div className="DESC_box">
                        인테리어 시뮬레이션이 있는 쇼핑몰 웹페이지를 체험해볼 수 있는 전시 부스입니다.
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            서비스소개<hr></hr>
                        </div>
                        <div className="DESC_box">
                        인테리어 플랜을 세우고 3D 가구 배치 시뮬레이션에서 1인칭 시점으로 체험할 수 있는 가
구 쇼핑몰 프로젝트입니다.
                       
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            SKILL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        JavaScript, Python, C#
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TOOL<hr></hr>
                        </div>
                        <div className="DESC_box">
                        VisualStudio, MySQL, Unity
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            DEVICE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        PC (웹페이지)
                        </div>
                        
                        </div>
                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM IMAGE<hr></hr>
                        </div>
                        <div className="DESC_box">
                        <img className="team_img" src={t4} alt="Team" />
                        </div>
                        
                        </div>

                        <div className="INFO_box">
                        <div className="NAME_box">
                            TEAM SAY<hr></hr>
                        </div>
                        <div className="DESC_box">
                        　맞춤형 온라인 쇼핑몰 풀하우스입니다.
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

export default FULLHOUSEMALL;
