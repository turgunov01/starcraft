let dropdown = document.querySelectorAll('.dropdown-open')
for (let i = 0; i < dropdown.length; i++) {
    let dropdownOpen = dropdown[i].parentElement
    dropdown[i].addEventListener('click', function (e) {
        dropdownOpen.classList.toggle('visible')
    })
}

