//var toRegister = document.querySelector("#toRegister");
//toRegister.addEventListener("click", function(){
//    alert("Clicked")
//})

//$(document).ready(function(){
//    $("#toRegister").click(function(){
//        $(".login").fadeOut("slow")
//    })
//});

//var registerButton = document.querySelector(".btn-register");
//
//registerButton.addEventListener("click", function(){
//    alert("clicked")
//})

$(document).ready(function(){
    $("#toRegister").click(function(){
        $(".register").animate({
            left: "370px"
        })
    })
});

$(document).ready(function(){
    $("#toLogin").click(function(){
        $(".register").animate({
            left: "-370px"
        })
    })
});

$(document).ready(function(){
    $(".btn-register").click(function(){
        $(".register").fadeOut("slow")
        $(".thankYou").animate({
            left: "+=600"
        })
        $(".thankYou").fadeOut(3000)
    })
})


