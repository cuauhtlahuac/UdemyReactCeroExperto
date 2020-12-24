# Deploy with heroku

- In this step you’ll install the Heroku Command Line Interface (CLI).
- Use the heroku login command to log in to the Heroku CLI: `heroku login `. This command opens your web browser to the Heroku login page. If your browser is already logged in to Heroku, simply click the Log in button displayed on the page.
- Check The documentation to verify the required versions of node, npm, etc...
- Inside your app write the command ```heroku create```
- Push your app to heroku ```git push heroku main```
- The application is now deployed. Ensure that at least one instance of the app is running: ```heroku ps:scale web=1```
- To see the app in web ```heroku open```