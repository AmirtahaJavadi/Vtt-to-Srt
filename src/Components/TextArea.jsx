import React from 'react'
import vttcon from '../config/vttcon'
function TextArea({text}) {
    
    const newstr = vttcon(text ? text : null)
  return (
    <textarea value={newstr} style={{width:"95%" ,margin:"20px"}} readOnly rows={40} cols={40} />
  )
}

export default TextArea