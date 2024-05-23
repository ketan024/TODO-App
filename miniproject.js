// todo app feature - two
// todo appgit 

let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");



// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");
// let inpvalue=inp.value;



btn.addEventListener("click",()=>{

    let inpv=inp.value;
        taskAdd(inp.value)
        .then((result)=>{
            console.log("Task added");
            console.log("result: ",result);
////////////////////////////////////////////////////////////////
            let item=document.createElement("li");
            item.innerText=inp.value;
        
            let delBtn=document.createElement("button");
            delBtn.innerText="delete";
            delBtn.classList.add("delete");
        
            item.appendChild(delBtn)
            ul.appendChild(item);
        
            console.log(inp.value);
            inp.value="";
////////////////////////////////////////////////////////////////
        })
        .catch((error)=>{
            console.log("promises was rejected");
            console.log("error:",error);
        });        
});


function taskAdd(inpv){
    return new Promise ((resolve,reject)=>{
        if(inpv!=""){
            resolve("valid Task;;;;");
        }else{
            reject("Invalid Task;;;;");  
        };
    });
};








//////////////////////////////////////////////////////



// btn.addEventListener("click",function (){
//     let item=document.createElement("li");
//     item.innerText=inp.value;

//     let delBtn=document.createElement("button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn)
//     ul.appendChild(item);

//     console.log(inp.value);
//     inp.value="";
// });

ul.addEventListener("click",function(event){
  if(event.target.nodename=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("delete");
  }
})

let delBtns=document.querySelectorAll(".delete");

for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
        console.log(par);
    })
};