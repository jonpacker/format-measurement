# Format Measurement

It formats measurements!

## In which ancient cave might I find you?

```
npm install format-measurement
```

## Sing me the song of your people

```javascript
var fmt = require('format-measurement');

fmt.metric.weight(1000) // -> '1 kg'
fmt.metric.weight(10) // -> '10 g'
fmt.metric.weight(15.686) // -> '15.69 g'

fmt.metric.volume(1000) // -> '1 L'
fmt.metric.volume(100) // -> '100 mL'
fmt.metric.volume(15.686) // -> '15.69 mL'
```

## What can't you do?

Most things. In fact, right now, `format-measurement` only supports metric
weight and volume units - and not very many of them (kg, g, L, mL). You'require
totally welcome to do my work for me, though!

## Will this work in my enormous corporation?

You might be better looking for something XML based. But otherwise, 
`format-measurement` is **MIT licensed**.
