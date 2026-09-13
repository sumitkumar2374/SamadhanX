# SamadhanX – Project Context

## Project

SamadhanX – Smart Innovation Platform

## SIH Problem Statement

SIH26043 – A digital platform to crowdsource societal challenges and facilitate collaborative problem solving through universities and industry partnerships.

## Organization

Government of Jharkhand

## Category

Software – Smart Education

## Goal

Connect citizens, universities, students, industries, and government to solve real-world societal challenges.

## Tech Stack

- React
- JavaScript
- Vite
- React Router
- Lucide React
- CSS
- Dummy data / localStorage for prototype
- Simulated AI analysis

## Current Folder Structure

src/

├── assets/

├── components/

│   ├── Navbar.jsx

│   ├── Hero.jsx

│   ├── Collaboration.jsx

│   ├── FeaturedChallenges.jsx

│   └── ImpactStats.jsx

├── data/

├── pages/

│   ├── Home.jsx
│   ├── HowItWorks.jsx
│   ├── SubmitChallenge.jsx
│   ├── AIAnalysis.jsx
│   ├── RecommendedUniversities.jsx
│   ├── ChallengeExplorer.jsx
│   ├── UniversityDashboard.jsx
│   ├── IndustryCollaboration.jsx
│   ├── GovernmentDashboard.jsx
│   ├── ProjectTracking.jsx
│   ├── ChallengeDetails.jsx
│   ├── CollaborationRequest.jsx
│   ├── Notifications.jsx
│   └── SignIn.jsx

├── App.jsx
├── index.css
└── main.jsx

## Completed Features

- Landing / Home page
- Navbar navigation
- Sign In with role selection
- Role-based dashboard navigation
- Logout functionality
- Hero section
- Collaboration section
- Featured challenges
- Impact statistics
- How It Works page
- Submit Challenge form
- AI-assisted challenge analysis
- Dynamic domain detection
- Dynamic priority calculation
- Dynamic challenge tags
- Recommended Universities
- Challenge Explorer
- Category filtering
- Challenge Details
- Collaboration Request
- Collaboration request success state
- Notifications
- Accept / Reject collaboration request
- University Dashboard
- Industry Collaboration page
- Government Dashboard
- Project Tracking
- React Router navigation between pages

## Current User Flow

Report a Challenge

→ Submit Challenge

→ AI Analysis

→ Recommended Universities

→ Challenge Details

→ Start Collaboration

→ Collaboration Request

## Role-Based Flow

Sign In

→ Citizen → Home

→ University → University Dashboard

→ Industry → Industry Collaboration

→ Government → Government Dashboard

## Important Note

AI analysis is currently simulated using frontend logic.

It is a prototype representation of an AI-assisted workflow.

Production implementation can later integrate an NLP / ML model for challenge classification, prioritization, deduplication, and university recommendation.

## Prototype Data

The current prototype uses static demo data for:

- Challenges
- Universities
- Projects
- Government statistics
- Industry collaboration opportunities
- Notifications
- Project milestones

These values are for prototype demonstration and are not real platform statistics.

## Current Development Step

Complete responsive design and perform a full end-to-end testing and UI polish pass.

## Remaining Work

- Responsive design for all pages
- Final UI consistency and polish
- End-to-end user flow testing
- Fix remaining functional issues
- Improve project tracking interactions
- Improve collaboration interactions
- Add analytics visualizations
- Improve AI-assisted recommendations

## Future Architecture

React Frontend

→ Node.js / Express Backend

→ Database

→ AI/ML Engine

→ Recommendations & Analytics

## Future Enhancements

- Real user authentication
- Role-based access control
- Database-backed challenges
- Real AI classification
- Challenge prioritization
- Duplicate challenge detection
- University recommendation engine
- Industry matching
- Real-time notifications
- Project milestone tracking
- Government analytics dashboard
- Social impact measurement

## Development Rule

Build and test one feature at a time.

Keep the UI professional, modern, responsive, and suitable for SIH presentation.

Use honest prototype labels for simulated AI and demo data.