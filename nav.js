// ── Edit menu items here ──

const NAV_ITEMS = [
    { id: "about", label: "About", href: "index.html#about" },
    { id: "work", label: "Work", href: "index.html#work" },
];

function renderNav() {
    const el = document.getElementById("top-nav");
    if (!el) return;

    const onWorkPage = location.pathname.endsWith("work.html");

    el.innerHTML = NAV_ITEMS.map((item) => {
        const href = item.id === "work" && onWorkPage ? "work.html" : item.href;
        return `<a href="${href}">${item.label}</a>`;
    }).join("");
}
