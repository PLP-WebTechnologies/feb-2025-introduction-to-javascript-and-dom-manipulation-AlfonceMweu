// 1. Change text content dynamically
document.getElementById('text-changer').addEventListener('click', function() {
    const introText = document.getElementById('p-main');
    if (introText.textContent.includes("UI and UX")) {
        introText.textContent = "I specialize in creating intuitive user interfaces and engaging user experiences.";
        introText.style.backgroundColor = "#e8f8f5";
        introText.style.borderLeftColor = "#1abc9c";
    } else {
        introText.textContent = "Hello, I am Alfonce Mweu, a Software Engineering student majoring in UI and UX.";
        introText.style.backgroundColor = "#ecf0f1";
        introText.style.borderLeftColor = "#3498db";
    }
});
// 2. Modify CSS styles via JavaScript
document.getElementById('style-changer').addEventListener('click', function() {
    const profileImage = document.getElementById('profile-image');
    if (profileImage.style.borderRadius === "50%") {
        profileImage.style.borderRadius = "8px";
        profileImage.style.border = "3px solid #3498db";
        profileImage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    } else {
        profileImage.style.borderRadius = "50%";
        profileImage.style.border = "5px solid #2c3e50";
        profileImage.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
    }
});
// 3. Add or remove an element when button is clicked
document.getElementById('toggle-link').addEventListener('click', function() {
    const linksContainer = document.getElementById('links-container');
    const portfolioLink = linksContainer.querySelector('.portfolio-link');
    const newLink = document.createElement('a');
    
    newLink.href = "https://my-portfolio-project-brown.vercel.app/";
    newLink.textContent = "Visit My Portfolio";
    newLink.className = "portfolio-link";
    
    if (portfolioLink && portfolioLink.href.includes("google.com")) {
        linksContainer.removeChild(portfolioLink);
        linksContainer.appendChild(newLink);
    } else {
        const googleLink = document.createElement('a');
        googleLink.href = "https://google.com";
        googleLink.textContent = "Go to Google";
        googleLink.className = "portfolio-link";
        
        if (linksContainer.firstChild) {
            linksContainer.removeChild(linksContainer.firstChild);
        }
        linksContainer.appendChild(googleLink);
    }
});
