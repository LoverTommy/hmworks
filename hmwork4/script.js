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
            return undefined;
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
    let recipe;
    let alco;

    do {
        namDrink = prompt('Название напитка');
    } while (!namDrink)

    do {
        recipe = prompt('Рецепт:');
    } while (!recipe)

    alco = confirm('Напиток алкогольный?');

    if (alco == true) {
        alco = 'Да';
    }else {
        alco = 'Нет';
    }

    let info = {'recipe':recipe,'alco':alco};

    drinkStorage.addValue(namDrink,info);
    alert('Напиток успешно добавлен');
}

document.querySelector('#get-info').onclick = function () {
    let namDrink = prompt('Название напитка:');
    let info = drinkStorage.getValue(namDrink) || alert('Такого напитка нет в списке');
    alert('Напиток:' + ' ' + namDrink + '\n' + 'Репецт:' + ' ' + info.recipe + '\n' + 'Алкогольный:' + ' ' + info.alco);
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


// class ObjStorageClass {
    
//     constructor() {
//         this.storage = {}; 
//     }

//     addValue(key,value) {
//         this.storage[key] = value;
//     }

//     getValue(key) {
//         if(key in this.storage) {
//             return this.storage[key];
//         }else {
//             return undefined;
//         }
//     }

//     deleteValue(key) {
//         if (key in this.storage) {
//             delete this.storage[key];
//             return true;
//         }else {
//             return false;
//         }
//     }

//     getKeys() {
//         return Object.keys(this.storage);
//     }
// }

// document.querySelector('#input').onclick = function () {
//     let namDrink;
//     let recipe;
//     let alco;

//     do {
//         namDrink = prompt('Название напитка');
//     } while (!namDrink)

//     do {
//         recipe = prompt('Рецепт:');
//     } while (!recipe)

//     alco = confirm('Напиток алкогольный?');

//     if (alco == true) {
//         alco = 'Да';
//     }else {
//         alco = 'Нет';
//     }

//     let info = {'recipe':recipe,'alco':alco};

//     drinkStorage.addValue(namDrink,info);
//     alert('Напиток успешно добавлен');
// }

// document.querySelector('#get-info').onclick = function () {
//     let namDrink = prompt('Название напитка:');
//     let info = drinkStorage.getValue(namDrink) || alert('Такого напитка нет в списке');
//     alert('Напиток:' + ' ' + namDrink + '\n' + 'Репецт:' + ' ' + info.recipe + '\n' + 'Алкогольный:' + ' ' + info.alco);
// }

// document.querySelector('#delete').onclick = function () {
//     let namDrink = prompt('Название напитка:');
//     if (drinkStorage.deleteValue(namDrink) == true) {
//         alert('Напиток успешно удалён');
//     }else {
//         alert('Такого напитка не было в списке');
//     }
// }

// document.querySelector('#names').onclick = function () {
//     alert(drinkStorage.getKeys());
// }


// let drinkStorage = new ObjStorageClass ();