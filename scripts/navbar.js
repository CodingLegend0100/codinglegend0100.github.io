document.addEventListener("DOMContentLoaded", () => {
    
    const NAVBAR_MENU = {
        "Home": "index.html",
        "Projects": {
            "Coding's Crafting Tweaks": "./crafting_tweaks.html",
            "Info Tools": "./info_tools.html",
            "Larger Ore Veins": "./data_packs/ore_veins.html",
            "Larger Ore Veins Deluxe": "./data_packs/ore_veins_deluxe.html",
            "Larger Ore Veins Diamond": "./data_packs/ore_veins_diamond.html",
            "Larger Ore Veins Nether": "./data_packs/ore_veins_nether.html"
        },
        "Feedback": "feedback.html"
    }

    
    const PROJECTS = {
      "crafting_tweaks": {
        "name": "Coding's Crafting Tweaks"
      },
      "info_tools": {
        "name": "Info Tools"
      },
      "ore_veins": {
        "name": "Larger Ore Veins"
      },
      "ore_veins_deluxe": {
        "name": "Larger Ore Veins Deluxe"
      },
      "ore_veins_diamond": {
        "name": "Larger Ore Veins: Diamond"
      },
      "ore_veins_nether": {
        "name": "Larger Ore Veins: Nether"
      }
    };

    const NAVBAR = document.getElementById("navbar");

    if (NAVBAR != null){

        const NAVBAR_LIST = document.createElement("ul");
        for (const ITEM_NAME in NAVBAR_MENU){
            const BTN = document.createElement("li");
            
            if (typeof NAVBAR_MENU[ITEM_NAME] === 'string'){
                BTN.appendChild(create_navbar_link(ITEM_NAME,NAVBAR_MENU[ITEM_NAME]));
            } else {
                BTN.classList.add("dropdown");
                const BTN_LINK = create_navbar_link(ITEM_NAME,"javascript:void(0)");
                BTN_LINK.classList.add("dropbtn");
                const CONTENT = document.createElement("div");
                CONTENT.classList.add("dropdown-content");
                for (const DROPDOWN_ITEM in NAVBAR_MENU[ITEM_NAME]){
                    DROPDOWN_BTN = create_navbar_link(DROPDOWN_ITEM,NAVBAR_MENU[ITEM_NAME][DROPDOWN_ITEM]);
                    CONTENT.appendChild(DROPDOWN_BTN);
                }
                BTN.appendChild(BTN_LINK);
                BTN.appendChild(CONTENT);
            }
            NAVBAR_LIST.appendChild(BTN);
        }
        NAVBAR.appendChild(NAVBAR_LIST);

        function create_navbar_link(text,link){
            const LINK = document.createElement("a");
            LINK.href = link;
            LINK.innerText = text;
            return LINK;
        }

    }

    const ANNOUNCEMENTS = document.getElementById("announcements");
    if (ANNOUNCEMENTS != null){
        ANNOUNCEMENTS.innerHTML = `<img src="./assets/notice.png" alt="Notice" width="70" height="70" style="float:left;margin:auto">
<p> Hello! I am not great at web development. </p>
<p> Pardon my mess as I set up my website. </p>`;

    }

});