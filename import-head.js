$.get("/head.html", function(data){
    $("head").replaceWith(data);
});