import './Card.css'

const CardCompaniesLogo = (props) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-12 m-auto">
        <a href="/#" >
          <img src={props.image} alt=""  className='card-logo'/>
        </a>
    </div>
  )
}

export default CardCompaniesLogo