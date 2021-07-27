const form = $(".form")

form.submit(function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Thank-you For Entering!',
        text: 'A Member of our team will be in touch if you are the winner!',
        icon: 'success',
        confirmButtonText: 'Fingers Crossed'
      });
});
