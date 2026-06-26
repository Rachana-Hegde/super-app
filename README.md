# 🎬 Super App

A full-stack **Entertainment Dashboard Web Application** built using **React, Vite, Tailwind CSS, Zustand, and multiple APIs**. The application provides personalized entertainment recommendations, live weather updates, news headlines, notes management, and an interactive countdown timer within a modern dashboard.


# 🚀 Features

## 👤 User Registration

* User registration with personal details
* Stores user information locally
* Protected routes using authentication
* Responsive registration interface


## 🎭 Entertainment Category Selection

* Select at least three favorite entertainment categories
* Interactive category cards
* Dynamic category management
* Validation before proceeding


## 📊 Personalized Dashboard

* Displays user profile information
* Live weather information
* Latest news headlines
* Personal notes section
* Interactive countdown timer
* Browse button to explore recommended movies


## 🎬 Movie Recommendations

* Personalized movie recommendations based on selected categories
* Movie data fetched from OMDb API
* Movie details displayed in a modal
* Smooth hover animations
* Responsive movie gallery


## 🌦️ Weather

* Real-time weather information
* Current temperature
* Weather conditions
* Humidity
* Wind speed


## 📰 News

* Displays latest news headlines
* Dynamic news fetched using News API
* Updated every time the dashboard loads


## ⏳ Countdown Timer

* Adjustable Hours, Minutes, and Seconds
* Increment and decrement controls
* Animated circular progress indicator
* Start and pause functionality
* Live countdown updates


# 🛠️ Tech Stack

| Layer            | Technology                      |
| ---------------- | ------------------------------- |
| Frontend         | React.js                        |
| Build Tool       | Vite                            |
| Styling          | Tailwind CSS                    |
| Routing          | React Router DOM                |
| State Management | Zustand                         |
| Animation        | Framer Motion                   |
| APIs             | OMDb API, Weather API, News API |


# 📁 Project Structure

```text
super-app/
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── category/
│   │   ├── common/
│   │   ├── dashboard/
│   │   └── movie/
│   │
│   ├── pages/
│   │   ├── Register.jsx
│   │   ├── Category.jsx
│   │   ├── Dashboard.jsx
│   │   └── Movies.jsx
│   │
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```


# ⚙️ Setup Instructions

## 🔹 1. Clone the Repository

```bash
git clone https://github.com/Rachana-Hegde/super-app.git
cd super-app
```


## 🔹 2. Install Dependencies

```bash
npm install
```


## 🔹 3. Create Environment Variables

Create a `.env` file in the project root.

```env
VITE_OMDB_KEY=YOUR_OMDB_API_KEY
VITE_NEWS_API_KEY=YOUR_NEWS_API_KEY
VITE_WEATHER_API_KEY=YOUR_WEATHER_API_KEY
```


## 🔹 4. Run the Development Server

```bash
npm run dev
```


## ▶️ Open in Browser

```
http://localhost:5173
```


# 📱 Application Flow

1. Register user
2. Select at least three entertainment categories
3. View personalized dashboard
4. Read latest news and weather
5. Use countdown timer
6. Browse recommended movies
7. View detailed movie information


# 🔐 Features

* Protected Routes
* Local Storage Persistence
* Responsive Design
* API Integration
* Dynamic Movie Recommendations
* Animated User Interface
* Interactive Timer
* Personalized Dashboard


# 📌 Future Enhancements

* User authentication with backend
* Favorites/Watchlist
* Dark & Light themes
* Search movies
* Pagination
* Movie trailers
* User profiles
* Notifications


# 📌 Conclusion

This project demonstrates:

* Modern React development
* State management using Zustand
* REST API integration
* Responsive UI design
* Component-based architecture
* Tailwind CSS styling
* Route protection
* Interactive dashboard development

---

# 👩‍💻 Author

**Rachana Hegde**

🔗 GitHub: https://github.com/Rachana-Hegde
