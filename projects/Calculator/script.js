function Calculate(data) {
  const equation = document.getElementById("text");
  if (data === "AC") {
    equation.innerText = "0";
    return;
  }

  if (data === "C") {
    equation.innerText = equation.innerText.slice(0, -1);
    return;
  }

  if (data === "=") {
    const EQ = equation.innerText;
    const solution = eval(EQ);
    equation.innerText = solution;
    return;
  }

  if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText = equation.innerText + data;
  }
}

document.addEventListener("keydown", function (event) {
  let key = event.key;

 
  if (key >= "0" && key <= "9") {
    Calculate(key);
  }

  // Operators
  else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "%" ||
    key === "."
  ) {
    Calculate(key);
  }

  
  else if (key === "Enter") {
    Calculate("=");
  }

  
  else if (key === "Backspace") {
    Calculate("C");
  }

 
  else if (key === "Escape") {
    Calculate("AC");
  }
});