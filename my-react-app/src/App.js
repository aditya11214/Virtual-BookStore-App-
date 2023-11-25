import './App.css';
import './style.css'
import React,{useState} from 'react';
import Books from './Components/Books/my-react-app';
import BookInfo from './Components/BookInfo/my-react-app';
function App() {
  const[bookinfo,setBookInfo]=useState([])
  return (
    <div>
       <BookInfo bookinfo={bookinfo}/>
      <Books setBookInfo={setBookInfo}  bookinfo={bookinfo}/>
     
    </div>
  );
}

export default App;