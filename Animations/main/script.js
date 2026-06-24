// gsap.from('#box',{
//   x:1000,
//   duration:3 ,
//   delay:1,
//   backgroundColor:'red',
//   rotate:360,
//   borderRadius:'50%',
// scale:0.5
// })



gsap.from("h1",{
  y:50,
  duration:1,
  opacity:0,
  delay:1,
  stagger:0.2
   

})


// gsap.to("#circle",{
//   x:900,
// borderRadius:'10px',
// duration:2.5,

// delay:1,
// rotate:360,
// backgroundColor:'red',
// repeat:-1,
// yoyo:true,
// })

// var tl=gsap.timeline()

// tl.to("#box1",{
//   x:900,
//   duration:2.5,
  
// })

// tl.to("#box2",{
//   x:900,
//   rotate:360,
//   duration:2.5,
  
// })
// tl.to("#box3",{
//   x:900,
//   rotate:-360,
//   duration:2,
// })


gsap.from("#page1 #box",{
  scale:0,
  
  rotate:360,
  duration:1,
  delay:1,

})
gsap.from("#page2 #box",{
  scale:0,
  
  rotate:360,
  duration:1,
  delay:1,
  // scrollTrigger:'#page2 #box'
  scrollTrigger:{
    trigger:'#page2 #box',
    scroller:'body',
    markers:true,
    start:'top 50%',
    end:"top 30%",
    scrub:5,
  }
})
gsap.to("#page3 #box",{
  x:600,
  
  // rotate:360,
  duration:2,
  delay:1,
  scrollTrigger:{
trigger:"#page3 #box",
scroller:'body',
markers:true,
start:"top 60%",

end:"top 30%",
scrub:3,
// pin:true,

  }
})

//1:10:26 completed start next part from locomotive js
