import React, { useState} from 'react'


export default function AboutUs(props) {
         const [myStyle , SetmyStyle] = useState ({
               color: 'black',
              backgroundColor:'white'

 })

 {/*const [BtnText, SetButton] = useState('Enable dark mode')
 let Togglechange = ()=>{
  if (myStyle.color ==='black'){
    SetmyStyle({
      color:'white',
      backgroundColor:'black'
    } )
    SetButton("Enable dark mode")
   

  }
  else{
    SetmyStyle({
      color:'black',
      backgroundColor:'white'
    } )
    SetButton('Enable light mode')

  }
 }*/}

return (<>
  <div className="container" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', marginTop:'100px'}}  >
    <h1> About Us</h1>
  <div className="accordion my-4"  style={{ backgroundColor: props.mode === 'dark' ? '#8f8d86' : 'white' }} id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button"  style={{ backgroundColor: props.mode === 'dark' ? '#8f8d86' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#8f8d86' : 'white' }}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#8f8d86' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={{ backgroundColor: props.mode === 'dark' ? '#8f8d86' : 'white' }} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={{ backgroundColor: props.mode === 'dark' ? '#8f8d86' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  style={{ backgroundColor: props.mode === 'dark' ? '#8f8d86' : 'white' }} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>  
</div>
</div>
  </>
  )
}