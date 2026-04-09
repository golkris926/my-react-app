# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Serve the app with a lightweight server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "8000"]

# Expose port
EXPOSE 8000
