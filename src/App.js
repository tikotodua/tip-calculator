
import './App.css';
import DollarIcon from './assets/icons/icon-dollar.svg'
import InputField from './components/InputField/InputField'
import SubmitButton from './components/SubmitButton/SubmitButton'
import Button from './components/Button/Button'
import {useState, useEffect} from 'react'

function App(props) {

  const initialState = {
    billTotal: 0,
    tipType: 0,
    numberOfPeople:0,
    tipAmount:0
  };

  const [data, setData] = useState(initialState);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  const handleChange = (event) => {
    const title = event.target.getAttribute('title')
    setData({ ...data, [title]: event.target.value });
    console.log(event.target.value)
  };

  useEffect(() => {
    if(data.billTotal !== 0 && data.numberOfPeople !== 0 && data.tipType !== 0) {
      calculateTipAmount(data);
    }
    
  }, [data]);

  const resetState = () => {
    setData(initialState);
    setTipAmount(0)
    setTotalTip(0)
   
    console.log('initialState',initialState)
    console.log('data',data)
  };
 


  const calculateTipAmount = Values => {
    const {
      billTotal,
      tipType,
      numberOfPeople,
    } = Values;

    const tipAmount = billTotal/100 * tipType / numberOfPeople;
    const totalTip = billTotal/100 * tipType
    setTipAmount(tipAmount);
    setTotalTip(totalTip)
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
                <Button value="5" title="tipType"  onClick={handleChange} />
                <Button value="10" title="tipType" onClick={handleChange}/>
                <Button value="15" title="tipType" onClick={handleChange}/>
              </div>
              <div className='buttonsLine'>
                <Button onClick={handleChange} value="25" title="tipType"/>
                <Button value="50" title="tipType" onClick={handleChange}/>
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
                {tipAmount}
              </div>
            </div>
            <div className='output-data-line total'>
              <div className='output-line-title-wrap'>
                <p className='output-line-title'>Total</p>
                <p className='output-line-subtitle'>/ Person</p>
              </div>
              <div className='output-line-value'>
               {totalTip}
              </div>
            </div>
            <div className='submitButtonWrap'>
              <SubmitButton onClick={resetState}/>
            </div>
            
          </div>
      </div>
    </div>
  );
}

export default App;
