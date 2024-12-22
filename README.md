# Comprehensive React Template

Advanced React application template that strives to cover all aspects of
maintainable and scalable development, such as:

- Quality assurance
- GUI styling and components
- State management
- Routing
- Data persistence
- Data fetching
- Internationalization and localization
- Continuous integration
- Continuous deployment

## Template Development

### Dependencies

Known to work with Node.js `lts/jod` (v22). Use [nvm][nvm] to manage Node.js
versions. Package manager is `npm`.

```sh
# run once
nvm install lts/jod
nvm install-latest-npm
nvm use # run in each new terminal to set recommended Node.js version
npm install
```

On first run VSCode will suggest installing recommended extensions:

- Prettier

Use [Prettier][prettier] to format Markdown files, like this one.

The web is evolving at an ever more faster pace, Review and upgrade template
dependencies to avoid known security vulnerabilities.

```sh
# preview respecting ranges defined in package.json
npx npm-check-updates --packageFile ./template/package.json 

# preview force major upgrades
npx npm-check-updates --target latest --packageFile ./template/package.json 

# update respecting ranges defined in package.json
npx npm-check-updates -u --packageFile ./template/package.json 

# update force latest
npx npm-check-updates -u --target latest --packageFile ./template/package.json 
```

## Bootstrapping an App From The Template

The actual template is located under [/template][templ] directory. To bootstrap
a new app from the template use [degit][degit] which can copy a git repository
without its commit history.

```shell
npx degit hidarikani/comprehensive-react-template/template my-app
# where `my-app` is the name of your new project
```

## Template Philosophy

Read about the reasoning behind technology choices on a [separate
page][philosophy].

[nvm]: https://github.com/nvm-sh/nvm
[prettier]: https://prettier.io/docs/en/
[templ]: /template
[degit]: https://github.com/Rich-Harris/degit
[philosophy]: /philosophy.md
