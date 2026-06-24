gsap.from("h1",{
  y:50,
  duration:1,
  opacity:0,
  delay:1,
  stagger:0.2
})


gsap.from("img",{
  y:50,
  duration:3,
  delay:1,
  opacity:0,
  
})

gsap.to("#page3 #box",{
  x:900,
  duration:3,
  delay:1,
  rotate:360,
  scale:0.5,
  borderRadius:'50%',
repeat:-1,
yoyo:true,

})

var tl=gsap.timeline()


tl.to("#page4 #box1",{
  x:900,
  rotate:
  360,
  duration:2.5,
  height:'65px',
  width:'150px',
  borderRadius:'0%',
  marginBottom:0,
  
})
tl.to("#page4 #box2",{
  x:900,
  rotate:
  360,
  duration:2.5,
  height:'65px',
  width:'150px',
  borderRadius:'0%',
  marginBottom:0,

})
tl.to("#page4 #box3",{
  x:900,
  rotate:
  360,
  duration:2.5,
  height:'65px',
  width:'150px',
  borderRadius:'0%',
  marginBottom:0,

})
tl.to("#page4 #box2 img",{
opacity:1,

})


gsap.from("#page5 #bz1",{
  scale:0,
  rotate:360,
  duration:1,
  delay:1,
  scrollTrigger:{
    trigger:'#page5 #bz1',
    scroller:'body',
    markers:true,
    start:'top 50%',
    end:"top 30%",
    scrub:3
  }

})





gsap.to("#page6 #bz2",{
  x:600,
  delay:1,
  duration:2,
  scrollTrigger:{
    trigger:'#page6 #bz2',
    scroller:'body',
    markers:true,
    start:'top 60%',
    end:'top 30%',
    scrub:3,
    }
})






