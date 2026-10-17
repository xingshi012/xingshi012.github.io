# Xingshi Blog

>一个树洞，倾听、记录自己的碎碎念

## Install

```
yarn install
```

## Development

| Use              | command      |
| ------------------ | ---------------- |
| Launch Chinese version (default) | `yarn start`     |
| Launch English version | `yarn start:en`  |
| Preview build results locally | `yarn serve`     |

Local preview: http://localhost:3000/

## Build

| Use                        | command         |
| -------------------------- | --------------- |
| Build all languages        | `yarn build`    |
| Only build English version | `yarn build:en` |

## Deploy

```
Windows
$env:GIT_USER="xingshi012"

yarn deploy

or Linux/macOS

GIT_USER=xingshi012 npm run deploy
```

## Chore 

```
yarn add --dev --exact @docusaurus/module-type-aliases@3.10.2 @docusaurus/types@3.10.2
npm install --package-lock-only --ignore-scripts
```

## License

This project is licensed under the [MIT License](./LICENSE).