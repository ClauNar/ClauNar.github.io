console.log('webapps tab loaded');

const accessInfoContainer = document.querySelector(".access-info");

function updateAccessInfo() {
    if (window.innerWidth <= 768) {
        accessInfoContainer.textContent = "";
    } else {
        accessInfoContainer.textContent = "Hover over the screens to get more info...";
    }
}

window.addEventListener("resize", updateAccessInfo);
window.addEventListener("load", updateAccessInfo);