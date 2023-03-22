# Streamtape.js

Download videos from xMegaDrive in the CLI.

<br>

### Install

```shell
npm i -g xmega
```

<br>

### Usage

```shell
xmega <url>
```

#### For use in a project

```js
const { download } = require("xmega")
```

#### For use in a module

```js
import { download } from "xmega"
```

##### _Note:_ Direct download link provided is restricted to the current IP.

<br>

### Methods

### download() Generates direct download link

#### Params: [url]

~~~js
await download(url)
    .then(console.log)
    .catch((error) => console.log(error))
~~~

<br>

### Uninstall

```shell
npm uninstall xmega
```

<br>

### License

AGPL-3.0 ©️ Zubin