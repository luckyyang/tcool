addLoadEvent(insertInfo);

function addLoadEvent(func) {
  var oldonload = window.onload;
  if(typeof window.onload != 'function'){
    window.onload = func;
  }else{
    window.onload = function(){
      oldonload();
      func();
    }
  }
}


function insertInfo(){
  var img_list = document.getElementById('img-list');
  var li = img_list.getElementsByTagName('li');
  var img = img_list.getElementsByTagName('img');
  for(var i=0; i<img.length; i++) {
    var author = img[i].getAttribute('data-author');
    var time = img[i].getAttribute('data-time');
    info_box = document.createElement('p');
    author_box = document.createElement('span');
    time_box = document.createElement('span');
    author_text = document.createTextNode('作者：' + author);
    time_text = document.createTextNode('上传时间：' + time);
    li[i].appendChild(info_box);
    info_box.appendChild(author_box);
    info_box.appendChild(time_box);
    author_box.appendChild(author_text);
    time_box.appendChild(time_text);
  }
}
