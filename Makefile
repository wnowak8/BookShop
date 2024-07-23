up:
	docker-compose up -d --build

down:
	docker-compose down

restart: down up

backend:
	docker-compose up -d backend

frontend:
	docker-compose up -d frontend

ps:
	docker-compose ps