
const $ = document

const sidebarBottom = $.querySelector('.sidebar-bottom')

sidebarBottom.addEventListener('click' , e =>{
    if(e.target.classList.contains('dark')){
        console.log('dark');
        
    }
    if(e.target.classList.contains('night')){
        console.log('night');
        
    }
    if(e.target.classList.contains('light')){
        console.log('light');
        
    }
})