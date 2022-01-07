//accordion function
$(".item").click(function (e) {
    e.preventDefault();
    $(".question-accordion .context").not($(this).next()).slideUp("slow");
    $(this).next().slideToggle("slow");
})