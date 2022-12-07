docker-build:
	docker build -t sokolovdenisost/eric-admin .
docker-run:
	#docker run --name strapi -p 1337:1337 --env-file .env strapicms:latest
	docker run -d --name strapi -p 1337:1337 -e HOST=0.0.0.0 -e PORT=1337 -e APP_KEYS=Fyy+0HZr9wdfGFAVqWNkNg==,yFv3dTChbLnBAndl0Wh8nA==,bfCf+oqjVqcwfXOX4KHCiw==,c7NpiGst8Z0+QYspJLvP0Q== -e API_TOKEN_SALT=Qb4dU5cj7g8xVwN3EtuLpg== -e ADMIN_JWT_SECRET=yJQqGFynNGTfN8ycEZ/onw== -e JWT_SECRET=XI53ZEOb8pkn6Q6njK0IyA== sokolovdenisost/eric-admin
