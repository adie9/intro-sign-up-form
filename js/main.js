$(document).ready(function() {
    $(".claim").click(function(){
        $("form input").each(function() {
            let input = $(this);
            if (!input.val()) {
                // Change border color to red and remove placeholder text
                input.css("border-color", "red").attr("placeholder", "");

                // Add img element 
                

                

            }
            
        })
    })
    
});