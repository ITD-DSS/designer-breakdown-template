# designer breakdown template

## Requirments

- [Node.js 14 LTS (Long Term Support)](https://nodejs.org/en/)
- [VsCode](https://code.visualstudio.com/) for editor settings
    - VsCode Plugin - `ESLint`
    - VsCode Plugin - `Prettier`
    - VsCode Plugin - `Github Issues and Pull Requests`
        - [How to use / Features](https://code.visualstudio.com/docs/editor/github)
    - VsCode Plugin - `Vue VSCode Snippets` by sarah.drasner

## Nuxt for Designers!

### How to use this template.

Copy this command to scaffold a project with all the configuration and scripts.

1. `npx degit https://github.com/ITD-DSS/designer-breakdown-template.git <your-new-project-folder>`

2. `npm install`

3. `Shift + Ctrl + P` Open Command bar in VsCode and Type / Select `Tasks: Run Tasks`

4. Select `npm: site-dev`

5. Open website at `http://localhost:3000` 

You now have a developement enviroment with hot-reloading! Great way to make it faster to develop sites.


#### Capture Content

TODO: Write Scraper Task for scraping site resources

#### Important Directories & Files

In this template the majority of the work will happen in the `_site` directory where it's sub-folders are what `nuxt`
uses to generate a new static site and a jump off point for migrating a site into our new CMS

##### PAGES

This directory contains your Application (website) Views (layouts) and Routes (page-linking).
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

##### ASSETS

This directory contains your un-compiled assets such as LESS, SASS, or JavaScript.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#webpacked).

##### COMPONENTS

The components directory contains your Vue.js Components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guides/features/nuxt-components/).

##### LAYOUTS

This directory contains your Application Layouts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/views#layouts).

##### STATIC

This directory contains your static files.
Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).