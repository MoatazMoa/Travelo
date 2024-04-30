let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInputMG");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULMG");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function changeTheme() {
  
  var body = document.body;
  
  
  if (body.classList.contains("light-themeMG")) {
    
    body.classList.remove("light-themeMG");
    body.classList.add("dark-themeMG");
  } else {
   
    body.classList.remove("dark-themeMG");
    body.classList.add("light-themeMG");
  }
}
