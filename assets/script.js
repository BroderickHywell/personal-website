function displayWindow(windowToDisplay){
    document.getElementById(`${windowToDisplay}`).style.display = 'inline'
}

function removeWindow(windowToRemove){
    document.getElementById(`${windowToRemove}`).style.display = 'none'
}

function displayProject(id){
    if(id === 0){
        document.getElementById('readme-generator').style.display = 'none'
        document.getElementById('rgb-guesser').style.display = 'none'
        document.getElementById('fortune-teller').style.display = 'none'
        document.getElementById('password-generator').style.display = 'inline'
    }else if(id === 1){
        document.getElementById('rgb-guesser').style.display = 'none'
        document.getElementById('fortune-teller').style.display = 'none'
        document.getElementById('password-generator').style.display = 'none'
        document.getElementById('readme-generator').style.display = 'inline'
    }else if(id === 2){
        document.getElementById('rgb-guesser').style.display = 'inline'
        document.getElementById('fortune-teller').style.display = 'none'
        document.getElementById('password-generator').style.display = 'none'
        document.getElementById('readme-generator').style.display = 'none'
    }else if(id === 3){
        document.getElementById('rgb-guesser').style.display = 'none'
        document.getElementById('fortune-teller').style.display = 'inline'
        document.getElementById('password-generator').style.display = 'none'
        document.getElementById('readme-generator').style.display = 'none'
    }
}

//open windows
document.getElementById('contact-me-icon').addEventListener('click', ()=> displayWindow('contact-me-window'))
document.getElementById('about-me-icon').addEventListener('click', ()=> displayWindow('about-me-window'))
document.getElementById('technical-skills-icon').addEventListener('click', ()=> displayWindow('technical-skills-window'))
document.getElementById('projects-icon').addEventListener('click', ()=> displayWindow('projects-window'))

//close windows
document.getElementById('close-contact-me').addEventListener('click', ()=> removeWindow('contact-me-window'))
document.getElementById('close-about-me').addEventListener('click', ()=> removeWindow('about-me-window'))
document.getElementById('close-technical-skills').addEventListener('click', ()=> removeWindow('technical-skills-window'))
document.getElementById('close-projects').addEventListener('click', ()=> removeWindow('projects-window'))

//open project
document.getElementById('0').addEventListener('click',()=>displayProject(0))
document.getElementById('1').addEventListener('click',()=>displayProject(1))
document.getElementById('2').addEventListener('click',()=>displayProject(2))
document.getElementById('3').addEventListener('click',()=>displayProject(3))