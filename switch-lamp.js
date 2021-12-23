class ElectricLamp {
    _status;

    constructor(status) {
        this._status = status
    }

    set status(status) {
        this._status = status
    }

    get status() {
        return this._status
    }

    turnOn() {
        this._status = true
    }

    turnOff() {
        this._status = false
    }
}

class SwitchButton {
    _status;
    _lamp;

    constructor(status, lamp) {
        this._status = status
        this._lamp = lamp
    }

    set status(status) {
        this._status = status
    }

    get status() {
        return this._status
    }

    set lamp(lamp) {
        this._lamp = lamp
    }
    get lamp(){
        return this._lamp
    }
    connectToLamp(electricLamp){
        this._lamp = electricLamp
    }
    switchOff(){
        this._lamp.turnOff()
    }
    switchOn(){
        this._lamp.turnOn()
    }
}