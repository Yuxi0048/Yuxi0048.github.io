---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 6
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">blog</h1>
  </header>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        {% if post.description %}
          <p>{{ post.description }}</p>
        {% endif %}
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      </li>
    {% endfor %}
  </ul>
</div>
