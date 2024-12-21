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
versions.

Uses [Prettier][prettier] to format Markdown.

```sh
npm install
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

Read about the reasoning behind technology choices on a [separate page][philosophy].

[nvm]: https://github.com/nvm-sh/nvm
[prettier]: https://prettier.io/docs/en/
[templ]: /template
[degit]: https://github.com/Rich-Harris/degit
[philosophy]: /philosophy.md
