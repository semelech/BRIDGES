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
  "title": "About BRIDGES",
  "body": " About BRIDGES    Provides easy-to-use interfaces to exciting, engaging real-world data (social networks, scientific data, etc), to make it possible for their use in freshmen\/sophomore level CS courses    Makes it easy to visualize course assignments in a CS1, CS2, data structures, or algorithm courses    Is carefully designed to augment the student experience in routine introductory courses in Computer Science    "
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
