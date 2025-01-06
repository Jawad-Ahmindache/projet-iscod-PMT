# Build stage
FROM node:20
WORKDIR /app

# Copy project files
COPY frontend/ .
# Install Angular CLI globally
RUN npm install -g @angular/cli@19.0.6


# Install dependencies
RUN npm install



# Build the application
RUN ng build --configuration production