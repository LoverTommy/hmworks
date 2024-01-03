'use sctrict'

function ObjStorageFunc() {
    let drinks = {};

    this.addValue = function(key,value) {
        drinks[key] = value;
    }

    this.getValue = function(key) {
        console.log(drinks[key]);
    }

    this.deleteValue = function(key) {
        if (key in drinks) {
            delete drinks[key];
            return true;
        }else {
            return false;
        }
    }

    this.getKeys = function() {
        console.log( Object.keys(drinks) );
    }
}

