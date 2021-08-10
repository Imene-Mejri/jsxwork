import logo from './logo.svg';
import './App.css';
import pic from './pic.jpg';

function App() {

  return (
    <div className="App">
     <div>
        <div className='style' style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
   
    <br />
          <img src={pic} alt='pic'/>
              </div>
          <br />
          <img src="/20.jpg" />
          <br />
          </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
