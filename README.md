# Yuxi Zhang Personal Website

This repository contains a personal GitHub Pages site based on the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

Target site:

```text
https://Yuxi0048.github.io/yuxizhang.github.io/
```

## What Was Customized

- `_config.yml`: site name, description, GitHub Pages URL, empty `baseurl`,
  search settings, and author metadata.
- `_pages/about.md`: root page bio and research summary.
- `_projects/`: selected project entries.
- `_data/socials.yml`: public GitHub social link.
- `_data/repositories.yml`: public GitHub repository cards.
- `_data/cv.yml`: conservative public CV draft.
- `_news/`: one launch note.

## Publish Checklist

1. Create a public GitHub repository named exactly `yuxizhang.github.io`.
2. Push this repository to `https://github.com/Yuxi0048/yuxizhang.github.io.git`.
3. In GitHub, open `Settings -> Actions -> General` and set workflow permissions
   to `Read and write permissions`.
4. Push to `main` and wait for the deploy workflow to finish.
5. In `Settings -> Pages`, set the publishing source to the generated
   `gh-pages` branch.

For this project GitHub Pages site under the `Yuxi0048` account, `_config.yml`
must keep:

```yaml
url: https://Yuxi0048.github.io
baseurl: /yuxizhang.github.io
```

If the GitHub account or organization itself is named `yuxizhang`, then the
site can instead be configured as a personal site with:

```yaml
url: https://yuxizhang.github.io
baseurl:
```

## Local Preview

The al-folio maintainers recommend Docker:

```bash
docker compose pull
docker compose up
```

Then open:

```text
http://localhost:8080
```

On Windows, WSL plus Docker is usually the least fragile route for this Jekyll
stack.
