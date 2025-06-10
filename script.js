import dummyVideoData from './data.js';

const dashboard = document.querySelector('.dashboard');

function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="channel-name">${video.channelName}</p>
            <p class="video-stats">${video.viewCount} • ${video.uploadDate}</p>
        </div>
    `;
    videoCard.addEventListener('click', () => {
        // For now, just log the video ID. Later, this will open the iframe.
        console.log('Playing video:', video.id);
        // Replace the dashboard content with an iframe for the video
        dashboard.innerHTML = `
            <div class="video-player-container">
                <iframe 
                    width="100%" 
                    height="500px" 
                    src="https://www.youtube.com/embed/${video.id}?autoplay=1"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <h2>${video.title}</h2>
                <p>${video.channelName}</p>
            </div>
        `;
    });
    return videoCard;
}

function displayVideos(videos) {
    dashboard.innerHTML = ''; // Clear existing videos
    videos.forEach(video => {
        dashboard.appendChild(createVideoCard(video));
    });
}

// Display dummy videos on page load
document.addEventListener('DOMContentLoaded', () => {
    displayVideos(dummyVideoData);
});

// Search functionality (placeholder for now)
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    console.log('Searching for:', query);
    // In a real app, this would fetch from YouTube Data API
    // For now, we can filter dummy data or just re-display all
    const filteredVideos = dummyVideoData.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.channelName.toLowerCase().includes(query.toLowerCase())
    );
    displayVideos(filteredVideos.length > 0 ? filteredVideos : dummyVideoData);
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});