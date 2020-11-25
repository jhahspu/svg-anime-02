let tl = gsap.timeline(
  {
    defaults: {
      duration: .7, 
      ease:Back.easeOut.config(2), 
      opacity: 0
    }
  }
);

let tl2 = gsap.timeline(
  {
    defaults: {
      duration: 1.5,
      delay: 1
    }
  }
);

let tl3 = gsap.timeline(
  {
    defaults: {
      duration: .4
    }
  }
);

tl.from( ".card-bg", { delay: 0.4, scale: .2, transformOrigin: 'center' }, "=.2" )
  .from( ".card-top", { scaleY: 0, transformOrigin: 'top' } )
  .from( ".icon", { scale: .2, transformOrigin: 'center' }, "-=.7" )
  .from( ".blip1", { scale: 0 } )
  .from( ".blip2", { scale: 0 }, "-=.2" )
  .from( ".blip3", { scale: 0 }, "-=.4" )
  .from(  ".blip4", { scale: 0 }, "-=.5" )
  .from( ".blip5", { scale: 0 }, "-=.7" );

tl2.to(".whole-card", { y: 10, repeat: -1, yoyo:true });

tl3.from(".anime", { opacity: 0, y: -20, stagger: 1 });