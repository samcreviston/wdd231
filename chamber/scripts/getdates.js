const cYearElement = document.getElementById("currentyear"); 
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

//Assignment stated: "You do not need to alter the document.lastModified native format".
if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "last modified: " + modified;
}

//copy and paste below into footer:
/*
<section id="footer-sec">
        <p>
            &copy;<span id="currentyear"></span>
            - Sam Creviston - Georgia
            <!--  or currentYear?  -->
        </p>
        <img src="images/GeorgiaFlag.png" alt="Georgia Flag" id="img-flag">
        </section>
        <p id="lastModified"></p>
*/