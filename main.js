//let num1 = prompt("Enter a number");
//let num2 = prompt("Enter a second number");

//input
document.getElementById("btn").addEventListener("click", () => {
  let num1 = document.getElementById("num1-in").value;
  let num2 = document.getElementById("num2-in").value;

  //process
  let answer = +num1 + +num2;

  //output
  document.getElementById(
    "output1"
  ).innerHTML = `${num1} plus ${num2} equals ${answer}`;

  //document.getElementById("output1").innerHTML = num1 + " + " + num2;
  //document.getElementById("output2").innerHTML = +num1 + +num2;
  //console.log(+num1 + +num2);
});
