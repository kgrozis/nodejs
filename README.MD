# Node.JS Container

node-js is a simple micro-service for building node.js applications.

## GETTING STARTED

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### PREQUISITES
The following prerequisites are required for installing nodjs micro-service:
1.	***Docker***: [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) is required to run the node-js micro-service.  Docker creates environment for isolating applicaiton(s); controlled versioning for softwawre tools, modules, and APIs; and for a reproducible environment on differing OSs.
2.	***Git***: [Git]() is used for Source Code Management (SCM).

### INSTALLING

A step by step series of examples that tell you how to get a development env running

The container image can be manually created with the following command:
```
bash# docker build --no-cache -t node-js:0.0.1 .
```

The container can be started as an long-lived application with the following commands:
```
bash# docker run -t -d --name node-js -v $(pwd)/js:/home/js node-js:0.0.1
```

The user can drop into the containers shell with the following command:
```
bash# docker exec -it node-js /bin/bash
```

### CLEAN UP
A step by step series of examples that tell you how to clean up a running env.

The user can manually clean-up the environment with the following commands:
```
bash# docker stop node-js
bash# docker rm node-js
```

## RUNNING TESTS

Explain how to run the automated tests for this system