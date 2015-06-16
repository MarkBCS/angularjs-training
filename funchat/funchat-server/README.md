# funchat-server

Deploying to Heroku:

- Make sure you have created your application on Heroku with heroku remote setup on your git.

	heroku login
	heroku git:remote --app funchat-api

- Go to repository root folder and run:

	git subtree push --prefix funchat/funchat-server heroku master

- If that does not work, try

	git push heroku `git subtree split --prefix funchat/funchat-server master`:master --force
