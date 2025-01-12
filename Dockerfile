# Use the official Node.js image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package*.json ./
COPY pnpm*.yaml ./

# Install pnpm
RUN npm i -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD [ "pnpm", "start:dev" ]
