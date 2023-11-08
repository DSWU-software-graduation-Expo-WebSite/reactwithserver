import './front.css'
import bodymovin from 'bodymovin';
import React, { useEffect, useState, useRef } from 'react';
import{AiOutlineArrowDown} from 'react-icons/ai';

const Front = (props) =>{

    return(
        <div className='text_outer'>
            <div className="TEXT">
                <div className='sub_evelopers'>
               {props.text}
                </div>
                <span className='test_obj'>
                    <span className='test_obj_scroll'>
                    Scroll Down
                    </span>
                <br></br>
                아래로 스크롤 하세요.<br></br>
                <span className='test_obj_icon'>
                <AiOutlineArrowDown size={30}/>
                </span>
                </span>

                <span className='test_obj_mobile'>
                    <span className='test_obj_scroll'>
                    Click here!
                    </span>
                <br></br>
                화면을 클릭하세요<br></br>
                <span className='test_obj_icon'>
                <AiOutlineArrowDown size={30}/>
                </span>
             
                </span>
                
                
            </div>
            
            </div>    

    );

};
export default Front;