let a = 10;
let b = 30;

let waitingData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(70)
  },2000)
})
waitingData.then((b)=>{
  console.log(a+b)
})
