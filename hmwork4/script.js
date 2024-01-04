'use sctrict'

function ObjStorageFunc() {
    let storage = {};

    this.addValue = function(key,value) {
        storage[key] = value;
    }

    this.getValue = function(key) {
        return storage[key];
    }

    this.deleteValue = function(key) {
        if (key in storage) {
            delete storage[key];
            return true;
        }else {
            return false;
        }
    }

    this.getKeys = function() {
        return Object.keys(storage);
    }
}

let drinkStorage = new ObjStorageFunc ('drink1','info');
drinkStorage.addValue('drink1','info');
console.log(ObjStorageFunc.getKeys);
console.log(drinkStorage.addValue('drink1','info'));