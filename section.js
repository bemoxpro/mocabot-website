var header=document.querySelector('header');
//
var divs =[];
//
var section = document.createElement('section');
var div = document.createElement('div');
div.className='row';
for(let i in divs)
{
    var div2 = document.createElement('div');
    div.appendChild(div2);
}
section.appendChild(div);
header.appendChild(section);