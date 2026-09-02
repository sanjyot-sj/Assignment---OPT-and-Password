/*  1. user will enter password length*
    2. the select checkboxes which  wants
    3. click on butto "generate Password"
    4. on button click
        1.take length from input= passlength
        2.checkbox selsction input
        3.function to generate password as per input
        4. inside function according to input show progress on progressbar
        5  show poor or aveage or good */

 const passlength_elemt = document.getElementById("passlength")
 const incNumb_elemt = document.getElementById("incNumb")
 const incUpper_elmt = document.getElementById("incUpper")
 const incSpecial_elmt = document.getElementById("incSpecial")
 const excldAmbigi_elmt = document.getElementById("excldAmbigi")
 const showstrength_elmt=document.getElementById("showstrength")
 
 const GeneratedPassword_elmt=document.getElementById("GeneratedPassword")
 console.log(GeneratedPassword_elmt)
const progressbar_elmt=document.getElementById("progressbar")

const btnGeneratePass_elmt=document.getElementById("btnGeneratePass")
btnGeneratePass_elmt.addEventListener("click",GeneratePassword)



function GeneratePassword()
{
    const pLength = Number(passlength_elemt.value )

     let characters = ""
        
    if(incNumb_elemt.checked)
    {
        characters+="0123456789"
    }
   
    if(incUpper_elmt.checked)
    {
        characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(incSpecial_elmt.checked)
    {
        characters+="!@#$%^&*"
    }
    if(excldAmbigi_elmt.checked)
   {
    characters = characters.replace(/[O0Il1]/g, "");
   }

     console.log(characters)
    let result = "";

    for (let i = 0; i < pLength; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        result += characters[randomIndex];
    }
    console.log(result)

    GeneratedPassword_elmt.value = result

    let strength = 0;

    if (pLength <= 6) {
        strength += 1;
    }

    if (pLength <= 10) {
        strength += 1;
    }

    if (pLength <= 15) {
        strength += 1;
    }

    if (strength == 1) {
        progressbar_elmt.style.width = "30%";
        progressbar_elmt.style.backgroundColor="red" 
        showstrength_elmt.textContent="POOR"
        
    }
    else if (strength == 2) {
        progressbar_elmt.style.width = "60%";
        progressbar_elmt.style.backgroundColor="orange" 
        showstrength_elmt.textContent="Average"
    }
    else if (strength == 3) {
        progressbar_elmt.style.width = "100%";
        progressbar_elmt.style.backgroundColor="Strong" 
    }
   
}

const showHide_elmt=document.getElementById("showHide")

showHide_elmt.addEventListener("change", function () {

    if (showHide_elmt.checked) {
        GeneratedPassword_elmt.type = "text";
    } else {
        GeneratedPassword_elmt.type = "password";
    }

});