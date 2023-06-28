var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section title",
  "body": " Section title  Hello  "
},
{
  "id": "sec-program",
  "level": "1",
  "url": "sec-program.html",
  "type": "Section",
  "number": "1.2",
  "title": "Hello World program",
  "body": " Hello World program   Simple Java Program  Let's write a simple Java program that prints \"Hello, World!\" to the console:  public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-program.html#example-1",
  "type": "Example",
  "number": "1.2.1",
  "title": "Simple Java Program.",
  "body": " Simple Java Program  Let's write a simple Java program that prints \"Hello, World!\" to the console:  public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }  "
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
