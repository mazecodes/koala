<div align="center">
  <h1>Koala CLI</h1>
  <p><i>Create shortcuts for commands with ease.</i></p>
</div><br>

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Author](#author)
- [Support](#show-your-support)
- [License](#license)

## Install

npm:

```bash
npm install -g koala-cli
```

Yarn:

```bash
yarn global add koala-cli
```

GitHub:

```bash
git clone https://github.com/mazecodes/koala-cli.git
```

## Usage

Set a new shortcut:

```bash
koala set push 'git push origin master'
```

Execute a shortcut:

```bash
k push
```

Get the command of a shortcut:

```bash
koala get push
```

Delete a shortcut:

```bash
koala delete push
```

Clear all shortcuts:

```bash
koala clear
```

List all shortcuts:

```bash
koala list
```
