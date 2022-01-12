$(".search-btn-active").click(function (e) { 
    e.preventDefault();
    let searchText = $(".input-search").val();
   $(".blog-card h4").parent().parent().parent().css("display","flex");
   $(".blog-card h4:not(:contains("+ searchText +"))").parent().parent().parent().css("display","none");
});