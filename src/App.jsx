
import './App.css'
import Container from './Components/Container/Container'
import {Hero , Footer,NavBar,Companies, ReachHuman,EverythingInControl,SubSectionOne,SubSectionTwo,FirstClass,EmailReimagened,DevelopEmail,Integrate} from './Sections/index'

function App() {


  return (
    <>
      
      <NavBar/>
      <Container>
      <Hero/>
        
        <Companies/>
        <Integrate/>
        <FirstClass/>
        <DevelopEmail/>
        <ReachHuman/>
        <SubSectionOne/>
        <EverythingInControl/>
        <SubSectionTwo/>
        <EmailReimagened/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
