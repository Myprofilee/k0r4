
fetch('/assets/vendors/slider/kora.slider.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("div#kora-slider");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
//* Footer
fetch('/assets/vendors/footer/kora.footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("footer#kora-footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})