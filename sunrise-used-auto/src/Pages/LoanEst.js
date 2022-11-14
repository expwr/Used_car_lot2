import React, { useState, useEffect } from "react";
import {db} from './firebase_LoanEst-config'
import {collection, getDocs, addDoc} from 'firebase/firestore';

function LoanEst() {
  const [newCredit, setNewCredit] = useState(0)
  const [newDownPay, setNewDownPay] = useState(0)
  const [newLength, setNewLength] = useState(0)
  const [newPrice, setNewPrice] = useState(0)
  const [LoanUserData, setLoanUserData] =useState([]);
  const LoanCollectionRef = collection(db, 'LoanUserData')

  const createEst = async () => {
    await addDoc(LoanCollectionRef, {credit: newCredit, downpay: newDownPay, length: newLength, price: newPrice});
  }
  useEffect(()=> {

    const getUsers = async () => {
      const data=await getDocs(LoanCollectionRef);
      setLoanUserData(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])
  return (

    <div className="LoanEst">
      <div class='loanEstBox'>
        <div class='TopBar'>
            <title class='Title'>Loan Estimator</title>
        </div>
        <div className="inputs">
          <div class='CarPrice'>
            <p class='PriceText'>Car Price:</p>
            <input type='number' class='PriceInput'onChange={(event) => {setNewPrice(event.target.value)}}></input>
          </div>
          <div class='DownPay'>
            <p class='DownPayText'>Down Payment:</p>
            <input type='number' class='DownPayInput'onChange={(event) => {setNewDownPay(event.target.value)}}></input>
          </div>
          <div class='LLength'>
            <p class='LLengthText'>Lenght:</p>
            <input type='number' class='LLengthInput'onChange={(event) => {setNewLength(event.target.value)}}></input>
          </div>
          <div class='Credit'>
            <p class='CreditText'>Credit Score:</p>
            <input type='number' class='CreditInput' onChange={(event) => {setNewCredit(event.target.value)}}></input>
          </div>
          <div class='Enter'>
            <p class='enterText'>Enter:</p>
            <button onClick={createEst} class='enterBtn'>Enter</button>
          </div>
          <div className='Outputs'>
            
            {LoanUserData.map((LoanUserData)=>{
              return (
              <div> 
                {''}
                <h1>Credit: {LoanUserData.Credit}</h1>
                <h1>DownPay: {LoanUserData.DownPay}</h1>
                <h1>Length: {LoanUserData.Length}</h1>
                <h1>Price: {LoanUserData.Price}</h1>
              </div>
              );
            })}
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