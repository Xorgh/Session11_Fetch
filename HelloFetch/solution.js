fetch("message.txt")
.then(response => response.text())
.then(text => document.querySelector("#messageContainer").textContent = text)
.catch(error => console.log('Error:',error))

