# Creature Games Studio Website

Powered by [Hugo](https://gohugo.io/).

## Content Structure

To modify existing content, go to the `content/` directory and edit the Markdown files.

To create a new page, use the command `hugo new <filename>`. This generates relevant [front matter](https://gohugo.io/content-management/front-matter).

If you are creating a page in the root `content/` directory, _make sure the front matter includes `menu: main` for the page to appear in the navbar_.

## Development

Run development server:

```hugo server```

Build static site (exports to `/public`):

```hugo```