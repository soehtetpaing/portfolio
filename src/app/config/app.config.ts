export const app = {
    name: "Portfolio",
    version: "2.0.0",
    defaultDomain: "demo",
    secretKey: "P0rtf0li0!",
    projectcode: "S-N-BOT-2600",
    notiUrl: "https://snap-noti.onrender.com",
    jwtSecret: "62d4f6a80deff1c49f31af19963875be9e79967dfd082fcb96f061605f505483",
    refreshSecret: "d2cf3f487508ec550375af93825212eb84213dcbd08fd7bf2a8a850b0ebe22bd",
    languageOptions: [
        { code: "en", name: "English", image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/flag/en.png" },
        { code: "mm", name: "မြန်မာ", image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/flag/mm.png" },
        { code: "kr", name: "한국어", image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/flag/kr.png" }
    ],
    sidebarMenus: [
        { section: "home", icon: "home_app_logo", translateKey: "nav.home" },
        { section: "about", icon: "contacts_product", translateKey: "nav.about" },
        { section: 'experience', icon: 'work_history', translateKey: 'nav.experience' },
        { section: "projects", icon: "devices", translateKey: "nav.projects" },
        { section: "resume", icon: "article_person", translateKey: "nav.resume" },
        { section: "contact", icon: "alternate_email", translateKey: "nav.contact" }
    ]
};
