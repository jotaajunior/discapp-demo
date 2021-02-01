# Discapp Demo

This repository contains the code for a basic application using [Discappp](http://github.com/jotaajunior/discapp).

## Quickstart

Use [degit](https://github.com/Rich-Harris/degit) to clone this repository.

```bash
npx degit jotaajunior/discapp-demo#main
```

Clone `.env.example` to `.env`; replace the value of `DISCORD_TOKEN` with your own token.

```
DISCORD_TOKEN=YOUR_TOKEN_HERE
```

Make sure to already have your bot connected to some server, then install the dependencies:

```bash
yarn install
```

That's all, your demo is ready to go:

```bash
yarn start
```

The script above will transpile the TypeScript code and start the application.

## Avaible scripts

### `yarn start`

Transpiles the TypeScrit code to JavaScript and executes it. Use this command when running your application in production.

### `yarn build`

Builds the application, this command will transpile the TypeScript code in `src` to JavaScript code in `dist`.

### `yarn dev`

This will run the application in development mode, watching for change in the command directory and automatically reloading them when necessary.
