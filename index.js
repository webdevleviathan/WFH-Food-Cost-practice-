function uploadFile() {
    var input = document.getElementById('file-upload');
    var file = input.files[0];
    var formData = new FormData();
    formData.append('file', file);

    // Perform AJAX request or submit the form to upload the file
    // You can customize this part according to your needs

    // Example AJAX request using fetch
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // Handle the response from the server
      console.log(response);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
  }