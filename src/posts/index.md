---
title: InDeX
eleventyExcludeFromCollections: true
permalink: /
---

# HOMEPAGE

## Posts (sorted)

{%- for post in collections.postsDescending %}
- {{ post.data.title }}
{%- endfor -%}
