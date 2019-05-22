
install:
	npm install
start:
	npx babel-node src/bin/brain-prime.js
build:
	rm -rf dist
	npm run build
publish:
	npm publish
lint:
	npx eslint . --fix
test:
	npm test
test-coverage:
	npm test -- --coverage
babel:
	sudo npx babel src --out-dir dist