$(".features-sub-menu").click(function(e){
    e.preventDefault();
    window.scrollTo($('#cloud-services'), 950);
})
$(".our-team").click(function(e){
    e.preventDefault();
    window.scrollTo($('#our-team'), 2366);
})
$(".pricing-plans").click(function(e){
    e.preventDefault();
    window.scrollTo($('#pricing-plans'), 3010);
})
$(".latests-blog").click(function(e){
    e.preventDefault();
    window.scrollTo($('#latests-blog'), 4163);
})

// let number=0;

//  function asdasd(){
//         $(".project-complate").text(number);
//         parallaxCount();
//  }

// function parallaxCount(){
//     number++;
//     asdasd();
// }

// $(".project-complate").each(function(e) {
//     console.log($(".project-complate").text());
//     var tmp = $(".project-complate").text();
//     var i = 0;
//     while(i != tmp) {
//         $(".project-complate").text(i++);
//     }
// });

    
    $(".project-complate").each(function() {
        var that = $(this),
            tmp = that.html(),
            i = 0,
            interval;

        that.html(0);
        interval = setInterval(function() {
            that.html(++i);
            if (i === +tmp) clearInterval(interval);
        }, 10);
    });
    $(".happy-customer").each(function() {
        var that = $(this),
            tmp = that.html(),
            i = 0,
            interval;

        that.html(0);
        interval = setInterval(function() {
            that.html(++i);
            if (i === +tmp) clearInterval(interval);
        }, 5);
    });
    $(".experienced-context").each(function() {
        var that = $(this),
            tmp = that.html(),
            i = 0,
            interval;

        that.html(0);
        interval = setInterval(function() {
            that.html(++i);
            if (i === +tmp) clearInterval(interval);
        }, 79);
    });
    $(".ongoing-project").each(function() {
        var that = $(this),
            tmp = that.html(),
            i = 0,
            interval;

        that.html(0);
        interval = setInterval(function() {
            that.html(++i);
            if (i === +tmp) clearInterval(interval);
        }, 21);
    });