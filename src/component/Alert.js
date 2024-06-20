import React from 'react'

function Alert(props) {
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{position:"fixed",width:'100%'}} role="alert"  >
     <strong>{props.alert.type}</strong>: {props.alert.msg}
  
   </div>
  )
}

export default Alert


      
