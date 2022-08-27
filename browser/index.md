---
layout: default
title: Browser
order: 6
scripts: /assets/scripts/copy-search-url.js
adblock_filters:
  - title: Domains filter
    href: {{ page.dir | absolute_url }}adblock/domains.txt
  - title: Elements filter
    href: {{ page.dir | absolute_url }}adblock/elements.txt
searchplugins:
  - title: Google
    href: searchplugins/google.xml
  - title: Yahoo!検索
    href: searchplugins/yahoo.xml
  - title: Bing
    href: searchplugins/bing.xml
  - title: DuckDuckGo
    href: searchplugins/duckduckgo.xml
  - title: Twitter
    href: searchplugins/twitter.xml
  - title: Wikipedia
    href: searchplugins/wikipedia.xml
  - title: Google マップ
    href: searchplugins/google-map.xml
  - title: DeepL
    href: searchplugins/deepl.xml
  - title: Google 翻訳
    href: searchplugins/google-translate.xml
  - title: コトバンク
    href: searchplugins/kotobank.xml
  - title: goo辞書
    href: searchplugins/goo-dictionary.xml
  - title: 英辞郎 on the WEB
    href: searchplugins/eijiro.xml
  - title: 5chスレタイ検索
    href: searchplugins/5ch.xml
---

## Extension

### Chrome

- [Clean All](https://chrome.google.com/webstore/detail/pooaemmkohlphkekccfajnbcokjlbehk)
- [uBlock Origin](https://chrome.google.com/webstore/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm)
- [Dark Reader](https://chrome.google.com/webstore/detail/eimadpbcbfnmbkopoojfekhnkhdbieeh)
- [miniGestures](https://chrome.google.com/webstore/detail/apnjnepphihnjahpbfjiebcnpgmjnhfp)

### Firefox

- [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/)
- [Dark Reader](https://addons.mozilla.org/ja/firefox/addon/darkreader/)
- [Gesturefy](https://addons.mozilla.org/firefox/addon/gesturefy/)
  - [Gesturefy settings](settings/gesturefy.json)
- [Translate Web Pages](https://addons.mozilla.org/ja/firefox/addon/traduzir-paginas-web/)
- [Offline QR Code Generator](https://addons.mozilla.org/ja/firefox/addon/offline-qr-code-generator/)
- [YouTube High Definition](https://addons.mozilla.org/ja/firefox/addon/youtube-high-definition/)

## Adblock

<ul>
{% for item in page.adblock_filters %}
<li>
  <a href="abp://subscribe/?location={{ item.href }}&title={{ item.title }}">{{ item.title }}</a>
  <a href="{{ item.href }}"><svg class="icon"><use xlink:href="/assets/images/icons.svg#code"></use></svg></a>
</li>
{% endfor %}
</ul>

## Search Plugins

<ul>
{% for item in page.searchplugins %}
<li>
  <a href="/?search-title={{ item.title }}&search-href={{ page.dir }}{{ item.href }}">{{ item.title }}</a>
  <a href="{{ item.href }}"><svg class="icon"><use xlink:href="/assets/images/icons.svg#code"></use></svg></a>
  <a href="javascript:copySearchUrl('{{ item.href }}')"><svg class="icon"><use xlink:href="/assets/images/icons.svg#copy"></use></svg></a>
</li>
{% endfor %}
</ul>

## Cookie Exclusions

- accounts.google.com
- idmsa.apple.com
- login.microsoftonline.com
- my.jreast.co.jp
