# Project Overview

This project is built using Vite and React.

# Deployed Radar Diagram

To update the radar, please add specific technologies to the `data-front/elements.json` or `data-back/elements.json` file.

The radar is customizable. You can also add additional rings and divide the radar into smaller sections.

The radar uses the [radar-diagram](https://www.npmjs.com/package/radar-diagram) library.

## Prerequisitions:

- nodejs v18

## Installation

1. To install all the necessary dependencies, run the following command:

`npm install`

## Running the Project

2. To start the development server, use the following command:

`npm run dev`

## Production setup

1. Build project image

via package.json script

```sh
npm run image:build
```

or directly running docker

```sh
docker build -t frontend-radar:latest .
```

2. Run the production image

via package.json script, runs on port 8080

```sh
npm run image:run
```

or directly running docker

```sh
docker run -p 8080:80 --rm frontend-radar:latest
```
