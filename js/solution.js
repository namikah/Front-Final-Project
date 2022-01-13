let imgSrc = "";
let autoSlideInterval;
let nextImageSrc = ""
let prevImageSrc = ""
let curElement;

//add click event for all images
$(".blog-images .image").click(function (e) {
    e.preventDefault();
    imgSrc = $(this).attr("data-id");
        openPopup(this);
        // startAutoSlide();
    });

//open popup slider for biggest image
function openPopup(item) {
    resetClassList();
    $(item).addClass("show-image");
    imgSrc = $(item).attr("data-id");
    $(".big-image-slide").attr("src", imgSrc);
    $(".popup").css("display","flex");
}

//for change slider slowly
function changeEffect(func) {
    $(".big-image-slide").parent().css("background-color","black");
    $(".big-image-slide").css("opacity","0");
    $(".big-image-slide").css("transition","0.5s");
    setTimeout(() => {
        $(".big-image-slide").css("opacity","1");
        func();
    }, 300);
}

function resetClassList() {
  $(".show-image").removeClass("show-image");
}

//stop auto slide with interval
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

//close popup
function closePopup() {
    $(".popup").css("display","none");
    stopAutoSlide();
}
//close popup with X
$(".popup .inner .close").click(function () {
    closePopup();
})

//Close popup with side click
$(".popup").click(function(e) {
    if (e.target.classList.contains("popup")) {
        closePopup();
    }
})
//add keys for popup
$(document).keydown(function (e) { 
    
    if ( $(".popup").css("display") !== "flex") return
    curElement = document.querySelector(".show-image");
    switch (e.code) {
        case "ArrowRight":
            stopAutoSlide();
            changeEffect(() => changeNext(curElement));
            break;
        case "ArrowLeft":
            stopAutoSlide();
            changeEffect(() => changePrev(curElement));
            break;
        case "Escape":
            closePopup();
            break;
        default:
            break;
    }
})
//left-arrow click for change image
$(".arrows .left-arrow i").click(function (e) {
    curElement = $(".show-image");
    changeEffect(() => changePrev(curElement));
    stopAutoSlide();
})
//right-arrow click for change image
$(".arrows .right-arrow i").click(function (e) {
    curElement = $(".show-image");
    changeEffect(() => changeNext(curElement));
    // stopAutoSlide();
})
//change images next
function changeNext(currentElement) {
    if ($(".blog-images div").last() !== $(currentElement)) {
        nextImageSrc = $(currentElement).next();
    }
    else {
        nextImageSrc = $(".first-image");
        $(".first-image").addClass("show-image")
    }
    openPopup(nextImageSrc);
}
//change prev
function changePrev(currentElement) {
    if ($(".blog-images div").first() !== $(currentElement)) {
        nextImageSrc = $(currentElement).prev();
    }
    else {
        nextImageSrc = $(".blog-images div").last()
    }
    openPopup(nextImageSrc);
}