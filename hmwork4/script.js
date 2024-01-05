'use sctrict'

function ObjStorageFunc() {
    let storage = {};

    this.addValue = function(key,value) {
        storage[key] = value;
    }

    this.getValue = function(key) {
        if(key in storage) {
            return storage[key];
        }else {
            return 'Такого напитка нет в списке';
        }
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

document.querySelector('#input').onclick = function () {
    let namDrink;
    let info;
    let alco;

    do {
        namDrink = prompt('Название напитка');
    } while (!namDrink)

    do {
        info = prompt('Рецепт:');
    } while (!info)

    do {
        alco = confirm('Напиток алкогольный?');
    } while (!alco)

    if (alco == true) {
        alco = 'Да';
    }else {
        alco = 'Нет';
    }

    drinkStorage.addValue(namDrink,info);
    alert('Напиток успешно добавлен');
}

document.querySelector('#get-info').onclick = function () {
    let namDrink = prompt('Название напитка:');
    alert('Напиток:' + ' ' + namDrink + '\n' + 'Репецт:' + ' ' + drinkStorage.getValue(namDrink));
}

document.querySelector('#delete').onclick = function () {
    let namDrink = prompt('Название напитка:');
    if (drinkStorage.deleteValue(namDrink) == true) {
        alert('Напиток успешно удалён');
    }else {
        alert('Такого напитка не было в списке');
    }
}

document.querySelector('#names').onclick = function () {
    alert(drinkStorage.getKeys());
}


let drinkStorage = new ObjStorageFunc ();