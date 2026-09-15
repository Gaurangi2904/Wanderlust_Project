# 🌍 Wanderlust

Wanderlust is a full-stack travel accommodation web application inspired by platforms like Airbnb.

The application allows users to explore travel listings, view detailed property information, create and manage listings, add reviews, and interact with the platform through a secure and responsive web interface.

---

## 🌐 Live Demo

### 🚀 Live Website

https://wanderlust-project-7i92.onrender.com

---

## 📌 About The Project

Wanderlust is a full-stack web application developed to provide users with a platform for discovering and managing travel accommodation listings.

The project follows the **MVC (Model-View-Controller)** architecture and includes backend APIs, database integration, authentication, authorization, image upload functionality, reviews, and location-based features.

The main objective of the project was to understand how a complete full-stack web application works from frontend to backend and database.

---

# ✨ Features

## 🏠 Explore Listings

- Browse available accommodation listings
- View listing cards with images and basic information
- Explore different travel destinations

## 🔎 Listing Details

Users can open a listing to view:

- Property title
- Description
- Location
- Price
- Images
- Reviews
- Rating information

## ➕ Create Listings

Authenticated users can create their own listings by providing:

- Title
- Description
- Price
- Location
- Country
- Property image

## ✏️ Edit Listings

Listing owners can:

- Update listing information
- Change property details
- Update images
- Modify pricing and description

## 🗑️ Delete Listings

Listing owners can delete their own listings.

## 🔐 Authentication & Authorization

The application provides user authentication and authorization.

Users can:

- Register
- Log in
- Log out
- Access protected functionality

Authorization ensures that users can modify or delete only the resources they are allowed to manage.

## ⭐ Reviews & Ratings

Users can add reviews to listings and provide ratings.

Users can also delete their own reviews.

## 🖼️ Image Upload

The application supports image uploads for listings using cloud-based image storage.

## 🗺️ Location & Maps

Listings include location information and map-based functionality to help users understand where properties are located.

---

# 🛠️ Tech Stack

## Frontend

- HTML
- CSS
- JavaScript
- EJS
- Bootstrap

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- Passport.js
- Passport Local
- Express Session

## Image Storage

- Cloudinary

## Maps & Location

- Mapbox

## Architecture

- MVC (Model-View-Controller)

## Deployment

- Render
- GitHub

---

# 🏗️ Application Architecture

```text
                    👤 User
                      │
                      ▼
             ┌─────────────────┐
             │    Frontend     │
             │   EJS + CSS     │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │  Express.js     │
             │    Server       │
             └────────┬────────┘
                      │
             ┌────────┴─────────┐
             │                  │
             ▼                  ▼
      ┌──────────────┐   ┌───────────────┐
      │   MongoDB    │   │  Cloudinary   │
      │   Database   │   │    Images     │
      └──────────────┘   └───────────────┘
             │
             ▼
      ┌──────────────┐
      │   Mapbox     │
      │  Location    │
      └──────────────┘
