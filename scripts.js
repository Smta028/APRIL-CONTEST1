let nameInput = document.querySelector("#Name");
let professionInput = document.querySelector("#Profession");
let ageInput = document.querySelector("#Age");




let myButton = document.querySelector(".btn");
let errorMsg = document.querySelector(".error");
let successMsg = document.querySelector(".success");
let zero= document.querySelector(".employeeZero");

var count = 1;
var employee = [];

myButton.addEventListener("click", addElements);





function addElements(e) {
    // console.log("addelemet");
    if (nameInput.value === "" || professionInput.value === "" || ageInput.value === "") {
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
    }
    else {
        errorMsg.style.display = "none";
        successMsg.style.display = "block";
        employee.push({
            id: count++,
            Name: nameInput.value,
            Profession: professionInput.value,
            Age: ageInput.value

        })
    }
    // console.log(employee);
    showTask(employee);
}

function showTask(arr) {
    let list = document.querySelector(".employ");

    if(arr.length>0){
        zero.style.display = "none";
    
        list.innerHTML="";
      
          arr.map((item,index)=>{
    
              list.innerHTML += `
                  <div class="display">
                  <div class="adding">
                  <li>${index+1}</li>
                  <li>Name : ${item.Name}</li>
                  <li>Profession : ${item.Profession}</li>
                  <li>Age : ${item.Age} </li>
                  </div>
                 <button class="deletebtn" onclick="deleteUser(${index})"> Delete User</button>
                 </div>
                `
          });
          nameInput.value="";
          professionInput.value="";
          ageInput.value="";
    }else{
        list.innerHTML="";
        zero.style.display = "block";
        console.log("zero else")
    }
 

    }
    function deleteUser(id){
      employee.splice(id,1);
    //   console.log(employee);
  
    showTask(employee);
    successMsg.style.display = "none"
   
    }

 

  