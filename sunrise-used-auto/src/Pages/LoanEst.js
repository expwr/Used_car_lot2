import React from "react";

function LoanEst() {
  
  return (
    <div className="LoanEst">
      
      <div class='loanEstBox'>
        <div class='TopBar'>
            <title class='Title'>Estimator</title>
          </div>
          <div class='CreditBox'>
            <input type='text'class='CreditInput'></input>
            <h1 class='CredText'>Credit Score</h1>
          </div>
          <div class='priceBox'>
            <input type='text'class='priceInput'></input>
            <h1 class='priceText'>Car Price</h1>
          </div>
          <div class='lengthBox'>
            <input type='text'class='lengthInput'></input>
            <h1 class='lengthText'>Loan Length</h1>
          </div>
          <div class='DownPayBox'>
            <input type='text'class='DownPayInput'></input>
            <h1 class='DownPayText'>Down Payment</h1>
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
          </div>
      </div>
    </div>
  );
}




export default LoanEst;