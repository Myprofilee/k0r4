// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
    },

];

showgallery(galleryarray);

// create function to show card
function showgallery(curarra) {
    document.getElementById("kora-header").innerText = "";

    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("kora-header").innerHTML += `
        <ul class="menu-list ms-lg-auto">
            <li class="menu-item">
                <a href="/" class="menu-link">Home</a>
            </li>
            <li class="menu-item">
                <a href="/m/explore/" class="menu-link">Explore</a>
            </li>
            <li class="menu-item">
                <a href="/m/ui-design/" class="menu-link">UI Design</a>
            </li>
        </ul>
               `
    }

}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("378962");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}