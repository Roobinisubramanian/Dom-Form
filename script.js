function addData(fisrt,last,mail,address,pin,gen,food){
    var temp = [fisrt,last,mail,address,pin,gen,food];
    for (var i=0;i<temp.length;i++){
        temp.push[i];
    }
}
var name1 = document.getElementById("fName");
var name2 = document.getElementById("lName");
var mail = document.getElementById("Email");
var address = document.getElementById("Address");
var pin = document.getElementById("Pincode");
var gen = document.getElementById("Gender");
var food = document.getElementById("food");



var btn = document.getElementById("submit");
btn.addEventListener("click", () => {
    console.log("test");
    var temp1 = [];
    for(var j=0;j<temp1.length;j++){
        temp1.push[name1,name2,mail,address,pin,gen,food];
        }
    alert("data updated successfully");
    displayDetails(name1,name2,mail,address,pin,gen,food);
    clearData();
    
   
});
function clearData(){
    document.getElementById("fName").value= " ";
    document.getElementById("lName").value= " ";
    document.getElementById("Email").value= " ";
    document.getElementById("Address").value= " ";
    document.getElementById("Pincode").value= " ";
    document.getElementById("Gender").value= " ";
    document.getElementById("food").value= " ";
    document.getElementById("State").value= " ";
    document.getElementById("Country").value= " ";
}

function displayDetails(){
    var name1 = document.getElementById("fName").value;
    var name2 = document.getElementById("lName").value;
    var mail = document.getElementById("Email").value;
    var address = document.getElementById("Address").value;
    var pin = document.getElementById("Pincode").value;
    var gen = document.getElementById("Gender").value;
    document.getElementById("SF").multiple = true;
    var food1= document.getElementById("op1").value; 
    var food2= document.getElementById("op2").value; 
    var food3= document.getElementById("op3").value; 
    var food4= document.getElementById("op4").value; 
    var food5= document.getElementById("op5").value; 
    var food6= document.getElementById("op6").value; 
       
    var state = document.getElementById("State").value; 
    var Country = document.getElementById("Country").value; 


    var tb = "<table border='1|1' class= 'table' >"
    setTimeout(()=>{
    tb +="<thead>";
    tb +="<tr>";
    tb +="<td>"+"First Name"+"</td>";
    tb +="<td>"+"Last Name"+"</td>";
    tb +="<td>"+"Mail ID"+"</td>";
    tb +="<td>"+"Address"+"</td>";
    tb +="<td>"+"Pincode"+"</td>";
    tb +="<td>"+"Gender"+"</td>";
    tb +="<td>"+"Food"+"</td>";
    tb +="<td>"+"State"+"</td>";
    tb +="<td>"+"Country"+"</td>";
    
        tb +="<tr>";
        tb +="<td>"+name1+"</td>";
        tb +="<td>"+name2+"</td>";
        tb +="<td>"+mail+"</td>";
        tb +="<td>"+address+"</td>";
        tb +="<td>"+pin+"</td>";
        tb +="<td>"+gen+"</td>";
        tb +="<td>"+food2+food3+"</td>";
        tb +="<td>"+state+"</td>";
        tb +="<td>"+Country+"</td>";
        tb +="</tr>";

    tb +="</table>";
    document.getElementById("table").innerHTML = tb;
    },200);
    console.log(name1,name2,mail,address,pin,gen,food, state,Country);

    
    
    }

