const tbody = document.querySelector("tbody")


document.addEventListener("DOMContentLoaded", () => {
    loadInfo()
})

function loadInfo() {
    codersMeta.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <td>${coder.nombre}</td>
            <td class="d-flex gap-2 ">
            <a href="${coder.linkGit}" target="_blank"> 
                <img class="rounded-circle" src="img/5284.jpg" height="20"/>
            ${coder.usuarioGit}</a>
            </td>
            <td>
            <a href="${coder.linkPortafolio}" target="_blank">Ver</a>
            </td>
        </tr>
        `;
    })
}