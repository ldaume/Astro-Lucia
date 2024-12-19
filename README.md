# Astro Lucia

A **TypeScript** project built with **Astro**, designed for seamless web
development. This project includes tools like TailwindCSS for styling, SQLite
for database management, Lucia for authentication, and **Vue**, ensuring a
modern and robust development experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Features](#features)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

This project leverages modern web development frameworks and tools for building
scalable, dynamic applications. It uses **Astro**, a popular static site
generator, combined with **TypeScript**. Authentication is handled by **Lucia**,
with SQLite as the chosen database solution.

The project is crafted for speed, simplicity, and flexibility, utilizing
**TailwindCSS** for utility-first styling.

---

## Tech Stack

The project utilizes the following technologies and packages:

- **TypeScript**
- **Astro**
  - Astro components, server-side rendering via `@astrojs/node`
- **TailwindCSS**
- **SQLite**: High-performance database using `better-sqlite3`
- **Lucia**: Authentication library
  - `@lucia-auth/adapter-sqlite` for database integration
- **@node-rs/argon2**: For secure password hashing

Additional dev tools include `@astrojs/check` for Astro code validation and
`@astrojs/tailwind` for streamlined Tailwind setup.

---

## Features

- **TypeScript Support**: Strict typing for maintainable and scalable code.
- **Authentication**: Powered by [Lucia](https://lucia-auth.com/), with support
  for secure Argon2 hashing.
- **Database**: SQLite for light-weight, file-based database management.
- **Modern Styling**: TailwindCSS for fast and responsive design.
- **High Performance**: Astro's optimized performance for static and dynamic
  content.

---

## Setup and Installation

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

### Install Dependencies

Clone the repository and install the dependencies:

```bash
git clone https://github.com/ldaume/astro-lucia.git
cd astro-lucia
npm install
```

---

### Development Server

Start the development server:

```bash
npm run dev
```

You can now access the app in your browser at `http://localhost:4321`.

---

### Setting Up Environment Variables

1. Create a `.env` file in the root of your project directory (if it doesn't
   already exist).
2. Add the variables with appropriate values, as shown below:

   ```env
   PUBLIC_TITLE=YourAppName
   SECRET_ADMIN_ROLE=your-role
   SECRET_INIT_APP=true
   ```

### Notes:

- **PUBLIC_TITLE**: Environment variables prefixed with `PUBLIC_` are exposed to
  the client and can be accessed in the browser. Ensure only non-sensitive data
  is assigned to such variables. This environment variable is used as the title
  for the application.
- **SECRET_ADMIN_ROLE and SECRET_INIT_APP**: These are server-side variables and
  must remain private. Do **not** expose these variables to the client as they
  might contain sensitive information.
- **Admin Account Creation**: By setting `SECRET_INIT_APP` to `true`, the
  application temporarily allows admin accounts to be created directly via the
  `/signup` route. Ensure this mode is disabled (`false`) once the necessary
  admin accounts are created to prevent security vulnerabilities. To create
  users in the application, the user must have the role specified with
  `SECRET_ADMIN_ROLE`.

Make sure not to commit the `.env` file directly to version control. Instead,
use tools like `.gitignore` to exclude it.

---

### Setting Up Environment Variables

1. Create a `.env` file in the root of your project directory (if it doesn't
   already exist).
2. Add the variables with appropriate values, as shown below:

   ```env
   PUBLIC_TITLE=YourAppName
   SECRET_ADMIN_ROLE=your-role
   SECRET_INIT_APP=true
   ```

### Notes:

- **PUBLIC_TITLE**: Environment variables prefixed with `PUBLIC_` are exposed to
  the client and can be accessed in the browser. Ensure only non-sensitive data
  is assigned to such variables.
- **SECRET_ADMIN_ROLE and

### Building for Production

To build the project for production:

```bash
npm run build
```

The output will be located in the `dist` folder.

---

## Usage

### Authentication

The project uses **Lucia** for authentication. Passwords are securely hashed
using Argon2. Lucia's SQLite adapter makes it easy to manage user records.

For more information, visit [Lucia documentation](https://lucia-auth.com/).

### Styling

TailwindCSS is fully set up for efficient styling. You can modify the
`tailwind.config.mjs` file to customize your design system.

### Database

Better SQLite (`better-sqlite3`) is used as the database engine. You can manage
the database schema in the SQLite file provided. Use a tool like
[DB Browser for SQLite](https://sqlitebrowser.org/) for easier interaction.

---

## Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push the branch (`git push origin feature-name`)
5. Open a pull request

I welcome contributions to improve this project!

---

## License

This project is licensed under the MIT License.
