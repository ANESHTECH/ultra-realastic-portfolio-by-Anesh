/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger} = anime;

const { chars:chars1 } = text.split('.home--profession-1', {chars: true});
const { chars:chars2 } = text.split('.home--profession-2', {chars: true});

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
/*=============== SWIPER PROJECTS ===============*/

const swiperprojects = new Swiper('.projects--swiper', {
  
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
   disableOnInteraction: false,
  },
});
/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)


          //Disable all content and active tabs
          tabContents.forEach((content)=> content.classList.remove('work-active'))
          tabs.forEach((t)=> t.classList.remove('work-active'))
 
  
    //Active the tab and corresponding content
   tab.classList.add('work-active')
    targetContent.classList.add('work-active') 
       
  })
})

/*=============== SERVICES ACCORDION ===============*/

const servicesButtons = document.querySelectorAll('.services--button')

servicesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services--card'),
          currentCard = button.parentNode,
          currentInfo = currentCard.querySelector('.services--info'),
          isCardOpen = currentCard.classList.contains('services-open')

    // সব কার্ড বন্ধ করো
    servicesCards.forEach(card => {
      card.classList.remove('services-open')
      card.classList.add('services-close')

      const info = card.querySelector('.services--info')
      info.style.height = '0'
    })

    // বর্তমান কার্ড খুলবে যদি আগে বন্ধ থাকে
    if (!isCardOpen) {
      currentCard.classList.remove('services-close')
      currentCard.classList.add('services-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }
  })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS======*/
//duplicate images to make the animation work
const tracks = document.querySelectorAll('.testimonials--content')

tracks.forEach(track =>{
  const cards = [...track.children]  //spreaad to make a static copy

  //Duplicate cards only once
  for (const card of cards){
    track.appendChild(card.cloneNode(true))
  }  

})

/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

      copyBtn.addEventListener('click', () => {
        //copy email to clipboard
        navigator.clipboard.writeText(copyEmail).then(() => {
          copyBtn.innerHTML = 'Email copied<i class="ri-check-line"></i>'

          //Restore the original text
          setTimeout(() => {
            copyBtn.innerHTML = 'Copy Email<i class="ri-file-copy-line"></i>'
          }, 2000)
      })
    })
  
/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear()

  //Set the current year
  textYear.textContent = currentYear
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
 //we get the position by scrolling down
 const scrolly = window.pageYOffset

 sections.forEach(section => {
 const id = section.id, //Id of each section
       top = section.offsetTop - 50, //Distencefrom the top edge
        height = section.offsetHeight, //Element height 
        link = document.querySelector('.nav--menu a[href*=' + id + ']') //Id nav link

      if(!link) return

      link.classList.toggle('active-link', scrolly > top && scrolly <= top + height)
  })
 }

window.addEventListener('scroll', scrollActive)
/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 //store mouse position

const cursormove = () => {
  //position the cursor
  cursor.style.left = `${mouseX}px`
  cursor.style.top = `${mouseY}px`
  cursor.style.transform = 'translate(-50%, -50%)'

  //Update the cursor animation
  requestAnimationFrame(cursormove)

  }

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  cursormove()
 /* Hide custom cursor on links */
 const a = document.querySelectorAll('a')

 a.forEach(item => {
 item.addEventListener('mouseover', () => {
  cursor.classList.add('hide-cursor')
  })
 item.addEventListener('mouseleave', () => {
  cursor.classList.remove('hide-cursor')
  })
/*my code*/
  
  })


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true //Animations repeat

})

sr.reveal(`.home--image, .projects--container, .work--container,
           .testimonials--container, .contact--container`)
sr.reveal(`.home--data`, {delay:900, origin: 'bottom'})
sr.reveal(`.home--info`, {delay:1200, origin: 'bottom'})
sr.reveal(`.home--social, .home--cv`, {delay:1500})
sr.reveal(`.about--data`, {origin: 'left'})
sr.reveal(`.about--image`, {origin: 'right'})
sr.reveal(`.services--card`, {interval: 100})


