let discount = document.querySelector('input[type="checkbox"]')
let priceValue = document.querySelector('.price-value')
let pageviewValue = document.querySelector('.pageview-value')

document.getElementById("myinput").oninput = function () {
    this.style.background = 'linear-gradient(to right, var(--softCyan) 0%, var(--softCyan) ' + this.value + '%, var(--lightGrayishBlue) ' + this.value + '%, var(--lightGrayishBlue) 100%)'

    let inputRange = Number(document.querySelector('#myinput').value)

    switch (inputRange) {
        case 0:
            discount.checked == false ? priceValue.innerHTML = 8 : priceValue.innerHTML = 8 * 0.75
            pageviewValue.innerHTML = '10K'
            break;
        case 25:
            discount.checked == false ? priceValue.innerHTML = 12 : priceValue.innerHTML = 12 * 0.75
            pageviewValue.innerHTML = '50K'
            break;
        case 50:
            discount.checked == false ? priceValue.innerHTML = 16 : priceValue.innerHTML = 16 * 0.75
            pageviewValue.innerHTML = '100K'
            break;
        case 75:
            discount.checked == false ? priceValue.innerHTML = 24 : priceValue.innerHTML = 24 * 0.75
            pageviewValue.innerHTML = '500K'
            break;
        case 100:
            discount.checked == false ? priceValue.innerHTML = 36 : priceValue.innerHTML = 36 * 0.75
            pageviewValue.innerHTML = '1M'
            break;
    }

};

discount.addEventListener('change', function () {
    discount.checked == true ? priceValue.innerHTML = priceValue.innerHTML * (3 / 4) : priceValue.innerHTML = priceValue.innerHTML * (4 / 3)
})
