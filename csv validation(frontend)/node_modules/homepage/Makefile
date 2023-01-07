install:
	npm install

lint:
	$(MAKE) install
	jshint bin/*.js lib/*.js test/*.js index.js

test:
	$(MAKE) lint
	@NODE_ENV=test mocha

test-cov:
	$(MAKE) lint
	@NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha

test-travis:
	$(MAKE) lint
	@NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha --report lcovonly

clean:
	rm -rf build components node_modules coverage

.PHONY: test lint
