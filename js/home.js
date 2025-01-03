console.log('Home tab loaded');

// Array of images and descriptions
const slidesData = [
    { image: "../assets/ISpyWithMyLittleEye_Thumbnail.png", description: "Online version of 'I Spy with my Little Eye'" },
    { image: "../assets/LinguisticEar_Thumbnail.png", description: "Quiz game for recoginzing languages of voice samples" },
    { image: "../assets/VowelVision_Thumbnail.png", description: "Website to improve vowel pronunciation" },
];

const slideshowContainer = document.querySelector(".slideshow-container");

// Create the image and description elements
const img = document.createElement("img");
const descriptionDiv = document.createElement("div");
descriptionDiv.className = "description";

slideshowContainer.appendChild(img);
slideshowContainer.appendChild(descriptionDiv);

let currentIndex = 0;

function showNextSlide() {
    const slide = slidesData[currentIndex];
    img.src = slide.image; // Set the image source
    img.alt = `Slide ${currentIndex + 1}`; // Set the alt text
    descriptionDiv.textContent = slide.description; // Set the description

    currentIndex = (currentIndex + 1) % slidesData.length; // Move to the next slide, loop to 0 if at the end

    // Change image every 2.5 seconds
    setTimeout(showNextSlide, 2500);
}

showNextSlide();