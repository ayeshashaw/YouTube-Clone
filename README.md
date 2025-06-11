🎬 YouTube Clone
A simplified YouTube-like web application built with HTML, CSS, and JavaScript, now enhanced with real-time data from the YouTube Data API v3. This project demonstrates how to fetch, display, and interact with video content using web technologies.

✨ Features
🔥 Live Video Data: Fetches real-time video content from the YouTube Data API v3.

🏠 Homepage Dashboard: Displays a grid of video cards showing:

Thumbnail

Title

Channel Name

Video ID (can be extended to view count, publish date, etc.)

▶️ Video Playback: Click a video card to open an embedded YouTube player with autoplay.

🔍 Search Functionality: Use the search bar to find videos by keyword or channel.

📱 Responsive Design: Fully responsive layout optimized for desktop and mobile.

🧭 Navigation Bar: Includes a logo, search input, and static links (Home, Trending, Subscriptions).

🧰 Technical Stack
Frontend: HTML, CSS, JavaScript

API: YouTube Data API v3

Video Embedding: YouTube IFrame Player API

🚀 Getting Started
Clone the Repository
bash
Copy
Edit
git clone https://github.com/ayeshashaw/YouTube-Clone
cd youtube-clone
Open the Project
Simply open index.html in your browser.

For best experience, use a Live Server (e.g., Live Server extension in VS Code).

📁 Project Structure
graphql
Copy
Edit
youtube-clone/
├── index.html        # Main HTML structure
├── style.css         # CSS styles
├── script.js         # Core JavaScript logic (API calls, rendering, events)
├── data.js           # (Optional) Dummy data used as fallback or demo
├── README.md         # Project overview (this file)
🧪 Usage
Browse Videos: The homepage loads trending or default videos (e.g., "flappy bird").

Search: Enter a query (e.g., "coding tutorials") and hit search or press Enter.

Play a Video: Click on a video card to load it in an embedded iframe player.

🎯 Future Enhancements
✅ (Done): Integrate with YouTube Data API

🧠 Debounced Search Suggestions: Suggest as you type using YouTube Autocomplete.

🐢 Event Throttling: Optimize scroll/resize performance (e.g., lazy loading).

🧮 Video Metadata: Add view counts, durations, and publish dates using videos endpoint.

📚 Pagination / Infinite Scroll: Load more videos as the user scrolls.

🔐 API Key Security (Important!)
This project uses a public API key for demo purposes.

For production, proxy API calls through a backend server to protect your credentials.

🙌 Credits
Built with ❤️ by @ayeshashaw
Powered by Google’s YouTube Data API v3
