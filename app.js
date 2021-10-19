//set initial count
let count = 0;

//select all buttons in order to use just one event listener for all buttons
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

//variable to select the counter value
let counterValue = document.getElementById("value"); //video used querySelector and #value
console.log(counterValue);

//set up event listener for all buttons; loop through buttons to see which button was selected and act accordingly
buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const styles = e.target.classList; //store the styles of the button clicked in this variable
        //console.log(e.currentTarget.classList); //Video used this version - this will log out what the event listener was attached to - it is logging out the same element so not sure it matters in this instance
        if (styles.contains("decrease")){
            count--; //decrease count
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            counterValue.style.color = "green";
        } else if (count < 0) {
            counterValue.style.color = "red";
        } else {
            counterValue.style.color = "black";
        }
        counterValue.innerText = count;
    });
});