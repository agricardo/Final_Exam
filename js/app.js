const output = document.querySelector('#selectBreed')
const outlist = document.querySelector('.outlist')

class Breeds {
    constructor() {
        this.getBreeds()
    }


    getBreeds() {
        $.ajax({
            url: 'https://bitpay.com/api/rates',
            dataType: 'json',
            success: (data) => {
                console.log(data)
                for (var i = 0; i < data.length; i++) {
                    output.innerHTML += 
                    `<option id="item" value="${data[i].name}"> ${data[i].name}</option>`
                }

                this.breeds = data[0]
            },
            error(error) {
                console.log(error)
            }
        })
    }
    
}
const dogBreeds = new Breeds


function capture() {
    function Person(name) {
        this.name = name;
    }
    var nameCapture = document.getElementById("selectBreed").value;

    newSubject = new Person(nameCapture)
    console.log(newSubject);
    add();
}
var breedName = [];

function add() {
    breedName.push(newSubject);
    console.log(breedName);
};

function ajaxSearch() {
    const api_url = `https://bitpay.com/api/rates`
    $.ajax({
        url: api_url,
        dataType: 'json',
        success: (data) => {
            console.log(data)
            for (var i = 0; i < data[0].length; i++) {
             outlist.innerHTML += `<li id="lista"> ${data[0]} </li>`
                
            }
        },
        error: (error) => {
            console.log("There was an error")
        }
    })
}

document.getElementById("viewDog").addEventListener("click", ajaxSearch);
