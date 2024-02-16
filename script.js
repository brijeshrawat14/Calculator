
// let input = document.getElementsByClassName('.inputBox');
let buttons = document.querySelectorAll('.operator');

let string="";
let arr = Array.from(buttons);

// console.log(arr);
arr.forEach(button => {
    button.addEventListener('click', (e)=>{
         console.log(e.target);
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML== 'AC'){
            string='';
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value=string;
            

        }
          else{string = string + e.target.innerHTML;
        document.querySelector('input').value=string;
          }
    })
})

 