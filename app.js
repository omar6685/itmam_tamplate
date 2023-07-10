
const mainImage = document.querySelector(".main-image");
const imageSecondery = document.querySelector(".image-secondery");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    // Calculate the rotation angle based on the scroll position
    let rotation = (scroll / (document.documentElement.scrollHeight - window.innerHeight)) * 150;

    // Apply the rotation to the main image
    mainImage.style.transform = `rotate(${rotation}deg)`;
    
// Get the position and dimensions of the "clients-5" element
let clients5 = document.querySelector(".clients-6");
let clients5Rect = clients5.getBoundingClientRect();
let footer = document.querySelectorAll("footer")

// Calculate the scroll position at which the "clients-5" element should start moving
let startScroll = (clients5Rect.top) - window.innerHeight;

// Calculate the scroll position at which the "clients-5" element should stop moving
let stopScroll = clients5Rect.bottom+1200;

// Change the "margin-left" of the "clients-5" element based on the scroll position
if (scroll >= startScroll && scroll <= stopScroll) {
    let progress = (scroll - startScroll) / (stopScroll - startScroll);
    let marginLeft = 50 - progress * 104;
    clients5.style.marginLeft = `${marginLeft}%`;
}

});

// Add the following code inside the window.addEventListener('scroll', () => {}) block
