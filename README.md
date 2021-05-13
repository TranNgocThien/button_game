# button_game
This is a game with 4 buttons and was build by express-generator, bulma.
![demo](/public/images/demo.png)
## Installation

```bash
$ npm install
```
## Quick Start

```bash
$ npm start
```
### Game rule

- You'll start from Blue.
- Reset will put you back to Blue.
- From Blue, you can go with Green.
- From Blue, you can go with Yellow.
- From Green, you can only go to Blue.
- From Yellow, you can only go to Blue.
- You cannot visit Yellow consecutively.

### Test Case

- ✅ Blue → Yellow
- ✅ Blue → Green
- ✅ Blue → Green → Blue → Yellow
- ✅ Blue → Yellow → Blue → Green → Blue → Yellow
- ✅ Blue → Green → ... → Blue → Green → Blue → Yellow
- ⛔ Blue → Yellow → Green
- ⛔ Blue → Green → Yellow
- ⛔ Blue → Yellow → Blue → Yellow
- ⛔ Blue → Green → Blue → Yellow → Blue → Yellow
