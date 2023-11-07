
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  {Link, BrowserRouter as Router} from 'react-router-dom'
import './CommonCss.css'
import { useState } from 'react';
function App() {
  const boxCentent={
    backgroundColor: "bisque",
    margin: "0px 15%",
    width: "70%",
    padding: "10px 5px",
    display: "flex",
    border: "1px solid rgb(238, 238, 238)",
  }
  const[charCount, charCountSet]=useState(0)
  const[wordCount,wordCountSet]=useState(0)
  const[sentenseCount,sentenseCountSet]=useState(0)
  const[paraCount,paraCountSet]=useState(0)
  const[longestWord,longestWordSet]=useState('')
  const TextEdited=(e)=>{
    debugger
    let wordCnt=e.currentTarget.value.split(' ').filter(j=>j.length>0)
    let setCnt=e.currentTarget.value.split(/[.?!\n]/).filter(j=>j.length>0)
    let paraCnt=e.currentTarget.value.split('\n').filter(j=>j.length>0)
    let arr=e.currentTarget.value.split(' ');
    let mappedary= arr.map(x=>x.length)
    let finalvalue= mappedary.indexOf(mappedary.reduce((a,b)=>Math.max(a,b)))
    
   charCountSet(e.currentTarget.value.length)
   wordCountSet(wordCnt.length)
   sentenseCountSet(setCnt.length)
   paraCountSet(paraCnt.length)
   longestWordSet(arr[Number(finalvalue)])
  }

  return (
    <Router>
    <div className="container-fluid p-0">
      <div className="row">
        <nav className="bg-secondary-subtle navbar shadow-sm">
          <Link to='/' className="navbar-brand" style={{marginLeft:"5%"}}>Text Analyzer Tool</Link>        
        </nav>
      </div>
      <div className='flexBox mt-5' style={boxCentent}> 
              <div className='text-center'>
                <label>Words</label>
                <label id=''>{wordCount}</label>
              </div>
              <div className='text-center'>
                <label>Characters</label>
                <label id=''>{charCount}</label>
              </div>
              <div className='text-center'>
                <label>Sentense</label>
                <label id=''>{sentenseCount}</label>
              </div>
              <div className='text-center'>
                <label>Paragraph</label>
                <label id=''>{paraCount}</label>
              </div>
              <div className='text-center'>
                <label>Pronouns</label>
                <label id='proCount'>0</label>
              </div>
      </div>
      <div className='' style={{width:"70%",margin:" 0% 15%"}} >
        <textarea onChange={TextEdited} rows={10} className='form-control w-100 mt-4' placeholder='Enter your text here.....' ></textarea>
      </div>
      <div className='mt-4' style={boxCentent} >
         <div className='text-center'>
                <label>Average reading time :</label>
                <label id='WordsCount'>________</label>
              </div>
              <div className='text-center'>
                <label>Longest word :</label>
                <label id=''>{longestWord}</label>
              </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
