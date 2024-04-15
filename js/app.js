const tbody = document.querySelector("tbody")


document.addEventListener("DOMContentLoaded", () => {
    loadInfo()
})

function loadInfo() {
    codersMeta.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <td>${coder.nombre}</td>
            <td>
            <a href="${coder.linkGit}">${coder.usuarioGit}</a>
            </td>
            <td>
            <a href="${coder.linkPortafolio}">Ver</a>
            </td>
        </tr>
        `;
    })
}