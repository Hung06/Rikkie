let ul=document.getElementById("myUL");

fetch("http://localhost:3000/todos")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    
    data=data.map(function(e,i){
      return `<li ${e.status ? "class='checked'" : ""} id="${e.id}">${e.content}
        <span class="close">x</span>
      </li>`;
    });
    console.log(data);
    for(let li of data){
      ul.innerHTML+=li;
      var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    let id = div.id;
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE"
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  }
}
    }
  })
  
  .catch();

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    let id = ev.target.id;
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: ev.target.className === "checked" ? true : false
      })
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    fetch("http://localhost:3000/todos",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        content:inputValue
      })
    })
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.id =data.id;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      let deleteid = div.id;
      fetch(`http://localhost:3000/todos/${deleteid}`, {
        method: "DELETE"
      })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
    }
  }
}