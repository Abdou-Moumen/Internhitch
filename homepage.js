// // Animation

let home = gsap.timeline({paused:true,reversed:true});
let Service = gsap.timeline({paused:true,reversed:true});
let Category = gsap.timeline({paused:true,reversed:true});
let aboutus = gsap.timeline({paused:true,reversed:true});
let rating = gsap.timeline({paused:true,reversed:true});

// Check if it's the first refresh
if (!sessionStorage.getItem('refreshCount')) {
  // It's the first refresh, so create the timeline and play the animation

  home.from(".animatedlogo", {
    opacity:.5,
    scale: 1.5,
    duration: 1,
  },
  )
  .from(".animatedlogo", {
    duration: 0.2,
    ease: 'power1.inOut',
  })
  .to(".animatedlogo", {
    x: '-100%',
    scale: .8,
    duration: 1,
    ease: 'power3.inOut',
  })
  .to(".logonamecontainer", {
    x: '100px',
    opacity:1,
    duration: 1,
    ease: 'power3.inOut',
  },
  1.7
  )
  .to(".animatedcontainer", {
    y: '-150%',
    opacity:1,
    duration: 1.5,
    ease: 'power3.inOut',
  },

  )
  .to(".animatedcontent", {
    y: '-250%',
    opacity:0,
    duration: 1,
    ease: 'power3.inOut',
  },
  2.6
  )
  .from(".logi", {
    x: '-30px',
    opacity:0,
    duration: 1,
    ease: 'power3.inOut',
  },
  3.2
  )
  .from(".nav", {
    x: '-30px',
    opacity:0,
    stagger:.1,
    duration: 1,
    ease: 'power3.inOut',
  },
  3.4
  )
  .from(".getstartbtn", {
    x: '-30px',
    opacity:0,
    duration: 1,
    ease: 'power3.inOut',
  },
  3.6
  )
  .from(".summary", {
    y: '40px',
    opacity:0,
    duration: 1,
    ease: 'power3.inOut',
  },
  4.2
  )
  .from(".anothertextforhomepage", {
    y: '40px',
    opacity:0,
    duration: 1,
    ease: 'power3.inOut',
  },
  4.2
  )
  .from(".starulsection", {
    x: '-60px',
    opacity:0,
    duration: 1,
    ease: 'power3.inOut',
  },
  4.6
  )
  .from(".appearpics", {
    x: '30px',
    opacity:0,
    stagger:.3,
    duration: 1,
    ease: 'power3.inOut',
  },
  4.6
  )
  .from(".boxanimated", {
    y: '10px',
    opacity:0,
    stagger:.1,
    duration: 1,
    ease: 'power3.inOut',
  },
  5.3
  )
  .from(".watch", {
    y: '40px',
    opacity:0,
    duration: 1,
    ease: 'power3.inOut',
  },
  5.3
  )

  home.play();

  // Set a flag to indicate that the animation has been played in the current session
  sessionStorage.setItem('animationPlayed', true);
} else {
  // It's not the first refresh, so remove unnecessary elements
  let animatedcontent = document.querySelector('.animatedcontent');
  if (animatedcontent) {
    animatedcontent.classList.add('setanimationcontainerup');
  }
  let animatedcontainer = document.querySelector('.animatedcontainer');
  if (animatedcontainer) {
    animatedcontainer.classList.add('setanimationcontainerup');
  }
}

// Increment the refresh count
let refreshCount = sessionStorage.getItem('refreshCount');
if (refreshCount) {
  refreshCount = parseInt(refreshCount) + 1;
} else {
  refreshCount = 1;
}
sessionStorage.setItem('refreshCount', refreshCount.toString());

// Clear the flag when leaving the page
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('beforeunload', function() {
    sessionStorage.removeItem('animationPlayed');
  });
});

  
    Service.from(
      ".servicepage",
      {
        opacity: 0,
        duration: 1,
        x:'-70px',
        scrollTrigger: {
          trigger: '.servicepage',
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

  Category.from(
    ".categoryboxex",
    {
      opacity: 0,
      duration: 1,
      stagger:.4,
      y:'20px',
      scrollTrigger: {
        trigger: '.categoryboxex',
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    }
  )

  aboutus.from(
    ".backcolor",
    {
      opacity: 0,
      duration: 1,
      stagger:.4,
      y:'20px',
      scrollTrigger: {
        trigger: '.backcolor',
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    }
  )
  .from(
    ".imgaboutusanimate",
    {
      opacity: 0,
      duration: 2,
      stagger:.4,
      y:'20px',
      scrollTrigger: {
        trigger: '.imgaboutusanimate',
        start: "top 80%",
        end: "top 20%",
        scrub: true,

      },
    }
  )
  .from(
    ".leftaboutus",
    {
      opacity: 0,
      duration: 2.3,
      stagger:.6,
      x:'20px',
      scrollTrigger: {
        trigger: '.leftaboutus',
        start: "top 80%",
        end: "top 20%",
        scrub: true,

      },
    }
  )

//   rating.from( ".card",
//     {
//         opacity: 0,
//         duration: 2,
//         stagger: 2,
//         y: '-20px',
//         scrollTrigger: {
//             trigger: '.card',
//             scrub: true,
//             start: "top bottom",
//             end: "top top",
//         },
//     }
// );


  home.play()


let getstartbtn = document.querySelector('.getstartbtn')
let membercontainer = document.querySelector('.animatedcontainer1')
let closebtn = document.querySelector('.iconexitemember')
let loginbtns = document.querySelectorAll('.loginbtnonly')
let member = gsap.timeline({paused:true,reversed:true});
let register = gsap.timeline({paused:true,reversed:true});
let login = gsap.timeline({paused:true,reversed:true});
let closebtnlogin = document.querySelectorAll('.closepopuplogin')
let animatedcontainer2 = document.querySelector('.animatedcontainer2')
let loginbtntoregister = document.querySelector('.loginconfirm')
let registertologin = document.querySelector('.register')
let registerbtnconfirm = document.querySelector('.registerbtnconfirm')
let animatedcontainer3 = document.querySelector('.animatedcontainer3')

member.from('.hhh',{
    x: '-30px',
    opacity:0,
    stagger:.5,
    duration: 1,
    ease: 'power3.inOut',
}) .from(".boxmember", {
    y: '60px',
    opacity:0,
    stagger:.3,
    duration: 1,
    ease: 'power3.inOut',
  },
  1
).from(".blur", {
    opacity:0,
    stagger:.3,
    duration: 1,
    ease: 'power3.inOut',
  },
  1
)

register.to(".popupwindow", {
    opacity:0,
    x:'-20px',
    duration: 1,
    ease: 'power3.inOut',
  },
)
.to(".popupwindow-register", {
    opacity:1,
    x:'20px',
    duration: 1,
    ease: 'power3.inOut',
  },
)

loginbtns.forEach(loginbtn=>{
    loginbtn.addEventListener('click',()=>{
        console.log('abdou') 
        animatedcontainer2.classList.add('activeLogin')
    })
})

closebtnlogin.forEach(element=>{
    element.addEventListener('click',()=>{
        console.log('abdou')
        animatedcontainer2.classList.remove('activeLogin')
        animatedcontainer3.classList.remove('activeRegister')
    })
})

registerbtnconfirm.addEventListener('click',()=>{
    console.log('abdou') 
    animatedcontainer3.classList.add('activeRegister')
})

getstartbtn.addEventListener('click',()=>{
    membercontainer.classList.add('activemamber')
    if (member.reversed()) {
        member.play()
      }
})

closebtn.addEventListener('click',()=>{
    member.reverse()
    membercontainer.classList.remove('activemamber')  
})


loginbtntoregister.addEventListener('click',()=>{
    animatedcontainer2.classList.remove('activeLogin')
    animatedcontainer3.classList.add('activeRegister')
})
registertologin.addEventListener('click',()=>{
    animatedcontainer3.classList.remove('activeRegister')
    animatedcontainer2.classList.add('activeLogin')
})


// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1000,
  
  
    autoplay:{
        delay:2000
    },
  

  
  });


