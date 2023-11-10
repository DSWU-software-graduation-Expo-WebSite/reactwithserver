
import "./professor.css";

import YouTube from "react-youtube";

import Footer from '../../Footer/footer.jsx'

const professor = (props) => {


    return(

        <div className="outerofprofessor">
         
            <div className="outer_container">
                <div className="contents">
                    
             
                <div className="degree">
                    <div className="outer-position">
                        <span className="a-name">Yu Jae Hyuk</span>
                        <span className="a-position">: 소프트웨어전공 교수</span>
                    </div>
                    <div className="professor-detail">
                        <span>
                        인공지능
                        </span>
                        <span>
                        빅데이터
                        </span>
                       
                        
                    </div>
                    <div className="teamincharge">
                        <span>
                        개발 Jeans
                        </span>
                        
 
                    </div>
                  
       
                    <div className="partition">
        
                    </div>

                    <div className="youtube">

                    <YouTube

                        videoId={"Fs7b3xJ9vfE"} //동영상 주소
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
                사랑하는 학우 여러분들. 끝없는 고민과 열정으로 학기를 달려와 졸업작품 전시까지 준비하느라 정말 고생이 많았습니다. 수업과 과제, 졸업준비와 진로 결정까지 대학생활의 매 순간이 어렵고 힘들었겠지만, 여러분들은 무한한 가능성을 가진 소프트웨어 공학을 선택하였고, 그 선택은 디지털 시대에 더 나은 미래를 향해 나아가는 길을 확장하게 만들 것이라 믿어 의심치 않습니다. 
                <br></br>
각고의 노력과 도전 끝에 완성된 졸업작품을 보면서, 완결성, 독창성, 그리고 혁신성에 감탄하기도 했습니다. 고유한 아이디어와 창조적인 해결책을 보며 소프트웨어 공학의 깊이와 폭을 확인할 수 있었고, 그것들은 여러분들이 이 분야의 지식을 깊이 이해하며, 세상의 문제를 해결하는 데 필요한 기술과 능력을 갖추었음을 확신하였습니다. 
세상은 계속 변하고, 우리의 기술도 변합니다. 늘 변화를 받아들이고, 끊임없이 배우고 도전하는 자세가 중요합니다. 여러분들의 미래가 무한한 가능성으로 가득 찬 것처럼, 소프트웨어 공학 분야도 그러합니다. 그 가능성을 이끌어 낼 수 있는 것은 창의성, 열정과 도전정신이 있는 바로 여러분들입니다. 
마지막으로, 여러분들의 열정과 노력에 대한 이 모든 성과를 축하드립니다. 그리고 더 큰 도전을 위해 졸업전시회를 시작으로 하는 새로운 여정을 떠나는 여러분을 응원합니다. 앞으로 펼쳐질 미래가 기대됩니다. 감사합니다. 
</p>

 
                    </div>
                    
                </div>
     

                    </div>
                    <Footer></Footer>
            </div>



    );
};
export default professor;