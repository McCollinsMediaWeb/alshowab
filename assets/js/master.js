$(document).ready(
    function(){
        windowHeight = jQuery(window).innerHeight();
        HeaderHeight = jQuery("header").innerHeight();
        jQuery('.mainbannerImg1').css('height', (windowHeight-HeaderHeight)+'px');
        jQuery('.FullWidthHeight').css('height', (windowHeight)+'px');
        
        jQuery(window).scroll(function () {
          var scroll = jQuery(window).scrollTop();
      
          if (scroll >= 100) {
            jQuery("body").addClass("StickHeader");
          } else {
            jQuery("body").removeClass("StickHeader");
          }
        });
  
        if (jQuery(window).width() < 1000) {
            jQuery(".ImageSwitcher")
            .fadeOut(400, function() {
              jQuery(this).attr('src',jQuery(this).attr('data-mobile'));
            })
            .fadeIn(400);
        }
        else {
          jQuery(".ImageSwitcher")
            .fadeOut(400, function() {
              jQuery(this).attr('src',jQuery(this).attr('data-desktop'));
            })
            .fadeIn(400);
        }
          
    }
  );
  /*
-----------------------------------------------------
Gsap
----------------------------------------------------- 
*/
gsap.registerPlugin(ScrollTrigger, SplitText);

const fadeItems = document.querySelectorAll(".fade");
fadeItems.forEach((fadeItem) => {
  let startPosition = "top 90%",
    tweenOptions = {
      duration: 1,
      delay: 0.2,
      opacity: 1,
    };

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: fadeItem,
      start: startPosition,
      markers: false,
    },
  });
  timeline.to(fadeItem, tweenOptions);
});

const fadeSlideItems = document.querySelectorAll(".fade-slide");

fadeSlideItems.forEach((fadeSlideItem) => {
  let slideAmount = 80,
    startPosition = "top 90%",
    tweenOptions = {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      ease: "power2.out",
    };

  if (fadeSlideItem.hasAttribute("data-slide-amount")) {
    slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
  }

  if (fadeSlideItem.hasAttribute("data-opacity")) {
    tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
  }

  if (fadeSlideItem.hasAttribute("data-ease")) {
    tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
  }

  if (fadeSlideItem.hasAttribute("data-duration")) {
    tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
  }

  if (fadeSlideItem.hasAttribute("data-delay")) {
    tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
  }

  if (fadeSlideItem.classList.contains("right")) {
    tweenOptions.x = slideAmount;
  }

  if (fadeSlideItem.classList.contains("left")) {
    tweenOptions.x = -slideAmount;
  }

  if (fadeSlideItem.classList.contains("top")) {
    tweenOptions.y = -slideAmount;
  }

  if (fadeSlideItem.classList.contains("bottom")) {
    tweenOptions.y = slideAmount;
  }

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: fadeSlideItem,
      start: startPosition,
      markers: false,
    },
  });
  timeline.from(fadeSlideItem, tweenOptions);
});

const splitChars = document.querySelectorAll(".split_chars");

splitChars.forEach((item) => {
  let isScrollAble = true,
    tweenOptions = {
      duration: 1,
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.15,
      ease: "power2.out",
    },
    scrollTrigger = {
      trigger: item,
      start: "top 90%",
      markers: false,
    };

  if (item.hasAttribute("data-duration")) {
    tweenOptions.duration = item.getAttribute("data-duration");
  }

  if (item.hasAttribute("data-delay")) {
    tweenOptions.delay = item.getAttribute("data-delay");
  }

  if (item.hasAttribute("data-ease")) {
    tweenOptions.ease = item.getAttribute("data-ease");
  }

  if (item.hasAttribute("data-stagger")) {
    tweenOptions.stagger = item.getAttribute("data-stagger");
  }

  if (item.hasAttribute("data-translateX")) {
    tweenOptions.x = item.getAttribute("data-translateX");
  }

  if (item.hasAttribute("data-translateY")) {
    tweenOptions.y = item.getAttribute("data-translateY");
  }

  if (
    !item.hasAttribute("data-translateX") &&
    !item.hasAttribute("data-translateX")
  ) {
    tweenOptions.x = 100;
  }

  if (item.hasAttribute("data-scroll-trigger")) {
    isScrollAble = item.getAttribute("data-scroll-trigger");
  }

  if (item.hasAttribute("data-trigger-start")) {
    scrollTrigger.start = item.getAttribute("data-trigger-start");
  }

  if (isScrollAble) {
    tweenOptions.scrollTrigger = scrollTrigger;
  }

  let splittedText = new SplitText(item, {
    type: "chars, words",
  });

  gsap.from(splittedText.chars, tweenOptions);
});

const moveLine3DItems = document.querySelectorAll(".move-line-3d");

moveLine3DItems.forEach((item) => {
  let startPosition = "top 90%",
    tweenOptions = {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    };

  if (item.hasAttribute("data-start")) {
    startPosition = item.getAttribute("data-start");
  }

  if (item.hasAttribute("data-duration")) {
    tweenOptions.duration = item.getAttribute("data-duration");
  }

  if (item.hasAttribute("data-delay")) {
    tweenOptions.delay = item.getAttribute("data-delay");
  }

  if (item.hasAttribute("data-opacity")) {
    tweenOptions.opacity = item.getAttribute("data-opacity");
  }

  if (item.hasAttribute("data-stagger")) {
    tweenOptions.stagger = item.getAttribute("data-stagger");
  }

  if (item.hasAttribute("data-rotate")) {
    tweenOptions.rotationX = item.getAttribute("data-rotate");
  }

  if (item.hasAttribute("data-origin")) {
    tweenOptions.transformOrigin = item.getAttribute("data-origin");
  }

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: startPosition,
      duration: tweenOptions.duration,
      scrub: false,
      markers: false,
    },
  });

  const splitedText = new SplitText(item, {
    type: "lines",
  }).split({
    type: "lines",
  });
  gsap.set(item, {
    perspective: 400,
  });
  timeline.from(splitedText.lines, tweenOptions);
});


$('.AccordionQuestion').click(function(e) {
  e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.removeClass("ActivatedAccordion");
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
    $(".AccordionQuestion").removeClass("ActivatedAccordion");
      $this.addClass("ActivatedAccordion");
      $this.parent().parent().find('.AccordionAnswer').removeClass('show');
      $this.parent().parent().find('.AccordionAnswer').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});
$('.OtherAccordionItemQuestion').click(function(e) {
  e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.removeClass("ActivatedAccordion");
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
    $(".OtherAccordionItemQuestion").removeClass("ActivatedAccordion");
      $this.addClass("ActivatedAccordion");
      $this.parent().parent().find('.OtherAccordionItemAnswer').removeClass('show');
      $this.parent().parent().find('.OtherAccordionItemAnswer').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});
$('.ServiceAccordionItemQuestion').click(function(e) {
  e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.removeClass("ActivatedAccordion");
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
    $(".ServiceAccordionItemQuestion").removeClass("ActivatedAccordion");
      $this.addClass("ActivatedAccordion");
      $this.parent().parent().find('.ServiceAccordionItemAnswer').removeClass('show');
      $this.parent().parent().find('.ServiceAccordionItemAnswer').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});
$('.AccordItemT1').click(function(e) {
  e.preventDefault();

  let $this = $(this);
      $this.toggleClass("ActivatedAccordion");
      $this.parent().parent().parent().toggleClass("ActiveAccordion")
});

$(".ContactBoxT6").click(function() {
  $('html,body').animate({
      scrollTop: $(".ContactWrap").offset().top},
      'slow');
});
$(document).ready(function(){
  
  $(".MenuButton , .CloseButton1 ,.MenuActive1 ").click(function () {
      jQuery("body").toggleClass("menuPopupActivated");
        windowHeight = jQuery(window).innerHeight();
        PopupHeaderHeight1= jQuery(".PopUpHeaderBoxWrap1").innerHeight();
        PopuuFooterHeight1= jQuery(".PopUpFooterBoxWrap1").innerHeight();
        totalGap = PopupHeaderHeight1 + PopuuFooterHeight1;
        jQuery('.PopupContentBox1').css('height', (windowHeight - totalGap )+'px');
       
  });
  $(".contactPopupButton , .contactPopupClose , .Contactusnow").click(function () {
        jQuery("body").toggleClass("contactPopupActivated");
        
        windowHeight = jQuery(window).innerHeight();
        PopupHeaderHeight2= jQuery(".PopUpHeaderBoxWrap2").innerHeight();
        PopuuFooterHeight2= jQuery(".PopUpFooterBoxWrap2").innerHeight();
        totalGap = PopupHeaderHeight2 + PopuuFooterHeight2;
        jQuery('.PopupContentBox2').css('height', (windowHeight - totalGap )+'px');
        
  });
$(".selectLanguage , .LanguageClose").click(function () {
    jQuery("body").toggleClass("LanguagePopup");
    
    windowHeight = jQuery(window).innerHeight();
    PopupHeaderHeight2= jQuery(".PopUpHeaderBoxWrap3").innerHeight();
    PopuuFooterHeight2= jQuery(".PopUpFooterBoxWrap3").innerHeight();
    totalGap = PopupHeaderHeight2 + PopuuFooterHeight2;
    jQuery('.PopupContentBox3').css('height', (windowHeight - totalGap )+'px');
    
});
});
$(".team").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".teamar").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  rtl:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".partnerBlock").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".partnerBlockar").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  rtl:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".testimonials").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".testimonialsar").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  rtl:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".BlogSliderBox").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".BlogSliderBoxar").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: true,
  rtl:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});

