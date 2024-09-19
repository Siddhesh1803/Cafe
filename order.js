document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const item = document.getElementById ('item').value; //food item
    const quantity = document.getElementById('quantity').value;//food quantity

    document.getElementById('order-message').textContent = `Order placed: ${quantity} ${item}(s).`;
});