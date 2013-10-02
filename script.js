$(document).ready( function () {

/* Code that uses the jQuery ajax() function to retrieve some data from the server.
  The server file is "backend.php". After retrieving from the server, the code will then
  update a div element with the data. (The div element is located in "index.php")
  
*/

  $.ajax({
    url: "https://instructure.zendesk.com/api/v2/users/219379840.json",
    context: document.body,
    username: 'dan@instructure.com',
    password: 'Keep$afe9'
  }) 
  /* The function inside done() gets executed once the ajax request has been completed */
  .done(
    function(dataFromTheBackEnd) {
      /* The data from the back end is passed to the callback as a parameter */
      dataFromTheBackEnd = dataFromTheBackEnd.name;
      $("#me").html('test');
    }
  );
});