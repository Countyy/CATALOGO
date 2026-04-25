FROM node:22-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8106
ENV PORT 8106
CMD ["npm", "run", "dev", "--", "--host", "10.122.83.135", "--port", "8106"]
