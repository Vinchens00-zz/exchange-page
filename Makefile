install:
	docker-compose --file docker/docker-compose.yml build --no-cache
	cp .githooks/* .git/hooks/

start:
	docker-compose --file docker/docker-compose.yml up

clean:
	docker-compose --file docker/docker-compose.yml stop
	docker-compose --file docker/docker-compose.yml down --rmi local --volumes --remove-orphans

check-code-style:
	docker-compose --file docker/docker-compose.yml run --rm ui npm run check-code-style

fix-code-style:
	docker-compose --file docker/docker-compose.yml run --rm ui npm run fix-code-style

fix-code-style-diff:
	docker-compose --file docker/docker-compose.yml run --rm ui npm run fix-code-style-diff

test:
	docker-compose --file docker/docker-compose.yml run --rm ui npm test -- --maxWorkers=1

coverage:
	docker-compose --file docker/docker-compose.yml run --rm ui npm test -- --maxWorkers=1 --coverage

connect-shell:
	docker-compose --file docker/docker-compose.yml exec ui bash

build:
	NODE_ENV=production npm run build