# AI Support Tickets System 🤖 :computer:

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000.svg)](https://nextjs.org/)
[![Powered by AI](https://img.shields.io/badge/Powered%20by-Artificial%20Intelligence-33ccff.svg)](https://openai.com/)
[![Uses Tailwind CSS](https://img.shields.io/badge/Uses-Tailwind%20CSS-38b2ac.svg)](https://tailwindcss.com/)
[![Written in TypeScript](https://img.shields.io/badge/Written%20in-TypeScript-007acc.svg)](https://www.typescriptlang.org/)

## Project Overview
Welcome to the user interface of our AI-powered Support Tickets system. This frontend application is built using the power of Next.js 13, TailwindCSS, and TypeScript, providing a smooth and intuitive user experience. It allows users to **interact with our Python-based AI system**, which processes natural language reports of issues, organizes the data into tickets, and maintains the ticket lifecycle.

## Demo Project 🚀


https://github.com/LilianaRestrepoTorres/client-support-app/assets/17114826/aecbd03a-1113-4edf-a8c9-4c654b4b1bce



## Key Features
- **AI Content Generation:** The system accepts natural language reports of problems with bots or orders. Then, process the input to extract **problem location**, **problem type** (software, hardware, or field) and a **summary** of the issue.
- **Support during AI Model Downtime:** We've added error handling to ensure continuous operation even when the GPT-3.5-turbo is offline or at its request limit. We support this feature by creating tickets for prompt assistance.


## Installation and Usage
1. Clone the repository: `git clone https://github.com/LilianaRestrepoTorres/client-support.git`
2. Add your API KEY in a `.env` file with the variable name `OPENAI_KEY`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and navigate to: `http://localhost:3000`

Feel free to explore the application, create tickets, and witness the power of **AI-generated** content!


Enjoy using the AI Support Ticket System! :rocket:

---
 Built with 💚 by me.
