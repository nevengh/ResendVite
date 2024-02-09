import './ReachHuman.css'
import ReachHumanData from '../../Data/ReachHumanData'
import HumanCards from '../../Components/HumanCards/HumanCards'
const ReachHuman = () => {
    const humancards = ReachHumanData.map(cards=>{
        return <HumanCards key={cards.id} image={cards.image} title={cards.title} paragraph={cards.paragraph}   />
    })
    return (
        <div className="Reachhuman sec-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='ne-reachhuman-title'>
                        Reach humans,
                        not spam folders
                    </h1>
                </div>
            </div>

            <div className="row">
                {humancards}
            </div>

            
        </div>
    )
}

export default ReachHuman