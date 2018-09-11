# Revolut exchange screen

## API:
This app uses free plan of https://openexchangerates.org/api rates provider. It has some limited requests per month count, so app migth not work if limit will be reached.

## For developers:

Application is powered by Docker, so it's quite easy to create the local environment.

### Steps:

* `git clone`
* `make install`
* `make start`

Service will be available on the http://localhost:3000 by default.

### Regular use:

* `make check-code-style` to start lint and check the code
* `make fix-code-style` to start eslint with --fix option.

  > **WARNING**: this cmd will update your source code according to the rules in eslint and prettier config files, so be careful with it.

* `make clean` to clean docker stuff
* `make connect-shell` to open shell in container
