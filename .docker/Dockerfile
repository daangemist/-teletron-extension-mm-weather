FROM ghcr.io/daangemist/teletron:0.9.2

WORKDIR /app
RUN npm i nodemon

COPY teletron-run.sh /run.sh
COPY nodemon.json /app
COPY launch-config.json /app

ENTRYPOINT [ "/run.sh" ]