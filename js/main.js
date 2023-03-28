$(document).ready(function() {
    $(".claim").click(function(){
        $("form input").each(function() {
            let input = $(this);
            let name = input.attr("name");
            

            if (!input.val()) {
                $("input:invalid").css({"border-color":"red", 
                "background":"url(../images/icon-error.svg)",
                "background-repeat":"no-repeat",
                "background-position":"95% 50%"});
                
                if (input.attr("type") == "email") {
                    input.attr("placeholder", "Looks like this is not an email.");
                } else {
                    input.attr("placeholder", "This field cannot be empty.");
                }
               

            }

            
        })

        
    })
    
});