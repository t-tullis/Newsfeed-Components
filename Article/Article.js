// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
let tl = new TimelineMax();

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    //Hover over and off
    this.expandButton.addEventListener('mouseover', (e) =>{
      TweenMax.to(e.target, .7, {opacity: .6, scale: 3, y: -10})
    })
    this.expandButton.addEventListener('mouseout', (e) =>{
      TweenMax.to(e.target, .5, {opacity: 1, scale: 1, y: 0})
    })
  }
  
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
}



/* START HERE: 

*/
 let articles = document.querySelectorAll('.article')
 let articlesArr = Array.from(articles)
  TweenMax.staggerFrom(articlesArr, 2, {opacity: 0, x: -100, ease:Bounce.easeOut, delay: .5}, 0.4);
  articles.forEach(article => {
   return new Article(article);
 })
