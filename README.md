# Movie App

A React-based movie discovery application that allows users to search for movies and manage their favorites. Built with React, React Router, and The Movie Database (TMDb) API.

## Features

- 🎬 Browse popular movies
- 🔍 Search for movies by title
- ❤️ Add/remove movies from favorites
- 💾 Persistent favorites storage using localStorage
- 📱 Responsive design for mobile and desktop
- 🎨 Modern, dark-themed UI with smooth animations

## Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Context API** - State management for favorites
- **The Movie Database (TMDb) API** - Movie data source
- **CSS3** - Styling with animations and responsive design
- **localStorage** - Persistent data storage

## Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx       # Individual movie card component
│   └── NavBar.jsx          # Navigation bar component
├── contexts/
│   └── MovieContext.jsx    # Context for managing favorites state
├── pages/
│   ├── Home.jsx            # Home page with search and popular movies
│   └── Favorites.jsx       # Favorites page displaying saved movies
├── api/
│   └── api.js              # API functions for TMDb integration
├── css/
│   ├── App.css             # Main app styles
│   ├── Home.css            # Home page styles
│   ├── Favorites.css       # Favorites page styles
│   ├── MovieCard.css       # Movie card styles
│   ├── Navbar.css          # Navigation bar styles
│   └── index.css           # Global styles
├── App.jsx                 # Main app component
└── main.jsx                # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movie-app
```

2. Install dependencies:
```bash
npm install
```

3. Get your API key from [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api)

4. Update the API key in `src/api/api.js`:
```javascript
const API_KEY = "your-api-key-here";
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

## Usage

### Home Page
- View popular movies on initial load
- Use the search bar to find specific movies
- Click the heart icon on any movie card to add/remove from favorites

### Favorites Page
- View all your saved favorite movies
- Remove movies from favorites by clicking the heart icon
- Movies are automatically saved to localStorage

## API Integration

The app uses The Movie Database (TMDb) API to fetch movie data:

- **Popular Movies**: `/movie/popular` - Fetches trending movies
- **Search Movies**: `/search/movie` - Searches movies by query

## Key Learning Points

This project demonstrates:

- **React Hooks**: useState, useEffect, useContext
- **Component Architecture**: Reusable components and prop passing
- **State Management**: Context API for global state
- **Routing**: React Router for navigation
- **API Integration**: Async/await with error handling
- **Local Storage**: Persistent data storage
- **Responsive Design**: CSS Grid and Flexbox
- **Event Handling**: Form submission and click events

## Future Enhancements

- [ ] Add movie details page
- [ ] Implement user ratings
- [ ] Add movie trailers
- [ ] Implement infinite scroll for search results
- [ ] Add sorting and filtering options
- [ ] Implement dark/light theme toggle
- [ ] Add movie recommendations

