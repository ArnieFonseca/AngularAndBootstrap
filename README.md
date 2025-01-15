# AngularAndBootstrap

## Add Icons from Bootstrap

1. Install Bootstrap Icons
<p><code>   npm i bootstrap-icons</code></p>

2.  Modify .Angular.json file to get access to the icons
<p><code>"<font color="blue">styles</font>": ["src/styles.css","./node_modules/bootstrap/dist/css/bootstrap.min.css", <u>"./node_modules/bootstrap-icons/font/bootstrap-icons.min.css"</u>]</code></p>

3. Example on how to use the icons in html
```html
   <i class="bi bi-person"></i>
```
