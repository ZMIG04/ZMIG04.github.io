let count = 0;


function tickUp(){
    count++;
document.getElementById("counter").textContent= count;
}

function tickDown(){
    count--;
document.getElementById("counter").textContent= count;
}

function runForLoop(){

    //reset output before each loop execution
    document.getElementById("forLoopResult").innerHTML = " ";

    for (let i = 0; i <= count; i++) {

        document.getElementById("forLoopResult").innerHTML +=  i + " ";
    }


}

function showOddNumbers(){
   //reset output before each loop execution
document.getElementById("oddNumberResult").innerHTML = " ";

for (let i = 0; i <= count; i++) {

    if (i % 2 != 0){
    document.getElementById("oddNumberResult").innerHTML +=  i + " ";
    }
}
}

function addMultiplesToArray() {
const array = [];

for(i=1; i<count; i++){
if (i%5==0){
array.push(i);
}
}

console.log(array.reverse());

}

function printCarObject() {

let car = new Object();

car.cType = document.getElementById("carType").value;
car.cMPG = document.getElementById("carMPG").value;
car.cColor = document.getElementById("carColor").value;

console.log(car);

}

function loadCar(carNum){
let selectedCar;

    if (carNum == 1){
        selectedCar = carObject1;
    } else if (carNum == 2) {
        selectedCar = carObject2;
    } else if (carNum == 3){
        selectedCar = carObject3;
    }

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

function changeColor(colorNum) {
let paragraph = document.getElementById("styleParagraph");

if (colorNum == 1){
paragraph.style.color = "red";
} else if (colorNum == 2){
paragraph.style.color= "green";
} else if (colorNum == 3){
paragraph.style.color= "blue";
}

}