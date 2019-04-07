var header = document.querySelector('#header');
var headerName = document.querySelector('#header .name');
var headerDiv = document.querySelector("#headerLinks");


window.onscroll = function () { scrollFunction() };


function scrollFunction() {
  if (document.documentElement.scrollTop > 80 || document.body.scrollTop > 80) {
    // the page is scrolling

    if (window.matchMedia("(max-width: 700px)").matches) {
      // the page is 700px or lessz
      Object.assign(header.style,
        { height: "10vh", flexDirection: 'column', justifyContent: 'flex-start' }
      );
      Object.assign(headerName.style,
        { fontSize: "100%", height: '50%', width:"100%"}
      );
      Object.assign(headerDiv.style,
        { fontSize: "88%", height: '50%', width:"100%" }
      );
    } else if (window.matchMedia("(max-width: 1000px)").matches) {
      // the page is more than 700 but not more than 900
      Object.assign(header.style,
        { height: "10vh", flexDirection: 'row' }
      );

      Object.assign(headerName.style,
        { width: '50%', height: '100%', fontSize: '100%',alignItems:"center", paddingLeft:"20px" }
      );
      Object.assign(headerDiv.style,
        { width: '50%', height: '100%', fontSize: '80%', justifyContent: 'space-around', alignItems: 'center' }
      );
    }
    else {
      // the page is more than 900
      Object.assign(header.style,
        { height: "10vh", flexDirection: 'row' }
      );

      Object.assign(headerName.style,
        { fontSize: '30px', alignSelf: 'flex-start', width: '50%', height: '100%', marginTop: '0px' }
      );
      Object.assign(headerDiv.style,
        { fontSize: '20px', width: '50%', height: '100%', alignItems: 'center' }
      );

    }


  } else {
    // the page is NOT  scrolling



    if (window.matchMedia("(max-width: 700px)").matches) {

      // the page is 700px or less
      Object.assign(header.style,
        { height: "100vh", flexDirection: 'column' }
      );

      Object.assign(headerName.style,
        { fontSize: "20px", height: '50%', marginTop: '0px', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '50px' }
      );

      Object.assign(headerDiv.style,
        { fontSize: "88%", height: '50%', marginTop: '0px', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }
      );
    }

    // the page is more than 700 but not more than 900
    else if (window.matchMedia("(max-width: 1000px)").matches) {
      Object.assign(header.style,
        { height: "100vh", flexDirection: 'column' }
      );

      Object.assign(headerName.style,
        { width: '100%', height: '50%', fontSize: '50px', alignItems: 'flex-end' }
      );
      Object.assign(headerDiv.style,
        { width: '100%', height: '50%', fontSize: '15px', justifyContent: 'space-around' }
      );
    }
    // the page is more than 900
    else {
      Object.assign(header.style,
        { height: "100vh", flexDirection: 'column' }
      );

      Object.assign(headerName.style,
        { width: '100%', height: '50%', fontSize: '55px', alignItems: 'flex-end' }
      );
      Object.assign(headerDiv.style,
        { width: '100%', height: '50%', fontSize: '32px', alignItems: 'center', justifyContent: 'center' }
      );

    }

  }
}

headerName.addEventListener('click', (function () { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) }));
