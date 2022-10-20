var header=document.querySelector('header');
//
var links=['Home','About','Community'];
var Community=['Discord','Twitter','Youtube','Amino','Instagram'];
var urls=['#','#','#'];
var CommunityUrl=[
    'https://discord.gg/PuNcyjD','https://twitter.com/bemoxpro','https://www.youtube.com/channel/UCUr8KTHTIdklKBalhCZqSVg',
    'https://aminoapps.com/c/anime_palace1/page/user/prince-bemo/dRmE_6zszfmLKabxB6Rqnxl3owZ0va2lYj','https://www.instagram.com/bemoxpro/'
];
//
//navbar
var nav=document.createElement('nav');
nav.className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top";
//navbar brand
var a=document.createElement('a');
var img = document.createElement('img');
a.className='navbar-brand';
a.href='#';
img.src = 'https://cdn.discordapp.com/attachments/441472649848160258/630444700452519937/16SyN5Z7_400x400.jpg';
img.className='logo';
a.textContent='MocaBot ';
a.appendChild(img);
nav.appendChild(a);
//navbar toggler
var button=document.createElement('button');
button.className='navbar-toggler';
button.type='button';
button.setAttribute('data-toggle','collapse');
button.setAttribute('data-target','#coll');
var span=document.createElement('span');
span.className='navbar-toggler-icon';
button.appendChild(span);
nav.appendChild(button);
//Navbar links
var div=document.createElement('div');
div.className='collapse navbar-collapse';
div.id='coll';
var ul=document.createElement('ul');
ul.className='navbar-nav';
for(let i in links)
{
    var li=document.createElement('li');
    li.className='nav-item';
    var a2=document.createElement('a');
    a2.className='nav-link';
    a2.href=urls[i];
    a2.textContent=links[i];
    var dropdown=(num=Number(),link=[],url=[],className='')=>
    {
        if(i == num)
        {
            li.className=`nav-item dropdown ${className}`;
            a2.className='nav-link dropdown-toggle';
            a2.setAttribute('data-toggle','dropdown');
            var div2=document.createElement('div');
            div2.className='dropdown-menu';
            for(let n in link)
            {
                var a3=document.createElement('a');
                a3.className='dropdown-item';
                a3.href=url[n];
                a3.textContent=link[n];
                div2.appendChild(a3);
            }
            li.appendChild(div2);
        }
    }
    li.appendChild(a2);
    dropdown(2,Community,CommunityUrl);
    ul.appendChild(li);
}
div.appendChild(ul);
nav.appendChild(div);
header.appendChild(nav);