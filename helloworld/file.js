const fs=require("fs");
// called a synchronous call
// fs.writeFileSync("./test.txt","hey there,I am Neha");

//async
// fs.writeFile("./test.txt","hey there,I am Neha /it is async",(err)=>{});
 
//blocking and non blocking request
//what is the difference when to use which one

// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);  //reading file synchrounously


// cannot write like :const res=fs.readfile...................
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",  err);
        
//     }
//     else{
//         console.log(result);
        
//     }

// })

// we get to know that asyn don't return the result, but sync files return the result


// we can write and read and append also

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", new Date().toLocaleString() + "\n");
// fs.appendFileSync("./test.txt", new Date().getDate().toString() + "\n");
