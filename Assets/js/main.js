$(document).ready(function(){
    setTimeout(function(){
        $("#preloader").fadeOut(1000);
    }, 2000);

    $(".list").click(function(){
        $(".list").removeClass("active");
        $(this).addClass("active");
    });

    if(window.history.replaceState){
        window.history.replaceState(null, null, window.location.href);
    };

    let count = 0;
    $("#banner").click(function(){
        count++;
        if(count == 5){
            $(".loginwrapper").css("transform", "scale(1)");
        }
        //Reset Count to 0 after 10 seconds of Click
        setTimeout(function(){
            count = 0;
        }, 10000)
    });

    window.onclick = function(event) {
        let loginpage = document.querySelector(".loginwrapper");
        if (event.target == loginpage){
            $(".loginwrapper").css("transform", "scale(0)");
            count = 0;
        }
    }

    $(".close").click(function(){
        $(".loginwrapper").css("transform", "scale(0)");
        count = 0;
    });

    $("#eye").click(function(){
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
            document.getElementById("eye").className = "fas fa-eye";
        } else {
            x.type = "password";
            document.getElementById("eye").className = "fas fa-eye-slash";
        }
    });
});