$(document).ready(function () {
    $(".btn1").click(function (){
        $(".h1").css("color", "red");
    })
    $(".btn2").click(function (){
        $(".h1").css("color", "blue");
    })
    $(".btn3").click(function (){
        $(".h1").css("color", "green");
    })
    $(".btn4").click(function (){
        $(".h1").css("color", "black");
    })
    $(".btn5").click(function (){
        $(".h1").css("color", "orange");
    })
    
    // in css function if we have defined 1 argument it return that css value  
    // when we put 2 argument then we set 1 st argument property in 2 nd argument property --> value 

    // $(".h1").text("Hello")
    // $(".h1").html("<h2>Dhruv</h2>")

    var count = 0;
    $(".add").click(function () {
        count++;
        $(".count").text(count)
    })
    $(".substract").click(function () {
        count--;
        $(".count").text(count)
    })

    // $("h2").hasClass("className") ==> true / false
    // $("h2").addClass("className")
    // $("h2").removeClass("className")

    $(".bigtitle").click(function () {
        $(".h2").addClass("hello margin-50")
    })
    $(".bigtitle1").click(function () {
        $(".h2").removeClass("hello margin-50")
    })

    $(".changeImage").click(function (){
        $(".image").attr("src","https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")
    })
    $(".changeImage1").click(function (){
        $(".image").attr("src","https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")
    })

    $("input").keypress(function(event) {
        $(".displayName").text(event.key)
    })

    $(".over").on("mouseover", function(){
        $(".over").css("color", "red")
    })

    $(".over").on("mouseout", function(){
        $(".over").css("color", "green")
    })

    // $("h1").before("<button>new</button>")        Add html tag before the selected tag 
    // $("h1").after("<button>new</button>")        //Add html tag after the selected tag 
    // $("h1").prepend("<button>new</button>")        
    // $("h1").append("<button>new</button>")       
    // $("h1").remove()   


    $(".remove").on("click", function (){
        $(".aniText").hide();
    })

    $(".show").on("click", function (){
        $(".aniText").show();
    })

    $(".toggle").on("click", function (){
        $(".aniText1").toggle();
    })

    $(".fadeout").on("click", function (){
        $(".aniText1").fadeOut();
    })

    $(".fadein").on("click", function (){
        $(".aniText1").fadeIn();
    })

    $(".fadetoggle").on("click", function (){
        $(".aniText1").fadeToggle();
    })

    $(".slideup").on("click", function (){
        $(".aniText1").slideUp();
    })

    $(".slidedown").on("click", function (){
        $(".aniText1").slideDown();
    })

    $(".slidetoggle").on("click", function (){
        $(".aniText1").slideToggle();
    })

    $(".animate").on("click", function (){
        $(".aniText1").animate({opacity:0.7})                 // only numeric value 
    })
}) 

