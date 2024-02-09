import './Buttons.css'

const PrimaryButton = (props) => {
  return (
    <div className='button primary-btn'>
            <a href="/#">
                {props.children}
            </a>
    </div>
  )
}

const SecondaryButton = (props) => {
  return (
    <div className='button secondary-btn'>
            <a href="/#">
                {props.children}
                
            </a>
    </div>
  )
}

const thirdButton = (props) => {
  return (
    <a href="#" className='third-btn'>
      {props.children}
    </a>
  )
}

export default PrimaryButton
export {SecondaryButton , thirdButton}