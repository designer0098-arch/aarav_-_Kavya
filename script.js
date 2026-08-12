const target = new Date("2027-01-02T00:00:00+05:30").getTime();
function tick(){
  const d=Math.max(0,target-Date.now());
  document.querySelector("#days").textContent=String(Math.floor(d/86400000)).padStart(3,"0");
  document.querySelector("#hours").textContent=String(Math.floor(d/3600000)%24).padStart(2,"0");
  document.querySelector("#minutes").textContent=String(Math.floor(d/60000)%60).padStart(2,"0");
  document.querySelector("#seconds").textContent=String(Math.floor(d/1000)%60).padStart(2,"0");
}
setInterval(tick,1000); tick();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelector(".rsvp form").addEventListener("submit",e=>{
  e.preventDefault();
  alert("Thank you! Your RSVP has been received.");
});

const storyPhoto = document.querySelector(".story-photo");
if (storyPhoto) {
  const storyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("story-visible");
        storyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  storyObserver.observe(storyPhoto);
}

const petals = document.getElementById("petals");

function createRosePetal() {
  if (!petals) return;
  const petal = document.createElement("span");
  petal.className = "rose-petal";
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.setProperty("--drift", `${(Math.random() * 160 - 80).toFixed(0)}px`);
  petal.style.animationDuration = `${(7 + Math.random() * 5).toFixed(1)}s`;
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  petal.style.width = `${7 + Math.random() * 5}px`;
  petal.style.height = `${11 + Math.random() * 7}px`;
  petals.appendChild(petal);
  setTimeout(() => petal.remove(), 13000);
}

setInterval(createRosePetal, 850);
for (let i = 0; i < 4; i++) {
  setTimeout(createRosePetal, i * 700);
}
