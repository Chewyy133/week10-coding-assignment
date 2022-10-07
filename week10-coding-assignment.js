function newOrder(){
    let num = document.getElementById('num').value;
    let crust = document.getElementById('crust').value;
    let sauce = document.getElementById('sauce').value;
    let topping = document.getElementById('topping').value;
    let size = document.getElementById('size').value;

    let orders = document.getElementById('orders');

    //create a new row
    let newRow = orders.insertRow(-1)

    let newOrderNum = newRow.insertCell(0).appendChild(document.createTextNode(num));
    let newCrust = newRow.insertCell(1).appendChild(document.createTextNode(crust));
    let newSauce = newRow.insertCell(2).appendChild(document.createTextNode(sauce));
    let newTopping = newRow.insertCell(3).appendChild(document.createTextNode(topping));
    let newSize = newRow.insertCell(4).appendChild(document.createTextNode(size));
}

let orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', (event) => {
    event.preventDefault();
    newOrder();
});