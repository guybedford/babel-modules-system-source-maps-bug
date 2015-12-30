Demonstrates how source maps are empty when using the babel-plugin-transform-modules-systemjs
Babel plugin.

To test:

```
node working.js
node not-working.js
```

The first shows a valid source maps output, the second shows invalid source maps output (no mappings)
when using babel-plugin-transform-modules-systemjs.
