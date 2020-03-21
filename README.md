# Shadow of the Demon Lord Random Character Generator UI

Shadow of the Demon Lord is &copy; Copyright [Schwalb Entertainment](https://schwalbentertainment.com/) and used with permission. You can learn more about Shadow of the Demon Lord [here](https://schwalbentertainment.com/shadow-of-the-demon-lord/).

This is a random character generator for the game Shadow of the Demon Lord. Currently it supports the core rulebook with some spells included from Occult Philosophy.

You can create characters of any level, ancestry, and legal path combination.

This is meant to be a quick way to either bring in an NPC or provide a character for someone who just showed up at your gaming session.

## Implemented features

- From the Core book:
  - All Ancestries
  - All Novice, Expert, Master Paths
  - All Professions
  - All Traditions and Spells
  - Marks of Darkness
  - All Interesting Things
- Marks of Darkness on Corruption Gain
- Corruption Gain on learning a Dark Tradition
- Potential Corruption Gain on learning Dark Spells
- Additional money on level up
- Interesting Things at every new Path selection
- and more... (probably -- I'm sure there's some things I didn't list here)

## Things worthy of note

- This is currently hosted on Heroku using unpaid servers. It's possible the initial load of the page may take a few seconds as a server is spun up. If demand ends up exceeding the hours available from the unpaid servers I'll pay for them.
- Rules text is intentionally not included. While it would be nice to have, it would make purchase of the book less likely.
- Don't expect characters to be optimized in any way. The AI is given a list of options for each potential decision and chooses one at random.
- Not all items are added, and there is no consideration for equipping characters beyond the starting equipment. Additional money is given however, so use that to purchase equipment if desired.
- When printing a character, you may see a second blank page. This is done to work around a browser related issue where columns become "balanced" instead of filling the available space. Just don't print the second page -- save the paper.
