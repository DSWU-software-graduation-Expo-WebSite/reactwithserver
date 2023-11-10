
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
                        <span className="a-name">Lee Hyung Gyu</span>
                        <span className="a-position">: 소프트웨어전공 교수</span>
                    </div>
                    <div className="professor-detail">
                        <span>
                        임베디드 컴퓨팅
                        </span>
                        <span>
                        지능형 사물인터넷
                        </span>
                       
                        
                    </div>
                    <div className="teamincharge">
                        <span>
                        디지털 인클루전
                        </span>
                        <span>
                        SELECT</span>
 
                    </div>
                  
       
                    <div className="partition">
                        
                    </div>
                    <div className="youtube">
                    <YouTube
                    
                    videoId={"cHPTjNabuiY"} //동영상 주소
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
                졸업작품! 1년 전만 하더라도 이말을 들었을 때 너무 막연하고 부담이 되는 말이었을 것입니다. 지금은 어떤가요? 아직 마무리해야될 일이 좀 더 있겠지만, 이제는 한결 가벼운 마음일 것이라고 생각합니다. 졸업작품은 여러분이 소프트웨어 전공 학생으로서 배운 지식과 더불어 많은 열정과 노력이 총 동원된 결과입니다. 졸업작품을 진행하면서 힘들었던 기억도 있겠지만 여러분 모두의 노력으로 성공적인 졸업작품을 완성하였고 이렇게 전시회를 하게되었습니다. 좀 더 완성도 있게 구현했으면 하는 아쉬운 마음도 있겠지만, 졸업작품을 완성하기 위해 여러분이 지금까지 한 경험은 앞으로의 사회생활에서 아주 큰 자산이 될 것이라고 생각합니다. 
졸업작품 전시를 다시 한번 축하하며, 이 행사를 끝내고 나면 여러분의 대학생활을 마무리를 할 시기가 다가오게 됩니다. 여러분은 그동안 열심히 했습니다. 졸업 후 어떤 길을 선택하든지 여러분의 열정과 노력이면 원하는 꿈을 이룰 수 있을 것입니다. 여러분은 소프트웨어 전공 1기 졸업생입니다. 이에 무한한 자부심을 가짐과 동시에 또한 강한 의무감을 가지고, 대학생활 마무리 잘하여서, 여러분 모두 원하는 곳에서 새로운 출발을 할 수 있기를 기원합니다. 소프트웨어전공 1기 졸업생 파이팅!!!
</p>

 
                    </div>
                    
                </div>
     

                    </div>
                    <Footer></Footer>
            </div>



    );
};
export default professor;