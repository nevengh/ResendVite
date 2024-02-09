import "./EmailReimagened.css";
import arrow from "../../assets/images/arrow_btn.svg";
import Resend from '../../assets/images/RESEND.svg'
const EmailReimagened = () => {
    return (
            <div className="EmailReimagened">
                <h1 className="ne-reachhuman-title m-auto">
                    Email reimagined. Available today.
                </h1>

                <div className="ne-hero-btn-group justify-content-center">
                    <div className="nav-btn">
                    <a href="#">
                        Get Started
                        <span className="arrow">
                        <img src={arrow} alt="" />
                        </span>
                    </a>
                    </div>
                    <div className="ne-second-btn-hero">
                    <a href="#">
                        Documentaion
                        <span className="arrow">
                        <img src={arrow} alt="" />
                        </span>
                    </a>
                    </div>
                </div>
                <div className="Resend-img">
                    <img src={Resend} alt="" />
                    
                </div>
            </div>
    );
};

export default EmailReimagened;
