import { useEffect, useState } from 'react'
import './App.css'
import { SignUpPage } from './pages/SignUpPage';


interface QuoteProps{
  author: string,
  content: string
}

async function GetSearchQuote(search: string) {
return (await fetch("https://usu-quotes-mimic.vercel.app/api/search?query=" + search)).json()
}


async function GetRandQuote(){
  return (await fetch("https://usu-quotes-mimic.vercel.app/api/random")).json()
}


export function RandQuote({author, content} : QuoteProps){
  return(
    <div className='randQuote'>
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
  const [searchResponse, setSearchResponse] = useState<null | [QuoteProps]>(null)
  const [search, setSearch] = useState("")
  const [onSearch, setOnSearch] = useState(false)
  const [pageState, setPageState] = useState(false)


  useEffect(() => {
    GetRandQuote().then(data => setResponse(data))
  }, [])

  useEffect(() => {
    GetSearchQuote(search).then(data => setSearchResponse(data.results))
  }, [onSearch])


  if(pageState){
    return (
      <div className='mainpg'>
        
      <label>
        <input className='search' value = {search} type = "text" placeholder='search' onChange = {e => setSearch(e.target.value)} onKeyDown={(e) => {
          if(e.key === "Enter"){
            e.preventDefault();
            setOnSearch(!onSearch)
            setPageState(true)
          }
        }}/>
        <button type="submit"><span className="material-symbols-outlined" onClick={(c) => {
          setOnSearch(!onSearch)
          setPageState(true)
        }}>
  search
</span></button>
      </label>
      <div>
        {searchResponse && searchResponse.map(quoteProp => (<ResultQuote author={quoteProp.author} content={quoteProp.content}/>))}
    </div>
    </div>
    )
  }else{
  // setResponse(GetSearchQuote("Obama"))
  console.log(response)
  //For some reason I need to stringify and then reparse
  return (
    <div className='mainpg'>
      <h1 className='quote'>
        Quote Search
      </h1>
      <label>
        <input className='search' value = {search} type = "text" placeholder='search' onChange = {e => setSearch(e.target.value)} onKeyDown={(e) => {
          if(e.key === "Enter" && search != ""){
            e.preventDefault();
            setOnSearch(!onSearch)
            setPageState(true)
          }
        }}/>
          <button type="submit" className='searchButton'><span className="material-symbols-outlined" onClick={(c) => {
            if(search != ""){
          setOnSearch(!onSearch)
          setPageState(true)
          }
        }}>
  search
</span></button>
      </label>
      <div>
      {response && <RandQuote author={response.author} content={response.content}/> }
      </div>
  </div>
  )
}
}


// input
// onChange{ e => setDestription(e.target.value)}

// onClick=(() => {
//   for(let i=0; i<10; i++){
//     setCount((current +))
//   }
// })


// <button onClick=(() => { serCount(count+1)})
