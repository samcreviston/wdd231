const cYearElement = document.getElementById("currentyear"); 
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "last modified: " + modified;
}

//copy and paste below into footer:
/*
<section id="footer-sec">
        <p>
            &copy;<span id="currentyear"></span>

        </p>
        </section>
        <p id="lastModified"></p>
*/