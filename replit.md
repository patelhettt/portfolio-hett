# Replit.md

## Overview

This is a full-stack web application built with a modern tech stack featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM. The application appears to be a personal portfolio website with a cybersecurity theme, showcasing professional experience, skills, and projects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with custom configuration
- **UI Components**: Comprehensive set of Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Session Management**: PostgreSQL-backed session storage
- **Migration System**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
1. **Portfolio Sections**: Hero, About, Experience, Skills, Projects, Contact
2. **UI Library**: Complete shadcn/ui component set including forms, navigation, data display
3. **Animations**: Framer Motion for smooth animations and transitions
4. **Responsive Design**: Mobile-first approach with Tailwind CSS
5. **Theme**: Cybersecurity-inspired design with green accent colors

### Backend Services
1. **Storage Interface**: Abstract storage layer with in-memory implementation
2. **Route Registration**: Centralized route management system
3. **Error Handling**: Global error middleware
4. **Request Logging**: Detailed API request/response logging
5. **Development Integration**: Vite middleware for hot reloading

### Shared Resources
1. **Schema Definitions**: Centralized database schema with Zod validation
2. **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express.js handles HTTP requests with JSON middleware
3. **Storage Layer**: Abstract storage interface allows switching between implementations
4. **Database**: Drizzle ORM provides type-safe database operations
5. **Response**: JSON responses with consistent error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm**: Type-safe database toolkit
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Comprehensive primitive component library
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Fast build tool and dev server
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Hot reload with Vite dev server
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server
- `check`: TypeScript type checking
- `db:push`: Database schema updates

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability

The application follows a clean separation of concerns with a well-structured monorepo approach, making it easy to develop, test, and deploy as a unified application.