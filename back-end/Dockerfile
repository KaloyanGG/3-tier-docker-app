FROM        node:alpine

LABEL       author="Koko G"

ENV         PORT=5000

# This is for pining if needed: (only for alpine)
# RUN         apk update && apk add iputils

WORKDIR     /var/www
COPY        package.json package-lock.json* ./
RUN         npm install

COPY        . ./
EXPOSE      $PORT

ENTRYPOINT ["npm", "start"] 