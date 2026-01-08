# BlogApp-Backend-
A RESTful blog backend built with Node.js, Express, and MongoDB. Supports creating posts, adding comments, liking/unliking posts, and fetching related data using Mongoose population. Follows MVC architecture and REST best practices.

## 📌 Features

- Create blog posts
- Fetch all posts
- Add comments to posts
- Like a post
- Unlike a post
- MongoDB relationships using Mongoose `populate()`
- Clean MVC architecture

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**

---

## 📂 Project Structure
blog-backend/
│
├── config/
│ └── database.js
│
├── controllers/
│ ├── CommentController.js
│ ├── LikeController.js
│ └── PostController.js
│
├── models/
│ ├── commentModel.js
│ ├── likeModel.js
│ └── postModel.js
│
├── routes/
│ └── blogRoutes.js
│
├── .env
├── index.js
├── package.json
└── README.md

