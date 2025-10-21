⚠️In progress...

<h3 align="center">Trello Clone</h3>

## Table of Contents

1. [Introduction](#introduction)
2. [Note](#note)
3. [Demo](#demo)
4. [Tech Stack](#tech-stack)
5. [Features](#features)
6. [Additional Feature](#additional)
7. [Quick Start](#quick-start)
8. [What I learned](#learn)
9. [Implementation Notes](#implementation-notes)
10. [Missing Features](#missing)
11. [Known Bugs](#bugs)

## <a name="introduction">Introduction</a>

Inventory management App using Next.js, Neon, Stack Auth, Rechart, and TailwindCSS with authentication and interactive charts.

## <a name="note">⚠️ Note</a>

This project was implemented based on a tutorial video on YouTube from PedroTech [NextJS 15 FullStack Course - Build an Inventory Management Website](https://www.youtube.com/watch?v=L5CsIkO5xv4).

## <a name="demo">Demo</a>

TODO
Click on each section to toggle the demo image.

<details>
  <summary>
    Authentication
  </summary>
  <b>Sign in</b>
  <div>
    <a href="">
      <img src="public/readme/sign-in.gif" alt="Sign in" />
    </a>
  </div>
</details>
<details>
  <summary>
    Authenticated User
  </summary>
  <div>
    <b>Dashboard</b>
    <div>
      <a href="">
        <img src="public/readme/create-board.gif" alt="Create board" />
      </a>
    </div>
    <b>Inventory</b>
    <div>
      <a href="">
        <img src="public/readme/filter-board.gif" alt="Filter board" />
      </a>
    </div>
    <b>Add Product</b>
    <div>
      <a href="">
        <img src="public/readme/dashboard-view.gif" alt="Dashboard view setting" />
      </a>
    </div>
    <b>Setting</b>
    <div>
      <a href="">
        <img src="public/readme/upgrade.gif" alt="Upgrade" />
      </a>
    </div>
    <b>Sign out</b>
    <div>
      <a href="">
        <img src="public/readme/upgrade.gif" alt="Upgrade" />
      </a>
    </div>
  </div>
</details>
<details>
  <summary>
    Unauthenticated User
  </summary>
  <div>
    <b>Home page</b>
    <div>
      <a href="">
        <img src="public/readme/home.gif" alt="Home" />
      </a>
    </div>
  </div>
</details>

## <a name="tech-stack">Tech Stack</a>

- Next.js - React framework for full-stack web application development
- React - JavaScript library
- TypeScript - JavaScript superset for type safety
- Stack Auth – Modern authentication solution
- Neon - Serverless PostgreSQL database service and easy to integrate with Stack Auth
- Prisma – Type-safe database ORM with migrations
- Tailwind CSS v4 - CSS framework
- Recharts – Data visualization and charting library for React
- Lucide React - Icon library for React
- Zod - Schema validation library

## <a name="features">Features</a>

Modern Authentication - Secure user registration and login with Stack Auth
Product Management - Complete CRUD operations for inventory items
Search - Find products quickly with search functionality
Pagination - Efficient data loading for large inventories
Value Tracking - Monitor total inventory value and financial metrics
Visual Analytics - Interactive charts showing inventory trends
Server Actions - Form handling with Next.js Server Actions

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Git
- Node.js
- npm

### Cloning the Repository

```bash
git clone https://github.com/bank8426/nextjs-inventory.git
cd nextjs-trello-clone
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

1. Create a new file named `.env` and copy the content inside `.env.example`
2. Replace the placeholder values with your actual credentials

```env
# create new database https://neon.com/ and enable Auth feature

# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=
STACK_SECRET_SERVER_KEY=

# Database owner connection string
DATABASE_URL=
```

### Running the Project

```bash
npm run dev
```

Your server will run on [http://localhost:3000](http://localhost:3000/)

## <a name="learn">What I learned</a>

TODO

- Stack Auth

## <a name="implementation-note">Implementation Notes</a>

TODO

- Seeding mock data to database

  - `Error: @prisma/client did not initialize yet.`

    - This happened because of wrong import module. Use `@/app/generated/prisma` instead since it got generated when run `npx prisma migrate dev`. This is similar to when using `shadcn` that generate component file for you.

    ```js
    import { PrismaClient } from "@prisma/client"; //⛔️
    import { PrismaClient } from "@/app/generated/prisma"; //✅
    ```

  - `Error [ERR_MODULE_NOT_FOUND]` when run `node prisma/seed.ts`
    - use command `npx tsx` instead
    ```bash
    npx tsx prisma/seed.ts
    ```

## <a name="missing">Missing Features</a>

Inventory

- Batch delete
