document.title = 'BossElijah | Display Your Writing';

const input = document.createElement('input');
input.placeholder = 'Type something here...';
input.style.margin = 'auto';
input.style.marginTop = '5rem';
input.style.marginBottom = '0';
input.style.height = '5rem';
input.style.width = '90vw';
input.style.textAlign = 'center';
input.style.fontStyle = 'italic';
input.style.border = '#757575 3px solid';
input.style.color = '#757575';
input.addEventListener('focus', e => {
  input.style.outline = 'none';
  input.style.outlineOffset = '0';
});
document.querySelector('#root').appendChild(input);
document.querySelector('#root').style.display = 'flex';
document.querySelector('#root').style.flexDirection = 'column';
document.querySelector('#root').style.height = '100vh';

const displayedText = document.createElement('h2');
displayedText.style.textAlign = 'center';
displayedText.style.color = 'red';
displayedText.style.width = '90vw';
displayedText.style.wordWrap = 'break-word';

document.querySelector('#root').appendChild(displayedText);

input.addEventListener('keyup', function(e) {
  displayedText.innerHTML = input.value;
  if (e.key === 'Enter') {
    displayedText.innerHTML = '';
    input.value = '';
  }
});

const madeBy = document.createElement('h2');
madeBy.innerHTML = 'Made by EGB';
madeBy.style.width = '90vw';
madeBy.style.wordWrap = 'break-word';
madeBy.style.textAlign = 'center';
madeBy.style.fontStyle = 'italic';
madeBy.style.margin = 'auto';
document.querySelector('#root').appendChild(madeBy);

const changeStyles = x => {
  if (x.matches) {
    input.style.fontSize = '1.75rem';
    displayedText.style.fontSize = '3rem';
    displayedText.style.margin = '2rem auto';
    madeBy.style.fontSize = '2rem';
  } else {
    input.style.fontSize = '3.75rem';
    displayedText.style.fontSize = '5rem';
    displayedText.style.margin = '8rem auto 3rem';
    madeBy.style.fontSize = '3.75rem';
  }
};

let x = window.matchMedia('(max-width: 700px)');
changeStyles(x);
x.addListener(changeStyles);
