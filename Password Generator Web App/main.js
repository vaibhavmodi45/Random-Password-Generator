const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./=-";

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}



document.addEventListener('DOMContentLoaded', () => {
    const passwordButton = document.getElementById('passwordbtn');
    
    if (passwordButton) {
        passwordButton.addEventListener('click', () => {
            const passwordLength = 15;
            const password1 = generatePassword(passwordLength);
            const password2 = generatePassword(passwordLength);
            
            document.getElementById('pass1').textContent = password1;
            document.getElementById('pass2').textContent = password2;
        });
    } else {
        console.error('Button not found');
    }

    document.getElementById("pass1").style.cssText = "color: #4BE087;background-color: #263548; font-size: 18px; padding: 5px; border-radius: 5px;height: 40px; width: 200px;text-align: center;padding-top:10px";
    document.getElementById("pass2").style.cssText = "color: #4BE087;background-color: #263548; font-size: 18px; padding: 5px; border-radius: 5px;height: 40px; width: 200px;text-align: center;padding-top:10px";

});