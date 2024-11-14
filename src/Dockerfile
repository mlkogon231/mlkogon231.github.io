FROM node:18-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Use non-root user
USER appuser

# Set secure environment
ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "src/app.js"]