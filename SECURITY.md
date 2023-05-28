# Security

We deal with security very seriously. Pay attention to not upload any code that can lead to security issues to the application.

Here are come important and most common security issues:

- Do not include Docker images with reported security issues
- Keep dependencies updated, newer versions can deal with discovered vulnerabilities.
- Use the latest Node.JS version, specifically in this project newer versions of the runtime could better fit with performance than older versions
- Avoid hardcoding sensitive information about environment variables that handle sensitive information as like API keys or credentials, database connections, etc
- If you implement or find some input without validation please report, and if possible make the validation by yourself. This prevent common attacks like cross-site-scripting (XSS), etc
- If you implement or find some input without sanitisation please report, and if possible make the sanitisation by yourself. This is prevent common attacks like SQL injection, etc
- Prevent code injection attacks against some reported and discovered vulnerabilities in Javascript like the use of `eval()`. These practices can lead to code injection vulnerabilities.
- Always maintain the project lint configuration and the code test coverage. Make sure to include to repository only code checked and tested.
- Regularly update your deps, OS, and your environment as part of the security community. Your contribution is always welcome but do not break anything.
