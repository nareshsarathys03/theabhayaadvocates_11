document.getElementById('payment-button').onclick = function(event) {
    event.preventDefault();
  
    var options = {
      "key": "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      "amount": "10000", // Amount in paise (e.g., 10000 paise = ₹100)
      "currency": "INR",
      "name": "RightConnect",
      "description": "Consultation Fee",
      "handler": function (response){
        // Handle successful payment here
        alert("Payment successful!");
        window.location.href = "thankyou.html"; // Redirect to a thank you page
      },
      "prefill": {
        "name": document.getElementById('client-name').value,
        "email": document.getElementById('client-email').value,
        "contact": document.getElementById('client-phone').value
      },
      "theme": {
        "color": "#ED254E"
      }
    };
    
    var rzp = new Razorpay(options);
    rzp.open();
  }
  