import React, { useState } from 'react'

function DragnDrop({setText}) {
  const [drop, setDrop] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(e.dataTransfer.files)
    // Check if the dropped file is a text file
    if (file && file.type === 'text/vtt') {
      const reader = new FileReader();
      setDrop(file.name)
      reader.onload = (event) => {
        // Set the content of the text file in state
        setText(event.target.result);
      };

      reader.readAsText(file);
    } else {
      alert('Please drop a valid vtt file!');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ 
        border: '2px dashed #aaa', 
        padding: '20px', 
        textAlign: 'center', 
        margin: '20px' 
      }}
    >
      <p>{drop ? drop : "Drag and drop a text file here"}</p>
      <input type='file' onChange={(e) =>{console.log(e.target.files)}} placeholder='text file here' />
    </div>
  )
}

export default DragnDrop