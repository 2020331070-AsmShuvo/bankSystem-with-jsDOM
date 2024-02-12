document.getElementById('btn-submit').addEventListener('click', function(){
    // get user mail: 
    const emailField = document.getElementById('user-email');
    const userMail = emailField.ariaValueMax;
    // get user pass: 
    const passField = document.getElementById('user-password');
    const userPass = passField.ariaValueMax;

    if(userMail!='' && userPass!=''){
        window.location.href = 'banking.html';
    }
    

});
