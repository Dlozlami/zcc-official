# ZCC Official Website

Official website for the Zulu Congregational Church (ZCC), Vryheid Branch.

Built with Node.js and Express, designed to be accessible across devices and printable as PDF for members with varying levels of digital literacy.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Clone the repository

```bash
git clone https://github.com/Dlozlami/zcc-official.git
cd zcc-official
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
node server.js
```

The server runs on [http://localhost:5500](http://localhost:5500)

---

## Project Structure

```
zcc-official/
├── controllers/        # Route handler functions
├── logs/               # Runtime logs (git-ignored)
├── middleware/         # Express middleware (logger, error handler)
├── public/             # Static assets (images, css, js)
├── routes/             # Express route definitions
├── utils/              # Utility functions (logger)
├── views/              # HTML page templates
│   └── flyer/          # Event flyer pages
├── .env                # Environment variables (not committed)
├── server.js           # App entry point
└── package.json
```

---

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/events` | Events |
| `/contact` | Contact |

---

## Brand Colours

| Name | Hex |
|------|-----|
| ZCC Blue | `#3D52C8` |
| ZCC Red | `#E7453D` |
| Black | `#000000` |
| Background Gray | `#F8F9FA` |
| White | `#FFFFFF` |
| Lime Yellow | `#DFFF00` |

---

## Deployment

The site is deployed on [Vercel](https://vercel.com).

Live URL: [https://zcc-official.vercel.app](https://zcc-official.vercel.app)

> Note: File system logging is disabled in production. All logs are written to stdout and captured by Vercel's log dashboard.

---

## License

All rights reserved. ZCC Vryheid Branch.
