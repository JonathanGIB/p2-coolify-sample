# Project 2 — Dockerfile for Coolify sample app.
# Coolify auto-detects Dockerfiles. No changes needed.
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY server.js ./
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
RUN apk add --no-cache wget
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s CMD wget -qO- http://127.0.0.1:3000/api/health | grep -q ok || exit 1
CMD ["npm", "start"]
