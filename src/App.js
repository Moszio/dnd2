
import './App.css';


function App() {
  // Usestate 
  // This syntax is called JSX = Javascript code 
  // returns a state variable and a function to update it

  return (
    <div className='screen'>
      <video autoPlay muted loop id="myVideo">
      <source src="./H264HD1080.mov" type="video/mp4"/>
      </video>
      <div className="" id="fs-overlay">

      <img id='header-img'
      src={'https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png'} alt="" />
      <div className='menu-links'>
        <h3>Create Character</h3>
        <h3>About Dungeons of Dragons</h3>
      </div>
      </div>
    </div>
  );  
}

export default App;

