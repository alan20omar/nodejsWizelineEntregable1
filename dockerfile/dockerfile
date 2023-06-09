FROM node:18
WORKDIR /code
COPY . .
RUN npm ci --omit=dev
EXPOSE 8080
CMD ["node", "index.js"]