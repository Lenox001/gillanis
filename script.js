const headElement = document.querySelector("h1");
headElement.addEventListener("mouseover" , function (){
    this.style.color = "blue"
});
headElement.addEventListener("mouseout" , function (){
    this.style.color = "brown"
})
function smoothScroll (target){
    const element = document.querySelector(target);
    element.scrollInttoView({behavior:"smooth"});
}
function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });
});