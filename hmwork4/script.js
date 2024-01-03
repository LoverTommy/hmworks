'use sctrict'

function ObjStorageFunc(key,value) {
    let drinks = {};
    
    this.nameDrink = key;
    this.infoDrink = value;

    this.addValue = function() {
        if (this.nameDrink in drinks) {
            delete drinks[this.nameDrink]
        }else {
            drinks [this.nameDrink] = this.infoDrink;
        }
    }

    this.getValue = function() {
        console.log(drinks[this.nameDrink]);
    }

    this.deleteValue = function() {
        if (this.nameDrink in drinks) {
            delete drinks[this.nameDrink];
            return true;
        }else {
            return false;
        }
    }

    this.getKeys = function() {
        console.log( object.keys(drinks) );
    }
}

