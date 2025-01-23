document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    console.log(menuIcon, menu); // Check if the elements exist
    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

// // Get the elements
// const leftArrow = document.querySelector('.nav-arrow.left');
// const rightArrow = document.querySelector('.nav-arrow.right');
// const dealsContainer = document.querySelector('.deals');

// console.log(leftArrow, rightArrow, dealsContainer); // Check if the elements exist

// // Function to scroll left
// leftArrow.addEventListener('click', () => {
//     dealsContainer.scrollBy({
//         left: -250,  // Move left by 250px
//         behavior: 'smooth'  // Smooth scrolling
//     });
// });

// // Function to scroll right
// rightArrow.addEventListener('click', () => {
//     dealsContainer.scrollBy({
//         left: 250,  // Move right by 250px
//         behavior: 'smooth'  // Smooth scrolling
//     });
// });
// Sawirrada iyo xogtooda
const images = [
    {
        src: "./Image (1).png",
        title: "Madrid",
        rating: "4.8",
        location: "Spain",
        originalPrice: "$950",
        discountedPrice: "$850",
    },
    {
        src: "./Image (2).png",
        title: "Firenze",
        rating: "4.5",
        location: "Italy",
        originalPrice: "$850",
        discountedPrice: "$750",
    },
    {
        src: "./Image (3).png",
        title: "Paris",
        rating: "4.9",
        location: "France",
        originalPrice: "$1000",
        discountedPrice: "$900",
    },
    {
        src: "./Image (4).png",
        title: "Berlin",
        rating: "4.6",
        location: "Germany",
        originalPrice: "$1100",
        discountedPrice: "$950",
    },
];

// Index-kii hadda jira
let currentIndex = 0;

// DOM Elements
const image1 = document.getElementById("image-1");
const title1 = document.getElementById("title-1");
const rating1 = document.getElementById("rating-1");
const location1 = document.getElementById("location-1");
const originalPrice1 = document.getElementById("original-price-1");
const discountedPrice1 = document.getElementById("discounted-price-1");

const image2 = document.getElementById("image-2");
const title2 = document.getElementById("title-2");
const rating2 = document.getElementById("rating-2");
const location2 = document.getElementById("location-2");
const originalPrice2 = document.getElementById("original-price-2");
const discountedPrice2 = document.getElementById("discounted-price-2");

// Update UI function
function updateUI() {
    // Update the first card
    const firstImage = images[currentIndex];
    image1.src = firstImage.src;
    title1.textContent = firstImage.title;
    rating1.textContent = firstImage.rating;
    location1.textContent = firstImage.location;
    originalPrice1.textContent = firstImage.originalPrice;
    discountedPrice1.textContent = firstImage.discountedPrice;

    // Update the second card
    const secondImage = images[(currentIndex + 1) % images.length];
    image2.src = secondImage.src;
    title2.textContent = secondImage.title;
    rating2.textContent = secondImage.rating;
    location2.textContent = secondImage.location;
    originalPrice2.textContent = secondImage.originalPrice;
    discountedPrice2.textContent = secondImage.discountedPrice;
}

// Event listeners for navigation
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 2) % images.length;
    updateUI();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 2 + images.length) % images.length;
    updateUI();
});

// Initialize
updateUI();

const trips = [
    { src: "./Image (7).png", title: "Rome, Italy", details: "10 Days Trip", price: "$5,42k", rating: "4.8" },
    { src: "./Image (3).png", title: "London, UK", details: "7 Days Trip", price: "$2,42k", rating: "4.7" },
    { src: "./Image (4).png", title: "Paris, France", details: "5 Days Trip", price: "$3,12k", rating: "4.6" },
    { src: "./Image (6).png", title: "Berlin, Germany", details: "6 Days Trip", price: "$2,89k", rating: "4.7" },
    { src: "./Image (5).png", title: "Osaka, Japan", details: "10 Days Trip", price: "$5,42k", rating: "4.8" },
];

let currentInde = 0;

function updateCards() {
    for (let i = 0; i < 3; i++) {
        const tripIndex = (currentInde + i) % trips.length;
        const card = document.getElementById(`image-${i + 1}`);
        const title = document.getElementById(`title-${i + 1}`);
        const details = document.getElementById(`details-${i + 1}`);
        const price = document.getElementById(`price-${i + 1}`);
        const rating = document.getElementById(`rating-${i + 1}`);

        card.src = trips[tripIndex].src;
        title.textContent = trips[tripIndex].title;
        details.textContent = trips[tripIndex].details;
        price.textContent = trips[tripIndex].price;
        rating.textContent = `★ ${trips[tripIndex].rating}`;
    }
}

document.getElementById("right").addEventListener("click", () => {
    currentInde = (currentInde + 3) % trips.length;
    updateCards();
});

document.getElementById("left").addEventListener("click", () => {
    currentInde = (currentInde - 3 + trips.length) % trips.length;
    updateCards();
});

// Initial Display
updateCards();






const blogData = [
    { src: "./Image (4).png", title: "The Amazing Difference a Year of Travelling", date: "July 27, 2021" },
    { src: "./Image (5).png", title: "Travel far enough, you meet yourself", date: "July 27, 2021" },
    { src: "./Image (7).png", title: "How to Save Money While Visiting Africa", date: "July 27, 2021" },
    { src: "./Image (6).png", title: "Reflections on 5 Months of Travel: Time to Hang", date: "July 27, 2021" },
    { src: "./Image (8).png", title: "Discovering the Beauty of the Alps", date: "August 15, 2021" },
  
];

let currentInd = 0;
const totalBlogs = blogData.length;

function updateBlogCards(index) {
    const container = document.querySelector(".blog-container");
    container.innerHTML = "";

    for (let i = index; i < index + 3; i++) {
        const blog = blogData[i % totalBlogs];
        const card = document.createElement("div");
        card.classList.add("blog-card");
        card.innerHTML = `
            <img src="${blog.src}" alt="${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.date}</p>
        `;
        container.appendChild(card);
    }

    updateIndicators(index / 3);
}

function updateIndicators(activeIndex) {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === activeIndex);
    });
}

function startAutoSlide() {
    setInterval(() => {
        currentInd = (currentInd + 3) % totalBlogs;
        updateBlogCards(currentInd);
    }, 2000);
}

// Event Listeners for Indicators
document.querySelectorAll(".indicator").forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
        document.querySelectorAll(".indicator").forEach((ind) => ind.classList.remove("active"));
        e.target.classList.add("active");

        const newIndex = parseInt(e.target.getAttribute("data-index")) * 3;
        currentInd = newIndex;
        updateBlogCards(currentInd);
    });
});

// Initial Display
updateBlogCards(currentInd);
startAutoSlide();
