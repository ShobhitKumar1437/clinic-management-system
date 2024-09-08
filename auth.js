document.getElementById('loginform').addEventListener('submit', function(e){
  e.preventDefault();

  const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const userEmail = userCredential.user.email;


      if (userEmail ==='myparsonal1437@gmail.com') {
        window.location.href = 'doctor.html';
      } else if (userEmail === 'kumarshobhit1027@gmail.com') {
        window.location.href = 'receptionist.html';
      }
    })
    .catch((error) => {
        document.getElementById('error-message').innerText = `Login failed: ${error.message}`;
    });
});