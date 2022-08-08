var billdd=document.querySelector('#bill');
var cashdd=document.querySelector('#cash');
var btn=document.querySelector('.btn');
var message=document.querySelector('.message');
var noofnotes=document.querySelectorAll('.notess');
var notes=['2000','500','100','20','10','5','1'];
btn.addEventListener('click',function(){
    hidemessage();
    if(billdd.value>0){
        if(cashdd.value>=billdd.value){
            var amount=cashdd.value-billdd.value;
            calculatechange(amount);

        }
        else{
            showMessage("Give more cash");
        }
        
    }
    else{
        showMessage("Enter valid bill amount");
    }
    

});
function calculatechange(amount){
for(let i=0;i<=notes.length;i++){
    const numberofnotes=Math.trunc(amount/notes[i]);
    amount%=notes[i];
    noofnotes[i].innerText=numberofnotes;
}
}
 function hidemessage(){
    message.style.display="none";
 }
 function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
 }

