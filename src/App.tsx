import { useEffect, useState } from 'react'
import './App.css'
import { SignUpPage } from './pages/SignUpPage';


interface QuoteProps{
  author: string,
  content: string
}

async function GetSearchQuote(search: string) {
const result = await fetch("https://api.quotable.io/search/quotes?query=" + search + "&fields=author");
console.log(result.json());
return result.json()
}


async function GetRandQuote(){
  const result =  await fetch("https://api.quotable.io/random");
  // console.log(result.json())
  return result.json()
}


export function RandQuote({author, content} : QuoteProps){
  return(
    <div>
      <p className='quote'>{content}</p>
      <p className='author'>-{author}</p>
      </div>
  )
}

export function ResultQuote({author, content}:QuoteProps ){
  return(
    <div className='card'>
      <p className='quote'>{content}</p>
      <p className='author'>-{author}</p>
      </div>
  )
}


export function App() {
  const [response, setResponse] = useState<null | QuoteProps>(null)
  const [search, setSearch] = useState("")
  const [pageState] = useState(Boolean)
  useEffect(() => {
    GetRandQuote().then(data => setResponse(data))
  }, [])

  // setResponse(GetSearchQuote("Obama"))
  console.log(response)
  //For some reason I need to stringify and then reparse
  return (
    <div className='mainpg'>
      <h1 className='quote'>
        Quote Search
      </h1>
      <label>
        <input type = "text" placeholder='search' onChange = {e => setSearch(e.target.value)} onKeyDown={(e) => {

        }}/>
      </label>
      {response && <ResultQuote author={response.author} content={response.content}/> }
      <div>
    
      </div>
      <div>
        {

        }
      </div>
  </div>
  )
}


// input
// onChange{ e => setDestription(e.target.value)}

// onClick=(() => {
//   for(let i=0; i<10; i++){
//     setCount((current +))
//   }
// })


// <button onClick=(() => { serCount(count+1)})
