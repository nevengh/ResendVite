import { Container } from 'react-bootstrap'
import './Companies.css'
import logo01 from '../../assets/images/logo01.png'
import logo02 from '../../assets/images/logo02.png'
import logo03 from '../../assets/images/logo03.png'
import logo04 from '../../assets/images/logo04.png'
import logo05 from '../../assets/images/logo05.png'
import logo06 from '../../assets/images/logo06.png'
import logo07 from '../../assets/images/logo07.png'
import logo08 from '../../assets/images/logo08.png'
import logo09 from '../../assets/images/logo09.png'
import logo10 from '../../assets/images/logo10.png'
import logo11 from '../../assets/images/logo11.png'
import logo12 from '../../assets/images/logo12.png'
const Companies = () => {

    return (
        <div className="Companies">
            
            <Container>
                <div className="sec-wrapper">
                    <div className="spotLight"></div>
                    <div className="row m-auto">
                        <div className="col m-auto">
                        <div className="ne-comp-header">
                        <h4>
                            Companies of all sizes trust Resend
                            to deliver their most important emails.
                        </h4>
                    </div>
                        </div>
                    </div>
                    
                    <div className="logo-boxs">
                        <div className="row-one">
                            <img src={logo01} alt="" />
                            <img src={logo02} alt="" />
                            <img src={logo03} alt="" />
                            <img src={logo04} alt="" />
                            <img src={logo05} alt="" />
                            <img src={logo06} alt="" />
                        </div>
                        <div className="row-one">
                            <img src={logo07} alt="" />
                            <img src={logo08} alt="" />
                            <img src={logo09} alt="" />
                            <img src={logo10} alt="" />
                            <img src={logo11} alt="" />
                            <img src={logo12} alt="" />
                        </div>
                    </div>

                    
                </div>
            </Container>

        </div>
    )
}

export default Companies