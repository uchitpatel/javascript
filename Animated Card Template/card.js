// Select card and it's wrapper
const card = document.querySelector( '.card' );
const wrapper = document.querySelector( '.wrapper' );

// Items
const title = document.querySelector( '.title' );
const purchaseButton = document.querySelector( '.purchase' );
const description = document.querySelector( '.information h3' );
const sneakerImage = document.querySelector( '.sneaker img' );
const sizes = document.querySelector( '.sizes' );

// Animation event listner
wrapper.addEventListener( 'mousemove', ( event ) => {
    let xAxis = ( ( window.innerWidth / 2 ) - event.pageX ) / 5;
    let yAxis = ( ( window.innerHeight / 2 ) - event.pageY ) / 5;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;

    //PopOut effects
    sneakerImage.style.transform = 'translateZ(100px)';
    title.style.transform = 'translateZ(100px)';
    description.style.transform = 'translateZ(100px)';
    purchaseButton.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(100px)';
})

// Animation while mouse enter
wrapper.addEventListener( 'mouseenter', event => {
    card.style.transition = 'none';
});

// Animation while mouse out
wrapper.addEventListener( 'mouseleave', event => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    sneakerImage.style.transform = 'translateZ(0px)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
});