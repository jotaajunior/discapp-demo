# Discapp Demo

This repostory contains the Proof of Concept code for a basic [Discapp](http://github.com/jotaajunior/discapp) application.

---

Use [degit](https://github.com/Rich-Harris/degit) to clone this repository.

```bash
npx degit git:jotaajunior/discapp-demo
```

Clone `.env.example` to `.env`; replace the value of `DISCORD_TOKEN` to your own token.

```
DISCORD_TOKEN=YOUR_TOKEN_HERE
```

Make sure to already have your bot connected to some server, then install the dependencies:

```bash
yarn
```

The demo is ready to go:

```bash
yarn start

// Running
```

The script above will transpile the TypeScript code and start the application.
