$(document).ready(function () {
  $(".main-slider__wrapper.owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none"><path d="M9.06489 19.6453L0.558407 10.767C0.372473 10.5346 0.233022 10.2557 0.233022 9.97676C0.233022 9.69786 0.372473 9.41896 0.558407 9.23302L9.06489 0.354666C9.48325 -0.11017 10.227 -0.11017 10.6453 0.308182C11.1102 0.726534 11.1102 1.42379 10.6918 1.88862L2.88258 10.0232L10.6918 18.1114C11.1102 18.5297 11.1102 19.2735 10.6453 19.6918C10.227 20.1102 9.48325 20.1102 9.06489 19.6453Z" fill="white"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none"><path d="M1.93511 0.354666L10.4416 9.23302C10.6275 9.46544 10.767 9.74434 10.767 10.0232C10.767 10.3021 10.6275 10.581 10.4416 10.767L1.93511 19.6453C1.51675 20.1102 0.773018 20.1102 0.354666 19.6918C-0.110169 19.2735 -0.110169 18.5762 0.308183 18.1114L8.11742 9.97676L0.308183 1.88862C-0.110169 1.47027 -0.110169 0.726535 0.354666 0.308183C0.773018 -0.110169 1.51675 -0.110169 1.93511 0.354666Z" fill="white"/></svg>',
    ],
  });
});

 
function newsApi() { 
  fetch("https://ok.surf/api/v1/news-feed", { 
    method: "GET", 
    headers: { 
      "Content-Type": "application/json", 
    }, 
    mode: "no-cors", 
  }) 
  .then((response) => response.json()) 
  .then((response) => console.log(response)) 
  .catch((error) => { 
    console.log(error); 
  }) 
} 
newsApi();
