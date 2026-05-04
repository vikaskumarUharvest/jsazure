# Use lightweight Node.js 20 Alpine image (small size, faster builds)
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
# This helps Docker cache dependencies if they haven't changed
COPY package*.json ./

# Install only production dependencies (smaller image, faster install)
RUN npm ci --only=production

# Copy the rest of your application code
COPY . .

# Expose port 3000 (your app runs on this port)
# This is mainly for documentation; actual port mapping happens at runtime
EXPOSE 3000

# Command to start your Node.js application
CMD ["node", "app.js"]