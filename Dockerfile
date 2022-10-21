FROM node:16.15.0-buster
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL
ENV PATH /workspaces/node_modules/.bin:$PATH

RUN echo "$REACT_APP_BACKEND_URL"

COPY package.json /workspaces/
WORKDIR /workspaces/
RUN npm install

WORKDIR /workspaces/pygradus-frontend
COPY . .
RUN npm run build