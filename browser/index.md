---
layout: default
title: Browser
order: 6
scripts: copy-search-url.js
searchplugins:
  - id: google
    title: Google
  - id: yahoo
    title: Yahoo!検索
  - id: bing
    title: Bing
  - id: duckduckgo
    title: DuckDuckGo
  - id: twitter
    title: Twitter
  - id: wikipedia
    title: Wikipedia
  - id: google-map
    title: Google マップ
  - id: deepl
    title: DeepL
  - id: google-translate
    title: Google 翻訳
  - id: kotobank
    title: コトバンク
  - id: goo-dictionary
    title: goo辞書
  - id: eijiro
    title: 英辞郎 on the WEB
  - id: 5ch
    title: 5chスレタイ検索
---


## Extension

### Chrome

- [Clean All](https://chrome.google.com/webstore/detail/elidgjfpciimeeeoeneeiifkmhadhkeh)
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

- [Domains filter](adblock/domains.txt) ([Subscribe](abp://subscribe/?location={{ page.dir | absolute_url }}adblock/domains.txt&title=Domains filter))
- [Elements filter](adblock/elements.txt) ([Subscribe](abp://subscribe/?location={{ page.dir | absolute_url }}adblock/elements.txt&title=Elements filter))

## Search Plugins

<ul>
{% for item in page.searchplugins %}
<li><a href="/?search-title={{item.title}}&search-href=/browser/searchplugins/{{item.id}}.xml">{{item.title}}</a> <a href="javascript:copySearchUrl('searchplugins/{{item.id}}.xml')"><svg class="icon"><use xlink:href="/assets/images/icons.svg#copy"></use></svg></a></li>
{% endfor %}
</ul>

## Cookie Exclusions

- accounts.google.com
- idmsa.apple.com
- login.microsoftonline.com
- my.jreast.co.jp
