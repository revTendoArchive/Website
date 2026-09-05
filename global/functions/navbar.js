var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
const NAVBAR_OPTIONS = [
    {
        href: "/3ds/",
        text: "3DS"
    },
    {
        href: "/wiiu/",
        text: "Wii U"
    },
    {
        href: "/support/",
        text: "Support"
    },
    {
        href: "/faq/",
        text: "FAQ"
    },
    {
        href: "/staff/",
        text: "Staff"
    }
];
const NAVBAR = document.getElementById("navbar");

var logoLink = document.createElement("a");
logoLink.className = "nav-home";
logoLink.href = "/";
logoLink.setAttribute("aria-label", "revTendo home");
NAVBAR.appendChild(logoLink);

var logoImage = document.createElement("img");
logoImage.src = "/global/image/logo.png";
logoImage.alt = "revTendo";
logoImage.width = 1000;
logoImage.height = 240;
logoLink.appendChild(logoImage);

NAVBAR_OPTIONS.forEach(option => {
    const link = document.createElement("a");
    link.href = option.href;
    link.textContent = option.text;
    if (window.location.pathname === option.href) {
        link.classList.add("active");
    }
    NAVBAR.appendChild(link);
});
}