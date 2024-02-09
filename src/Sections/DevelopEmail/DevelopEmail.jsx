import { Container } from 'react-bootstrap'
import './DevelopEmail.css'
import developemail from '../../assets/images/developemail.png'
import arrow from '../../assets/images/arrow_btn.svg'
import laptop from '../../assets/images/laptop.svg'
import mobile from '../../assets/images/mobile.svg'
import moon from '../../assets/images/moon.svg'
import sun from '../../assets/images/sun.svg'
import pre from '../../assets/images/Pre.png'
import circle from '../../assets/images/circle-pre.png'
const DevelopEmail = () => {
    return (
        <div className="DevelopEmail">
            <Container>
                <div className=" control-content">
                        <div className="subsection-img">
                            <img src={developemail} alt="" />
                        </div>
                        <h4>
                            Develop emails using React
                        </h4>
                        <h6 className='developemail-text'>
                            Create beautiful templates without having to deal with layouts and HTML.
                            Powered by react-email, our open source component library.
                        </h6>

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
                </div>

                <div className="frame">
                    <div className="frame-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="35" viewBox="0 0 46 35" fill="none">
                            <rect y="12.8099" width="10" height="10" rx="5" fill="#F26669"/>
                            <rect x="18" y="12.8099" width="10" height="10" rx="5" fill="#FFCB47"/>
                            <rect x="36" y="12.8099" width="10" height="10" rx="5" fill="#42FFA4" fill-opacity="0.698"/>
                        </svg>
                        <div className="icons-side">
                            <div className="icons-i">
                                <a href="#">
                                    <img src={laptop} alt="" />
                                </a>
                                <a href="#">
                                    <img src={mobile} alt="" />
                                </a>
                            </div>
                            <div className="icons-i">
                                <a href="#">
                                    <img src={moon} alt="" />
                                </a>
                                <a href="#">
                                    <img src={sun} alt="" />
                                </a>
                                
                            </div>
                        </div>

                    </div>
                    <div className="frame-sides">
                        <div className="aside">
                            <div className="tablist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M17 4.30988H7C5.34315 4.30988 4 5.65302 4 7.30988V17.3099C4 18.9667 5.34315 20.3099 7 20.3099H17C18.6569 20.3099 20 18.9667 20 17.3099V7.30988C20 5.65302 18.6569 4.30988 17 4.30988Z" fill="#3CABFF" fill-opacity="0.25"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9043 17.0419V18.6063C14.1587 18.7367 14.4594 18.8344 14.8067 18.8996C15.1539 18.9648 15.5199 18.9974 15.9047 18.9974C16.2796 18.9974 16.6358 18.9616 16.9733 18.8898C17.3107 18.8182 17.6067 18.7 17.861 18.5354C18.1153 18.3708 18.3166 18.1557 18.465 17.8901C18.6133 17.6245 18.6875 17.2961 18.6875 16.905C18.6875 16.6215 18.6451 16.373 18.5603 16.1595C18.4756 15.946 18.3533 15.7562 18.1935 15.59C18.0338 15.4237 17.8422 15.2746 17.6189 15.1426C17.3955 15.0106 17.1437 14.886 16.8632 14.7686C16.6578 14.6839 16.4736 14.6016 16.3106 14.5218C16.1476 14.4419 16.009 14.3604 15.8949 14.2773C15.7807 14.1942 15.6927 14.1062 15.6308 14.0133C15.5688 13.9204 15.5378 13.8153 15.5378 13.698C15.5378 13.5905 15.5656 13.4935 15.621 13.4071C15.6764 13.3207 15.7547 13.2466 15.8558 13.1847C15.9568 13.1228 16.0807 13.0747 16.2274 13.0405C16.3742 13.0062 16.5372 12.9891 16.7165 12.9891C16.8469 12.9891 16.9847 12.9989 17.1298 13.0185C17.2749 13.038 17.4208 13.0682 17.5675 13.1089C17.7143 13.1496 17.8569 13.201 17.9955 13.2629C18.134 13.3248 18.262 13.3965 18.3794 13.478V12.0163C18.1414 11.925 17.8813 11.8574 17.5993 11.8134C17.3173 11.7694 16.9937 11.7474 16.6285 11.7474C16.2568 11.7474 15.9047 11.7873 15.5721 11.8672C15.2395 11.947 14.9469 12.0717 14.6942 12.2412C14.4415 12.4107 14.2418 12.6266 14.0951 12.8889C13.9484 13.1513 13.875 13.465 13.875 13.83C13.875 14.2961 14.0095 14.6937 14.2785 15.0229C14.5475 15.352 14.9558 15.6307 15.5036 15.8588C15.7188 15.9468 15.9193 16.0332 16.1052 16.1179C16.291 16.2027 16.4516 16.2907 16.5869 16.3819C16.7222 16.4732 16.829 16.5726 16.9073 16.6801C16.9855 16.7877 17.0247 16.9099 17.0247 17.0468C17.0247 17.1478 17.0002 17.2415 16.9513 17.3279C16.9024 17.4143 16.8282 17.4892 16.7288 17.5528C16.6293 17.6163 16.5054 17.666 16.3571 17.7019C16.2087 17.7377 16.0351 17.7557 15.8362 17.7557C15.4971 17.7557 15.1613 17.6962 14.8287 17.5772C14.4961 17.4583 14.188 17.2798 13.9043 17.0419ZM11.2744 13.1875H13.2812V11.9037H7.6875V13.1875H9.68456V18.9037H11.2744V13.1875Z" fill="#3CABFF"/>
                                </svg>
                                <span>user-welcome.tsx</span>
                            </div>
                            <div className="tablist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M17 4.30988H7C5.34315 4.30988 4 5.65302 4 7.30988V17.3099C4 18.9667 5.34315 20.3099 7 20.3099H17C18.6569 20.3099 20 18.9667 20 17.3099V7.30988C20 5.65302 18.6569 4.30988 17 4.30988Z" fill="#EFF5FF" fill-opacity="0.1735"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9043 17.0419V18.6063C14.1587 18.7367 14.4594 18.8344 14.8067 18.8996C15.1539 18.9648 15.5199 18.9974 15.9047 18.9974C16.2796 18.9974 16.6358 18.9616 16.9733 18.8898C17.3107 18.8182 17.6067 18.7 17.861 18.5354C18.1153 18.3708 18.3166 18.1557 18.465 17.8901C18.6133 17.6245 18.6875 17.2961 18.6875 16.905C18.6875 16.6215 18.6451 16.373 18.5603 16.1595C18.4756 15.946 18.3533 15.7562 18.1935 15.59C18.0338 15.4237 17.8422 15.2746 17.6189 15.1426C17.3955 15.0106 17.1437 14.886 16.8632 14.7686C16.6578 14.6839 16.4736 14.6016 16.3106 14.5218C16.1476 14.4419 16.009 14.3604 15.8949 14.2773C15.7807 14.1942 15.6927 14.1062 15.6308 14.0133C15.5688 13.9204 15.5378 13.8153 15.5378 13.698C15.5378 13.5905 15.5656 13.4935 15.621 13.4071C15.6764 13.3207 15.7547 13.2466 15.8558 13.1847C15.9568 13.1228 16.0807 13.0747 16.2274 13.0405C16.3742 13.0062 16.5372 12.9891 16.7165 12.9891C16.8469 12.9891 16.9847 12.9989 17.1298 13.0185C17.2749 13.038 17.4208 13.0682 17.5675 13.1089C17.7143 13.1496 17.8569 13.201 17.9955 13.2629C18.134 13.3248 18.262 13.3965 18.3794 13.478V12.0163C18.1414 11.925 17.8813 11.8574 17.5993 11.8134C17.3173 11.7694 16.9937 11.7474 16.6285 11.7474C16.2568 11.7474 15.9047 11.7873 15.5721 11.8672C15.2395 11.947 14.9469 12.0717 14.6942 12.2412C14.4415 12.4107 14.2418 12.6266 14.0951 12.8889C13.9484 13.1513 13.875 13.465 13.875 13.83C13.875 14.2961 14.0095 14.6937 14.2785 15.0229C14.5475 15.352 14.9558 15.6307 15.5036 15.8588C15.7188 15.9468 15.9193 16.0332 16.1052 16.1179C16.291 16.2027 16.4516 16.2907 16.5869 16.3819C16.7222 16.4732 16.829 16.5726 16.9073 16.6801C16.9855 16.7877 17.0247 16.9099 17.0247 17.0468C17.0247 17.1478 17.0002 17.2415 16.9513 17.3279C16.9024 17.4143 16.8282 17.4892 16.7288 17.5528C16.6293 17.6163 16.5054 17.666 16.3571 17.7019C16.2087 17.7377 16.0351 17.7557 15.8362 17.7557C15.4971 17.7557 15.1613 17.6962 14.8287 17.5772C14.4961 17.4583 14.188 17.2798 13.9043 17.0419ZM11.2744 13.1875H13.2812V11.9037H7.6875V13.1875H9.68456V18.9037H11.2744V13.1875Z" fill="#EFF5FF" fill-opacity="0.694"/>
                            </svg>
                                <span>reset-password.tsx</span>
                            </div>
                            <div className="tablist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M17 4.30988H7C5.34315 4.30988 4 5.65302 4 7.30988V17.3099C4 18.9667 5.34315 20.3099 7 20.3099H17C18.6569 20.3099 20 18.9667 20 17.3099V7.30988C20 5.65302 18.6569 4.30988 17 4.30988Z" fill="#EFF5FF" fill-opacity="0.1735"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9043 17.0419V18.6063C14.1587 18.7367 14.4594 18.8344 14.8067 18.8996C15.1539 18.9648 15.5199 18.9974 15.9047 18.9974C16.2796 18.9974 16.6358 18.9616 16.9733 18.8898C17.3107 18.8182 17.6067 18.7 17.861 18.5354C18.1153 18.3708 18.3166 18.1557 18.465 17.8901C18.6133 17.6245 18.6875 17.2961 18.6875 16.905C18.6875 16.6215 18.6451 16.373 18.5603 16.1595C18.4756 15.946 18.3533 15.7562 18.1935 15.59C18.0338 15.4237 17.8422 15.2746 17.6189 15.1426C17.3955 15.0106 17.1437 14.886 16.8632 14.7686C16.6578 14.6839 16.4736 14.6016 16.3106 14.5218C16.1476 14.4419 16.009 14.3604 15.8949 14.2773C15.7807 14.1942 15.6927 14.1062 15.6308 14.0133C15.5688 13.9204 15.5378 13.8153 15.5378 13.698C15.5378 13.5905 15.5656 13.4935 15.621 13.4071C15.6764 13.3207 15.7547 13.2466 15.8558 13.1847C15.9568 13.1228 16.0807 13.0747 16.2274 13.0405C16.3742 13.0062 16.5372 12.9891 16.7165 12.9891C16.8469 12.9891 16.9847 12.9989 17.1298 13.0185C17.2749 13.038 17.4208 13.0682 17.5675 13.1089C17.7143 13.1496 17.8569 13.201 17.9955 13.2629C18.134 13.3248 18.262 13.3965 18.3794 13.478V12.0163C18.1414 11.925 17.8813 11.8574 17.5993 11.8134C17.3173 11.7694 16.9937 11.7474 16.6285 11.7474C16.2568 11.7474 15.9047 11.7873 15.5721 11.8672C15.2395 11.947 14.9469 12.0717 14.6942 12.2412C14.4415 12.4107 14.2418 12.6266 14.0951 12.8889C13.9484 13.1513 13.875 13.465 13.875 13.83C13.875 14.2961 14.0095 14.6937 14.2785 15.0229C14.5475 15.352 14.9558 15.6307 15.5036 15.8588C15.7188 15.9468 15.9193 16.0332 16.1052 16.1179C16.291 16.2027 16.4516 16.2907 16.5869 16.3819C16.7222 16.4732 16.829 16.5726 16.9073 16.6801C16.9855 16.7877 17.0247 16.9099 17.0247 17.0468C17.0247 17.1478 17.0002 17.2415 16.9513 17.3279C16.9024 17.4143 16.8282 17.4892 16.7288 17.5528C16.6293 17.6163 16.5054 17.666 16.3571 17.7019C16.2087 17.7377 16.0351 17.7557 15.8362 17.7557C15.4971 17.7557 15.1613 17.6962 14.8287 17.5772C14.4961 17.4583 14.188 17.2798 13.9043 17.0419ZM11.2744 13.1875H13.2812V11.9037H7.6875V13.1875H9.68456V18.9037H11.2744V13.1875Z" fill="#EFF5FF" fill-opacity="0.694"/>
                                </svg>
                                <span>user-invite.tsx</span>
                            </div>
                            <div className="tablist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M17 4.30988H7C5.34315 4.30988 4 5.65302 4 7.30988V17.3099C4 18.9667 5.34315 20.3099 7 20.3099H17C18.6569 20.3099 20 18.9667 20 17.3099V7.30988C20 5.65302 18.6569 4.30988 17 4.30988Z" fill="#EFF5FF" fill-opacity="0.1735"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9043 17.0419V18.6063C14.1587 18.7367 14.4594 18.8344 14.8067 18.8996C15.1539 18.9648 15.5199 18.9974 15.9047 18.9974C16.2796 18.9974 16.6358 18.9616 16.9733 18.8898C17.3107 18.8182 17.6067 18.7 17.861 18.5354C18.1153 18.3708 18.3166 18.1557 18.465 17.8901C18.6133 17.6245 18.6875 17.2961 18.6875 16.905C18.6875 16.6215 18.6451 16.373 18.5603 16.1595C18.4756 15.946 18.3533 15.7562 18.1935 15.59C18.0338 15.4237 17.8422 15.2746 17.6189 15.1426C17.3955 15.0106 17.1437 14.886 16.8632 14.7686C16.6578 14.6839 16.4736 14.6016 16.3106 14.5218C16.1476 14.4419 16.009 14.3604 15.8949 14.2773C15.7807 14.1942 15.6927 14.1062 15.6308 14.0133C15.5688 13.9204 15.5378 13.8153 15.5378 13.698C15.5378 13.5905 15.5656 13.4935 15.621 13.4071C15.6764 13.3207 15.7547 13.2466 15.8558 13.1847C15.9568 13.1228 16.0807 13.0747 16.2274 13.0405C16.3742 13.0062 16.5372 12.9891 16.7165 12.9891C16.8469 12.9891 16.9847 12.9989 17.1298 13.0185C17.2749 13.038 17.4208 13.0682 17.5675 13.1089C17.7143 13.1496 17.8569 13.201 17.9955 13.2629C18.134 13.3248 18.262 13.3965 18.3794 13.478V12.0163C18.1414 11.925 17.8813 11.8574 17.5993 11.8134C17.3173 11.7694 16.9937 11.7474 16.6285 11.7474C16.2568 11.7474 15.9047 11.7873 15.5721 11.8672C15.2395 11.947 14.9469 12.0717 14.6942 12.2412C14.4415 12.4107 14.2418 12.6266 14.0951 12.8889C13.9484 13.1513 13.875 13.465 13.875 13.83C13.875 14.2961 14.0095 14.6937 14.2785 15.0229C14.5475 15.352 14.9558 15.6307 15.5036 15.8588C15.7188 15.9468 15.9193 16.0332 16.1052 16.1179C16.291 16.2027 16.4516 16.2907 16.5869 16.3819C16.7222 16.4732 16.829 16.5726 16.9073 16.6801C16.9855 16.7877 17.0247 16.9099 17.0247 17.0468C17.0247 17.1478 17.0002 17.2415 16.9513 17.3279C16.9024 17.4143 16.8282 17.4892 16.7288 17.5528C16.6293 17.6163 16.5054 17.666 16.3571 17.7019C16.2087 17.7377 16.0351 17.7557 15.8362 17.7557C15.4971 17.7557 15.1613 17.6962 14.8287 17.5772C14.4961 17.4583 14.188 17.2798 13.9043 17.0419ZM11.2744 13.1875H13.2812V11.9037H7.6875V13.1875H9.68456V18.9037H11.2744V13.1875Z" fill="#EFF5FF" fill-opacity="0.694"/>
                                </svg>
                                <span>
                                    
                                    weekly-digest.tsx
                                </span>
                            </div>
                        </div>
                        <div className="pre">
                            <div className="pre-one">
                                <img src={pre} alt="" />
                            </div>
                            <div className="pre-two">
                                <div className="pre-two-head">
                                    <img src={circle} alt="" />
                                    <h4>Welcome to <strong>ACME</strong>, user!</h4>
                                </div>
                                <div className="pre-two-text">
                                    <h6>Hello newuser,</h6>
                                    <p>
                                        We're excited to have you onboard at <span>ACME</span>. We hope you
                                        enjoy your journey with us. If you have any questions or need
                                        assistance, feel free to reach out.
                                    </p>
                                </div>
                                <div className="pre-two-btn text-center">
                                    <button className='mt-3'>GET STARTED</button>
                                </div>
                                <div className="pre-two-footer">
                                    <h5 className='mt-5'>
                                        Cheers,
                                        The ACME Team
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default DevelopEmail