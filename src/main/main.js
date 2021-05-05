$('.btn-addTask').click(function() {
  searchimagem()
})

$('input:text').on('keyup', (e) =>{
  let task = this.$('input:text').val()
  if(e.keyCode === 13 && task){
    searchimagem()

    $('input:text').val("").focus()

  }
})

function searchimagem () {   

  var search = $('#procura').val()

  const options = {

    method: 'GET',
    mode: 'cors',
    cache: 'default'

  }

  fetch(`https://api.giphy.com/v1/gifs/search?api_key=ElGQnzwfasQDq63rUbXUTk8WnPxCav2U&limit=20&rating=G&q=`+`${search}/json/`, options)


  .then(function(response){
    response.json().then(function(data){

    var html = ''

  
    for(i = 0 ; 20 > i ; i++) {
      html = html + '<div class="col-3 py-3">'+'<img src="'+data.data[i].images.fixed_height.url+'" alt="">'+'<p>'+data.data[i].title+'</p>'+'</div>'
      console.log(html)
    }

    $('#imagem').html(html)
    });
    
  })

  .catch(function(err){ 
  console.error('Failed retrieving information', err);
  
});

}
