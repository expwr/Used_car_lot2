import React, { useState, useEffect } from "react";
import CanvasJSReact from './graph/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



function LoanEst() {
  const [credit, setCredit] = useState('');
  const intrest =33
  const Princeple =33
  const tax = 33


  const cred = event => {setCredit(event.target.value); };
  const send = async () => {
    const everything = {credit}
    const responce = await fetch('/result', {
        method: 'POST',
        headers: {
            "name": 'credit',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({everything})
    })

  }

  const [data, setData] = useState([{}]);


  useEffect(() => {
    
    fetch('/result').then(
         res => res.json().then(
            data => {
                setData(data)
                console.log(data)
            }
         )
    )
  }, []);
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title:{
      text: "Cost"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",		
      startAngle: -90,
      dataPoints: [
        { y: intrest, label: "Intrest" },
        { y: tax, label: "Tax" },
        { y: Princeple, label: "Princeple" }
      ]
    }]
  };


  return (

    <div className="LoanEst">
      <div className='loanEstBox'>
        <div className='TopBar'>
            <title className='Title'>Loan Estimator</title>
        </div>
        <div className='Outputs'> 
            <h1 className='Results'>Results:</h1>
            <div className="inputresults">
                {(typeof data.credits === 'undefined')? (
                    <p>Loading...</p>
                ) : (
                    data.credits.map((credits, i) => (
                        <p className={i}>{credits}</p>
                    ))
                )}
            </div>
            <div className="PieLine">
              <button className="Pie">Pie</button>
              <button className="Line">Line</button>
            </div>
            <div className="Pies" id="Pies">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		        </div>
        </div>
        <div className="inputs">
          <form >
            <div className='CarPrice'>
              <p className='PriceText'>Car Price:</p>
              <input type='number' className='PriceInput'onChange={cred}></input>
            </div>
            <div className='DownPay'>
              <p className='DownPayText'>Down Payment:</p>
              <input type='number' className='DownPayInput'onChange={cred} ></input>
            </div>
            <div className='LLength'>
              <p className='LLengthText'>Lenght:</p>
              <input type='number' className='LLengthInput'onChange={cred} ></input>
            </div>
            <div className='Credit'>
              <p className='CreditText'>Credit Score:</p>
              <input type='number' className='CreditInput' id='credit' value ={credit} onChange={cred} ></input>
            </div>
            <div className='Enter'>
              <button onClick={send} className='enterBtn'>Enter</button>
            </div>
          </form>
        </div>


      </div>
    </div>
  );
}




export default LoanEst;