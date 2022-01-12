
let basketsList;
let userOfName;
try { userOfName = JSON.parse(localStorage.getItem("active-user")).username; } catch { }
try { basketsList = JSON.parse(localStorage.getItem(userOfName)); } catch { baskets = [] }
if (!basketsList) basketsList = [];
$(".navbar .nav-item-last").remove();
refreshBasketList(basketsList);

//add new item to basket page
function refreshBasketList(basketsList) {
  $(".basket-list").empty();
  let total = 0;
  for (const item of basketsList) {
    total += Number(item.price.substring(20, 26));
    $(".basket-list").append(`
    <li class="basket-item row align-items-center p-3">
    <div class="item-name col-md-2 text-center">
        <p>${item.plan}</p>
    </div>
    <div class="item-info col-md-6 text-center">
      <p>${item.info}</p>
    </div>
    <div class="item-price col-md-2 text-center">
      <p>${item.price}</p>
    </div>
    <div class="item-close col-md-2 text-center">
      <i class="far fa-trash-alt x-close" data-id="${item.plan}"></i>
    </div>
  </li>
      `)
  }
  //no selected item in basket page
  if (total === 0) {
    $(".basket-list").append(` <li class="basket-item row align-items-center p-3">
        <div class="item-name col-12 text-center">
            <p>no selected item yet</p>
        </div>
      </li>`);
  }
  //add total basket page list
  $(".basket-list").append(`
    <li class="basket-item row align-items-center p-3">
    <div class="item-name col-md-6 text-center">
    <p>TOTAL:</p>
    </div>
    <div class="item-name col-md-6 text-center">
    <p>${total.toFixed(2) + " USD / Month"}</p>
    </div>
    </li>
    `)
  //remove item from basket list
  $(".x-close").click(function (e) {
    try { userOfName = JSON.parse(localStorage.getItem("active-user")).username; } catch { }
    try { basketsList = JSON.parse(localStorage.getItem(userOfName)); } catch { baskets = [] }
    if (!basketsList) basketsList = [];

    for (let i = 0; i < basketsList.length; i++) {
      if (basketsList[i].plan === this.getAttribute("data-id")) {
        basketsList.splice(i, 1);
        localStorage.setItem(username, JSON.stringify(basketsList));
      }
    }
    refreshBasketList(basketsList);
  })
}