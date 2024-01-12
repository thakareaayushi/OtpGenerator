function otp(){
    var x=Math.random()*(9999-1000)+1000
    console.log(x);
    var otp=Math.floor(x)
    console.log(otp);
    var name=document.getElementById("input1").value
    var s=document.getElementById("output").innerHTML="Dear " +name+"  your otp is "+otp
}
//otp()