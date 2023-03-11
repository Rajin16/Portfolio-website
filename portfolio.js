function image1(){
    window.open("https://www.instagram.com/accounts/login/")
}
function image2(){
    window.open("https://www.facebook.com/login/")
}
function image3(){
    window.open("https://web.whatsapp.com/#")
}
function store(){
    let f=document.getElementById("fname").value
    let p=document.getElementById("phone").value
    var ob={fullname:f,phone:p}
    localStorage.setItem("fullname",f)
    localStorage.setItem("phone",p)
}