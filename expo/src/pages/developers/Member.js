import React from "react";
import { useParams } from "react-router-dom";

const Member = () => {
    const { groupName, i} = useParams();
    return (
        <div>
            <h2>
                {groupName}:
            </h2>
            <h3>
                {parseInt(i) + 1}번째 멤버 페이지
            </h3>
        </div>
    );
}

export default Member;