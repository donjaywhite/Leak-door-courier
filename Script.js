document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const weight = parseFloat(document.querySelector('input[type="number"]').value);
  const ratePerKg = 20;
  const cost = weight * ratePerKg;
  document.getElementById('quoteResult').innerText = `Estimated Cost: $${cost.toFixed(2)}`;
});

document.getElementById('trackForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const trackingId = e.target.querySelector('input').value;
  // Mock tracking
  document.getElementById('trackResult').innerText =
    `Tracking ID: ${trackingId} - In Transit`;
});
