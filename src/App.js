
import './App.css';
import logoFreeCode from './assets/logo-code.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from  './components/Button.js'
import Counter from  './components/Counter.js'
import {useState} from 'react'

function App() {

  const [numClicks, setNumClicks]=useState(0);

  const handlerClick=()=>{
    setNumClicks(numClicks+1);
    
    
  };
  const handlerRestart=()=>{
    setNumClicks(0);
    
  };

  return (
    <div className="App">
      <div className="container ">
        <div className="row  ">
          <div className="col d-flex justify-content-center mt-5">
            <img src={logoFreeCode} alt="" /></div>
        </div>
        <div className="row">
          <div className="col">
            <Counter
            numClicks={numClicks}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6  d-flex justify-content-end"> 
            <Button 
              text='CLICK'
              ifBtnClick={true}
              handleClick={handlerClick}/>
            
              
          </div>
          <div className="col-6  d-flex justify-content-start ">
                <Button
                  text='RESTART'
                  ifBtnClick={false}
                  handleClick={handlerRestart}/>
             
              </div>
        </div>
       
        
        


      </div>

    </div>
  );
}

export default App;
