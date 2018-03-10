
function loadJSON(file,callback) {
  var rawFile= new XMLHttpRequest();
  rawFile.overrideMimeType("application/json")
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function() {
  if(rawFile.readyState===4 && rawFile.status=="200") {
      callback(rawFile.responseText);

  }
  }

  rawFile.send();

}

loadJSON("resume.json",function(text){

  var data =JSON.parse(text);
  // console.log(data);

  basic(data.basics);
});

var main =document.getElementById('mainDiv');

var left =document.getElementById('leftDiv');

var right =document.getElementById('rightDiv');

function basic(basics) {
  var image =document.createElement("img");
    image.classList.add("proimg")
    image.src =basics.picture;

      var lc1 =document.createElement("div");
        lc1.classList.add("child1");
    left.appendChild(image);
  var head1=document.createElement("h1");
    head1.textContent =basics.name;
  var head2=document.createElement("h3");
    head2.textContent =basics.label;
  var hr1=document.createElement("hr");
  var head3=document.createElement("h4");
  head3.textContent =basics.email;
  var head4=document.createElement("h4");
  head4.textContent =basics.phone;

lc1.appendChild(head1);
lc1.appendChild(head2);
lc1.appendChild(hr1);
lc1.appendChild(head3);
lc1.appendChild(head4);
left.appendChild(lc1);




}
