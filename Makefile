
install:
	npm install
start:
	sudo npx babel-node src/bin/brain-games.js
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