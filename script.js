document.addEventListener("DOMContentLoaded", function () {
    const userSection = document.getElementById("userSection");
    const usernameSpan = document.getElementById("username");
    const blockScreen = document.getElementById("blockScreen");

    // Verifica se o usuário está logado
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        userSection.style.display = "flex";
        usernameSpan.textContent = loggedInUser;
    } else {
        blockScreen.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Bloqueia a rolagem da página
    }
});

// Função de Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Você saiu da conta.");
    window.location.href = "../Registro/login.html"; // Redireciona para a tela de login
}
