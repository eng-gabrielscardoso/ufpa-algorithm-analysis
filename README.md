# UFPA Algorithms analysis

This project is a work requested for the discipline of Algorithm Analysis taught in the Bachelor's Degree in Information Systems at UFPA.

This work aims to analyze the complexities and imply some tests on top of the BucketSort, CountingSort, HeapSort, QuickSort and RadixSort algorithms. The full requirements are described in the file in this [link](https://drive.google.com/file/d/102ynRz7TVMj_YeTqy21B9Yq9vdnNDpLU/view?usp=sharing).

## Technologies

The technologies used in the project were the most recent versions of:

- Javascript, Typescript and Jest
- NodeJS and NPM
- Docker and Docker Compose
- Visual Studio Code 1.78.2
- Git version 2.34.1
- Github and Github CLI.
- ViaCEP API

## Installation

This project requires you have installed in your machine the most recent version of Docker and Docker Compose, so make sure that you have them.

First of all, clone the repository in your local environment. You could use the Github or Github CLI, or simple run `git clone https://github.com/eng-gabrielscardoso/ufpa-algorithms-analysis.git`. After it you have two options to configure the project, with SDK, with Docker only or using the Docker Compose (recommended).

## With SDK (NodeJS stack)

Install necessary dependencies with the following command:

```bash
npm i
```

**Essential Commands**

- Build: `npm run build`
- Run development scripts: `npm run dev`
- Run unit tests: `npm run test`
- Clear dist (build assets): `npm run clear`

## Docker

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

## Github Codespaces

A simple way to test project is using [Github Codespaces](https://github.com/features/codespaces). You could just press "." key in your keyboard and a web instance of Visual Studio Code will open in your Github with the project. To run commands the Github will recommend you to instance a Virtual Machine (for free) and will provide all resources to use, code and test the project via web. After create your Github Codespace you could follow the instructions of [SDK installation](#with-sdk-nodejs-stack).

## Repl.it

If you really haven't Docker or haven't installed in your machine the necessary SDK to run the application you still could use the public [Repl.it](https://replit.com/) feature to see in live. Just go to the following [link](https://replit.com/@enggscardso/ufpa-algorithm-analysis).

## Authors

The work was done by students:

- Gabriel Santos Cardoso - 202111140007 <eng.gabrielscardoso@gmail.com>
- Bruno Alves da Cunha - 202111140032 <bruno.cunha@icen.ufpa.br>
- Luid Figueiredo Sarmento - 202111140033 <luyd.estudos2020@gmail.com>

## Licence

This project is licenced under the MIT licence. See the Licence file for details [here](LICENSE.md).
