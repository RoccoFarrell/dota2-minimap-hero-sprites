# Dota2 Minimap Hero Sprites

This is a CSS spritesheet for Dota 2 Minimap Hero Icons.

## Demo & Usage

Add class `d2mh` to `<i>` tag and reference the wanted hero by adding an additional class in the format of `<heroname>`, `npc_dota_hero_<heroname>` or `hero-<hero_id>`:

``` html
<i class="d2mh axe"></i>
<i class="d2mh npc_dota_hero_gyrocopter"></i>
<i class="d2mh hero-5"></i>
```

### Output:

![Output example](example.png)

## Installation

### a) npm

Install via npm:

```
npm install dota2-minimap-hero-sprites
```

And embed the stylesheet:
``` html
<link rel="stylesheet" type="text/css" href="./node_modules/dota2-css-hero-sprites/assets/stylesheets/dota2minimapheroes.css">
```

### b) copy files

Just copy the assets folder and link to the stylesheet in your HTML like above.

## For Contributors: Update Workflow

1. Update `src/heroes.json` with latest json output from `http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1?language=en_us&key=<your steam web api key>` (I just update it manually)
2. Download Source 2 Viewer from `https://valveresourceformat.github.io/`
3. Search for `materials/vgui/hud/minimap_hero_sheet.vmat_c`, right click `Decompile & Export` and choose a directory
4. In the output directory, copy the exported png file `minimap_hero_sheet` into `assets/images` in this repository
5. Using the Search functionality at the top, search for `mod_textures.txt`, copy into `mod_textures.txt` in this repository
6. Run `npm install` to get the required packages for the generator script
7. Run `npm run generate`
8. Update version in `package.json`
9. Reminder for me, run `npm publish` to push the update to NPM

----------------

All game images and names are property of Valve Corporation.
