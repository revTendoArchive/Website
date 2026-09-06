var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(() => {
    document.body.style.opacity = 1;
    const base = document.currentScript
        ? document.currentScript.src.replace(/functions\/progress\.js.*$/, "")
        : "/global/";

    const lamp = (done) => base + (done ? "image/wiiu/lamp_on.png" : "image/wiiu/lamp_off.png");

    document.addEventListener("DOMContentLoaded", () => {
        const items = [...document.querySelectorAll(".progress-list li[data-done]")];
        if (!items.length) return;

        items.forEach((item) => {
            const done = item.dataset.done === "true";
            const icon = document.createElement("img");
            icon.src = lamp(done);
            icon.alt = done ? "Done" : "Not done";
            item.prepend(icon);
        });

        const done = items.filter((item) => item.dataset.done === "true").length;
        const percent = Math.round((done / items.length) * 100);

        const readout = document.querySelector("[data-progress-value]");
        const fill = document.querySelector(".progressbar > span");
        const bar = document.querySelector(".progressbar");

        if (readout) readout.textContent = percent + "%";
        if (bar) bar.setAttribute("aria-valuenow", String(percent));
        if (fill) requestAnimationFrame(() => { fill.style.width = percent + "%"; });
    });
})();

}