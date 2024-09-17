
const synth = new Tone.Synth();

// efeitos ativos
const reverb = new Tone.Reverb({
    decay: 1.5,
    preDelay: 0.01
}).toDestination();

const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination();



// const distortion = new Tone.Distortion(1.1).toDestination();

// Conectando o sintetizador aos efeitos
synth.chain(Tone.Destination);



function efeito(){

    synth.chain(reverb, chorus, Tone.Destination);
    console.log("Sara")
}


//  armazenar o estado das notas
const notesPlaying = {};


const keyMap = {
    'a': 'C4',
    'w': 'C#4',
    's': 'D4',
    'e': 'D#4',
    'd': 'E4',
    'f': 'F4',
    't': 'F#4',
    'g': 'G4',
    'y': 'G#4',
    'h': 'A4',
    'u': 'A#4',
    'j': 'B4'
};

// clique no teclado para tocar as notas
document.addEventListener('keydown', function(event) {
    const note = keyMap[event.key];
    if (note && !notesPlaying[note]) {
        notesPlaying[note] = true;
        document.querySelector(`.key[data-note="${note}"]`).classList.add('active');
        playNote(note);
    }
});

document.addEventListener('keyup', function(event) {
    const note = keyMap[event.key];
    if (note && notesPlaying[note]) {
        notesPlaying[note] = false;
        document.querySelector(`.key[data-note="${note}"]`).classList.remove('active');
        stopNote();
    }
});

// Função para tocar a nota
function playNote(note) {
    synth.triggerAttack(note);
}

// Função para parar a nota
function stopNote() {
    synth.triggerRelease();
}