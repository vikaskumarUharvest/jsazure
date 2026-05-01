# Use a modern and lightweight Node.js image (LTS version)
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy only package files first (for better caching)
COPY package*.json ./

# Install dependencies
# npm ci is faster and more reliable for production/CI
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
# (make sure your app listens on this port)
EXPOSE 80

# Command to start the application
CMD ["node", "app.js"]