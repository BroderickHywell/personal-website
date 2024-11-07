function displayWindow(windowToDisplay){
    document.getElementById(`${windowToDisplay}`).style.display = 'inline'
}

function removeWindow(windowToRemove){
    document.getElementById(`${windowToRemove}`).style.display = 'none'
}

//open windows
document.getElementById('contact-me-icon').addEventListener('click', ()=> displayWindow('contact-me-window'))
document.getElementById('about-me-icon').addEventListener('click', ()=> displayWindow('about-me-window'))
document.getElementById('technical-skills-icon').addEventListener('click', ()=> displayWindow('technical-skills-window'))

//close windows
document.getElementById('close-contact-me').addEventListener('click', ()=> removeWindow('contact-me-window'))
document.getElementById('close-about-me').addEventListener('click', ()=> removeWindow('about-me-window'))
document.getElementById('close-technical-skills').addEventListener('click', ()=> removeWindow('technical-skills-window'))