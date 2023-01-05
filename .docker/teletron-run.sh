#!/bin/bash
set -e

export EXTENSIONS=/extensions
mkdir -p /extensions && cd /extensions

export LAUNCH_CONFIGURATION=/app/launch-config.json

cd /app
npm run command:initialize:extensions

# Load the data when teletron is started
npm run command:initialize:data &

echo "Starting teletron... Access at http://localhost:$PORT/"
./node_modules/.bin/nodemon build/server.js

