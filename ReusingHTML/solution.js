fetch("nav.html")
.then((response) => response.text())
.then(navHTML => {
    const container = document.querySelector("#navContainer")
    container.innerHTML = navHTML

    const currentPage = window.location.pathname.split("/").pop() || "index.html"

    const links = container.querySelectorAll("nav a")

    for(const link of links)
    {
        if (link.getAttribute("href") === currentPage)
        {
            link.classList.add("active")
        }
    }
})
.catch(error => console.log("Error:"+error));
