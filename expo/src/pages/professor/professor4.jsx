
import "./professor.css";


import YouTube from "react-youtube";

const professor = (props) => {


    return(

        <div className="outerofprofessor">
         
            <div className="outer_container">
                <div className="contents">
                    
             
                <div className="degree">
                    <div className="outer-position">
                        <span className="a-name">Kang Ji Hun</span>
                        <span className="a-position">: 소프트웨어전공 교수</span>
                    </div>
                    <div className="professor-detail">
                        <span>
                        인공지능
                        </span>
                        <span>
                        지능형 사물인터넷
                        </span>
                       
                        
                    </div>
                    <div className="teamincharge">
                        <span>
                        덕성전자
                        </span>
                        <span>
                        빵야
                        </span>
 
                    </div>
                  
       
                    <div className="partition">
                        
                    </div>

                    <div className="youtube">

                        <YouTube

                        videoId={"Z9jYZHEobOE"} //동영상 주소
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
                        e.target.mute(); //소리 끔
                        }}
                        onEnd={(e)=>{e.target.stopVideo(0);}} //비디오 전부 재생됐을때
                        />

                        </div>
                    
                </div>
                <div className="greeting">
                  
         
                <p className="greeting">
                수업 듣고, 과제하고, 때론 밤새며 에러없는 코드를 작성하기 위해 삽질도 하고, 동기들과 미래에 대한 고민으로 치열하게 술잔을 기울인 여러분들 정말 고생했습니다. 2학기에 걸친 캡스톤디자인 수업의 결과물로 졸업작품 전시까지 하다니 축하!축하! 드립니다. 정말 대단하고 자랑스럽습니다. 대견한 생각도 들지만 곧 졸업이니, 여러분들을 교정에서 볼 시간이 별로 없다는 생각에 아쉽기도 하네요. <br></br>
전 대학생활은 경제적인 독립을 준비하기 위한 시간이라고 생각합니다. 경제적 독립의 필수요소는 ‘일’(Job) 인데, 이 ‘일’이라는 녀석은 자는 시간을 제외하면 앞으로의 인생에서 1/2을 차지하게됩니다. 무려 인생의 1/2에 해당되는 시간을 즐겁지 않다고 생각되는 ‘일’을 하며 보낼 순 없잖아요.<br></br> 
저도 아직까지 내 적성이 뭐지? 잘하는 건 뭐지? 잘 모르겠습니다. 근데 아직도 버그 하나 잡고 기뻐하는 저를 발견하곤 합니다.^^ <br></br>
대략 1년 정도 프로젝트를 수행하며 여러분들 스스로 많이 성장했을 것이라고 생각됩니다. 처음 프로젝트를 미팅을 했을 때와 마지막 프로젝트 미팅 시 나누었던 얘기들의 수준 차이가 많이 났거든요. 그 동안 알게 모르게 노력의 시간을 통해 여러분은 많은 성장을 했어요. <br></br>
소프트웨어를 전공한 사람으로써 가치있는 아이디어를 가시화하여 직/간접적으로 만들어보는 고단한 일에 관심이 생기셨는지요? 저의 1호 제자인 여러분이 앞으로 더 성장해가는 걸 계속 모니터링(?)하고 즐거운 일을 찾아 독립하시길 응원하겠습니다. <br></br>

졸업작품을 직접 만든 소프트웨어전공 1기 제1/2전공 학생들, 전시회 행사를 준비하신 졸업준비위원회 학생들, 우리전공 교수님들 & 조교님 모두에게 감사드리며 수고하셨습니다.
</p>

 
                    </div>
                    
                </div>
     

                    </div>
            </div>



    );
};
export default professor;