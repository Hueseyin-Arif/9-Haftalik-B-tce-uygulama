document.getElementById('hesapla').addEventListener('click', topla);

function topla(){
    var product1_piece;
    var product1_price;

    product1_piece = document.getElementById('product1_piece').value
    product1_price = document.getElementById('product1_price').value

    product1_total = product1_piece * product1_price;
    document.getElementById('product1_total').value = product1_total;


    var product2_piece;
    var product2_price;

    product2_piece = document.getElementById('product2_piece').value
    product2_price = document.getElementById('product2_price').value

    product2_total = product2_piece * product2_price;
    document.getElementById('product2_total').value = product2_total;



    var product3_piece;
    var product3_price;

    product3_piece = document.getElementById('product3_piece').value
    product3_price = document.getElementById('product3_price').value

    product3_total = product3_piece * product3_price;
    document.getElementById('product3_total').value = product3_total;



    products_total = product1_total + product2_total + product3_total;
    document.getElementById('products_total').value  = products_total;
    
    var product4_piece;
    var product4_price;

    product4_piece = document.getElementById('product4_piece').value
    product4_price = document.getElementById('product4_price').value

    product4_total = product4_piece * product4_price;
    document.getElementById('product4_total').value = product4_total;


    var product5_piece;
    var product5_price;

    product5_piece = document.getElementById('product5_piece').value
    product5_price = document.getElementById('product5_price').value

    product5_total = product5_piece * product4_price;
    document.getElementById('product5_total').value = product5_total;



    products_price = product4_total + product5_total
    document.getElementById('products_price').value = products_price;


    price_of_all = products_total + products_price
    document.getElementById('price_of_all').value = price_of_all;
    
}   
