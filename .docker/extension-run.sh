#!/bin/bash

set -e

CURRENT=$PWD
if [ ! -d "$PWD/node_modules" ]; then
    npm ci
fi

# If the parent folder is not installed yet, install it.
if [ ! -d "$PWD/../node_modules" ]; then
    cd .. && npm ci
fi

cd $CURRENT

npm run watch