import React,{useState} from 'react'

export default function Textbox(props) {
 
 const handlecapitalalter = () =>{
  let i = 0;
  let newText = '';
  for(i=0;i<=text.length;i++){
      if(i%2===0){
        newText += text.charAt(i).toUpperCase();
      }
      else{
        newText += text.charAt(i).toLowerCase();

      }
      props.showAlert('The first letter is capitalizes','success');

  }
  setText(newText);

 }

  const handleclear = () =>{
    let newText = ("")
      setText(newText);
      props.showAlert('The text is cleared','success');

    
  }
  const handlecap= () => {    
    let newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
    props.showAlert('The text is capitalized','success');

  };
  const handleupcase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase','danger');

   }

   const handlelowcase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowercase','primary');

   }

   const handleonchange = (event)=>{
    setText(event.target.value)
   }
   const [text , setText] = useState('');

  return (
    <>
        <div className="container my-3" >
                <h1 style= {{color:  props.mode==='light'?'black':'white',marginTop:'100px'}}>Textutils-word counter,character counter,clear</h1>
              <textarea className="form-control" style = {{backgroundColor: props.mode==='dark'?'grey':'white', color:  props.mode==='light'?'black':'white'}}onChange={handleonchange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            <div> 
              <button type="button" onClick={handleupcase} className="btn btn-dark my-3"  >Convert to upperclass</button>
              <button type="button" onClick={handlelowcase} className="btn btn-dark my-3 mx-3" >Convert to lowerclass</button>
              <button type='button' onClick={handlecap} className="btn btn-dark my-3 mx-1">capitalize</button>
              <button type="button" onClick={handleclear} className="btn btn-dark my-3"  >clear</button>
              <button type='button' onClick={handlecapitalalter} className="btn btn-dark my-3 mx-1">Alternate capital</button>


            </div>
            <div style= {{color:  props.mode==='light'?'black':'white'}}>
             <h2 >your text summary</h2>
             <p> { text.split(/\s+/).filter(word => word.length !== 0).length} words and   {text.length} characters</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"write something to preview text"}</p>
             </div>
            </div>
   </>
  )
}