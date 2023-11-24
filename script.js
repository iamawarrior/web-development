window.onload=function(){
    let btn=document.querySelectorAll(".btn");
    let func=document.querySelectorAll(".f");
    console.log(btn);
    let string="";
    // let i=0
    for(let i=0;i<btn.length;i++)
        {
            document.querySelectorAll(".btn")[i].addEventListener("click",function(e){
  
      string=string+(document.querySelectorAll(".btn")[i].innerHTML);
   document.querySelector(".inputarea").value= string;
//    console.log();
              

//   console.log(e.target.innerHTML);



});
}

for(let i=0;i<func.length;i++){
    document.querySelectorAll(".f")[i].addEventListener("click",function(e){
        if(e.target.innerHTML=="AC"){
        string=" ";
        document.querySelector(".inputarea").value=string;
    }
    else if(e.target.innerHTML=="="){
        string=eval(string);
        document.querySelector(".inputarea").value=string;
        
    }
    else if(e.target.innerHTML=="back"){
        string=string.slice(0,-1);
        document.querySelector(".inputarea").value=string;
        
    }
    });
}   
}
  