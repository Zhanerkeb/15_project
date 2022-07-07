import './App.css';
import Header from './components/header'
import Blogs from './containers/blog';
import 'antd/dist/antd.css';
import {useState} from 'react'
import CheckboxItem from './components/checkbox-item';
import Todo from './containers/todo';

function App() {
  const languages = ['html', 'css', 'js']
  const [chosenLanguages, setChosenLanguages] = useState([])

  const handleChange = (e, item) => {
    if(e.target.checked) {
      setChosenLanguages([...chosenLanguages, item])
    } else {
      setChosenLanguages(chosenLanguages.filter(l => l !== item ))
    }
  }

  const languageItems = languages.map((item, i) => <CheckboxItem key={i} handleChange={handleChange} item={item}/>)

  const chosenLanguageItems = chosenLanguages.map((item, i) => <p key={i}>{item}</p>)

  return (
    <>
      <div style={{width: '70%', margin: '100px auto'}}>
        {/* {languageItems} 
        {chosenLanguageItems} */}
        {/* <Todo/> */}
        <Blogs/>
      </div>
     
   
    </>
  );
}

export default App;
