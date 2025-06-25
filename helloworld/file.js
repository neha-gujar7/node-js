const fs=require("fs");
//this fs function stands for file system ->used for interCTING WITH FILES SYSTEM

// called a synchronous call
// fs.writeFileSync("./test.txt","hey there,I am Neha");


//async
// fs.writeFile("./test.txt","hey there,I am Neha /it is async",(err)=>{});
 

//As i created a file named contacts.txt ->how can we read this file ,that is below
// const result=fs.readFileSync('./contacts.txt','utf-8'); //synchronously reading  //file name and encoding of file
// console.log(result);
//sync returns   , but async won't return anything (async type is void)

// fs.readFile('./contacts.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("error it is");      
//     }
//     else{
//         console.log(result);
        
//     }
// })

//blocking and non blocking request
//what is the difference when to use which one, we will see after file handling



//we can also append
// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());


 fs.appendFileSync('./test.txt',`Hey there\n`);

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

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// // fs.appendFileSync("./test.txt", new Date().toLocaleString() + "\n");
// // fs.appendFileSync("./test.txt", new Date().getDate().toString() + "\n");

// //server log/ log files

// fs.appendFileSync("./test.txt", `${Date.now()} heyyyyyyy\n`);

// //can copy a file by cpSync 
// // fs.cpSync('./test.txt','./copy.txt');

// //we can delete also by unlink
// // fs.unlinkSync("./copy.txt");

// //know the details of file when modified, when crated , size and all
// console.log(fs.statSync("./test.txt")); 
// fs.mkdirSync   

// fs.writeFileSync('./example.txt','Hello world')
//sync means it will create new file again, async means it will modify the file content
  



// fs.writeFile('./example.txt','hyy',(err)=>{});
// 


//now we will see log files
 
