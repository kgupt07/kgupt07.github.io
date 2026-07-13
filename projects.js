// ── Edit projects here. Everything else updates automatically. ──

const PROJECTS = [
    {
        title: "WriteRight",
        description: "Educational Number writing application [game format].",
        link: "https://github.com/kgupt07/handwriting-detection-using-NN",
        featured: true,
    },
    {
        title: "Quadruped Simulation",
        description: "Controls project to design quadruped gait in simulation..",
        link: "https://github.com/kgupt07/quadruped_gait",
        featured: true,
    },
    {
        title: "Warehouse Robot",
        description:
            "Simulation of a warehouse robot that maps its environment, navigates to a target, reports, and returns home.",
        link: "https://github.com/kgupt07/WarehouseRobot",
        featured: true,
    },
    {
        title: "Red-Teaming Agentic AI",
        description:
            "Purdue Data Mine partnership with Prediction Guard — red-teamed agentic AI against the OWASP Top 10 for Agentic Applications.",
        link: "https://predictionguard.com/blog/red-teaming-agentic-ai-findings-from-testing-prediction-guard-against-the-owasp-top-10",
        featured: true,
    },
    // add more projects below — set featured: true to show on home page
];

// ── Rendering (you usually don't need to edit below) ──

function renderProjectList(containerId, { featuredOnly } = {}) {
    const el = document.getElementById(containerId);
    if (!el) return;

    let list = PROJECTS;
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
