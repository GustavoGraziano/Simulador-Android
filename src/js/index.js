import DigitalClock from "./features/digital-clock.js"
import VolumeControl from "./features/volume-control.js"

let digitalClock = new DigitalClock('digital-clock')
let volumeControl = new VolumeControl('volume-panel', 'volume-mode-icon', 'volume-level', 'btn-volume-plus', 'btn-volume-less')