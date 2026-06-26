# KPU Surrey Library Distance Tracker

## Overview

This web application displays the user's current location on an interactive map and calculates the distance from the user's location to the KPU Surrey Library in kilometers.

The application uses the browser's Geolocation API to obtain the user's current coordinates and displays them on an OpenStreetMap map using the Leaflet JavaScript library. The distance is calculated using Leaflets built-in distance formula.

---

## Features

- Display user's current location
- Display KPU Surrey Library location
- Calculate distance in kilometers
- Interactive map using Leaflet and OpenStreetMap
- Refresh button to update the user's current location
- Display latitude and longitude
- Display timestamp of last location update

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Leaflet.js
- OpenStreetMap
- Browser Geolocation API
- GitHub Pages

---

## Project Structure

```
.
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How It Works

1. The user opens the webpage.
2. The browser requests permission to access the user's location.
3. Once permission is granted:
   - The user's current latitude and longitude are obtained.
   - The map centers on the user's location.
   - A marker is placed at the user's location.
   - A marker is placed at the KPU Surrey Library.
   - The distance between the two locations is calculated.
4. Clicking **Refresh My Location** repeats the process and updates the displayed information.

---

## Running the Project

### Option 1

Visit the GitHub Pages website:

> *https://omair-waheed.github.io/KPU-surrey-library-distance-finder/*

### Option 2

Clone the repository:

```bash
git clone https://github.com/Omair-Waheed/KPU-surrey-library-distance-finder.git
```

Open the project using a local web server.

**Note:** Browser geolocation requires HTTPS or localhost. Opening the HTML file directly from the file system (`file://`) will prevent location services from working.

---

## Screenshots

### Main Application
<img width="645" height="1164" alt="IMG_4985" src="https://github.com/user-attachments/assets/05d64e33-c783-475b-b4bf-be1805adc2a8" />

### Location Access
<img width="645" height="1180" alt="IMG_4984" src="https://github.com/user-attachments/assets/c6b0863e-d564-4bbc-963b-54d272c2aa04" />

---


## References

- https://leafletjs.com/
- https://www.openstreetmap.org/
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

---


Created for INFO 4235 Summer 2026 Midterm Question 3.
