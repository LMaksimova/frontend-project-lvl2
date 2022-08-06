install: install-deps
	npx simple-git-hooks

gendiff:
	bin/gendiff.js

install-deps:
	npm ci

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest 

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

lint:
	npx eslint

publish:
	npm publish

.PHONY: test