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
                
                if (input.attr("type") == "email") {
                    input.attr("placeholder", "Please enter a valid email.");
                } else {
                    input.attr("placeholder", "This field cannot be empty.");
                }
               

            }

            
        })

        
    })
    
});