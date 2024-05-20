# Comprehensive React Template
The goal of this repository is to simplify new React application bootstrap by
providing a templated that can be copied. This template is advanced by design.
It strives to cover all aspects of maintainable and scalable development, such
as:
- Code quality and style
- Test automation
- Styling and GUI components
- State management
- Routing
- Data fetching
- TODO: Internationalization
- Production build and serving
- Continuous integration and deployment

This README explains the template philosophy and isn't part of the of the 
template, which is located under [/tenplate](/template) directory.


## Installation
To install this template locally use
[degit](https://github.com/Rich-Harris/degit)
which can copy a git repository omitting the  history.

```shell
npx degit hidarikani/comprehensive-react-template/template my-app
# where `my-app` is the name of your new project
```

# Reasoning Behind Technology Choices

## Integrated Development Environment (IDE)
This templated is designed to work with Visual Studio Code (VSCode) simply 
because the author is most comfortable working with VSCode. To enable real time 
code linting and formatting, install ESLint and Prettier plugins for VSCode.
After installing this template locally and opening it in VSCode, you should be
prompted to install missing extensions. VSCode displays extension suggestions
based on the workspace configuration, see the
[extensions.json](/template/.vscode/extensions.json) file for details.

## Execution Environment
When starting a new project, it's best to to use the latest Long Term Support 
(LTS) version of Node JS. Furthermore, after installing node it's recommended to 
update the bundled package manager (npm). 

The best way, to manage multiple Node versions on Mac OS and Linux is by 
installing [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm). It even 
has a convenient configuration file [.nvmrc](/template/.nvrc) to avoid typing 
the desired version every time a new terminal is opened. It's also possible to
set default version for all new terminal windows

VSCode also depends on Node JS to execute some plugins. Latest versions of
linters and formatters might crash on legacy Node JS versions. To ensure correct
plugin execution environment, this template includes a 
[launch config](/template/.vscode/launch.json).

When creating this template, the LTS version was lts/iron (v20) and npm version 
was v10.2.5. The template was tested to be compatible with these versions. 
Finally, new Node.js versions are released every 6 months.

## Package Manager
Yarn was the first to introduce a usable lock file and workspaces but NPM has 
quickly caught up. At the time of writing, the only meaningful difference 
between Yarn and NPM is that Yarn has “Plug ‘n Play.” (PnP) mode that eliminates
 `node_modules` folder. Unfortunately, upon close inspection, it doesn’t quite 
 live up to its name, “Plug ‘n Play.” Executing `yarn init -2` will create many 
 files and directories, all of which must be committed. Furthermore, a 
 [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)
 is required to browse the compressed package store and additional patches are 
 needed to make TypeScript work. In contrast, running `npm init` results in one 
 file: `package.json`. For configuration simplicity sake, this template is based
 on NPM.

## Programming Language
The default language of the web is, obviously, JavaScript. It has improved over 
the years, however, it's still dynamically typed. Dynamic typing simplifies 
onboarding, however, as the application grows, maintainability becomes relevant.
Quality assurance becomes harder, because type errors can only be caught at 
runtime. This template is intended for long-term projects, therefore, it uses
[TypeScript](https://www.typescriptlang.org/).

TypeScript requires a compiler. The official Microsoft compiler is called `tsc`.
It is used for type checking during development, however, the bundler of choice
doesn't use it for building, because of performance reasons. More on the bundler
choice later.

TypeScript requires type definitions for third party libraries. These are 
specified in `package.json` under the `@types/` namespace.

## Code Linting Linter
Common code quality issues are extensively documented and can be fixed with a 
linter. The most popular linter for JavaScript is ESLint. ESLint is also the 
recommended way to lint TypeScript. To enable TS support 
[a plugin](https://typescript-eslint.io/) must be installed. It depends on `tsc`
to function and has two modes: type-aware and type-ignorant. On one hand, the 
type-aware mode is more accurate, on the other hand, it is slower. This template
prioritizes code quality, therefore, the type-aware mode is used.

# Code Formatting
At the time of writing, the most popular code formatter for JavaScript was
Prettier. According to its maintainers, it was designed to be opinionated.
In practice it means its users must accept an intentionally limited
configuration. The philosophy of this template is that formatting details, like 
number of spaces, don't matter as much as consistency. That's why the default
options are used by omitting the configuration file.

The author of this template prefers to disable format on save and auto save.
Instead formatting and saving are done via keyboard shortcuts. Automatic
formatting can be distracting. Automatic saving can create unnecessary load for
the dev server that watches files for changes.

When typing new code in a code editor, it applies some formatting rules, for 
example, pressing "Enter" or "Tab" indents the code. For a smooth editing 
experience editor and Prettier formatting must match. A standard for editor
configuration exists, called [editorconfig](https://editorconfig.org/). This 
template includes an [.editorconfig](/template/.editorconfig) file that matches
Prettier defaults.

Don't confuse linting and formatting. ESlint is mainly used to identify code
quality issues, while Prettier is used to enforce code style. The two tools can
clash, because ESLint does include some formatting rules. To avoid the overlap,
Prettier provides an ESLint plugin, which disables ESLint's formatting rules.

## Committing
This template runs linting and formatting on every commit, to ensure code issues
don't slip through. This is done in a pre-commit hook. A library called
[Husky](https://typicode.github.io/husky) is used to manage the hooks. An 
additional plugin, called
[lint-staged](https://www.npmjs.com/package/lint-staged), was installed 
to filter out files that are not staged. `lint-staged` can run commands in
parallel. This feature [was disabled](./.husky/pre-commit), because linting and 
formatting must run in sequence. Finally execution order matters. Prettier is 
ran after ESLint, because formatting potentially buggy code is redundant. 

## Bundling
Remembering the Webpack days, the configuration file would become
overcomplicated. One of the reasons is  plugin management. Everything, except 
code, required a plugin: CSS, images, fonts. Rollup, seems to follow the same 
philosophy: minimal core, extendable with plugins.

This template prioritizes application development over build configuration,
therefore, [Parcel](https://parceljs.org/) bundler is used. Parcel is designed
to be "zero config" providing sensible defaults out of the box. It can handle
most use cases, without configuration or plugins: TypeScript, CSS, 
images, fonts. It can transpile TypeScript to JavaScript, without reliance on
Microsoft's `tsc`. It's own compiler is much faster, because it doesn't do type 
checking. A dev server is also included.

## State Management
A large React application must manage state between many components.
A solution for maintainable application state management was proposed by 
Facebook when it introduced the Flux architecture. A reliable implementation of
Flux is [Redux](https://redux.js.org/) which is used in this template. Redux
has recently been enhanced with a [toolkit](https://redux-toolkit.js.org/) that
simplifies bootstrapping and reduces boilerplate code. It introduces the concept
of slices that further standardize state management.

A Redux store has already been set up and typed in the template. Furthermore a 
slice with synchronous and asynchronous actions is included.

## Fetching Data
Most web applications load data from a server. Programming data fetching and 
then storing it in the app state is repetitive and lacks creativity. To focus on
creative coding programming and reduce boilerplate [RTK Query] is used. It is 
part of the Redux Toolkit and standardizes fetching and caching.

## Routing
Large React applications have multiple views. A routing mechanism is required to
swtich between them. The most popular routing library for React was chosen, that 
is [react-router](https://reactrouter.com/en/main).

## Graphical User Interface
Market share of users that used mobile as their primary device to access the web
is growing. To accommodate them the design framework must be mobile first.
Furthermore, the variety of screen sizes is increasing, therefore, the layout
must be responsive and adapt to aspect rations, resolutions and pixel densities.
Lastly, when building an app off a template, it's important to customize its 
look and feel to match your own brand. 

There are many ways to style React components:
- CSS in JS,
- CSS modules - writing an isolated style sheet for each component,
- utility first - applying reusable CSS classes.

CSS in JS violates the separation of concerns principle. React should handle component behavior and the styling should be interchangeable. CSS modules avoid conflicts but make consistency difficult, unless a style preprocessor is used. This templates favors the reusable utility class approach. To enable conditional class application, [clsx](https://github.com/lukeed/clsx) utility is used. 


Building a mobile first, responsive, customizable design system is a complex
project by itself. To focus on application development, instead of styling, a
third party style system, that matches the requirements, is used, which is
[Tailwind CSS](https://tailwindcss.com/).


GUI components provided by the browser are not sufficient. Default components
match the design system of the operating system, not the application. As a
result the application can look inconsistent across different operating systems.
To tackle this issue, custom GUI components must be built. Creating a custom
button component, might seem simple at first, however upon closer inspection,
many requirements arise:

- different states like hover, focus, active, disabled;
- ability to display icons, text and animations;
- accessibility which includes keyboard navigation;
- testability;
- documentation with examples.

To focus on application development, not component design, a third party
component library is used. [Headless UI](https://headlessui.com/) was chosen for
several reasons:
- open-source and free,
- works well with Tailwind,
- unstyled by default,
- compatible with [Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/) standards,
- React based,
- TypeScript ready.
