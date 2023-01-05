# Development notes

## Getting started

Copy `.docker/launch-config.json.dist` to `.docker/launch-config.json` and replace the `location` and
`apiKey` variables with the correct values for your location/api key.

## Run

Run `docker-compose up -d` to start the teletron environment. The contents of this folder
will be mounted into `/build-extension` inside the container.

## Updating

Run the commands below to clone the magic mirror repository and copy the sources files for the module.

```bash
rm -rf ./mm-weather/*.*
mkdir /tmp/mm-clone
cd /tmp/mm-clone
git clone --depth 1 git@github.com:MichMich/MagicMirror.git .
cd -
mkdir mm-weather
cp -R /tmp/mm-clone/modules/default/weather/* ./mm-weather
rm -rf /tmp/mm-clone
```

## Rebuild

Run the following to rebuild the teletron container and restart:

    docker-compose rm -f teletron && docker-compose build && docker-compose up
