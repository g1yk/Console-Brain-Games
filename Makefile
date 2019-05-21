
install:
	npm install
start:
	npx babel-node src/bin/games/brain-calc.js
build:
	rm -rf dist
	npm run build
publish:
	npm publish
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage
babel:
	sudo npx babel src --out-dir dist