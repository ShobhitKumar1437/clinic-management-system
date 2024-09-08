function loadPatients() {
    const patientsDiv = document.getElementById('patients');

    firebase.firestore().collection('patients').orderBy('createdAt', 'desc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const patientData = doc.data();
            patientsDiv.innerHTML += `
              <div>
                <p>Patient Name: ${patientData.name}</p>
                <p>Token: ${patientData.token}</p>
                <hr>
              </div>
            `;  
        });
      });
      
}

window.onload = loadPatients;