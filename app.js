"use strict";

var AllBooksArr = [];

function book(name, pages, price, category) {
  this.name = name;
  this.pages = pages;
  this.price = price;
  this.category = category;

  AllBooksArr.push(this);
}

//functions

function generateRandomNumber(max, min) {
  var random = Math.floor(Math.random() * (max - min + 1) - min);
  console.log(random);
  return random;
}

book.prototype.bookPrice = function () {
  this.price = generateRandomNumber(8, 3);
  console.log(this.price);
};
console.log(AllBooksArr);

book.prototype.table = function (){
var table= document.getElementById('booksTable')

for(var i = 0; i<AllBooksArr.length;i++){

var tr1[i] = document.createElement('tr')
table.appendChild(tr1[i])

var td1 = document.createElement('td')
td1.textContent = this.name
tr1[i].appendChild(td1)

var td2= = document.createElement('td')
td2.textContent = this.pages
tr1[i].appendChild(td2)

var td3 = document.createElement('td')
td3.textContent = this.price
tr1[i].appendChild(td3)

var td4 = document.createElement('td')
td4.textContent = this.category
tr1[i].appendChild(td4)
}
}

var booksForm = document.getElementById("booksForm");

booksForm.addEventListener("submit", addNewBook);
console.log(booksForm);

function addNewBook(event) {
  event.preventDefault();

  var name = event.target.bookName.value;
  var pages = event.target.numOfPages.value;
  var category = event.document.getElementById("bookCategory")[
    event.selectedIndex
  ].value;

  //   var category = document.getElementById('bookCategory')
  //   var selected = category

  var newBook = new book(name, pages, price, category);

  newBook.bookPrice();
  console.log(newBook);
}
