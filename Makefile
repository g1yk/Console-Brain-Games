
install:
	npm install
start:
	sudo npx babel-node src/bin/brain-games.js
build:
	sudo rm -rf dist
	sudo npm run build
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