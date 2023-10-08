const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/comfort_logo7.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>             
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Comfort Your Feet is an online store where you can get branded shoes at very affordable price. The main aim behind opening this company is to provide branded shoes to youth of Nepal. </p>
    <p class="info">support emails - help@comfortyourfeet.com, customersupport@comfortyourfeet.com</p>
    <p class="info">telephone - +9779898989898, +9779898989898</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="https://www.instagram.com/comfort_your_feet/" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
        </div>
    </div>
    <p class="footer-credit">Comfort Your Feet, Best online shoes store</p>
    `;
}

createFooter();
