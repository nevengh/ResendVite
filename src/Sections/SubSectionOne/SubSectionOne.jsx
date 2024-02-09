import { Container } from 'react-bootstrap'
import './SubSectionOne.css'
import sub01 from '../../assets/images/subsection1.svg'
import profile01 from '../../assets/images/profile01.svg'
const SubSectionOne = () => {
    return (
        <div className="SubSectionOne">
            <Container>
                <div className="line">
                    <div className="spotLight"></div>
                </div>
                <div className="sub-content">
                <div className="subsection-img">
                    <img src={sub01} alt="" />
                </div>
                <p>
                    Resend is transforming email for developers.
                    Simple interface, easy integrations, handy
                    templates. What else could we ask for.
                </p>
                <div className="footer-profile">
                    <img src={profile01} alt="" />
                    <div className="profile-content">
                        <h4>Guillermo Rauch</h4>
                        <h5>CEO at Vercel</h5>
                    </div>
                </div>
                </div>

            </Container>
        </div>
    )
}

export default SubSectionOne