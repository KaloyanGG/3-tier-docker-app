FROM        node:alpine

LABEL       author="Koko G"

ENV         PORT=5000

WORKDIR     /var/www
COPY        package.json package-lock.json* ./
RUN         npm install

COPY        . ./
EXPOSE      $5000

ENTRYPOINT ["npm", "start"] 