const countValue = document.querySelector('#counter');
/*
const increment = () =>{ */
function increment(){
    //getting value from UI
    let value= parseInt(countValue.innerText);
    //update the value
    value= value+ 1;
    //return the updated value into UI
    countValue.innerText=value;

};
function decrement(){
/*const decrement=()=>{ */
    //getting value from UI
    let value= parseInt(countValue.innerText); //parseInt to convert string into integer//
    //update the value
    value=value-1;
    //return the updated value into UI
    countValue.innerText=value;

}; 

/*
const countValue = document.querySelector('#counter');

function increment()
{
let value = parseInt(countValue.innerHTML);

value=value+1;

countValue.innerText=value;

}

function decrement()
{
let value = parseInt(countValue.innerHTML);

value=value-1;

countValue.innerText=value;

} */


