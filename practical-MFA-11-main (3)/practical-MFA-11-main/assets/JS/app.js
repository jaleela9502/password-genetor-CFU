
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

 document.getElementById('length').addEventListener('change', charLength)

 function passwordChar(){

let uppervalue = document.getElementById("uppercase").value;

 }
 function copy(){
let password = document.getElementById('password__result').value
localStorage.setItem("key" ,"password")

 }


const password = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789"
  }

    function upperCase() {
      return password.upperCase[Math.floor(Math.random() * password.upperCase.length)];
      let uppercase_value = document.getElementById("upperCase").checked;
    }

    function lowerCase() {
      return password.lowerCase[Math.floor(Math.random() * password.lowerCase.length)];
      let lowercase_value = document.getElementById("lowerCase").checked;
    },
    function number() {
        return password.number[Math.floor(Math.random() * password.number.length)];
        let number = document.getElementById("number").checked;
      }
    

      function generate(){
        if(document.getElementById("upperCase")==checked){
            document.getElementById("password__result").innerHTML = uppercase_value
        } 
       else if(document.getElementById("lowercase")==checked){
            document.getElementById("password__result").innerHTML = lowercase_value

        }
        else(document.getElementById("number")==checked){
            document.getElementById("password__result").innerHTML = number
        }
        
      }

