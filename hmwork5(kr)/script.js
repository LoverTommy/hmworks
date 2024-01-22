'use strict'

const formDef1=
[
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
        variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
        variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {caption:'Опубликовать',kind:'submit'},
];

const formDef2=
[
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {caption:'Зарегистрироваться',kind:'submit'},
];


function form(arr) {
    var form = document.createElement('form');
    form.action = 'https://fe.it-academy.by/TestForm.php';
    form.method = 'post';
    form.style.cssText = 'margin-bottom: 60px'
    var body = document.body;
    body.appendChild(form);
    

    arr.forEach((i,v) => {
        if(typeof(i) === 'object') {
            var arrElement = i;
            var newDiv = document.createElement('div');
            form.appendChild(newDiv);

            for(var key in arrElement) {
                if(key === 'label') {
                    let newLabel = document.createElement('label');
                    let labelText = document.createTextNode(arrElement.label);
                    newLabel.appendChild(labelText);
                    newDiv.appendChild(newLabel);
                }

                if (key === 'kind') {
                    var keyInfo = arrElement.kind;
                    if(keyInfo === 'longtext') {
                        let newInput = document.createElement('input');
                        newInput.type = 'text';
                        newInput.name = (arrElement.name || 'textInfo');
                        newInput.style.cssText = 'width: 500px; height: 30px; margin-top: 10px; margin-left: 10px';
                        newDiv.appendChild(newInput);
                    }
                    
                    if(keyInfo === 'number') {
                        let newInput = document.createElement('input');
                        newInput.type = 'number';
                        newInput.name = (arrElement.name || 'number');
                        newInput.style.cssText = 'width: 150px; height: 30px; margin-top: 10px; margin-left: 10px';
                        newDiv.appendChild(newInput);
                    }

                    if(keyInfo === 'shorttext') {
                        let newInput = document.createElement('input');
                        newInput.type = 'text';
                        newInput.name = (arrElement.name || 'textInfo');
                        newInput.style.cssText = 'width: 220px; height: 30px; margin-top: 10px; margin-left: 10px';
                        newDiv.appendChild(newInput);
                    }

                    if(keyInfo === 'combo') {
                        let newSelect = document.createElement('select');
                        newSelect.name = (arrElement.name || 'combo');
                        newSelect.style.cssText = 'width: 220px; height: 30px; margin-top: 10px; margin-left: 10px; margin-bottom: 10px';
                        newDiv.appendChild(newSelect);
                        if(Array.isArray(arrElement.variants)) {
                            let variantsArray = arrElement.variants;
                            for(let variantsStr of variantsArray) {
                                let newOption = document.createElement('option');
                                let newOptionText = document.createTextNode(variantsStr.text);
                                newOption.appendChild(newOptionText);
                                newOption.value = (variantsStr.value);
                                newSelect.appendChild(newOption);
                            }
                        }
                    }

                    if(keyInfo === 'radio') {
                        if(Array.isArray(arrElement.variants)) {
                            let checkboxVariants = arrElement.variants;
                            for(let checkboxStr of checkboxVariants) {
                                let newLabelCheckbox = document.createElement('label');
                                newLabelCheckbox.style.cssText = 'margin: 10px';
                                let newLabelCheckboxText = document.createTextNode(checkboxStr.text)
                                newLabelCheckbox.appendChild(newLabelCheckboxText);
                                let newCheckbox = document.createElement('input');
                                newCheckbox.type = 'checkbox';
                                newCheckbox.name = (arrElement.name + ' ' + checkboxStr.text);
                                newLabelCheckbox.value = checkboxStr.value;
                                newLabelCheckbox.appendChild(newCheckbox);
                                newDiv.appendChild(newLabelCheckbox);
                            }
                        }
                    }

                    if(keyInfo === 'check') {
                        let newCheckbox = document.createElement('input');
                        newCheckbox.type = 'checkbox';
                        newCheckbox.name = arrElement.name;
                        newCheckbox.style.cssText = 'margin: 10px';
                        newDiv.appendChild(newCheckbox);
                    }

                    if(keyInfo === 'memo') {
                        let newInput = document.createElement('input');
                        newInput.type = 'text';
                        newInput.name = arrElement.name;
                        newInput.style.cssText = 'width: 500px; height: 150px; padding: 1px;';
                        newDiv.appendChild(newInput);
                    }
                }

                if(key === 'caption') {
                    let newButton = document.createElement('button');
                    let newButtonText = document.createTextNode(arrElement.caption);
                    newButton.appendChild(newButtonText);
                    newButton.type = arrElement.kind;
                    newButton.style.cssText = 'width: 200px; height: 25px; margin-top: 20px'
                    newDiv.appendChild(newButton);
                }
            }
        }
    })
}

form(formDef1);
form(formDef2);