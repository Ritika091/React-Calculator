import { useState } from 'react';
import './index.css';

function App() {
  const[input,setInput] = useState('');
  const btnClick = (event) => {
    setInput(input.concat(event.target.value));
  }

  const result =()=>{
    setInput(eval(input));
  }

  const clearAll= ()=>{
    setInput('');
  }

  const clear = () => {
    var len =input.length;
    var str="";
    for(var i=0;i<len-1;i++)
      str=str+input.charAt(i);
      setInput(str);
  }
  return (
   <div className="calculator">
     <div className="fields" >
     <input type="text" placeholder='0' value={input}/>
     <div>
     <input type="button" value="AC" id='orange' onClick={clearAll}/>
     <input type="button" value="←" id='orange'onClick={clear}/>
     <input type="button" value="%" id='orange' onClick={btnClick}/>
     <input type="button" value="/" id='orange' onClick={btnClick}/>
     </div>
     <div>
     <input type="button" value="7" onClick={btnClick}/>
     <input type="button" value="8" onClick={btnClick}/>
     <input type="button" value="9" onClick={btnClick}/>
     <input type="button" value="*" id='orange' onClick={btnClick}/>
     </div>
     <div>
     <input type="button" value="4" onClick={btnClick}/>
     <input type="button" value="5" onClick={btnClick}/>
     <input type="button" value="6" onClick={btnClick}/>
     <input type="button" value="-" id='orange' onClick={btnClick}/>
     </div>
     <div>
     <input type="button" value="1" onClick={btnClick}/>
     <input type="button" value="2" onClick={btnClick}/>
     <input type="button" value="3" onClick={btnClick}/>
     <input type="button" value="+" id='orange' onClick={btnClick}/>
     </div>
     <div>
     <input type="button" value="0" onClick={btnClick}/>
     <input type="button" value="." onClick={btnClick}/>
     <input type="button" value="=" id="equalBtn" onClick={result}/>
     </div>
   </div>
   </div>
  );
}

export default App;
