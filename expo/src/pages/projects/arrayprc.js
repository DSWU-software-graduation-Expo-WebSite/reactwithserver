import "./projects_main.css";
import { useNavigate } from 'react-router-dom';
function Arrayprc({ team, subject, link }) {
    const navigate = useNavigate();
    const handleTextClick = () => {
        navigate(link);
    };
    
    return (
        <div className="array-container">
            <div className="array-content">
                <div className="oval-box" onClick={handleTextClick}>
                    <div className="team-box">
                        <div className="oval-box" onClick={handleTextClick}>
                            <p
                                className="team"
                                style={{ 
                                    fontFamily: 'Noto Sans KR'
                                 }}
                            >
                                {team}
                            </p>
                        </div>
                    </div>
                    <div className="subject-box">
                        <p className="subject">
                            {subject}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Arrayprc;
