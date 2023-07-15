.PHONY: dev dev-local start

dev:
	docker compose up dev-app dev-proxy --build

dev-local:
	npm run dev & docker compose up local-proxy --build

start:
	npm run build
	docker compose up app proxy --build

stop:
	docker compose down --remove-orphans