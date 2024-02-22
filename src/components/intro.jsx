import './intro.css';
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";
import vector1 from "../img/Vector1.png";
import vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import crown from "../img/crown.png";
import FloatingDiv from './FloatingDiv';
function Intro(){
  return(
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
        <span>Hy! I Am </span>
        <span>Hend Hany </span>
        <span>FrontEnd Developer with high level of experience in web designing and development, producting the quality work </span>
        </div>
        <button className='button'>Hire Me</button>
        <div className="i-icons">
          <img src={github} alt="github" />
          <img src={linkedin} alt="github" />
          <img src={instagram} alt="github" />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="vector1" />
        <img src={vector2} alt="vector2" />
        <img src={boy} alt="boy" />
        <div style={{top:'-4%',left:'68%'}}>
          <FloatingDiv image={crown} txt1='Web' txt2='Development'/></div>
      </div>
    </div>
  )
}
export default Intro;