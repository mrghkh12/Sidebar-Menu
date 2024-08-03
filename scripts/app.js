
const $ = document

const sidebarContainer = $.querySelector('.sidebar')
const sidebarBottom = $.querySelector('.sidebar-bottom')

sidebarBottom.addEventListener('click' , e =>{
    if(e.target.classList.contains('dark')){
        sidebarContainer.className = 'sidebar'
    }
    if(e.target.classList.contains('night')){
        sidebarContainer.className = 'sidebar night'  
    }
    if(e.target.classList.contains('light')){
        sidebarContainer.className = 'sidebar light'
    }
})