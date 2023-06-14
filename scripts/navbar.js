document.addEventListener("DOMContentLoaded", () => {
    const NAVBAR = document.getElementById("navbar");

    const PROJECTS = [
      "Coding's Crafting Tweaks",
      "Info Tools",
      "Larger Ore Veins",
      "Larger Ore Veins Deluxe",
      "Larger Ore Veins: Diamond",
      "Larger Ore Veins: Nether",  
    ];

    PROJECTS.sort();

    console.log(PROJECTS);

    if (NAVBAR != null){
        NAVBAR.innerHTML = `
<ul>
  <li><a href="./index.html">Home</a></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Projects</a>
    <div class="dropdown-content">
      <a href="#">Coding's Crafting Tweaks</a>
      <a href="#">Info Tools</a>
      <a href="#">EnderStorage</a>
    </div>
  </li>
  <li><a href="./feedback.html">Feedback</a></li>
</ul>`;
    }

    const ANNOUNCEMENTS = document.getElementById("announcements");
    if (ANNOUNCEMENTS != null){
        ANNOUNCEMENTS.innerHTML = `<img src="./assets/notice.png" alt="Notice" width="70" height="70" style="float:left;margin:auto">
<p> Hello! I am not great at web development. </p>
<p> Pardon my mess as I set up my website. </p>`;

    }

    servertest();

});

async function servertest(){
    console.log("Pinging server...");
    const test = await fetch("https://votebot.codinglegend04.repl.co");
    console.log(test);
}