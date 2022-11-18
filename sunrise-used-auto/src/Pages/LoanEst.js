// import React, { useState, useEffect } from "react";
// import {db} from './firebase_LoanEst-config'
// import {collection, getDocs, addDoc} from 'firebase/firestore';



// function LoanEst() {
//   const [credit, setCredit] = useState('');
//   const cred = event => {setCredit(event.target.value);};
//   const send = async () => {
//     const content = "http://127.0.0.1:5000"
//     const todo = { content };
//     const response = await fetch("/add_todo", {
//     method: "GET",
//     headers: {
//     'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify(todo)
//     })
//     if (response.ok){
//      console.log("it worked")
//     onNewTodo(todo)
//     setContent('')
//     }
//   }
    

//   const [data, setdata] = useState({
//     credit: credit,
//   });



  
//   return (

//     <div className="LoanEst">
//       <div className='loanEstBox'>
//         <div className='TopBar'>
//             <title className='Title'>Loan Estimator</title>
//         </div>
//         <div className='Outputs'> 
//           <h1 className='Results'>Results:</h1>
          
//         </div>
//         <div className="inputs">
//           <form action = "http://localhost:5000/result" method = "POST">
//             <div className='CarPrice'>
//               <p className='PriceText'>Car Price:</p>
//               <input type='number' className='PriceInput'onChange={cred}></input>
//             </div>
//             <div className='DownPay'>
//               <p className='DownPayText'>Down Payment:</p>
//               <input type='number' className='DownPayInput'onChange={cred} ></input>
//             </div>
//             <div className='LLength'>
//               <p className='LLengthText'>Lenght:</p>
//               <input type='number' className='LLengthInput'onChange={cred} ></input>
//             </div>
//             <div className='Credit'>
//               <p className='CreditText'>Credit Score:</p>
//               <input type='number' className='CreditInput' id='credit' value ={credit} onChange={cred} ></input>
//             </div>
//             <div className='Enter'>
//               <button onClick={send} className='enterBtn'>Enter</button>
//             </div>
//           </form>
//         </div>


//       </div>
//     </div>
//   );
// }




// export default LoanEst;