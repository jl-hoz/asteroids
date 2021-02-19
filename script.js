function moveShip(id) {
    var posTop = document.getElementById(id).offsetTop;
    document.getElementById(id).style.marginTop = posTop + speed + "px";
  }
  
  var asteroidSpeeds = [];
  for (var i = 0; i < 3; i++) {
    asteroidSpeeds[i] = Math.random() * 30 + 1;
  }
  
  var shipSpeeds = [];
  for (var i = 0; i < 3; i++) {
    shipSpeeds[i] = Math.random() * 30 + 1;
  }
  
  function move(name, speeds) {
    var asteroids = document.getElementsByClassName(name);
    for (var i = 0; i < asteroids.length; i++) {
      var posTop = asteroids[i].offsetTop;
      var speed = Math.random() * 50 + 1;
      asteroids[i].style.marginTop = posTop + speeds[i] + "px";
    }
  }
  
  function moveShots(name) {
    var shots = document.getElementsByClassName(name);
    for (var i = 0; i < shots.length; i++) {
      var posTop = shots[i].offsetTop;
      shots[i].style.offsetHeight = posTop + 15 + "px";
    }
  }
  
  window.setInterval(move, 1500, "ship-enemy", shipSpeeds);
  window.setInterval(move, 1500, "asteroid", asteroidSpeeds);
  window.setInterval(moveShots, 500, "shots");
  
  document.onkeydown = detectKey;
  
  function detectKey(e) {
    var posLeft = document.getElementById("ship").offsetLeft;
    var posTop = document.getElementById("ship").offsetTop;
    e = e || window.event;
    if (e.keyCode == "32") {
      // space
      var shot = document.createElement("P");
      document.getElementById("shot-area").classList.add("shots");
      shot.innerHTML = "|";
      document.getElementById("shot-area").appendChild(shot);
      document.getElementById("ship").style.marginTop = 0 + "px";
      shot.style.marginLeft = posLeft + "px";
    } else if (e.keyCode == "37") {
      // left arrow
      document.getElementById("ship").style.marginLeft = posLeft - 30 + "px";
    } else if (e.keyCode == "39") {
      // right arrow
      document.getElementById("ship").style.marginLeft = posLeft + 30 + "px";
    }
  }