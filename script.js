let guess_count = 3;
let guess = (Math.floor((Math.random()*10)+1));


function guess_a_number(){
    
let input_text = document.getElementById("guess_txtfield").value;
let result_field = document.getElementById("result_field");
let chances_field = document.getElementById("chances_field");


guess_count--;

if(guess_count > 0){


if(input_text == guess){
    chances_field.innerHTML = "Chances left : " + guess_count;
    result_field.innerHTML = "Congratulations, you guess the Correct Number"
}else if(input_text < guess){
    chances_field.innerHTML = "Chances left : " + guess_count;
    result_field.innerHTML = "Number is lower, time to guess higher number"
}else{
    chances_field.innerHTML = "Chances left : " + guess_count;
    result_field.innerHTML = "Number is higher, time to guess lower number"
}

}else{
    result_field.innerHTML = "Game over!!! Refresh the page and try again!"
}

}