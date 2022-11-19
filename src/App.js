
import './App.css';
import DollarIcon from './assets/icons/icon-dollar.svg'
import InputField from './components/InputField/InputField'
import SubmitButton from './components/SubmitButton/SubmitButton'
import Button from './components/Button/Button'
import {useState} from 'react'

function App(props) {

  const [data, setData] = useState({
    billTotal: 0,
    tipType: 0,
    numberOfPeople:0,
    pers:0
  });

  const handleChange = (event) => {
    const title = event.target.getAttribute('title')
    setData({ ...data, [title]: event.target.value });

    console.log('billTotal', data.billTotal)
    console.log('numberOfPeople', data.numberOfPeople)
    if(data.billTotal !== 0 && data.numberOfPeople !== 0) {
    handleTips(data)
    }
  };

  function handleTips (data) {
   
      const bill = data.billTotal
      const people  = data.numberOfPeople
    return (
      console.log(data.perc)
    )
  };



 

  return (
    <div className="App">
      <div className='calclulator-wrap'>
          <div className='input_panel'>
            <InputField 
              inputFieldLabel="Bill"  
              src={DollarIcon} 
              onChange={handleChange}
              title="billTotal"
              
               />
            <div className='buttonsWrap'>
              <label className='calcLabel'>Select Tip %</label>
              <div className='buttonsLine'>
                <Button title="5"/>
                <Button title="10"/>
                <Button title="15"/>
              </div>
              <div className='buttonsLine'>
                <Button title="25"/>
                <Button title="50"/>
                <input
                  placeholder='Custom'
                  className='custom-input'
                  title="tipType"
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <InputField 
              inputFieldLabel=" Number of People"  
              src={DollarIcon}  
              inputFieldValue="11.2"  
              value="142.55"
              onChange={handleChange}
              title="numberOfPeople"
               />
          </div>
          <div className='output_panel amount'>
            <div className='output-data-line'>
              <div className='output-line-title-wrap'>
                <p className='output-line-title'>Tip Amount</p>
                <p className='output-line-subtitle'>/ Person</p>
              </div>
              <div className='output-line-value'>
                {data.perc}
              </div>
            </div>
            <div className='output-data-line total'>
              <div className='output-line-title-wrap'>
                <p className='output-line-title'>Total</p>
                <p className='output-line-subtitle'>/ Person</p>
              </div>
              <div className='output-line-value'>
                232
              </div>
            </div>
            <div className='submitButtonWrap'>
              <SubmitButton/>
            </div>
            
          </div>
      </div>
    </div>
  );
}

export default App;
