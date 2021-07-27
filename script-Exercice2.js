document.addEventListener("DOMContentLoaded",function(){
    let list = document.querySelector(".bouquets--list");
    const items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
        if (items[i].nodeType == 1) {
            itemsArr.push(items[i]);
        }
    }

    itemsArr.reverse();
    for (i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
    }
});
