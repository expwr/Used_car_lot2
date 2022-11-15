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
      <div className='loanEstBox'>
        <div className='TopBar'>
            <title className='Title'>Loan Estimator</title>
        </div>
        <div className='Outputs'> 
          <h1 className='Results'>Results:</h1>
        </div>
        <div className="inputs">
          <div className='CarPrice'>
            <p className='PriceText'>Car Price:</p>
            <input type='number' className='PriceInput'onChange={(event) => {setNewPrice(event.target.value)}}></input>
          </div>
          <div className='DownPay'>
            <p className='DownPayText'>Down Payment:</p>
            <input type='number' className='DownPayInput'onChange={(event) => {setNewDownPay(event.target.value)}}></input>
          </div>
          <div className='LLength'>
            <p className='LLengthText'>Lenght:</p>
            <input type='number' className='LLengthInput'onChange={(event) => {setNewLength(event.target.value)}}></input>
          </div>
          <div className='Credit'>
            <p className='CreditText'>Credit Score:</p>
            <input type='number' className='CreditInput' onChange={(event) => {setNewCredit(event.target.value)}}></input>
          </div>
          <div className='Enter'>
            <button onClick={createEst} className='enterBtn'>Enter</button>
          </div>

        </div>


      </div>
    </div>
  );
}




export default LoanEst;