# Fetching the minified node image on apline linux
FROM node:20.16-alpine

# Setting up the work directory
WORKDIR /app

# Declaring env
ENV NODE_ENV development

# COPY package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml /app/

# Installing dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copying all the files in our project
COPY . /app

# Exposing server port
EXPOSE 3333

# Starting our application for dev
CMD ["pnpm", "dev"]