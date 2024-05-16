function showCustomAlert(message) {
    var alertBox = document.createElement('div');
    alertBox.setAttribute('id', 'customAlert');
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.padding = '20px';
    alertBox.style.backgroundColor = '#f8d7da';
    alertBox.style.color = '#721c24';
    alertBox.style.border = '1px solid #f5c6cb';
    alertBox.style.borderRadius = '5px';
    alertBox.style.zIndex = '9999';
    
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.marginTop = '10px';
    closeButton.style.padding = '5px 10px';
    closeButton.style.backgroundColor = '#dc3545';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '3px';
    closeButton.style.cursor = 'pointer';
    
    closeButton.addEventListener('click', function() {
        alertBox.style.display = 'none';
    });
    
    alertBox.appendChild(messageElement);
    alertBox.appendChild(closeButton);
    
    document.body.appendChild(alertBox);
}