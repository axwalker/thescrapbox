## Dev

https://stackoverflow.com/a/66521110

> - Updated github-pages, jekyll and jekyll-feed gems by running gem install github-pages, gem install jekyll and gem install jekyll-feed. I had to do this step as a simple bundle update wasn't installing the latest version.
> - Modify those gems in the Gemfile to the latest version.
> - Run bundle update
> - Finally run bundle exec jekyll serve

## Tailwind

Need tailwind CLI first, then:

```
../tailwindcss -i assets/css/tailwind-in.css -o assets/css/tailwind-out.css --watch
```

Will need to commit output file to git.
