limitcheckbox.js
===========

## Welcome

This is a jQuery plugin that offers an easy way to setup a limit to a checkbox collection. If you have 5 checkboxes and you want to limit the selection to 3 and leave the other ones disabled, this plugin is going to work for you.

## Install

Make sure to include jQuery in your page.

```html
<script src="jquery.min.js"></script>
```

And then include **limitcheckbox.js**

```html
<script src="js/limitcheckbox-min.js"></script>
```

## Usage

5 checkboxes and I want to set a limit of 3.

```html
<div id="checkboxes">
    <input type="checkbox" /> <!-- 1 -->
    <input type="checkbox" /> <!-- 2 -->
    <input type="checkbox" /> <!-- 3 -->
    <input type="checkbox" /> <!-- 4 -->
    <input type="checkbox" /> <!-- 5 -->
</div>
```
```javascript
$('#checkboxes').limitCheckbox(3);
```

### Callback
```javascript
$('#checkboxes').limitCheckbox(3, {
  callback: function() {
    // Options
  }
);
```

## Demo

[Click here](http://jsfiddle.net/kinduff/wBZk9/).
