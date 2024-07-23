document.addEventListener("DOMContentLoaded", function() {
    const reviews = [
        {
            photoUrl: "../Review Carousel/photo1.jpg",
            title: 'Mary Anne',
            description: 'Amazing product, 10/10, would buy again.'
        },
        {
            photoUrl: "../Review Carousel/photo2.jpg",
            title: 'Bob Barelys',
            description: 'Loved it, was a great product.'
        },
        {
            photoUrl: "../Review Carousel/photo3.jpg",
            title: 'Tamborine Tom',
            description: 'Amazing, amazing, AMAZING'
        },
        {
            photoUrl: "../Review Carousel/photo4.jpeg",
            title: "Quidditch Brody",
            description: "BEST thing I've ever used."
        },
        {
            photoUrl: "../Review Carousel/photo5.jpeg",
            title: "Lucky Blue",
            description: "LOVE IT LOVE IT LOVE ITTTT"
        }, 
        {
            photoUrl: "../Review Carousel/photo6.jpg",
            title: "Blush Bob",
            description: "BEST THING EVERRR, NEVER USING ANYTHING ELSE AGAINN."
        }
    ];

    // Initialize currentIndex to show the first item
    let currentIndex = 0;

    // DOM elements
    const photoUrlElem = document.getElementById("review-photo");
    const titleElem = document.getElementById("title-review");
    const descriptionElem = document.getElementById("review-description");

    // Function to display review based on currentIndex
    function showReview(index) {
        const review = reviews[index];
        photoUrlElem.src = review.photoUrl; // Assuming photoUrlElem is an <img> element
        titleElem.textContent = review.title;
        descriptionElem.textContent = review.description;
    }

    // Show the first review by default
    showReview(currentIndex);

    // Next button functionality
    function next() {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    }

    // Previous button functionality
    function previous() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    }

    // Function to display a random review
    function showRandomReview() {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        const review = reviews[randomIndex];
        photoUrlElem.src = review.photoUrl;
        titleElem.textContent = review.title;
        descriptionElem.textContent = review.description;
    }

    // Show a random review initially
    showRandomReview();

    // Event listeners for next, previous, and random buttons
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("previous").addEventListener("click", previous);
    document.getElementById("random").addEventListener("click", showRandomReview);
});
