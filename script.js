const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordOne = document.querySelector(".generate-password-one")
let generatePasswordTwo = document.querySelector(".generate-password-two")
let generateButton = document.querySelector(".generate-btn")
let resetEl = document.querySelector(".reset")
let randomGenerate1 = []
let randomGenerate2  = []
let passwordLength = 15

generateButton.addEventListener("click",() =>{

    for (let i = 0; i < passwordLength; i++) {
        
        randomGenerate1 = Math.floor(Math.random() * characters.length)
        randomGenerate2 = Math.floor(Math.random() * characters.length)

        generatePasswordOne.textContent += characters[randomGenerate1] 
        generatePasswordTwo.textContent +=  characters[randomGenerate2]
        
        // if (randomGenerate1 > passwordLength || randomGenerate2 > passwordLength) {
        //     location.reload()
        // }
    }
    
}); 

resetEl.addEventListener('click', () => location.reload());





