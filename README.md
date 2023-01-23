# FE-SOBV

> This is a project for assessing the combat capability of servicemen and the unit as a whole.


## Markup UI FIGMA
[UI FIGMA](https://www.figma.com/file/fd674p2BErdllc3m5l1Vxd/MPZ_assessment?node-id=0%3A1&t=QuMsjoEdNw8FYfjz-0).

## Setup API  server
- Clone github repository [BE-SOBV](https://github.com/Zadvornyi/BE-SOBV/tree/dev)
- Go to cloned repository folder `BE-SOBV`
- Run into the project folder `docker-compouse build`
- Run into the project folder `docker-compouse up`
- Navigate to `http://localhost:8080/`

## Development server
# Variant #1 (with a local environment)
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Variant #2 (with docker)
API server must be installed and started before.
Run into the project folder `docker-compose up`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run into the project folder `docker build -t sobv-web ./` to build the project.



## Useful links






