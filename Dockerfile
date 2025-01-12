# Use the official Node.js image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package*.json ./
COPY pnpm*.yaml ./

# Install pnpm
RUN npm i -g pnpm

# Add openssl
RUN apt-get update && apt-get install -y openssl

# Remove node_modules and prisma/generated
RUN rm -fr node_modules prisma/generated

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD [ "pnpm", "start:dev" ]
