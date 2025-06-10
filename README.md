# YouTube Clone

This project is a simplified YouTube clone web application built with HTML, CSS, and JavaScript. It demonstrates fetching and displaying video data, implementing search functionality, and creating a responsive user interface.

## Features

- **Homepage Dashboard**: Displays a grid of video cards with thumbnails, titles, channel names, view counts, and upload dates.
- **Video Playback**: Clicking a video card embeds and plays the video using a YouTube iframe.
- **Search Functionality**: A search bar allows users to search for videos by title or channel name.
- **Navigation Bar**: A responsive navigation bar with a YouTube logo, search bar, and static links for Home, Trending, and Subscriptions.
- **Responsive Design**: The layout adjusts for different screen sizes, providing a good experience on both desktop and mobile devices.

## Technical Details

- **Frontend**: HTML, CSS, JavaScript
- **Data**: Uses dummy JSON data (`data.js`) to simulate video API responses.
- **Video Embedding**: YouTube IFrame Player API for embedding videos.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository** (if applicable, otherwise ensure you have the project files):
    ```bash
    git clone https://github.com/ayeshashaw/YouTube-Clone
    cd youtube-clone
    ```

2.  **Open `index.html`**: Simply open the `index.html` file in your web browser. Since this is a client-side application, no server setup is required for basic functionality.

    Alternatively, you can use a live server extension in your code editor (like Live Server for VS Code) for a better development experience.

## Project Structure

-   `index.html`: The main HTML file that structures the web page.
-   `style.css`: Contains all the CSS rules for styling the application.
-   `script.js`: Contains the JavaScript logic for fetching data, rendering video cards, handling search, and embedding videos.
-   `data.js`: Stores dummy JSON data used to populate the video dashboard.
-   `README.md`: This file, providing an overview of the project.

## Usage

-   **Browse Videos**: Upon opening `index.html`, you will see a dashboard populated with dummy video data.
-   **Watch Videos**: Click on any video card to open and play the video in an embedded YouTube player.
-   **Search Videos**: Use the search bar in the navigation to filter videos by title or channel name.

## Future Enhancements (Bonus Features)

-   **YouTube Data API Integration**: Replace dummy data with actual data fetched from the YouTube Data API v3.
-   **Search Suggestions with Debouncing**: Implement real-time search suggestions using the Google Queries API with debouncing to optimize API calls.
-   **Throttling for Events**: Apply throttling to events like window resize or scroll for performance optimization (e.g., lazy loading more videos).
