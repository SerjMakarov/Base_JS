//массив товаров
items = [
    {
        name: 'Кроссовки',
        price: '4500',
        pic: 'img/sneakers.jpg',
    },
    {
        name: 'Брюки',
        price: '2000',
        pic: 'img/pants.jpg',
    },
    {
        name: 'Футболка',
        price: '800',
        pic: 'img/t-shirt.jpg',
    }
];

console.log(items);

var catalog = document.getElementById('js-items');

bypassDOM(catalog.children);

function bypassDOM(pointIn){
    for(i = 0; pointIn.length >= i; i++){
        if(pointIn.className != 'js-pic'){
            console.log('js-pic не найден');
            // console.log(pointIn[i].children[i].children[i].className);
            if(i == pointIn.length){
                bypassDOM(pointIn[i].children[i].children[i]);
            }
        }
    }
}

console.log(catalog.children);
