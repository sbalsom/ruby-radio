window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const buttons = document.querySelectorAll('.button');
    sounds.forEach((sound) => {
        sound.loop = true;
        sound.muted = true;
        console.log(sound.duration)
    });
    sounds.forEach((sound) => {
        sound.play();
    });
    buttons.forEach((button, index) => {
        
        button.addEventListener('click', () => {
            let sound = sounds[index]
            button.classList.toggle('active')
            if (sound.muted == true) {
                sound.muted = false;
            } else if (sound.muted == false) {
                sound.muted = true;
            }
            
            
        });
    });
});