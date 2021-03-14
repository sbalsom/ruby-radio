const sounds = document.querySelectorAll('.sound');
const buttons = document.querySelectorAll('.button');
const players = Array.from(sounds).map(sound => new Tone.Player(new Tone.Buffer(sound.src)).toDestination());
const startButton = document.getElementById('start-button');
const overlay = document.getElementById('overlay');

startButton.addEventListener('click', async () => {

    await Tone.start()
    
    Tone.loaded().then(() => {
        players.forEach((player)=> {
            player.loop = true;
            player.mute = true;
        });
        players.forEach((player) => {
            
            player.start();
            player.sync();
        })
        
    });
    
    Tone.Transport.bpm.value = 120
    Tone.Transport.start();
    overlay.classList.toggle('fade');
    startButton.remove();
    setTimeout(() => {  overlay.remove(); }, 1000);
})

buttons.forEach((button, index) => { 
    button.addEventListener('click', () => {
        let player = players[index]
        button.classList.toggle('active')
        if (player.mute == true) {
            player.mute = false;
        } else if (player.mute == false) {
            player.mute = true;
        }                  
    });
});
