import './HumanCards.css'

const HumanCards = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-reachhuman">
                    <img src={props.image} alt="" />
                    <h1 className='card-human-title'>{props.title}</h1>
                    <p className='card-human-text'>
                        {props.paragraph}
                    </p>
            </div>
        </div>
        
    )
}

export default HumanCards