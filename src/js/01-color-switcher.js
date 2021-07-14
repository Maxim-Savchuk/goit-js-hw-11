import '../sass/main.scss'

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

const bodyColorSwitch = {
    DELAY: 1000,
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        };
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const color = this.getRandomHexColor();
            this.changeBodyColor(color);
        }, this.DELAY);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    },
    changeBodyColor(color) {
        document.body.style.backgroundColor = color;
    },
    getRandomHexColor() {
        return `# ${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
};

refs.startBtn.addEventListener('click', () => {
    bodyColorSwitch.start();
});
refs.stopBtn.addEventListener('click', () => {
    bodyColorSwitch.stop();
});