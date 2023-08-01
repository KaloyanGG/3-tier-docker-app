docker image build --tag back-end .
docker run  -d --name back-end -p 4000:5000 back-end