document.getElementById('priceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    const webhookURL = 'https://discord.com/api/webhooks/1242190935438262393/_dq3W83jPTvyvv5zSeVHUqueNzNPD50MLHw0QKbhsNQEfV5g9xAzkZ-V3qzDAtXWYSoB'; // Replace with your Discord webhook URL

    const payload = {
        content: `New price submission:\nProduct: ${productName}\nPrice: $${productPrice}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert('Price submitted successfully!');
            document.getElementById('priceForm').reset();
        } else {
            alert('Error submitting price.');
        }
    }).catch(error => {
        alert('Error submitting price: ' + error);
    });
});

