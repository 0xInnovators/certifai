FROM node:20.11.1

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

CMD ["/entrypoint.sh"]