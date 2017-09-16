FROM node
RUN git clone https://github.com/DamianMcNulty/pwa.git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn 
COPY . /usr/src/app
COPY config/ /usr/src/app
CMD ["yarn","production:build"]
COPY build/ /usr/src/app
EXPOSE 8080
CMD ["yarn","production:start"]
