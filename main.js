function takeValue(e) {
    e.classList.toggle("selected");
    let ratingElement = document.getElementById("rating-value");
    ratingElement.textContent = e.innerHTML;

    let grayElements = document.getElementsByClassName("selected");
    [...grayElements].forEach(el => {
        if (el.textContent != ratingElement.textContent) {
            el.classList.remove("selected");
        }
    });
}

async function toggleCardContent() {
    document.getElementById("thank-you-card").hidden = false;
    document.getElementById("rate-us-card").hidden = true;
}

