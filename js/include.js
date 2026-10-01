fetch('../header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#header-wrap').innerHTML = data
    })