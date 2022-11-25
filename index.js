const rateButtons = document.querySelectorAll('.rating-container');
const submitButton = document.querySelector('.submit-content-container');
const thankYouSection = document.querySelector('.thank-you-content-container');
const contentContainer = document.querySelector('.content-container');
const ratingText = document.querySelector('p.rating-text');
let rate = 0

function removeActive(){
    for (let i = 0; i < rateButtons.length; i++) {
        rateButtons[i].classList.remove("active")
    }

}

rateButtons.forEach((rateButton, index) => {
    // console.log(rateButton)
    rateButton.addEventListener('click', () => {
        removeActive();
        rateButton.classList.add("active");
        rate = index + 1
        ratingText.innerHTML = `  You selected ${rate} out of 5`
    })
    
});


submitButton.addEventListener('click', () => {
    contentContainer.classList.add("invisible")
    thankYouSection.classList.remove("invisible")

    if (rate === 0) {
        ratingText.innerHTML = `  You selected ${0} out of 5`
    }

})



