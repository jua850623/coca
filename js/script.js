window.addEventListener("wheel",go);

window.addEventListener("resise",re);

function re(){
    if(innerWidth>=800){
        $("#header").addClass("on");
        $(".refresh").addClass("on");
    }else{
        $("#header").removeClass("on");
        $(".refresh").removeClass("on");
        $(".burger").removeClass("on");
        $("bur_gnb").removeClass("on");
    }
}




function go(){
    console.log(scrollY);
    if(scrollY >= 200){
        $("#header").addClass("on");
        $(".refresh").addClass("on");
    }else{
        $("#header").removeClass("on");
        $(".refresh").removeClass("on");
    }
}

$(".burger").click(
    function(){
        $(".burger").toggleClass("on");
        $(".bur_gnb").toggleClass("on");
        $(".bur_gnb_back").toggleClass("on");
    }
);