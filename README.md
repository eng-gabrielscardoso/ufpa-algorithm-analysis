# UFPA Algorithms analysis

This project is a work requested for the discipline of Algorithm Analysis taught in the Bachelor's Degree in Information Systems at UFPA.

This work aims to analyze the complexities and imply some tests on top of the BucketSort, CountingSort, HeapSort, QuickSort and RadixSort algorithms.

## Technologies

The technologies used in the project were the most recent versions of:

- Javascript, Typescript and Jest
- NodeJS and NPM
- Docker and Docker Compose
- Visual Studio Code 1.78.2
- Git version 2.34.1
- Github and Github CLI.

## Installation

This project requires you have installed in your machine the most recent version of Docker and Docker Compose, so make sure that you have them.

First of all, clone the repository in your local environment. You could use the Github or Github CLI, or simple run `git clone https://github.com/eng-gabrielscardoso/ufpa-algorithms-analysis/`. After it you have two options to configure the project, with Docker only or using the Docker Compose (recommended).

### Docker Configuration

First of all you need to build the image using the following command:

```bash
docker build -t app .
```

**Essential Commands**

- Build: `docker run -v .:/var/www/app -it app build`
- Run development scripts: `docker run -v .:/var/www/app -it app dev`
- Run unit tests: `docker run -v .:/var/www/app -it app test`
- Clear dist (build assets): `docker run -v .:/var/www/app -it app clear`

### Docker Compose Configuration

You could use the following command to configure and start the containers:

```bash
docker-compose up -d --build
```

**Essential Commands**

- Build: `docker-compose exec app npm run build`
- Run development scripts: `docker-compose exec app npm run dev`
- Run unit tests: `docker-compose exec app npm run test`
- Clear dist (build assets): `docker-compose exec app npm run clear`

## Repl.it

If you really haven't Docker or haven't installed in your machine the necessary SDK to run the application you still could use the public Repl.it feature to see in live. Just go to the following [link](https://replit.com/@enggscardso/ufpa-algorithm-analysis#package.json).

## Authors

The work was done by students:

- Gabriel Santos Cardoso - 202111140007 <eng.gabrielscardoso@gmail.com>
- Bruno Alves da Cunha - 202111140032 <>
- Luid Figueiredo Sarmento - 202111140033 <>

## Licence

This project is licenced under the MIT licence. See the Licence file for details [here](LICENSE.md).
