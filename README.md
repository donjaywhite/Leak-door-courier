<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Leak Door Courier Service</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Leak Door Courier Service</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#services">Services</a>
      <a href="#quote">Get a Quote</a>
      <a href="#track">Track Parcel</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Fast. Reliable. Door-to-Door Delivery.</h2>
    <p>Leak Door Courier — your trusted delivery partner.</p>
    <a href="#quote" class="btn">Get Started</a>
  </section>

  <section id="services">
    <h2>Our Services</h2>
    <ul>
      <li>Same-day delivery</li>
      <li>Overnight shipping</li>
      <li>International packages</li>
    </ul>
  </section>

  <section id="quote">
    <h2>Get a Quote</h2>
    <form id="quoteForm">
      <input type="text" placeholder="Pickup Address" required />
      <input type="text" placeholder="Destination Address" required />
      <input type="number" placeholder="Weight (kg)" required />
      <button type="submit">Calculate</button>
    </form>
    <div id="quoteResult"></div>
  </section>

  <section id="track">
    <h2>Track Your Parcel</h2>
    <form id="trackForm">
      <input type="text" placeholder="Enter Tracking ID" required />
      <button type="submit">Track</button>
    </form>
    <div id="trackResult"></div>
  </section>

  <footer>
    <p>&copy; 2025 Leak Door Courier Service</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
