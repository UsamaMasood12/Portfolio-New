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
function CreateProjectCard(project_info) {
    /*
        <div class="project-card-template">
            <button class="project-card-template-hover"></button>
            <div class="project-card-template-info">
            <h2>Profesional Art Printing Data</h2>
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard
            </p>
            <ul class="project-card-template-technologies">
                <li class="card-technology first-technology">html</li>
                <li class="card-technology">bootstrap</li>
                <li class="card-technology">Ruby</li>
            </ul>
            </div>
            <div class="see-project-container-card-template">
            <button class="see-project-card-template">See Project</button>
            </div>
        </div>
    */
    const PROJECT_CARD = document.createElement('div');
    PROJECT_CARD.classList.add('project-card-template');
    document.querySelector('.works-section').appendChild(PROJECT_CARD);
    const PROJECT_BUTTON = document.createElement('button');
    PROJECT_BUTTON.classList.add('project-card-template-hover');
    PROJECT_BUTTON.addEventListener('click', function (){
        ViewHideProject(project_info);
    });
    PROJECT_CARD.appendChild(PROJECT_BUTTON);
    const PROJECT_INFO_DIV = document.createElement('div');
    PROJECT_INFO_DIV.classList.add('project-card-template-info');
    PROJECT_CARD.appendChild(PROJECT_INFO_DIV);
    const PROJECT_HEADER = document.createElement('h2');
    PROJECT_HEADER.textContent = project_info.header;
    PROJECT_INFO_DIV.appendChild(PROJECT_HEADER);
    const PROJECT_PARAGRAPH = document.createElement('p');
    PROJECT_PARAGRAPH.textContent = project_info.paragraph;
    PROJECT_INFO_DIV.appendChild(PROJECT_PARAGRAPH);
    const PROJECT_LIST = document.createElement('ul');
    PROJECT_LIST.classList.add('project-card-template-technologies');
    PROJECT_INFO_DIV.appendChild(PROJECT_LIST);
    for(let i = 0; i < 3; i++){
        const PROJECT_LIST_ITEM = document.createElement('li');
        PROJECT_LIST_ITEM.classList.add('card-technology')
        if(i === 0) {PROJECT_LIST_ITEM.classList.add('first-technology');}
        PROJECT_LIST_ITEM.textContent = project_info.technologies[i];
        PROJECT_LIST.appendChild(PROJECT_LIST_ITEM);
    }
    const SEE_PROJECT_DIV = document.createElement('div');
    SEE_PROJECT_DIV.classList.add('see-project-container-card-template');
    PROJECT_CARD.appendChild(SEE_PROJECT_DIV);
    const SEE_PROJECT_BUTTON = document.createElement('button');
    SEE_PROJECT_BUTTON.classList.add('see-project-card-template');
    SEE_PROJECT_BUTTON.textContent = 'See Project';
    SEE_PROJECT_BUTTON.addEventListener('click', function (){
        ViewHideProject(project_info);
    });
    SEE_PROJECT_DIV.appendChild(SEE_PROJECT_BUTTON);
}
for(let i = 0; i < PROJECTS_INFO.length; i++){
    CreateProjectCard(PROJECTS_INFO[i]);
}
document.querySelector('.project-details-popup-window-cancel').addEventListener('click', function (){
    ViewHideProject(PROJECTS_INFO[0]);
});
document.querySelector('.main-project-button-container button').addEventListener('click', function (){
    ViewHideProject(PROJECTS_INFO[0]);
});
