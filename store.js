var removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons)
var i;
for(i=0;i<removeCartItemButtons.length;i++) {
    removeCartItemButtons[i].addEventListener('click',function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
    })}
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)}

        var addToCartButtons = document.getElementsByClassName('shop-item-button')
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i]
            button.addEventListener('click', addToCartClicked)
        }
        function quantityChanged(event) {
            var input = event.target
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1
            }
            updateCartTotal()
        }

        function addToCartClicked(event) {
            var button = event.target
            var shopItem = button.parentElement
            var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
            var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
            addItemToCart(title, price)
            updateCartTotal()
        }





        function addItemToCart(title, price) {
            var cartRow = document.createElement('div')
            
            var cartItems = document.getElementsByClassName('cart-items')[0]
            var cartItems = document.getElementsByClassName('cart-items')[0]
            var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
            for (var i = 0; i < cartItemNames.length; i++) {
                if (cartItemNames[i].innerText == title) {
                    alert('This item is already added to the cart')
                    return
                }
            }
            var cartRowContents = ` <div class="cart-row">
            <span class="cart-item-title">${title}</span>
        <span class="cart-price cart-column">${price}</span>
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
      
    </div>
      `
           cartRow.innerHTML = cartRowContents
           cartItems.append(cartRow)
           cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
           cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
           
           
        }





 function updateCartTotal(){
     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
     var total=0
     for(var i=0;i<cartRows.length;i++){
         var cartRow=cartRows[i]
         var priceElement=cartRow.getElementsByClassName('cart-price')[0]
         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
         var price=parseFloat(priceElement.innerText.replace('Rs.',''))
         var quantity=quantityElement.value
         total=total+(price*quantity)
     }
    document.getElementsByClassName('cart-total-price')[0].innerText='Rs.'+ total
 }