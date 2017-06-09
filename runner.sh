#!/usr/bin/env bash

npm run build
docker build . -t drunkengranite/skillet_website
docker push drunkengranite/skillet_website



