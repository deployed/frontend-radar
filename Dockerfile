FROM node:22-alpine AS node

FROM node AS builder
ARG VITE_API_URL
WORKDIR /builder
ENV NODE_ENV=production
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine AS runner
WORKDIR /app

# Create custom nginx.conf
RUN echo $'\
    server {\n\
    listen 80;\n\
    location / {\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    try_files $uri $uri/ /index.html;\n\
    }\n\
    }' > /etc/nginx/conf.d/default.conf

COPY --from=builder /builder/dist /usr/share/nginx/html