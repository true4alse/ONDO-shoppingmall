fetch('../header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#header-wrap').innerHTML = data
    })

fetch('../footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#footer-wrap').innerHTML = data
    })