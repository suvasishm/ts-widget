# Javascript Web Widget with custom configuration

Adopted from [here](https://blog.jenyay.com/web-ui-widget/).

## Usage

In order to embed the widget add the following snippet at any location on the hosting page:

```html
<script>
    (function (w, d, s, o, f, js, fjs) {
        w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
        js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
        js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', '_shsw', './shs-widget.js'));
    _shsw('init');
</script>
```

During initialization, you can pass additional configurations to widget like so:

```diff
-_shsw('init');
+_shsw('init', { debug: true, products: [{title: 'Range', code: 'RANGEEG'}, {title: 'Oven', code: 'OVENBI'},{title: 'Boiler', code: 'BOILERGAS'}]});
```

You can find a full list of configurations in `AppConfigurations` interface.

## Develop

The widget dev setup is similar to regular client application. To get started:

```bash
npm i
npm start
```

This will open browser with "demo" page which hosts the widget.
