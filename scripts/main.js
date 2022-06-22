let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
};

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

myHeading.textContent = 'Hello world!';


document.querySelector('h1').onclick = function(){
    alert('别戳我，我怕疼。');
    document.querySelector('h1').textContent = '??????????';
}

/*
document.querySelector('html').addEventListener('click', () => {
  alert('别戳我，我怕疼。');
});
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/icon1.PNG') {
      myImage.setAttribute('src', 'images/icon2.PNG');
    } else {
      myImage.setAttribute('src', 'images/icon1.PNG');
    }
}

