docker image build --tag front-end .
docker run  -d --name front-end -p 4050:80 front-end