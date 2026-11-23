# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme)
[![make.fun rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/anisakansa/post-x-promote-make-your-own-bounty-01-rebuild/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![make.fun reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/anisakansa/post-x-promote-make-your-own-bounty-01-rebuild/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for [make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

The entry is one X post by the entrant: a quote of make.fun's make-your-own-bounty post (or a new post linking to it), with a photo of the entrant's own, the line "Make your own bounty on @makefunai: https://make.fun/sponsor/new", and the play code `makefun-reindeer-kitten-hammer`.

This program reads the post's URL from `POST.json` in the repo root, validates it (a JSON object whose `url` is an `https://x.com/` or `https://twitter.com/` link containing `/status/`), and copies it byte-for-byte to `/output/POST.json`. Standard library only, no network, no wall clock — deterministic: the same input always produces the same output.

Run it with Node 22:

```sh
node --experimental-strip-types main.ts
```

`POST.json` currently holds a placeholder URL and will be updated with the real post link once the post is live.
