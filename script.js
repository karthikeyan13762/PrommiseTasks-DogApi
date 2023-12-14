// Select the first element with the class 'dogButton'
let dogButton = document.querySelector('.dogButton');

// Select the first element with the class 'dogImage'
let dogImage = document.querySelector('.dogImage');

// Function to fetch and display a random dog image
let fetchImage = () => {
    // Make a request to the Dog API for a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
        // Parse the response as JSON
        .then(response => response.json())
        // Handle the data from the API
        .then(data => {
            // Log the image URL to the console
            console.log(data.message);
            
            // Set the 'src' attribute of the image element to the fetched image URL
            dogImage.setAttribute('src', `${data.message}`);
        })
        // Handle any errors that may occur during the fetch
        .catch((error) => {
            console.log(error);
        });
}

// Add a click event listener to the button, triggering the fetchImage function
dogButton.addEventListener('click', fetchImage);

// Initial fetch and display when the page loads
fetchImage();