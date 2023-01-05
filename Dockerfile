### Stage 1: build ###

FROM node:18.12.1-alpine as builder

# Set working directory.
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY package.json package-lock.json /app/angular-app/

# Install app dependencies.
RUN npm install --prefix angular-app

# Copy app files.
COPY . /app/angular-app/

# Default build configuration.
ARG configuration=production

# Build app
RUN npm run build --prefix angular-app -- --output-path=./dist/out --configuration $configuration


### Stage 2: delivery ###

FROM nginx:1.20.2-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy output directory from builder to nginx image.
COPY --from=builder /app/angular-app/dist/out /usr/share/nginx/html

# Copy nginx configuration file.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
