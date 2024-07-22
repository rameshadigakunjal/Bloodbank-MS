function formValidation()
{
var fname = document.donor.fullname;
var mnumber = document.donor.mobileno;
var emailid = document.donor.emailid;
var dage = document.donor.age;
var dadd = document.donor.address;
if(allLetter(fname))
{
var letters = /^[A-Za-z]+$/;
if(fname.value.match(letters))
{
    //alert (letters);
return true;
}
else
{
alert('Username must have alphabet charectors only');
fname.focus();
return false;
}
}
else{
    alert('Username must have alphabet charectors only');

}
if(allnumeric(mnumber))
{
    var numbers = /^[0-9]+$/;
    if(mnumber.value.match(mnumber)){
        return true;
    }
    else{
        alert('must have numberic charecter only');
        mnumber.focus();
        return false;
    }
}
if(ValidateEmail(emailid))
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailid.value.match(mailformat))
    {
        return true;

    }
    else{
        alert("You have entered an invalid email address!");
        emailid.focus();
        return;

    }

}
if(allnumeric(dage))
{
    var numbers = [18-65];
    if(dage.value.match(mnumber)){
        return true;
    }
    else{
        alert('must have numberic charecter only');
        dage.focus();
        return false;
    }
}
if(alphanumeric(dadd))
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(dadd.value.match(letters))
    {
        return true;
    }
    else{
        alert("usser address must have alphanumeric charecters only");
        dadd.focus();
        return false;
    }

}





}



