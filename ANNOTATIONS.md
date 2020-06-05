# Annotations

## Links

- Organization [whimsical](https://whimsical.com/)
- Prototyping [Figma](https://www.figma.com/)
- Annotations [Notion](https://www.notion.so/)
- Imagens Free [Unsplash](https://unsplash.com/)

## TypeScript warnings

Sometimes, in some dependencies, there are two packages, one only for the core and the other for typing.

`npx`, is for installed package. To run a typescript file, you need to install the package and create a configuration file.

Import types of libs. Example:

```console
❯ npm i @types/multer -D
```

### Node with commands

```console
❯ npm install typescript -D
❯ npx tsc --init

❯ npx ts-node-dev src / server.ts // with watch
// or
❯ npm run dev
```

## Migrations

In migrations it will be done with knex, in the creation of tables, the js files and program are created.

- Being able to export to any other bank later (Ex: Postgres, MariaDB, ...).

Run migrations:

```console
❯ npx knex migrate:latest --knexfile knexfile.ts migrate:latest
```

## React

```console
❯ npx create-react-app web --template=typescript
```
