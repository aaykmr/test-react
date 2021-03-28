import './Header.css';
import './common.css';
import Illustration from './images/Illustration.png';

function Header(){

    return(
        <div className="HeaderBox">
            <div className="textBox"><div className="BigText">Hello Josh!</div><br></br>
                <p className="SmallText">It's good to see you again.</p>
            </div>
            <img src={Illustration} className="Illustration" alt="Illustration" ></img>
        </div>
    )
}
export default Header;