



import softelligence from "../../img/softelligence.jpg"


import "./home.css"


import Footer from '../../Footer/footer.jsx'

function Home(){

    return(
 <outerofouter>



        <div className="outerofhome">
            
            <span className="homeText">software+</span>
           
           <img src={softelligence}></img>

            <span className="homeText">Intelligence</span>
            <span className="homeText">DSWU software, 1th Graduation Exhibition Archive</span>
          
            </div>
            <Footer></Footer>
            </outerofouter>

    );
}export default Home;