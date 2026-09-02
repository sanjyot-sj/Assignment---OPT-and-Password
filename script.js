generateOTP_button_Elemet=document.getElementById("generateOTP_button")
generatedOTPDisplay_Elemet=document.getElementById("generatedOTPDisplay")

let genOPT

function GenerateOTP(){
    genOPT = Math.floor(1000 + Math.random() * 9000)
    generatedOTPDisplay_Elemet.value=genOPT
}

VerifyOTPButton_Elemt=document.getElementById("VerifyOTPButton")
FirstOPT_Elemt=document.getElementById("FirstOPT")
SecondOTP_Elemt=document.getElementById("SecondOTP")
ThirdOPT_Elemt=document.getElementById("ThirdOPT")
FourthOTP_Elemt=document.getElementById("FourthOTP")

middlerightcontainerid_elemt=document.getElementById("middlerightcontainerid")

function VerifyOTP(){
OTPfromUser=FirstOPT_Elemt.value+SecondOTP_Elemt.value+ThirdOPT_Elemt.value+FourthOTP_Elemt.value
console.log("OTPfromUser",OTPfromUser)
OTPfromUser=Number(OTPfromUser)

if( genOPT == OTPfromUser)
    {
        middlerightcontainerid_elemt.innerHTML =
                `  <span class="done-text">Great <i class="fa-regular fa-thumbs-up"></i>
                    <p>  OTP Verification Done Succeessfully</p>
                </span>
                ` 
    }
else
    {
    middlerightcontainerid_elemt.innerHTML =
        `  <span class="done-text">Opps <i class="fa-regular fa-face-frown-open"></i>
            <p>  OTP Verification Failed</p>
            <p> Please Resend Again</p>
        </span>
        ` 
    }
 generatedOTPDisplay_Elemet.value=''
FirstOPT_Elemt.value=''
SecondOTP_Elemt.value=''
ThirdOPT_Elemt.value=''
FourthOTP_Elemt.value=''
}

window.addEventListener('load',()=>
{
 middlerightcontainerid_elemt.innerHTML =''
})