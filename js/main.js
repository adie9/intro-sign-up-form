$(document).ready(function() {
    $(".claim").click(function(){
        $("form input").each(function() {
            let input = $(this);
            if (!input.val()) {
                alert("Type " + input.attr("type") + "Name " + input.attr("name"));
            }
            
        })
    })
    
});