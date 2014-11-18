
$.ajax({
  url: '127.0.0.1:3000',
  type: 'GET',
  success: function(){console.log("yay it worked")},
  error: function (data) {
    console.error('chatterbox: Failed to get message');
  }
})
