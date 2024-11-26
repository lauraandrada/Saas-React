# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production (Vite)
RUN npm run build

# Install a lightweight HTTP server to serve the app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to run the app, serving from the dist directory
CMD ["serve", "-s", "dist", "-l", "3000"]