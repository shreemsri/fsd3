import './App.css'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange'
import UserProfile from './components/UserProfile'
import ImageMnipulation from './components/ImageMnipulation'

function App() {
  return (
    <>
    <div style={{border:"2px solid black", width:"500px",height:"500px", margin:"20px", padding:"20px" , backgroundColor:"white"}}>
      <ImageMnipulation />
    </div>
    </>
  )
}
export default App
