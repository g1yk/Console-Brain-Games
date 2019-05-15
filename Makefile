
install:
	npm install
start:
	sudo npx babel-node src/bin/games/brain-even.js
	sudo npx babel-node src/bin/games/brain-calc.js
	sudo npx babel-node src/bin/games/brain-nod.js
	sudo npx babel-node src/bin/games/brain-prime.js
	sudo npx babel-node src/bin/games/brain-progression.js
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