/*Pour le chargement de la page*/

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 2, delay: 0});
tl.to(".intro", { y: "-100%", duration: 1.5 }, "-=1");

/* AOS 
AOS.init({
    duration: 1200,
  })
*/