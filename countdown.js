document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
  
    var endDate = new Date(); // Date de fin
    endDate.setDate(endDate.getDate() + 7); // Ajouter une semaine
  
    var countdownInterval = setInterval(function () {
      var now = new Date();
      var timeDifference = endDate.getTime() - now.getTime();
  
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      countdownElement.textContent = days + " jours " + hours + " heures " + minutes + " minutes " + seconds + " secondes ";
  
      if (timeDifference < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Temps écoulé !';
      }
    }, 1000);
  });