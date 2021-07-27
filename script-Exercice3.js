import {MDCDialog} from '@material/dialog';
const dialogProduct = new MDCDialog(document.querySelector('.mdc-dialog__product-choice'));

document.addEventListener("DOMContentLoaded",function(){
    const btn = document.querySelectorAll(".mui-btn--productSize");
    for (let i=0; i<btn.length;i++) {
        btn[i].onclick = function() {
            const imgSrc = document.getElementById('img-2-0').src;
            const productTitle = document.getElementsByClassName('mdc-card-pdp__title')[0].innerText;
            const productDelivery = document.getElementsByClassName('mdc-card-pdp__delivery')[0].innerText;
            const btnClicked = this;
            let productSize = null;
            let productPrice = null;
            for (let i = 0; i < btnClicked.childNodes.length; i++) {
                if (btnClicked.childNodes[i].className == "size") {
                    productSize = btnClicked.childNodes[i].innerText;
                } else if(btnClicked.childNodes[i].className == "price-new") {
                    productPrice = btnClicked.childNodes[i].innerText;
                    break;
                }
            }
            document.getElementById('choice-content-img').src = imgSrc;
            document.getElementById('dialog-product-choice-title').innerText = productTitle;
            document.getElementById('choice-content-delivery').innerText = productDelivery;
            document.getElementById('choice-content-size').innerText = productSize;
            document.getElementById('choice-content-price').innerText = productPrice;
            dialogProduct.open();
        }
    }
});