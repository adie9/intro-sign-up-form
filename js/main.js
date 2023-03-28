$(document).ready(function() {
    $(".claim").click(function(){
        $("form input").each(function() {
            let input = $(this);
            let name = input.attr("name");
            let error_msg = name + ' cannot be empty.';
            

            if (!input.val()) {
                $("input:invalid").css({"border-color":"red", 
                "background":"url(../images/icon-error.svg)",
                "background-repeat":"no-repeat",
                "background-position":"95% 50%"});
                input.attr("placeholder", name + " cannot be empty.");

            }

            
        })
    })
    
});