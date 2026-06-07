// ── Edit projects here. Everything else updates automatically. ──

const CATEGORIES = [
    "AI",
    // add more categories here, e.g. "Robotics",
];

const PROJECTS = [
    {
        title: "Project One",
        description: "Short description of your first AI project.",
        link: "#",
        category: "AI",
        featured: true,
    },
    {
        title: "Project Two",
        description: "Short description of your second AI project.",
        link: "#",
        category: "AI",
        featured: true,
    },
    // add more projects below — set featured: true to show on home page
];

// ── Rendering (you usually don't need to edit below) ──

function countByCategory(category) {
    return PROJECTS.filter((p) => p.category === category).length;
}

function renderCategories(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;

    el.innerHTML = CATEGORIES.map(
        (name) => `<strong>${name}</strong> (${countByCategory(name)})`
    ).join(" · ");
}

function renderProjectList(containerId, { category, featuredOnly }) {
    const el = document.getElementById(containerId);
    if (!el) return;

    let list = PROJECTS;
    if (category) list = list.filter((p) => p.category === category);
    if (featuredOnly) list = list.filter((p) => p.featured);

    el.innerHTML = list
        .map(
            (p) => `
        <li>
            <a href="${p.link}">${p.title}</a>
            <br>${p.description}
        </li>`
        )
        .join("");
}

function renderSeeAllLink(linkId, countId) {
    const link = document.getElementById(linkId);
    const count = document.getElementById(countId);
    if (count) count.textContent = PROJECTS.length;
    if (link) link.href = "work.html";
}
