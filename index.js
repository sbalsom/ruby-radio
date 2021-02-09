
const sounds = document.querySelectorAll('.sound');
const buttons = document.querySelectorAll('.button');
const players = Array.from(sounds).map(sound => new Tone.Player(new Tone.Buffer(sound.src)).toDestination());
const startButton = document.getElementById('start-button');




startButton.addEventListener('click', () => {


    players.forEach((player)=> {
        player.loop = true;
        player.mute = true;
    });
    players.forEach((player) => {
        player.start();
    })
});

buttons.forEach((button, index) => { 
    button.addEventListener('click', () => {
        console.log(`clicked button number ${index}`)
        let player = players[index]
        button.classList.toggle('active')
        if (player.mute == true) {
            player.mute = false;
        } else if (player.mute == false) {
            player.mute = true;
        }
                           
    });
});
