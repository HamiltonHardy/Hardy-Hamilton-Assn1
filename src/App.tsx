import { useEffect, useState } from 'react'
import './App.css'
import { SignUpPage } from './pages/SignUpPage';


interface RandQuoteProps{
  author: string,
  content: string
}




async function GetRandQuote(){
  const result =  await fetch("https://api.quotable.io/random");
  // console.log(result.json())
  return result.json()
}


export function RandQuote({author, content} : RandQuoteProps){
  return(
    <div>
      <p className='quote'>{content}</p>
      <p className='author'>-{author}</p>
      </div>
  )
}


export function App() {
  const [response, setResponse] = useState({})
  useEffect(() => {
    GetRandQuote().then(data => setResponse(data))
  }, [])
  
  const sol = JSON.parse(JSON.stringify(response))
  //For some reason I need to stringify and then reparse
  return (
    <div>
      <h1 className='quote'>
        Quote Search
      </h1>
      <label>
        <input type = "text" placeholder='search'/>
      </label>
      <RandQuote author={sol.author} content={sol.content}/>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </div>
      
  </div>
  )
}


// async function GetRandQuote(){
//   const result =  await fetch("https://api.quotable.io/random");
//   console.log(result.json())
//   return result.json();
// }

// export function RandQuote(response:any){
//   return <h2>
//     {response[0]}
//   </h2>
// }

// export function App() {
//   const [response, setResponse] = useState({})
//   setResponse(GetRandQuote())
//   return (
//     <div>
//       Hello
//       <RandQuote response={response}/>
//     </div>
//   )
// }
