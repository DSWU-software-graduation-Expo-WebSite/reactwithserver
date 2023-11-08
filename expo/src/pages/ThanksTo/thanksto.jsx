import React, { useEffect,useState,useRef} from 'react';
import "./thanksto.css"
import Front from "../front"
import Professor from '../professor/professor';
import Professor2 from '../professor/professor2';
import Professor3 from '../professor/professor3';
import Professor4 from '../professor/professor4';
import Professor5 from '../professor/professor5';


function Thanksto(){
    const [text, setText] = useState('초기 텍스트');
    const homeRef = useRef(null);
    const mobileRef = useRef(null);
    const [isScroll, setIsScroll] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [currentScrollPosition,setcurrentScrollPosition] = useState();
    const [lastScrollPosition, setLastScrollPosition] = useState(window.scrollY);
    const [btnActive, setBtnActive] = useState("");
    const [content, setContent] = useState("0");
    
    
    //교수님 컴포넌트 복사용
    const selectComponent = {
        0: <Professor />,
        1: <Professor2 />,
        2: <Professor3 />,
        3: <Professor4 />,
        4: <Professor5 />,
      };
    
    useEffect(() => {
        setText("@Thanks\u00A0to");
        window.addEventListener('scroll', scrolling);
        return () => {
          window.removeEventListener('scroll', scrolling); 
        };},[isScroll,currentScrollPosition,lastScrollPosition,btnActive,isVisible,content]);


 
    const scrolling = () => {
        setcurrentScrollPosition(window.scrollY);
        //console.log('스크롤 아래로 이동 중');
        if (currentScrollPosition > lastScrollPosition) {
            console.log('스크롤 아래로 이동 중');
            if(isScroll){
                homeRef.current.scrollIntoView({ behavior: "auto", block: "start" });
                setIsVisible(true);
                setIsScroll(false);
            }
            // 스크롤이 아래로 이동 중
            
        } else if (currentScrollPosition < lastScrollPosition) {
            console.log('스크롤 위로 이동 중');
 
            
        }
        setLastScrollPosition(currentScrollPosition);

    
      };

      const clickng = () => {
        mobileRef.current.scrollIntoView({ behavior: "auto", block: "start" });
        setIsVisible(true);
      }

      

      
      const toggleActive = (e) => {
        //const { idx } = e.target.value;
        //console.log();
        setContent(e.target.value);
        console.log(content);
        
        setBtnActive((prev) => {
            return e.target.value;
          
        });
      };

      let data = ["이재호 교수님","음두헌 교수님","이형규 교수님","강지헌 교수님","유제혁 교수님"];

    return(
      
         <div className="outerofthanksto">
            <div className='thankstocontent'>

            <div className="front">
            <Front text={text} ></Front>
            </div>
            
      

            <div className={`enti ${isVisible ? 'show' : ''}`} ref={homeRef}>
                <div className='bookmark'>
                {data.map((item, idx) => {
                    return (
                        <button
                        value={idx}
                        className={"btn" + (idx == btnActive ? " active" : "")}
                        onClick={toggleActive}
                        >
                        {item}
                        </button>
                    );
                })} 
                </div>
                <div className='bookmark_content'>

                {content && <div>{selectComponent[content]}</div>}

                </div>
                
            </div>
         

            </div>

            <div className='thankstomobile'>

            <div className="front_mobile" onClick={clickng}  >
            <Front text={text} ></Front>
            </div>
            <div className={`enti ${isVisible ? 'show' : ''}`} ref={mobileRef}>
                
                <div className='bookmark'>

                {data.map((item, idx) => {
                    return (
                        <button
                        value={idx}
                        className={"btn" + (idx == btnActive ? " active" : "")}
                        onClick={toggleActive}
                        >
                        {item}
                        </button>
                    );
                })} 

                </div>
                <div className='bookmark_content'>
                <div>{selectComponent[content]}</div>
                </div>  
            </div>

            </div>
   


       </div>
       

    )
};
export default Thanksto;