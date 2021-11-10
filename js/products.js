
// var modal = document.getElementById('sp01');
// window.onclick = function(event) {
// if (event.target == modal) {
//     modal.style.display = "none";
//     }
// }

// var ProductImg = document.getElementById("ProductImg");
// var SmallImg = document.getElementsByClassName("small-img");

// SmallImg[0].onclick = function(){
//     ProductImg.src = SmallImg[0].src;
// }
// SmallImg[1].onclick = function(){
//     ProductImg.src = SmallImg[1].src;
// }
// SmallImg[2].onclick = function(){
//     ProductImg.src = SmallImg[2].src;
// }
// SmallImg[3].onclick = function(){
//     ProductImg.src = SmallImg[3].src;
// }
let addToCartButtons = document.getElementsByClassName('btn-primary')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')

document.getElementById('showcart').style.display= "none";

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart) 
}
// cart=giohang
// buyNow=themvaogiohang
const cart = new Array();

function showCart(event) {
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnParent.children[0].src
    let itemName = btnParent.children[1].innerText
    let itemPrice = btnParent.children[2].innerText
    const sp = new Array(itemImage,  itemPrice, itemName, quantityFields);

    cart.push(sp);

    console.log(cart);
    showcountsp();

}

function showcountsp() {
    document.getElementById("countsp").innerHTML = cart.length;
}

function showmycart(){
var infoCart="";
var tong=0;
    for(let i =0; i<cart.length;i++){
        var tt= parseInt(cart[i][1])*parseInt(cart[i][3]);
        tong +=tt;
        infoCart += '<tr>'+
        '<td>'+(i+1)+'</td>'+
        '<td><img width="92px" height="124px" src="'+cart[i][0]+'" alt=""></td>'+
        '<td>'+cart[i][2]+'</td>'+
        '<td>'+cart[i][1]+'</td>'+
        '<td>'+cart[i][3]+'</td>'+
        '<td>'+
            '<div>'+tt+'</div>'+
        '</td>'+
    '</tr>';
    }
    infoCart +='<tr>'+
        '<th colspan="5">Tổng đơn hàng</th>'+
        '<th>'+
            '<div>'+tong+'</div>'+
        '</th>'+
        '</tr>';

        document.getElementById("mycart").innerHTML=infoCart;
}
 


function showcart1(){
    const x = document.getElementById('showcart');
    if(x.style.display == "block"){
     x.style.display = "none";
    }
    else{ 
        x.style.display = "block";
    }
    showmycart();
}


   


   


