document.getElementById('token-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const token = Math.floor(Math.random() * 10000);

    firebase.firestore().collection('patients').add({
        name: patientName,
        token: token,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
        alert('Token generated successfully!');
        document.getElementById('token-form').reset();
    })
    .catch((error) => {
        console.error('Error adding patient:', error);
    });
});