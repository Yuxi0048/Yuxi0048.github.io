---
layout: default
permalink: /blog/
title: blog
title_zh: 博客
title_en: blog
nav: true
nav_order: 6
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">
      <span data-lang="zh">博客</span>
      <span data-lang="en">blog</span>
    </h1>
  </header>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">
            {% if post.title_zh != blank or post.title_en != blank %}
              <span data-lang="zh">{{ post.title_zh | default: post.title }}</span>
              <span data-lang="en">{{ post.title_en | default: post.title }}</span>
            {% else %}
              {{ post.title }}
            {% endif %}
          </a>
        </h3>
        {% if post.description %}
          <p>
            {% if post.description_zh != blank or post.description_en != blank %}
              <span data-lang="zh">{{ post.description_zh | default: post.description }}</span>
              <span data-lang="en">{{ post.description_en | default: post.description }}</span>
            {% else %}
              {{ post.description }}
            {% endif %}
          </p>
        {% endif %}
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      </li>
    {% endfor %}
  </ul>
</div>
