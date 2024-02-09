import './Hero.css'
import { Container } from 'react-bootstrap'
import cube from '../../assets/images/cube.svg'
import arrow from '../../assets/images/arrow_btn.svg'
import y from '../../assets/images/Y.png'
const Hero = () => {
  return (
    <div className="ne-hero">
        {/* <div className="body-lights"></div> */}
        <Container>
            <div className="row">
                <div className="col-lg-6 col-md-12 m-auto">
                    <div className="ne-btn-hero">
                        <a href="#">
                            Resend raises $3M seed round
                            <span className='arrow'>
                                <img src={arrow} alt="" />
                            </span>
                        </a>
                    </div>
                    <h1 className="ne-hero-title">
                        Email for developers
                    </h1>
                    <h4 className='ne-hero-text'>
                        The best API to reach humans instead of spam folders.
                        Build, test, and deliver transactional emails at scale.
                    </h4>
                    <div className="ne-hero-btn-group">
                        <div className="nav-btn">
                                <a href="#">
                                    Get Started
                                    <span className='arrow'>
                                        <img src={arrow} alt="" />
                                    </span>
                                </a>
                        </div>
                        <div className="ne-second-btn-hero">
                            <a href="#">
                                Documentaion
                                <span className='arrow'>
                                    <img src={arrow} alt="" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="ne-hero-image">
                        <div className="light"></div>
                        <img src={cube} alt="" className='cube' />
                    </div>
                </div>  
            </div>
            <div className="ne-hero-footer">
                <h4>
                    Backed by   
                    <span>
                        <img src={y} alt="" />
                    </span>
                    Combinator
                </h4>
                    </div>
        </Container>
    </div>
  )
}

export default Hero