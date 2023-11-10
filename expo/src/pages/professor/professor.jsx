
import "./professor.css";



import YouTube from "react-youtube";


const professor = (props) => {


    return(

        <div className="outerofprofessor">
         
            <div className="outer_container">
                
                <div className="contents">
                    
             
                <div className="degree">
                    <div className="outer-position">
                        <span className="a-name">Lee Jae Ho</span>
                        <span className="a-position">: 소프트웨어전공 학과장</span>
                    </div>
                    <div className="professor-detail">
                        <span>
                        네트워크
                        </span>
                        <span>
                        지능형 사물인터넷
                        </span>
                                               
                    </div>
                    <div className="teamincharge">
                        <span>
                        RE:BIT
                        </span>
                        <span>
                        FullHouse
                        </span>
 
                    </div>
                  
       
                    <div className="partition">
                        
                    </div>

   
                </div>

                <YouTube
           
           videoId={"fCABJvjzacg"} //동영상 주소
           opts={{
           width:"100%",
           playerVars: {
           autoplay: 0, //자동 재생 여부 
           modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
           loop: 1, //반복 재생
           //반복 재생으로 재생할 플레이 리스트
           },
           }}
           onReady={(e) => {
           //e.target.mute(); //소리 끔
           }}
           onEnd={(e)=>{e.target.stopVideo(0);}} //비디오 전부 재생됐을때
   />
                <div className="greeting">
              

                <p className="greeting">
                    20학번 솦웨 1기 학우여러분, 우리과 첫 졸전을 진심으로 축하합니다.<br></br>
보통… 우리과가 뭐하는 학과인지 선배한테 배우는데,우리는 배울 선배가 없었어요.<br></br>
보통… 교수님들이 어떤 사람인지는 선배한테 듣는데,우리는 말해줄 선배가 없었어요.<br></br>
보통… 졸전은 선배 작품을 조금씩 따라하는데, 우리는 따라할 선배가 없었어요. <br></br>
여러분은 아무것도 없는 ‘솦웨’에 오셔서, “과연 잘 할 수 있을까?” 했을 것 같아요. <br></br>괜히 컴원응 이재호의 꼬임에 넘어가 후회하시는 분도 계실겁니다.<br></br>
 하지만, 여러분은 ‘아무것도 없는’ 곳에서 ‘무언가 있는’ 곳으로 만드셨고, 졸업 프로젝트 역시 無에서 시작하여 <br></br>Something으로 마무리 지었습니다. 정말정말 대견하고 대단하고 대박입니다.<br></br>프로젝트를 진행하면서, 어쩔 때는 팀원이 미웠고 때론 다투기까지 했을 것 같아요.<br></br> 그래도, 팀원이 고맙고 진정한 팀워크를 느낄 때도 있었을 것 같습니다. <br></br>제 생각에, 여러분은 1년 동안 이런 마음을 순차적으로 느꼈을 것 같아요.<br></br> 궁금, 파이팅, 도전, 실망, 파이팅, 절망, 좌절, 조작할까, 파이팅, 극복, 노력, 파이팅, 성취감, 완성!!!.<br></br>
  여러분이 경험한 다양한 마음과 그에 따른 노력은… 다시는 겪고 싶지 않겠지만… 긴 시간이 지나면 깊은 추억으로 남을 것 같습니다.<br></br> 나중에 진정한 IT인재로 성장한 후에, 다시 한번 졸전 자료를 살펴봐 주셨으면 좋겠습니다. <br></br>
제가 생각하는 이상적인 졸업작품전시회란, 학생은 피땀흘린 결과물을 멋지게 보여주고, 졸업생은 참석해서 빛나는 후배를 좋은 직장으로 이끌어주는 ‘장(market)’ 입니다. <br></br>
안타깝게도 우린 그 수혜를 받지 못하겠지만, 여러분이 느낀 어려움과 아쉬움을 오래오래 간직하고, 내년에도 후년에도 놀러오셔서 후배들의 피땀을 격려해 주셨으면 좋겠습니다. <br></br>
정말 수고 많으셨습니다. 정말 잘 하셨습니다. 이번 졸업전시회는 교수님들께, 부모님들께, 친구와 후배들에게 마음껏 자랑하고 축하받는 자리였으면 좋겠습니다. <br></br>
끝으로, 긴 시간 많은 고민과 정성을 주신 졸업준비위원회 위원장과 위원회 학우들께 각별한 감사를 드립니다.
솦웨 1기. 파이팅 !!!</p>

 
                    </div>
                    
                </div>
     

                    </div>
                   
            </div>



    );
};
export default professor;