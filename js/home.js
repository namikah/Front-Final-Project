scrollToCountNumber();

scrollToElement(".features-sub-menu", '#cloud-services', 950);
scrollToElement(".our-team", '#our-team', 2366);
scrollToElement(".pricing-plans", '#pricing-plans', 3010);
scrollToElement(".latests-blog", '#latests-blog', 4163);

//for coun number when element scroltop
function scrollToCountNumber() {
    let scroll = 0;
    $(window).scroll(function () {
        let height = $(window).scrollTop();
        if (height > 1600) {
            if (scroll === 0) {

                CalculateNumber(".project-complate", 10);
                CalculateNumber(".happy-customer", 5);
                CalculateNumber(".experienced-context", 79);
                CalculateNumber(".ongoing-project", 21);
            }
            scroll = 1;
        }
    })
}

//for calculate number when page load
function CalculateNumber(className, milliSeconds) {
    $(className).each(function () {
        let that = $(this);
        let temp = $(this).text();
        let i = 0;

        that.text(0);
        let interval = setInterval(function () {
            that.text(++i);
            if (i === +temp) clearInterval(interval);
        }, milliSeconds);
    });
}

//for scroll to element
function scrollToElement(clickElement, scrolToElement, milliSeconds) {
    $(clickElement).click(function (e) {
        e.preventDefault();
        window.scrollTo($(scrolToElement), milliSeconds);
    })
}