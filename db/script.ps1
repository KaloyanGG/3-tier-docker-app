docker image build --tag mongo-image .
docker run  -d --name db --net my-net -p 27017:27017 mongo-image