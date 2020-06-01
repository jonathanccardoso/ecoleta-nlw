# Annotations

## Links

- Organization [whimsical](https://whimsical.com/)
- Prototyping [Figma](#)

## TypeScript warnings

Sometimes, in some dependencies, there are two packages, one only for the core and the other for typing.

`npx`, is for installed package. To run a typescript file, you need to install the package and create a configuration file.

### In node with commands

```console
❯ npm install typescript -D
❯ npx tsc --init

❯ npx ts-node-dev src / server.ts // with watch
// or
❯ npm run dev
```

### In React

```console
❯ npx create-react-app web --template=typescript
```
