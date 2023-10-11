export default class Product {
    _name = "";
    _special = false;
    _info = null;

    constructor(name, special, info) {
        this._name = name;
        this._special = special;
        this._info = info;
    }

    get name() {
        return this._name;
    }

    set setName(value) {
        this._name = value;
    }

    get special() {
        return this._special;
    }

    set special(value) {
        this._special = value;
    }

    get info() {
        return this._info;
    }

    set info(value) {
        this._info = value;
    }
}