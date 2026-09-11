/**
 * DADOS DO PORTFÓLIO
 */
const projetos = [
    {
        id: 1,
        titulo: "Sistema de Gestão Residencial",
        descricao: "Uma aplicação full-stack para gerenciamento de condomínios. Foco em experiência do usuário fluida e arquitetura escalável em Node.js.",
        imagemUrl: "", 
        linkDemo: "https://seulink.com",
        linkGithub: "https://github.com/seugithub/projeto"
    },
    {
        id: 2,
        titulo: "E-commerce de Móveis Minimalistas",
        descricao: "Plataforma de vendas construída com React e Next.js. Integração com API de pagamentos e painel de controle administrativo.",
        imagemUrl: "",
        linkDemo: "https://seulink.com",
        linkGithub: "https://github.com/seugithub/projeto"
    },
    {
        id: 3,
        titulo: "Dashboard de Análise de Dados",
        descricao: "Interface de visualização de métricas de engenharia utilizando Python e Vue.js. Design focado na clareza da informação.",
        imagemUrl: "",
        linkDemo: "https://seulink.com",
        linkGithub: "https://github.com/seugithub/projeto"
    }
];

/**
 * LÓGICA DE RENDERIZAÇÃO DOS PROJETOS
 */
function carregarProjetos() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projetos.forEach(projeto => {
        const conteudoImagem = projeto.imagemUrl !== "" 
            ? `<img src="${projeto.imagemUrl}" alt="${projeto.titulo}" style="width: 100%; height: 100%; object-fit: cover;">`
            : `<span>Imagem do Projeto (${projeto.titulo})</span>`;

        const cardHTML = `
            <article class="project-card">
                <div class="project-image-placeholder">
                    ${conteudoImagem}
                </div>
                <div class="project-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <div class="project-links">
                        <a href="${projeto.linkDemo}" target="_blank" class="project-link">Ver ao Vivo</a>
                        <a href="${projeto.linkGithub}" target="_blank" class="project-link">Código Fonte</a>
                    </div>
                </div>
            </article>
        `;

        grid.innerHTML += cardHTML;
    });
}

/**
 * LÓGICA DO MODAL DA FOTO (Lightbox)
 */
function configurarModalFoto() {
    const modal = document.getElementById("photo-modal");
    const containerFoto = document.getElementById("profile-photo-container");
    const imgMiniatura = document.getElementById("profile-img");
    const imgModal = document.getElementById("full-size-photo");
    const btnFechar = document.getElementById("close-modal");

    // Quando o usuário clicar na miniatura, abre o modal
    containerFoto.onclick = function() {
        modal.style.display = "block";
        // Pega a URL exata que está na miniatura e coloca na imagem grande
        imgModal.src = imgMiniatura.src; 
    }

    // Quando o usuário clicar no 'X', fecha o modal
    btnFechar.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar escuro fora da foto, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Inicializa tudo quando a página carrega
window.onload = function() {
    carregarProjetos();
    configurarModalFoto();
};