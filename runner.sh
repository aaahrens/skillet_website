#!/usr/bin/env bash

npm run build
docker build . -t drunkengranite/skillet_website
docker push drunkengranite/skillet_website
scw exec dank\ memes docker pull drunkengranite/skillet_website
scw exec dank\ memes docker stop skillets
scw exec dank\ memes docker rm skillets
scw exec dank\ memes docker run -p 7001:3001 -d --name skillets drunkengranite/skillet_website


