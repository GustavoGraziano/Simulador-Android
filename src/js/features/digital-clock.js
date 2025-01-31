export default class DigitalClock {
    constructor(elementId) {
        this.element = document.getElementById(elementId)
        this.start()
    }

    formatTime() {
        let date = new Date()

        let hours = String(date.getHours()).padStart(2, '0')
        let minutes = String(date.getMinutes()).padStart(2, '0')

        return this.element.innerHTML = `${hours}:${minutes}`
    }

    start() {
        setInterval(() => this.formatTime(), 100)
    }
}