FROM node:24-alpine3.21 AS app_node
ENV NODE_ENV=development

WORKDIR /srv/app

# install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

# copy sources
COPY . .

EXPOSE 8000
EXPOSE 9229
CMD ["npm", "start"]