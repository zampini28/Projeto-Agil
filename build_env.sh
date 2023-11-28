#!/bin/bash

set -ex

# Install dependencies

yarn init -y

yarn add \
    express \
    typeorm \
    reflect-metadata \
    pg \
    ejs \
    uuid \
    bcryptjs

yarn add -D \
    @types/express \
    @types/uuid \
    @types/bcryptjs \
    @types/ejs \
    ts-node-dev \
    typescript

# Create tsconfig.json

yarn tsc --init

# Create working directories and files

mkdir \
    controllers \
    services \
    entities \
    views \
    public \

touch \
    app.ts \
    data-source.ts \
    routes.ts \