# Use Node.js image as base
FROM node:14

# Set working directory
WORKDIR /app

# Copy package files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire React project to container
COPY . .

# Build the React app
RUN npm run build

# Expose the React app's port
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]
