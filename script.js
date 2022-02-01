const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      sidebar2 = body.querySelector('nav2'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})




toggle.addEventListener("click" , () =>{
    sidebar2.classList.toggle
{
    var x = document.getElementById("box1");
    if (x.innerHTML === "RDJ") {
      x.innerHTML = "";
    } else {
      x.innerHTML = "RDJ";
    }
  }



  var x = document.getElementById("box2");
  if (x.innerHTML === "CH") {
    x.innerHTML = "";
  } else {
    x.innerHTML = "CH";
  }




var x = document.getElementById("box3");
  if (x.innerHTML === "TC") {
    x.innerHTML = "";
  } else {
    x.innerHTML = "TC";
  }


//!Add Actors Below//
  var x = document.getElementById("box4");
  if (x.innerHTML === "AA") {
    x.innerHTML = "";
  } else {
    x.innerHTML = "AA";
  }



var x = document.getElementById("box5");
  if (x.innerHTML === "AA") {
    x.innerHTML = "";
  } else {
    x.innerHTML = "AA";
  }



})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");

    {
        var x = document.getElementById("box1");
        if (x.innerHTML === "RDJ") {
          x.innerHTML = "";
        } else {
          x.innerHTML = "RDJ";
        }
      }

      var x = document.getElementById("box2");
      if (x.innerHTML === "CH") {
        x.innerHTML = "";
      } else {
        x.innerHTML = "CH";
      }
    
    
    
    
    var x = document.getElementById("box3");
      if (x.innerHTML === "TC") {
        x.innerHTML = "";
      } else {
        x.innerHTML = "TC";
      }
    
    
    //!Add Actors Below//
      var x = document.getElementById("box4");
      if (x.innerHTML === "AA") {
        x.innerHTML = "";
      } else {
        x.innerHTML = "AA";
      }
    
    
    
    var x = document.getElementById("box5");
      if (x.innerHTML === "AA") {
        x.innerHTML = "";
      } else {
        x.innerHTML = "AA";
      }


})





modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});





