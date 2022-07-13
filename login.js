const b = document.getElementById('b');

b.addEventListener('click', function validate() {
  b.style.backgroundColor = 'red';
  b.style.color = 'white';
});


function make(){
  let use = getElementById('form1Example1').value;
  let pas = getElementById('form1Example13').value;

  if(use.length > 5 && pas.length > 1)
  {
    alert("login successfully");
  }
  else{
    alert("failed");
  }
}