---
layout: component
title:  "Checkboxes and Radio Buttons"
---

{% capture c %}
<form action="#" class="checkbox">
  <div>
    <input type="checkbox" name="checkboxes[a]" value="a" id="radio-a">
    <label for="radio-a">Nisl elementum mi</label>
  </div>
  <div>
    <input type="checkbox" name="checkboxes[b]" value="b" checked="checked" id="radio-b">
    <label for="radio-b">Nisl elementum mi</label>
  </div>
  <div>
    <input type="checkbox" name="checkboxes[c]" value="c" id="radio-c">
    <label for="radio-c">Nisl elementum mi</label>
  </div>
</form>
{% endcapture %}

{% capture r %}
<form action="#" class="radio">
  <div>
    <input type="radio" name="radios" value="d" id="radio-d">
    <label for="radio-d">Nisl elementum mi</label>
  </div>
  <div>
    <input type="radio" name="radios" value="e" checked="checked" id="radio-e">
    <label for="radio-e">Nisl elementum mi</label>
  </div>
  <div>
    <input type="radio" name="radios" value="f" id="radio-f">
    <label for="radio-f">Nisl elementum mi</label>
  </div>
</form>
{% endcapture %}

### Checkboxes
{% include sample.html sample=c %}

### Radio Buttons
{% include sample.html sample=r %}

_@TODO: Can styles [using this technique](http://www.hongkiat.com/blog/css3-checkbox-radio/)
like this be applied?_
