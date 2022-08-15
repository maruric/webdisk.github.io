---
layout: default
scripts: add-opensearch-link.mjs
---
{% assign pages = site.pages | sort: "order" %}
{% for page in pages %}
{% if page.order %}

## [{{ page.title }}]({{ page.url }})

{% endif %}
{% endfor %}
