const HAMBURGER_BUTTON = document.querySelector('.nav-bar-burger');
const NAVBAR_LOGO = document.querySelector('.nav-bar-logo');
const MOBILE_MENU_SCREEN = document.querySelector('.mobile-menu-screen');

HAMBURGER_BUTTON.addEventListener('click', () => {
  HAMBURGER_BUTTON.classList.toggle('active');
  MOBILE_MENU_SCREEN.classList.toggle('active');
  NAVBAR_LOGO.classList.toggle('active');
});

const MOBILE_MENU_LINKS = document.querySelectorAll('.mobile-menu-links');

MOBILE_MENU_LINKS.forEach((element) => {
  element.addEventListener('click', () => {
    HAMBURGER_BUTTON.classList.remove('active');
    MOBILE_MENU_SCREEN.classList.remove('active');
    NAVBAR_LOGO.classList.remove('active');
  });
});
const ViewHideProject = (project_info) => {
    const DETAILS_HEADER = document.querySelector('.project-details-popup-header h2');
    DETAILS_HEADER.textContent = project_info.header;

    const DETAILS_LIST = document.querySelector('.project-details-list');

    document.querySelectorAll('.project-details-technologies').forEach(element =>{
        element.remove();
    });

    project_info.technologies.forEach(element => {
        const DETAILS_LIST_ITEM = document.createElement('li');
        DETAILS_LIST_ITEM.classList.add('project-details-technologies');
        DETAILS_LIST_ITEM.textContent = element;
        DETAILS_LIST.appendChild(DETAILS_LIST_ITEM);
    });

    document.querySelector('.project-details-popup-info img').setAttribute('src', project_info.img_src);
    document.querySelector('.project-details-popup-paracontainer p').textContent = project_info.paragraph;

    const DETAILS_POPUP = document.querySelector('.project-details-popup-container');
    DETAILS_POPUP.classList.toggle('active');
};

const PROJECTS_INFO = [
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript'],
        img_src: "./rsc/images/Snapshoot-Portfolio-Desktop.png"
    },
    {
        header: "PEEP BOOP",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript'],
        img_src: "./rsc/images/Snapshoot-Portfolio-Desktop.png"
    },
    {
        header: "BOB OUR AWESOME LEADER",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript'],
        img_src: "./rsc/images/Img-Placeholder.png"
    },
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript'],
        img_src: "./rsc/images/Snapshoot-Portfolio-Desktop.png"
    },
    {
        header: "Moon Ambassador",
        paragraph: "We must create better relations with the EARTHLINGS",
        technologies: ['moon html', 'space css', 'orbit'],
        img_src: "./rsc/images/Img-Placeholder.png"
    },
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript'],
        img_src: "./rsc/images/Snapshoot-Portfolio-Desktop.png"
    }
];