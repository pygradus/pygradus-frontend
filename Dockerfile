FROM node:16.15.0-buster
ENV PATH /workspaces/node_modules/.bin:$PATH

COPY package.json /workspaces/
WORKDIR /workspaces/
RUN npm install

WORKDIR /workspaces/pygradus-frontend
COPY . .
RUN npm run build