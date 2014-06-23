---
layout: component
title:  "Person Chunk"
---

{% capture form %}
  <div class="person-chunk">
    <img src="../images/people/random-user.jpg">
    <h3 class="name">Sybill Patricia Trelawney</h4>
    <h4 class="title">Professor of Divination</h5>
    <p class="person-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p><a href="google.com">Link to full bio</a></p>
  </div>
{% endcapture %}

{% include sample.html sample=form %}
