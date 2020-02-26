function validate() {
    var decimal= /^[-+][0-9]+\.[0-9]+[eE][-+]?[0-9]+$/;  
if(document.myForm.avg.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...! plz enter Float numbers')
return false;
}
}