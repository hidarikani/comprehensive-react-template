# Your Web Application
Replace this description with an overview of your project. For reasoning behind
technology choices made in this template visit its
[repository](https://github.com/hidarikani/comprehensive-react-template).

## Visual Studio Code
On first run VSCode will suggest installing recommended extensions:
- ESLint
- Prettier

## Dependencies
Tested with Node.js lts/iron (v20). On Mac and Linux, use
[Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to manage multiple
Node versions.

Package manager is npm.

```shell
# run once:
nvm install lts/iron
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
npm run start # Parcel's dev server
npm run lint
npm run format
npm run test
```