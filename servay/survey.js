document.addEventListener('DOMContentLoaded', function () {
  const surveyForm = document.getElementById('surveyForm');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');
  const popupDetails = document.getElementById('popupDetails');

  submitBtn.addEventListener('click', function () {
    if (surveyForm.checkValidity()) {
      const formData = new FormData(surveyForm);
      let detailsText = '';
      for (const [name, value] of formData.entries()) {
        detailsText += `${name}: ${value}\n`;
      }
      popupDetails.textContent = detailsText;
      popup.style.display = 'block';
    } else {
      alert('Please fill in all required fields.');
    }
  });

  resetBtn.addEventListener('click', function () {
    surveyForm.reset();
  });

  closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
    surveyForm.reset();
  });

  window.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
