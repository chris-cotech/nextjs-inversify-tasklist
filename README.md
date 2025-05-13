# Task Management Application

This is a task management application built with [Next.js](https://nextjs.org), utilizing Inversion of Control (IoC) for dependency management and Jest for testing. The application allows users to manage tasks, including adding new tasks and toggling their completion status.

## Features

- **Task Management**: Add, view, and toggle the completion status of tasks.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine. `nvm use 20.10.9`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application (provided that is the port the dev server starts on for you).

## How It Works

### Application Structure

- **Frontend**: Built with Next.js, tailwind and shadcn components.
- **Backend**: Uses Next.js Server Component routes to handle task operations, such as fetching and updating tasks. Leverages IoC singleton to persist tasks in memory for as long as the server is running. Thus you can refresh the page and see your tasks created previously.
- **IoC Container**: Manages dependencies using InversifyJS, allowing for easy swapping and testing of components.

### Inversion of Control (IoC)

The application uses IoC to manage dependencies, which provides several benefits:

- **Modularity**: Components are loosely coupled, making it easy to modify or replace them.
- **Testability**: Dependencies can be easily mocked, allowing for comprehensive testing. Using interfaces you can have and test multiple instances of a service.
- **Maintainability**: Clear separation of concerns makes the codebase easier to maintain and extend.
- **Dependency Injection**: Using DI you can alter the request pipeline to use transient and singleton practices across your utilities (e.g. Auth0, Prisma, etc.) and data access layer (e.g. Fetch tasks, Create task, etc.). For 100% usage you would need to integrate with NextJS middleware.

### Testing

The application uses Jest for testing the service and Data Access Layer:

- **Integration Tests**: Verify that different parts of the application work together as expected.

To run the tests:

```bash
npm run test
```
