import {useState, useEffect} from "react";
import {  Col, Container , Row} from "react-bootstrap";
import {ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
   const [loopNum, setLoopNum]= useState(0);
   const [isDeleting, setIsDeleting]= useState(false);
   const toRotate =["Web Developer", "BackEnd Developer","UI/UX Designer"];
   const [text, setText] = useState('');
   const period = 2000;
   const [delta, setDelta] = useState(300 - Math.random() *100);
   useEffect(() => {
    let ticker = setInterval(()=>{
       tick();  
    },delta )
    return () => {clearInterval(ticker)};
   },[text, delta])

   const tick =() => {
    let i= loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeleting && updatedText === fullText){
       setIsDeleting(true);
       setDelta(period); 
    }
    else if (isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setDelta(500);
    }
   }

    return(

    <section className ="banner" id="home">
    <Container>
        <Row className = "align-items-center"> 
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({isVisible }) =>
          <div className = {isVisible ? "animated__animated animate__fadeIn" : ""}>
          <span className="tagline">Jayesh Chindarkar</span>
          <h2>{`Hi, I'm a `}<span className= "wrap">{text}</span></h2>
          <p>Graduate Student at Northeastern University. 4 years of work experience as a Java Software Developer with a demonstrated history of working in the information technology and services industry. Skilled in Java, SQL Databases, JavaScript, and the MERN stack </p>
          <button onClick={() => window.location.href = 'https://www.linkedin.com/in/jayeshchindarkar/'}>Let's Connect<ArrowRightCircle size={25}/></button>
          </div> }
          </TrackVisibility>
          </Col>  
          <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
    </Container>

</section>
   );
};