var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  example.org  https:\/\/example.org   copyright  "
},
{
  "id": "firstch-first",
  "level": "1",
  "url": "firstch-first.html",
  "type": "Section",
  "number": "1.1",
  "title": "First section",
  "body": " First section  Hello  "
},
{
  "id": "firstch-second",
  "level": "1",
  "url": "firstch-second.html",
  "type": "Section",
  "number": "1.2",
  "title": "Second section",
  "body": " Second section  Hello  "
},
{
  "id": "secondch-first",
  "level": "1",
  "url": "secondch-first.html",
  "type": "Section",
  "number": "2.1",
  "title": "First section",
  "body": " First section  Hello  "
},
{
  "id": "secondch-second",
  "level": "1",
  "url": "secondch-second.html",
  "type": "Section",
  "number": "2.2",
  "title": "Second section",
  "body": " Second section  Hello  "
},
{
  "id": "secondch-third",
  "level": "1",
  "url": "secondch-third.html",
  "type": "Section",
  "number": "2.3",
  "title": "Third section",
  "body": " Third section  Hello  "
},
{
  "id": "third-first",
  "level": "1",
  "url": "third-first.html",
  "type": "Section",
  "number": "3.1",
  "title": "First section",
  "body": " First section  Hello  "
},
{
  "id": "third-second",
  "level": "1",
  "url": "third-second.html",
  "type": "Section",
  "number": "3.2",
  "title": "Second section",
  "body": " Second section  Hello  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
