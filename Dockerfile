#Base image taken from:https://hub.docker.com/layers/cypress/included/cypress-12.8.1-node-18.14.1-chrome-111.0.5563.64-1-ff-111.0-edge-111.0.1661.43-1/images/sha256-20e7813a75c62736057a93c345b081a96afcc20cf8c4f3b3425fdaec701a6fb1?context=explore`
FROM cypress/included:cypress-12.8.1-node-18.14.1-chrome-111.0.5563.64-1-ff-111.0-edge-111.0.1661.43-1
#Create the folder  where our project will be storeed
RUN mkdir /cypress-jenkins
#We make it our work directory
WORKDIR /cypress-jenkins
#COpy Files
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN  npm install
#Executable commands the container will use [Exec Form]
ENTRYPOINT [ "npx","cypress","run" ]
#with  CMD
CMD [ "" ]


#first build: docker build -t {nombre de la imagen}:{nombre de la tag a utilizar}
#to run docker :docker run -it -v $PWD/cypress-jenkins cypress-jenkins:12.0.8
