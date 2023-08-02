docker image build --tag front-end .
docker run  -d --name front-end -v ${PWD}:/usr/share/nginx/html --net my-net -p 4050:80 front-end