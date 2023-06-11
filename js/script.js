//--------------ARRAY LIST--------------
const todo = [{
  name: "Go with the Dog",
  para: "after the long Walk, refill the Water Bowl",
  time: "07:00 am",
  deadline: "07:10 am",
  level: 0,
  img: "/image/dog.jpg"
}, {
  name: "Go to the Gym",
  para: "Take your Fresh mixed Drink in the Bag",
  time: "09:00 am",
  deadline: "09:15 am",
  level: 0,
  img: "/image/gym.jpg"
}, {
  name: "Get ready for Work",
  para: "Call your Employes if all Tasks are Finish",
  time: "12:00 am",
  deadline: "12:05 pm",
  level: 0,
  img: "/image/work.jpg"
}, {
  name: "Get ready for Work",
  para: "Call your Employes if all Tasks are Finish",
  time: "14:00 am",
  deadline: "14:05 pm",
  level: 0,
  img: "/image/work.jpg"
}, {
  name: "Get ready for Work",
  para: "Call your Employes if all Tasks are Finish",
  time: "15:00 am",
  deadline: "15:05 pm",
  level: 0,
  img: "/image/work.jpg"
}, {
  name: "Get ready for Work",
  para: "Call your Employes if all Tasks are Finish",
  time: "16:00 am",
  deadline: "16:05 pm",
  level: 0,
  img: "/image/work.jpg"
}, {
  name: "Get ready for Work",
  para: "Call your Employes if all Tasks are Finish",
  time: "17:00 am",
  deadline: "17:05 pm",
  level: 0,
  img: "/image/work.jpg"
}, {
  name: "Get ready for Work",
  para: "Call your Employes if all Tasks are Finish",
  time: "18:00 am",
  deadline: "18:05 pm",
  level: 0,
  img: "/image/work.jpg"
}, {
  name: "Get ready for Work",
  para: "Call your Employes if all Tasks are Finish",
  time: "19:00 am",
  deadline: "19:05 pm",
  level: 0,
  img: "/image/work.jpg"
}];
//--------------CARDS--------------
for (let todos of todo) {
  document.getElementById("result").innerHTML += `
    <div class="card shadow mb-3 bg-body-tertiary rounded cardContent">
      <img src="${todos.img}" class="card-img-top pt-2" alt="...">
      <div class="card-body" style="shadow mb-3 bg-body-tertiary rounded">
        <h5 class="card-title">${todos.name}</h5><hr>
        <p class="text-center">${todos.para}</p>
        <p class="card-text">
          <ul class="list">
            <li>Start Time: ${todos.time}</li>
            <li style="color:red">Dead Line: ${todos.deadline}</li>
          </ul>
        </p>
        <a class="btn btn-primary myBtn">Importance Level:</a><br>
       
        <h4>
          <span class="position-absolute bottom-0 end-0 translate-middle badge rounded-pill bg-success mylevel" id="numb">
            ${todos.level}
          </span>
        </h4> <a class="btn btn-outline-success ">Done &#10003;</a>
        <a class="btn btn-outline-info">Reset to 0</a>
      </div>
    </div>
  `;
}
//--------------COLOR COUNTER--------------
let btns = document.getElementsByClassName("myBtn");
let counters = Array.prototype.map.call(btns, function() {
  return 0;
});
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    if (counters[i] < 5) {
      todo[i].level++;
      document.getElementsByClassName("mylevel")[i].innerHTML = todo[i].level;
      counters[i]++;
      if (counters[i] === 6) {
        btns[i].removeEventListener("click", handleClick);
      }
      updateCounterColor(i);
      // console.log(updateCounterColor);
    }
  });
}
//--------------RESET COUNTER & COLOR--------------
const resetButtons = document.getElementsByClassName("btn btn-outline-info");
for (let i = 0; i < resetButtons.length; i++) {
  resetButtons[i].addEventListener("click", function() {
    const card = this.closest(".card");
    const index = Array.prototype.indexOf.call(card.parentElement.children, card);
    todo[index].level = 0;
    counters[index] = 0;
    document.getElementsByClassName("mylevel")[index].innerHTML = todo[index].level;
    resetCounterColor(index);
  });
}
function resetCounterColor(index) {
  const counterElement = document.getElementsByClassName("mylevel")[index];
  counterElement.classList.remove("bg-info", "bg-secondary", "bg-primary", "bg-warning", "bg-danger");
  counterElement.classList.add("bg-success");
}
//--------------CHANGE COLOR OF IMPORTANCE--------------
function updateCounterColor(index) {
  const counterElement = document.getElementsByClassName("mylevel")[index];
  const counterValue = counters[index];
  if (counterValue === 1) {
    counterElement.classList.remove("bg-success");
    counterElement.classList.add("bg-info");
  } else if (counterValue === 2) {
    counterElement.classList.remove("bg-info");
    counterElement.classList.add("bg-secondary");
  } else if (counterValue === 3) {
    counterElement.classList.remove("bg-secondary");
    counterElement.classList.add("bg-primary");
  } else if (counterValue === 4) {
    counterElement.classList.remove("bg-primary");
    counterElement.classList.add("bg-warning");
  } else if (counterValue === 5) {
    counterElement.classList.remove("bg-warning");
    counterElement.classList.add("bg-danger");
  } 
}
//--------------REMOVE CARD ON DONE BUTTON--------------
const doneButtons = document.getElementsByClassName("btn btn-outline-success");
for (let i = 0; i < doneButtons.length; i++) {
  doneButtons[i].addEventListener("click", function() {
    const card = this.closest(".card");
    card.style.display = "none";
  });
}
//--------------REAL TIME CLOCK--------------
"use strict";
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const timeString = new Date().toLocaleTimeString();
  timeDisplay.textContent = timeString;
}
setInterval(refreshTime, 1000);
//--------------SORT ENGINE--------------
function sortList() {
  const list = document.getElementById("result");
  const cards = list.getElementsByClassName("card");
  const sortedCards = Array.from(cards).sort((a, b) => {
    const levelA = parseInt(a.querySelector(".mylevel").textContent);
    const levelB = parseInt(b.querySelector(".mylevel").textContent);
    return levelB - levelA;
  });

  for (let i = 0; i < sortedCards.length; i++) {
    list.appendChild(sortedCards[i]);
  }
}
// -----SORT BUTTON----- //
document.getElementById("sortButton").addEventListener("click", sortList);

// -----ALERT BUTTON----- //
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Your are not Logged in. <a href="#">Sign in</a> or <a href="#">Register</a>', 'warning')
  })
}
// ----MENU LEFT SIDE---- //
function openNav() {
  // document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.width = "250px";
}
function closeNav() {
  // document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.width = "0";
}
