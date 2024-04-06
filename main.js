
function myFunction() {
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    var luongtong = document.getElementById("result").value;
    var luongthang = parseFloat(operand1)*parseFloat(operand2);
    result.textContent = luongthang.toString();
    
}

function Check() {
    var checknumber1= document.getElementById("operand1").value;
    if (isNaN(checknumber1)) {
    alert("Vui lòng nhập số");
    }
}
function Regular_Expression () {
    var number= document.getElementById("operand1").value;
   document.getElementById("operand1").value =number.replace (/[^0-9]/g,"");
};
//operand1.oninput = function(){
//       myFunction();
//   };
//operand2.oninput = function(){
//    myFunction();
//};
//                                                    
                                                        
