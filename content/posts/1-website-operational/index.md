---
title: "Website Is Operational"
summary: "Finally got around to setting up a personal website. How fun! I'd like to share what took me out of it so many times before."
categories: ["Post", "Blog"]
tags: ["introduction"]
date: 2025-08-24
draft: false
heroStyle: "big"
---

### Beginnings
Initially I got my personal website working using Jekyll which, while functional, for some reason didn't really motivate me to keep it updated or feel like I was in control.

I knew static website was the way to go for this kind of project, so using React or any such framework was out of the question. **Hugo** was touted as a great alternative that is easy to pick up, so I decided to give it a shot.

#### Hugoplate
The first template that I attempted to use was [Hugoplate](https://zeon.studio/preview?project=hugoplate) which is nicely prepared, but a bit too much magic for me to handle as a first project, I guess. I managed to navigate it somewhat, but I felt amateurish on quite a lot of things. It may be great when you're already acquainted with Hugo, but as a newcomer I'd recommend either starting completely fresh or picking up a simpler template.

#### Blowfish
When my motivation picked up again (mainly to be able to stop thinking about paying for a domain without using it) I searched again for a template I'd like and stumbled upon [Blowfish](https://blowfish.page) that looks clean and simple.

### Figuring Out Tailwind
One thing that confused me quite a bit at the beginning is that the integration of Tailwind into Hugo is not as seamless as I expected. Using new style classes which weren't originally used in Blowfish simply didn't work because Tailwind wasn't used.

Fortunately Blowfish specifies how to fix this in advanced customization (though I do feel like it should be included by default).

```bash
pushd themes/blowfish
npm install
popd
```

and adding this line to `Package.json`'s scripts:

```json
"tailwind": "./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w"
```

### Fighting Grid
For the app list I was battling with CSS grid a while, but a lot of it was connected to being oblivious about how Tailwind works, so while I did expect masonry to already be widely supported, but alas a normal grid was used instead.

### GitHub Deployment
The first push wasn't a success, but it wasn't hard to figure out base URLs need to be changed to final URLs for resources to work properly. Also don't forget to include the Tailwind CSS in the repository (or install Tailwind and run it on CI).

All in all, I'm happy to finally be able to cross this item off my project list and move on. Now to recreate some support pages for my apps, create a CV...

```swift
let isPersonalWebsiteFinallyDone = Bool.random()
```
