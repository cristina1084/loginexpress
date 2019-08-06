const fs = require('fs') 
  
fs.readFile('Input.txt', (err, data) => { 
    if (err) throw err; 
  
    console.log(data.toString()); 
}) 

let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 