# 🚀 BlogApp-Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful and scalable RESTful backend for a blogging platform. This project is built using **Node.js, Express, and MongoDB**, following the **MVC (Model-View-Controller)** architecture. It demonstrates complex database relationships using **Mongoose Population**.

---

## 📌 Features

- **Post Management**: Create and fetch blog posts.
- **Engagement**: Like and Unlike functionality.
- **Comments**: Nested-style comment associations.
- **Data Population**: Seamlessly fetch post data along with its associated likes and comments using Mongoose `populate()`.
- **Environment Safety**: Secure configuration using `dotenv`.
- **Clean Architecture**: Organized folder structure for better maintainability.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **Library:** Mongoose
* **Utilities:** dotenv, nodemon

---

## 📂 Project Structure

```text
blog-backend/
├── config/             # Database connection settings
├── controllers/        # Business logic for Posts, Likes, and Comments
├── models/             # Mongoose Schemas (Post, Like, Comment)
├── routes/             # API Route definitions
├── .env                # Environment variables
├── index.js            # Main entry point
└── package.json        # Dependencies and scripts
