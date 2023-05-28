# Architecture

## Modules

This project has a simple implementation.

There are two main modules that handle the necessary operations of application, and one module that deals with the configuration.

The first module is the **core**. This module is responsible for the sorting algorithms implementations and the necessary inline documentations. Make sure to take a look at all to understand clearly.

The second module is the **service**. This module is responsible to deal with HTTP request using Axios. The implementation use the Services orientation architecture/pattern, i.e. use the organisation of cohesive, self-sufficient and autonomous set of logical components called `services` to build a software. The use of this architecture has the advantage of separation of responsibilities, communication between services through a protocol (in this case HTTP/HTTPS), decentralisation, scalability and resilience, maintainability, code reuse and better data management.

The last module is the **configuration**. This module is responsible for the configuration of the application, using the `dotenv-safe` library as a parser for `.env` files.

## Tests

The project is test-oriented, designed to be tested with the Jest framework.
