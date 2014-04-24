---
layout: component
title:  "Breadcrumbs"
---

{% capture bc %}
<h2 class="element-invisible">You are here</h2>
<div class="breadcrumb">
  <a href="#">Home</a> &#10095;
  <a href="#">Administration</a> &#10095;
  <a href="#">Configuration</a> &#10095;
  <a href="#">Content authoring</a> &#10095;
  <a href="#" class="active">Text formats</a>
</div>
{% endcapture %}

{% include sample.html sample=bc %}

_Output adapted from admin area of Drupal 7 site in production, markup may need
to be adjusted to match public-facing content._
