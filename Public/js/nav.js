const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/comfort_logo7.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a> <img src="img/login icon.jpeg" id="user-img" alt="">
            <div class="login-logout-popup hide">
                <p class="account-info">Log in as,name</p>
                <button class="btn" id="user-btn">Log Out</button>
            </div>
            </a>
            <a href="cart.html"><img src="img/cart icon.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="index.html" class="link">home</a></li>
        <li class="link-item"><a href="shop.html" class="link">Shop</a></li>
        <li class="link-item"><a href="blog.html" class="link">Blog</a></li>
        <li class="link-item"><a href="about.html" class="link">About Us</a></li>
        <li class="link-item"><a href="contact.html" class="link">Contact Us</a></li>
        <li class="link-item"><a href="seller.html" class="link">Seller Dashboard</a></li>
    </ul>
    `;
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user !=null){
        //means user is logged In
        popuptext.innerHTML = `log in as ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    }else{
        //user is logged Out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}