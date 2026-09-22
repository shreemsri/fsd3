// console.log("Hello I m using JS ")

// const sum=function(a,b){
//     return a+b;
// }

// const sum=(a,b)=>{return a+b}
//IIFE
// (()=>{
//     console.log("Heyyy...using IIFE")
// })();


// var a=23;
// if(a<40){
//     var a=40;
//     console.log("value of a inside block="+a)
// }
// console.log("value of a outside block"+a)

//Callback

// function sum(a,b){
// return a+b;
// }

// function msgWithSum(clbk,msg){
//          const result=clbk(40,50);
//          console.log("Hiii,"+msg+"your result is="+result)
// }
// msgWithSum(sum,"Rahul")

// function login(error,msg){
//     if(error){
//         console.log("Error is:"+error)
//     }
//     else{
//         console.log(msg)
//     }
// }

// function loginHanler(username,password,clbk){
//     if(username=="ptomer40" && password=="12345"){
//         clbk(null,"Login Success")
//     }else{
//         clbk("Username or password is incorrect",null)
//     }
// }


// loginHanler("ptomer40","12345",login)

// console.log("One")
// for(i=0;i<10000;i++){
//     console.log("i="+i);
// }
// // setTimeout(()=>{console.log("Two")},1000)
// console.log("Three")

/*const container=document.getElementById('container');
const button=document.getElementById('btn');

       const h1= document.createElement('h1');
       console.log(h1)
       h1.innerText='ABES Engineering College';
       const loader=document.createElement('h2');
       container.appendChild(loader)
       const img=document.createElement('img');
// console.log(button)
// console.log(container)

      function ping(){
        try{
      loader.innerHTML='<h2>Loading Data...</h2>'
    // alert('server ping')
    container.innerHTML='<h2 style=color:red>Welcome to DOM</h2>'
    h1.style.backgroundColor='cyan';
    h1.style.color='red';
    container.appendChild(h1);
    img.src='urlofimage';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    container.appendChild(img);
        }catch(e){
            loader.innerHTML='<h2 style=color:red>Error in loading data</h2>'
        }
        finally{
            // loader.innerHTML='';
            container.removeChild(loader);
        }
}

button.addEventListener('click',ping);*/

