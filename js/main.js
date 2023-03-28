$(document).ready(function() {
    $(".claim").click(function(){
        $("form input").each(function() {
            let input = $(this);
            if (!input.val()) {
                $("input:invalid").css({"border-color":"red", 
                "background":"url(../images/icon-error.svg)",
                "background-repeat":"no-repeat",
                "background-position":"95% 50%"});
                input.attr("placeholder", "");

            }
            
        })
    })
    
});