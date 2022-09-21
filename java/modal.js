var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
var captionText = document.getElementById("caption");

Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
    item.addEventListener("click", event => {
    modalEle.style.display = "flex";
    modalImage.src = event.target.src;
    captionText.innerHTML = event.target.alt;
    });
});


document.querySelector(".close").addEventListener("click", () => {
    closeModal();
});
document.querySelector(".modal").addEventListener("click", () => {
    closeModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

function closeModal() {
    modalEle.style.display = "none";
};