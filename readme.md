# Deno Docker Container

## Scripts

### Build

```bash
npm run build
```

### Run

```bash
npm run start:log
```

### Start

```
npm run start
```

### Stop

```bash
npm run stop
```

### Releaes

```bash
npm run release
```

## Notes

https://gist.github.com/colinknebl/f7aac4cfb1ee06e7bbee1a85115e249c

## Process to push to docker hub

1. tag the image

```bash
docker tag <image ID> colinknebl/<image name>:<version/tag>
docker tag 51fbeee5d333 colinknebl/deno_app_release:1
```

2. push the image

```bash
docker push colinknebl/<image name>
docker push colinknebl/deno_app_release
```
