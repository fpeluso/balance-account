# Use the official Node.js image for building and running the app
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . ./

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start:prod"]