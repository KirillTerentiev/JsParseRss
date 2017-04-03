var name;
function xmlParse() {
    var query = document.querySelectorAll(".news-ticket");
    var query2 = document.querySelector(".news-ticket");
    var parent = document.querySelector('.main_news');
    var xhr = new XMLHttpRequest();
    var grab = document.querySelector('.main_news');

    if(query.length !== 0){
        parent.removeChild(query2);
    }else{

    xhr.open('GET', '/test', false);
    xhr.send();

    if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } else {
        // вывести результат
        name = xhr.responseText;
    }
    var information = new Object(JSON.parse(name));

        for (var i = 0; i <= information.length; i++){
            var news = document.createElement('div');
            news.className = "news-ticket";
            news.innerHTML = "<strong>" + information[i+1][0] + "</strong><br>" + information[i+1][1] ;
            grab.appendChild(news);
        }
    }
}
function addTicket() {

    var ticket = document.createElement('div');
    var URL = document.querySelector('.input').value;
    var table =  document.querySelector('.main_list');
    var button = document.createElement('button');
    button.className = 'parse-button';
    button.innerHTML = 'parse it';
    button.setAttribute("onclick","xmlParse()");
    ticket.className = "name-ticket";
    ticket.innerHTML = URL;
    table.appendChild(ticket);
    console.log(ticket);
    ticket.appendChild(button);
}
function checkForm(form){
    // var reg = /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,4})(\/?)/$ ;
    if (document.getElementById('url').value=="") {
        alert('wrong url name');
        return false;
    } else{
       addTicket();
    }
    return true;
}
