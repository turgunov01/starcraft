function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
        images += `<div class="show-sponsor">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
    })
    output.innerHTML = images
}


let input = document.querySelector('#custom-field')
let output = document.querySelector('output')
let imagesArray = []

input.addEventListener("change", () => {
    const file = input.files
    imagesArray.push(file[0])
    displayImages()
})