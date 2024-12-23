# Philosophy

- [Philosophy](#philosophy)
  - [Integrated Development Environment (IDE)](#integrated-development-environment-ide)
  - [Execution Environment](#execution-environment)
  - [Package Manager](#package-manager)
  - [Programming Language](#programming-language)
  - [Linting](#linting)
  - [Code Formatting](#code-formatting)
  - [Committing](#committing)
  - [Bundling](#bundling)
  - [State Management](#state-management)
  - [TODO: Fetching Data](#todo-fetching-data)
  - [TODO: Routing](#todo-routing)
  - [TODO: Internationalization and Localization](#todo-internationalization-and-localization)
  - [Graphical User Interface](#graphical-user-interface)
  - [Deployment](#deployment)

## Integrated Development Environment (IDE)

This templated is designed to work with Visual Studio Code (VSCode) simply
because the author is most comfortable working with VSCode. To enable real time
code linting and formatting, install ESLint and Prettier plugins for VSCode.
After installing this template locally and opening it in VSCode, you should be
prompted to install missing extensions. VSCode displays extension suggestions
based on the workspace configuration, see the [extensions.json][extensions] file
for details.

## Execution Environment

When starting a new project, it's best to to use the latest Long Term Support
(LTS) version of Node JS. Furthermore, after installing Node.js it's recommended
to update the bundled package manager (npm).

The best way, to manage multiple Node versions on Mac OS and Linux is by
installing [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm). It even
has a convenient configuration file [.nvmrc](/template/.nvrc) to avoid typing
the desired version every time a new terminal is opened. It's also possible to
set default version for all new terminal windows

VSCode also depends on Node JS to execute some plugins. Latest versions of
linters and formatters might crash on legacy Node JS versions. Apparently, the
plugin execution environment can be configured by creating a [launch
config][launch].

When creating this template, the LTS version was lts/jod (v22) and npm version
was v11.0.0. The template was tested to be compatible with these versions. Keep
in mind that new Node.js versions are released every 6 months.

The author is aware that a new runtime environment written in Rust and natively
supporting TypeScript called [Deno][deno] is being actively developed. If it
keeps gaining momentum, running this template on Deno might be a fun challenge.

## Package Manager

Yarn was the first to introduce a usable lock file and workspaces but NPM has
quickly caught up. At the time of writing, the only meaningful difference
between Yarn and NPM is that Yarn has “Plug ‘n Play.” (PnP) mode that eliminates
`node_modules` folder. Unfortunately, upon close inspection, it doesn’t quite
live up to its name, “Plug ‘n Play.” Executing `yarn init -2` will create many
files and directories, all of which must be committed. Furthermore, a [VSCode
plugin][zipfs] is required to browse the compressed package store and additional
patches are needed to make TypeScript work. In contrast, running `npm init`
results in one file: `package.json`. For configuration simplicity sake, this
template is based on NPM.

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

## Linting

Common code quality issues are extensively documented and can be fixed with a
linter. The most popular linter for JavaScript is ESLint. ESLint is also the
recommended way to lint TypeScript. To enable TS support [a plugin][ts-eslint]
must be installed. It depends on `tsc` to function and has two modes: type-aware
and type-ignorant. On one hand, the type-aware mode is more accurate, on the
other hand, it is slower. This template prioritizes code quality, therefore, the
type-aware mode is used.

## Code Formatting

At the time of writing, the most popular code formatter for JavaScript was
Prettier. According to its maintainers, it was designed to be opinionated. In
practice it means its users must accept an intentionally limited configuration.
The philosophy of this template is that formatting details, like number of
spaces, don't matter as much as consistency. That's why the default options are
used by omitting the configuration file.

The author of this template prefers to disable VSCode's "format on save" and
"auto save" features. Instead, formatting and saving are done via keyboard
shortcuts. On Mac it's <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>
Automatic formatting can be distracting and trigger redundant dev server
rebuilds.

When typing new code in an editor, it automatically applies some basic
formatting rules, for example, pressing <kbd>Tab</kbd> indents the code. A
complex application is often developed by a team. To make sure each team member
has a standard and reproducible editing experience, the
[editorconfig][editorconfig-web] standard is used. See
[.editorconfig][editorconfig-config] file for details. Keep in mind that.
editorconfig and Prettier rules must not contradict each other.

Don't confuse linting and formatting. ESlint is mainly used to identify code
quality issues, while Prettier is used to enforce code style. The two tools can
clash, because ESLint does include some formatting rules. To avoid the overlap,
Prettier provides an ESLint configuration, which disables ESLint's formatting
rules.

## Committing

This template runs linting and formatting on every commit, to ensure code issues
don't slip through. This is done in a pre-commit hook. A library called
[Husky][husky] is used to manage the hooks. An additional plugin, called
[lint-staged][lint-staged], was installed to filter out files that are not
staged. `lint-staged` can run commands in parallel. This feature
[was disabled](./.husky/pre-commit), because linting and formatting must run in
sequence. Finally execution order matters. Prettier is ran after ESLint, because
formatting potentially buggy code is redundant.

## Bundling

Remembering the Webpack days, the configuration file would become
overcomplicated. One of the reasons is plugin management. Everything, except
code, required a plugin: CSS, images, fonts. [Rollup][rollup], seems to follow
the same philosophy: minimal core, extendable with plugins. It's credibility
increased after [Vite][vite] started using it for production builds. The
template's author shall monitor exciting development of these tools, however,
Vite's lazy building tech does come with some issues. It can interfere with
automated tests, especially the one using Cypress framework.

This template prioritizes application development over build configuration,
therefore, [Parcel][parcel] bundler is used. Parcel is designed to be "zero
config" providing sensible defaults out of the box. It can handle most use
cases, without configuration or plugins: TypeScript, CSS, images, fonts. It can
transpile TypeScript to JavaScript, without reliance on Microsoft's `tsc`. It's
own compiler is much faster, because it doesn't do type checking. A dev server
is also included.

## State Management

A large React application must manage state between many components. A solution
for maintainable application state management was proposed by Facebook when it
introduced the Flux architecture. One reliable implementation of Flux is
[Redux][redux] and is used in this template. Redux has recently been enhanced
with a [toolkit][redux-toolkit] that simplifies bootstrapping and reduces
boilerplate code. It introduces the concept of slices that further standardize
state management.

A Redux store has already been set up and typed in the template. Furthermore a
slice with synchronous and asynchronous actions is included.

## TODO: Fetching Data

Most web applications load data from a server. Programming data fetching and
then storing it in the app state is repetitive and lacks creativity. To focus on
creative coding programming and reduce boilerplate [RTK Query] is used. It is
part of the Redux Toolkit and standardizes fetching and caching.

## TODO: Routing

Large React applications have multiple views. A routing mechanism is required to
swtich between them. The most popular routing library for React was chosen, that
is [react-router](https://reactrouter.com/en/main).

## TODO: Internationalization and Localization

The web was designed to be global. Successful apps often have users from many
cultures. It makes sense to enable support for multiple locales and languages.

## Graphical User Interface

Market share of users that used mobile as their primary device to access the web
is growing. To accommodate them the design framework must be mobile first.
Furthermore, the variety of screen sizes is increasing, therefore, the layout
must be responsive and adapt to different aspect ratios, resolutions and pixel
densities. Lastly, when building an app off a template, it's important to
customize its look and feel to match your own brand.

There are many ways to style React components:

- CSS in JS,
- CSS modules - writing an isolated style sheet for each component,
- utility first - applying reusable CSS classes.

CSS in JS violates the separation of concerns principle. React should handle
component behavior and styling should be interchangeable. CSS modules avoid
conflicts but make consistency difficult, unless a style preprocessor is used.
This templates favors reusable utility classes. To enable conditional class
application, [clsx][clsx] utility is used.

Building a mobile first, responsive, customizable design system is a complex
project by itself. To focus on application development, instead of styling, a
third party style system, that matches the requirements, is used, which is
[Tailwind CSS][tailwind].

GUI components provided by the browser are not sufficient. Default components
match the design system of the operating system, not the application. As a
result the application can look inconsistent across different operating systems.
To tackle this issue, custom GUI components must be built. Developing custom
components, might seem simple at first, however upon closer inspection, many
requirements arise:

- different states like hover, focus, active, disabled;
- ability to display icons, text and animations;
- accessibility which includes keyboard navigation;
- testability;
- documentation with examples.

To focus on application development, not component design, a third party
component library is used. [Headless UI][headlessui] was chosen for several
reasons:

- open-source and free,
- works well with Tailwind,
- unstyled by default,
- compatible with
  [Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/)
  standards,
- React based,
- TypeScript ready.

## Deployment

A web application is not done until it's accessible to users on the web.
Deploying involves a server. This template prioritizes single page highly
dynamic applications that have little static content. That's why it doesn't
include server-side rendering, which, in turn, simplifies the web server
configuration, because only static files must be served.

Another priority when deploying is portability. To avoid hosting provider
lock-in. Currently, the industry standard for portability is to package the
application in a Docker container.

[Nginx Docker image](https://hub.docker.com/_/nginx) is used for deployment.
Nginx is an efficient, production ready web server that can serve static files
with minimal configuration, furthermore, it has an official Docker image.

[extensions]: /template/.vscode/extensions.json
[launch]: /template/.vscode/launch.json
[deno]: https://deno.com/
[zipfs]:
  https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs
[ts-eslint]: https://typescript-eslint.io/
[editorconfig-web]: https://editorconfig.org/
[editorconfig-config]: /template/.editorconfig
[husky]: https://typicode.github.io/husky
[lint-staged]: https://www.npmjs.com/package/lint-staged
[rollup]: https://rollupjs.org/
[vite]: https://vite.dev/
[parcel]: https://parceljs.org/
[redux]: https://redux.js.org/
[redux-toolkit]: https://redux-toolkit.js.org/
[clsx]: https://github.com/lukeed/clsx
[tailwind]: https://tailwindcss.com/
[headlessui]: https://headlessui.com/
