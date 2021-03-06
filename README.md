limitcheckbox.js
===========

## Welcome

This is a jQuery plugin that offers an easy way to setup a limit to a checkbox collection. If you have 5 checkboxes and you want to limit the selection to 3 and leave the other ones disabled, this plugin is going to work for you.

## Gem Install

Add this line to your application's Gemfile:

```bash
gem 'limitcheckbox'
```

And then execute:

```bash
$ bundle
```

Or install it yourself as:

```bash
$ gem install limitcheckbox
```

Then include **limitcheckbox.js** in your javascript file

```javascript
//= require limitcheckbox
```

Or include the minified version

```javascript
//= require limitcheckbox-min
```

## Manual Install

Make sure to include jQuery in your page.

```html
<script src="jquery.min.js"></script>
```

And then include **limitcheckbox.js**. There unminified version it's located at the `src` folder. The minified version its located at the `build` folder. 

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

Notice that **limitcheckbox.js** will check the checkboxes from your main element when called in order to disable if they're already *checked*.

## Demo

[Click here](http://jsfiddle.net/kinduff/wBZk9/).
