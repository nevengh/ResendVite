import { Container } from 'react-bootstrap'
import './EverythingInControl.css'
import controlLogo from '../../assets/images/Control-logo.svg'
import control01 from '../../assets/images/control01.svg'
import control02 from '../../assets/images/control02.svg'
import control03 from '../../assets/images/control03.svg'
import tabpanel from '../../assets/images/Tabpanel → image.svg'
const EverythingInControl = () => {
  return (
    <div className="EverythingInControl">
        <Container>
            <div className=" control-content">
                    <div className="subsection-img">
                        <img src={controlLogo} alt="" />
                    </div>
                    <h4>
                        Everything in your control
                    </h4>
                    <h6>
                        All the features you need to manage your email sending, troubleshoot with
                        detailed logs, and protect your domain reputation – without the friction.
                    </h6>
            </div>
            <div className="row m-auto">
                <div className="col-lg-4 col-sm-12 m-auto">
                    <div className="card-control">
                        <div className="card-control-img">
                            <img src={control01} alt="" />
                        </div>
                        <p>Intuitive analytics</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card-control">
                        <div className="card-control-img">
                            <img src={control02} alt="" />
                        </div>
                        <p>Full Visibility</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card-control">
                        <div className="card-control-img">
                            <img src={control03} alt="" />
                        </div>
                        <p>Domain Authentication</p>
                    </div>
                </div>
            </div>

            <div className="tabPanel">
                <img src={tabpanel} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default EverythingInControl