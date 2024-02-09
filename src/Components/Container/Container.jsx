import './Container.css'



const Container = (props) => {
  
  return (
    // eslint-disable-next-line react/prop-types
    <div className='container main-container'>{props.children}</div>
  )
}

export default Container