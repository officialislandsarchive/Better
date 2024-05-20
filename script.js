document.getElementById('priceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    const webhookURL = 'https://discord.com/api/webhooks/1242190935438262393/_dq3W83jPTvyvv5zSeVHUqueNzNPD50MLHw0QKbhsNQEfV5g9xAzkZ-V3qzDAtXWYSoB'; // Replace with your Discord webhook URL

    const payload = {
        embeds: [{
            title: "New Price Submission",
            color: 16711680, // Red color
            fields: [
                {
                    name: "Product",
                    value: productName,
                    inline: true
                },
                {
                    name: "Price",
                    value: `$${productPrice}`,
                    inline: true
                }
            ],
            timestamp: new Date()
        }]
    };

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Disable the submit button

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
    }).finally(() => {
        // Enable the submit button after a delay (e.g., 10 seconds)
        setTimeout(() => {
            submitButton.disabled = false;
        }, 25000); // 10000 milliseconds = 10 seconds
    });
});
