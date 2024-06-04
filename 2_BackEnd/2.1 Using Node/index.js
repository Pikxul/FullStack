const fs = require("fs");

fs.writeFile("message.txt" , "Hello world", (err) => {
    if (err) throw err;
    console.log("message has been uploaded");
});

fs.readFile("./message.txt", "utf8", (err, data) =>{
    if(err) throw err;
    console.log("Enter data is: "+data);
});