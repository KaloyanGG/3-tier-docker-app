docker image build --tag back-end .
docker run  -d --name back-end --net my-net -p 4000:5000 back-end