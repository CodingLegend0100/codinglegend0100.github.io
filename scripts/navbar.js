document.addEventListener("DOMContentLoaded", () => {

  const NAVBAR_MENU = {
    "Home": "../index.html",
    "Projects": {
      "Coding's Crafting Tweaks": "../data_pack/crafting_tweaks.html",
      "Info Tools": "../data_pack/info_tools.html",
      "Larger Ore Veins": "../data_pack/ore_veins.html",
      "Larger Ore Veins Deluxe": "../data_pack/ore_veins_deluxe.html",
      "Larger Ore Veins Diamond": "../data_pack/ore_veins_diamond.html",
      "Larger Ore Veins Nether": "../data_pack/ore_veins_nether.html"
    },
    "Feedback": "../feedback.html"
  }

  const NAVBAR = document.getElementById("navbar");

  if (NAVBAR != null) {

    const NAVBAR_LIST = document.createElement("ul");
    for (const ITEM_NAME in NAVBAR_MENU) {
      const BTN = document.createElement("li");

      if (typeof NAVBAR_MENU[ITEM_NAME] === 'string') {
        BTN.appendChild(create_navbar_link(ITEM_NAME, NAVBAR_MENU[ITEM_NAME]));
      } else {
        BTN.classList.add("dropdown");
        const BTN_LINK = create_navbar_link(ITEM_NAME, "javascript:void(0)");
        BTN_LINK.classList.add("dropbtn");
        const CONTENT = document.createElement("div");
        CONTENT.classList.add("dropdown-content");
        for (const DROPDOWN_ITEM in NAVBAR_MENU[ITEM_NAME]) {
          DROPDOWN_BTN = create_navbar_link(DROPDOWN_ITEM, NAVBAR_MENU[ITEM_NAME][DROPDOWN_ITEM]);
          CONTENT.appendChild(DROPDOWN_BTN);
        }
        BTN.appendChild(BTN_LINK);
        BTN.appendChild(CONTENT);
      }
      NAVBAR_LIST.appendChild(BTN);
    }
    NAVBAR.appendChild(NAVBAR_LIST);

    function create_navbar_link(text, link) {
      const LINK = document.createElement("a");
      LINK.href = link;
      LINK.innerText = text;
      return LINK;
    }

  }

  const ANNOUNCEMENTS = document.getElementById("announcements");
  if (ANNOUNCEMENTS != null) {
    ANNOUNCEMENTS.innerHTML = `
<img src="../assets/notice.png" alt="NoticeIcon" width="70" height="70" style="float:left;margin:auto">
<p> Hello! I am not great at web development. </p>
<p> Pardon my mess as I set up my website. </p>`;

  }

});