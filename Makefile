install: 
	npm ci

gendiff:
	bin/gendiff.js
	M
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest 

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

lint:
	npx eslint

publish:
	npm publish

.PHONY: test