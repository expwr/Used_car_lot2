import React from "react";

function LoanEst() {
  
  return (
    <div className="LoanEst">
      
      <div class='loanEstBox'>
        <div class='TopBar'>
            <title class='Title'>Loan Estimator</title>
        </div>
        <div className="inputs">
          <div class='CarPrice'>
            <p class='PriceText'>Car Price:</p>
            <input type='text' class='PriceInput'></input>
          </div>
          <div class='DownPay'>
            <p class='DownPayText'>Down Payment:</p>
            <input type='text' class='DownPayInput'></input>
          </div>
          <div class='LLength'>
            <p class='LLengthText'>Lenght:</p>
            <input type='text' class='LLengthInput'></input>
          </div>
          <div class='Credit'>
            <p class='CreditText'>Credit Score:</p>
            <input type='text' class='CreditInput'></input>
          </div>
        </div>
          
          
          
          
          
          
          
          
          
          
          
          {/*  Old Design
           <div class='CreditBox'>
            <input type='text'class='CreditInput' placeholder='720'></input>
            <button type='submit'></button>
            <h1 class='CredText'>Credit Score</h1>
          </div>
          <div class='priceBox'>
            <input type='text'class='priceInput'placeholder='10,000'></input>
            <h1 class='priceText'>Car Price</h1>
          </div>
          <div class='lengthBox'>
            <input type='text'class='lengthInput'placeholder='60 months'></input>
            <h1 class='lengthText'>Loan Length</h1>
          </div>
          <div class='DownPayBox'>
            <input type='text'class='DownPayInput' placeholder='Yes/No'></input>
            <h1 class='DownPayText'>Down Payment?</h1>
          </div>
          <div class='TradeInBox'>
            <input type='text'class='TradeInInput'></input>
            <h1 class='TradeInText'>Trade In</h1>
          </div>
          <div class='IncomeBox'>
            <input type='text'class='IncomeInput'></input>
            <h1 class='IncomeText'>Your Income</h1>
          </div>
          <div class='ExtraBox'>
            <input type='text'class='ExtraInput'></input>
            <h1 class='ExtraText'>Any Extras?</h1>
          </div> */}
      </div>
    </div>
  );
}




export default LoanEst;