---
layout: default
scripts: /assets/scripts/add-opensearch-link.js
---
{% assign pages = site.pages | sort: "order" %}
{% for page in pages %}
{% if page.order %}

## [{{ page.title }}]({{ page.url }})

{% endif %}
{% endfor %}
