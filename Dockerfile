# Stage 1: Build
FROM node:alpine as build  

WORKDIR /app 
 
# Copy package.json and package-lock.json  
COPY ./dev/package*.json ./ 
 
# Install dependencies
RUN npm install --frozen-lockfile
RUN npm install -g typescript vite

# Copy all files
COPY ./dev .

# Build the app
RUN npm run build 

# Stage 2: Serve the app
FROM node:alpine

WORKDIR /app

# Copy package.json and install only production dependencies
COPY ./dev/package*.json ./
RUN npm install --frozen-lockfile --production

# Copy the built app from the previous stage
COPY --from=build /app/dist ./dist

# Start the app, passing the PORT environment variable
CMD ["sh", "-c", "npm run serve"]

#"npx serve -s dist -l ${PORT:-80}"
#docker build -t my-frontend-app:latest .
#docker run -e PORT=80 -p 80:80 my-frontend-app
