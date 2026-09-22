const button = document.getElementById("btn");
const box = document.getElementById("emptyresume");

button.addEventListener("click", function() {
  box.innerHTML = `
    <h2>Shreem Srivastava</h2>
    <p><strong>Education:</strong>ABES EC</p>
    <p><strong>CGPA:</strong> 7.5</p>
    <p><strong>Hobbies:</strong> Coding, Running, Music</p>
    <p><strong>Skills:</strong> JavaScript, HTML, CSS</p>
    <p><strong>Experience:</strong> 2 years in web development</p>
  `;
  
});