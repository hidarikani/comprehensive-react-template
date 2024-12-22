# Your Web Application
Replace this description with an overview of your project. For reasoning behind
technology choices made in this template visit its
[repository][template-repo].

## Visual Studio Code
On first run VSCode will suggest installing recommended extensions:
- ESLint
- Prettier
- Editorconfig

## Dependencies
Tested with Node.js lts/jod (v22). On Mac and Linux, use
[Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to manage multiple
Node versions.

Package manager is npm.

```shell
# run once:
nvm install lts/jod
nvm install-latest-npm
# run in each new terminal to set recommended Node version:
nvm use # will use .nvmrc
npm install
```
## Development
First, update [package.json](package.json): name, description, author, license.

Second, update `<title>` tag in [index.html](src/index.html).

Then, run the following commands:

```shell
npm run start # Parcel's dev server @ http://localhost:1234
npm run lint
npm run format
npm run test
```

To test with production web server, use Docker Compose. It will start Nginx 
container. Nginx will run in debug mode. If app is rebuilt while the container
is running, refreshing the browser page is sufficient, because `dist` folder is
mounted as a volume.

```shell
docker compose up --detach # @ http://localhost:1234
docker compose down
```

## Production
```shell
npm run build
docker build --tag your-web-application .
# Run production container locally:
docker run --name your-web-app --publish 1234:80 --detach your-web-application
docker stop your-web-app
docker rm your-web-app
```

[template-repo]: https://github.com/hidarikani/comprehensive-react-template
