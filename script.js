const API_KEY = 'AIzaSyCJi1dN2XFYknUQoN5HLiUYiN1iSWdJ93w';
const dashboard = document.querySelector('.dashboard');
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    const snippet = video.snippet;
    videoCard.innerHTML = `
        <img src="${snippet.thumbnails.medium.url}" alt="${snippet.title}" class="video-thumbnail">
        <div class="video-info">
            <h3 class="video-title">${snippet.title}</h3>
            <p class="channel-name">${snippet.channelTitle}</p>
            <p class="video-stats">Video ID: ${video.id.videoId}</p>
        </div>
    `;

    videoCard.addEventListener('click', () => {
        dashboard.innerHTML = `
            <div class="video-player-container">
                <iframe 
                    width="100%" 
                    height="500px" 
                    src="https://www.youtube.com/embed/${video.id.videoId}?autoplay=1"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <h2>${snippet.title}</h2>
                <p>${snippet.channelTitle}</p>
            </div>
        `;
    });

    return videoCard;
}

function displayVideos(videos) {
    dashboard.innerHTML = '';
    videos.forEach(video => {
        dashboard.appendChild(createVideoCard(video));
    });
}

async function fetchYouTubeVideos(query) {
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(query)}&key=${API_KEY}`;
    try {
        const res = await fetch(endpoint);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
            displayVideos(data.items);
        } else {
            dashboard.innerHTML = '<p>No videos found.</p>';
        }
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        dashboard.innerHTML = '<p>Error loading videos.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchYouTubeVideos('tedtalks'); 
});

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchYouTubeVideos(query);
    }
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});
