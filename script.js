document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
  
    const display = document.getElementById("display");
    display.textContent = `First Name: ${firstName}, Last Name: ${lastName}`;
  });
  
