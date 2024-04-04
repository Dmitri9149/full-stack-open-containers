FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

# use install ( not ci) in the dev mode
RUN npm install 

ENV DEBUG=todo-backend:*

USER node

CMD npm run dev