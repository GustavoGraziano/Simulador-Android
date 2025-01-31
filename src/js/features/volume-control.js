export default class VolumeControl {
    constructor(volumePanel, volumeMode, volumeElementId, btnIncreasedId, btnDecreasedId, minHeight = 42, maxHeight = 150, step = 7.2) {
        this.volumePanel = document.getElementById(volumePanel)
        this.volumeMode = document.getElementById(volumeMode)
        this.volumeLevel = document.getElementById(volumeElementId)
        this.btnIncreased = document.getElementById(btnIncreasedId)
        this.btnDecreased = document.getElementById(btnDecreasedId)
        this.minHeight = minHeight
        this.maxHeight = maxHeight
        this.step = step
        this.hiddenTimer = null

        this.init()
    }

    getCurrentHeight() {
        return parseFloat(window.getComputedStyle(this.volumeLevel).height)
    }

    increaseVolume() {
        let currentHeight = this.getCurrentHeight()
        if (currentHeight < this.maxHeight) {
            this.volumeLevel.style.height = `${currentHeight + this.step}px`
        }
        
        this.checkVolumeHeight()
        this.showPanel()
    }
    
    decreaseVolume() {
        let currentHeight = this.getCurrentHeight()
        if (currentHeight > this.minHeight) {
            this.volumeLevel.style.height = `${currentHeight - this.step}px`
        }
        
        this.checkVolumeHeight()
        this.showPanel()
    }

    checkVolumeHeight() {
        let currentHeight = this.getCurrentHeight()
        
        if (currentHeight > this.maxHeight) {
            this.volumeLevel.style.height = `${this.maxHeight}px`
        }
        if (currentHeight < this.minHeight) {
            this.volumeLevel.style.height = `${this.minHeight}px`
        }
    }

    changeMode() {
        let icon = document.createElement('i')
        let existingIcon = document.querySelector('.material-icons-outlined.added')
        
        if (this.volumeMode.textContent === 'notifications') {
            this.volumeMode.textContent = 'notifications_off'

            icon.classList = 'material-icons-outlined added'
            icon.textContent = 'notifications_off'

            document.getElementById('status-icons-area').appendChild(icon)
        }
        else if (this.volumeMode.textContent === 'notifications_off') {
            this.volumeMode.textContent = 'vibration'

            if (existingIcon) {
                existingIcon.remove()
            }
            
        }
        else if (this.volumeMode.textContent === 'vibration') {
            this.volumeMode.textContent = 'notifications'
        }

        this.showPanel()
    }

    showPanel() {
        clearTimeout(this.hiddenTimer)
        this.volumePanel.classList.add('active')

        this.hiddenTimer = setTimeout(() => {
            this.volumePanel.classList.remove('active')
        }, 5000);
    }

    init() {
        this.btnIncreased.addEventListener('click', () => this.increaseVolume())
        this.btnDecreased.addEventListener('click', () => this.decreaseVolume())
        this.volumeMode.addEventListener('click', () => this.changeMode())
    }
}