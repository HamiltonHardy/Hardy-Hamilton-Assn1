import { useEffect, useState } from 'react'
import './App.css'

async function GetRandQuote(){
  const result =  await fetch("https://api.quotable.io/random");
  // console.log(result.json())
  return result.json();
}


export function App() {
  const [response, setResponse] = useState({})
  useEffect(() => {
    GetRandQuote().then(data => setResponse(data))
  }, [])
  
  console.log(response)
  const sol = JSON.parse(JSON.stringify(response))
  //For some reason I need to stringify and then reparse
  return (
    <div>
      <h1>
        Quote Search
      </h1>
      <input type = "text" placeholder='search'>
      </input>
      <div>
      {sol.content}
      </div>
      <div>
      -{sol.author}
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
