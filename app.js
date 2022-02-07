 let title=document.querySelector(".header");
 const reload_=document.querySelector(".reload");
  
 let turn='x';
 let squares=[];
 function winner(){
    for(let i=1 ; i<10 ; i++){
        squares[i]=document.getElementById("item" + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1]!=''){
       match(1,2,3);
       reload_.classList.add("name");
       reload_.style.transition="all 1s ease";
       reload();
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4]!=''){
         match(4,5,6);
         reload_.classList.add("name");
         reload_.style.transition="all 1s ease"
         reload();
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7]!=''){
         match(7,8,9);
         reload_.classList.add("name");
         reload_.style.transition="all 1s ease"
         reload();
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1]!=''){
         match(1,4,7);
         reload_.classList.add("name");
         reload_.style.transition="all 1s ease"
         reload();
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2]!=''){
         match(2,5,8);
         reload_.classList.add("name");
         reload_.style.transition="all 1s ease"
         reload();
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3]!=''){
         match(3,6,9);
         reload_.classList.add("name");
         reload_.style.transition="all 1s ease"
         reload();
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1]!=''){
         match(1,5,9);
         reload_.classList.add("name");
         reload_.style.transition="all 1s ease"
         reload();
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3]!=''){
         match(3,5,7);
         reload_.classList.add("name");
         reload_.style.transition="all 1s ease"
         reload();
    }
 }
 function game(id){
     let element=document.getElementById(id);
     if(turn==='x' && element.innerHTML==''){
         element.innerHTML='X';
         element.style.transition="all 1s ease";
         turn="o";
         title.innerHTML="O"
     }if(turn==="o" && element.innerHTML==''){
         element.innerHTML="O";
         turn='x';
         title.innerHTML="X"
     }
     winner();
    
 }

 function match(num1,num2,num3){
    title.innerHTML=`${squares[num1]} winner`;
    document.getElementById('item'+num1).style.background="red";
    document.getElementById('item'+num2).style.background="red";
    document.getElementById('item'+num3).style.background="red";
    setInterval(()=>{
        title.innerHTML+=".";
    },1000);
 }
 function reload(){
     let button=document.getElementById("button");
     button.addEventListener('click',()=>{
        setTimeout(()=>{
            location.reload();
        },1000);
     });
 }
 