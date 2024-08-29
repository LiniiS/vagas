document.addEventListener('DOMContentLoaded', function () {
    fetch('jobs.json')
        .then(response => response.json())
        .then(data => {
            const offersGrid = document.getElementById('offers-grid');
            offersGrid.innerHTML = ''; // Limpa o conteúdo inicial

            data.forEach(job => {
                const card = document.createElement('article');
                card.className = 'offer-card';
                card.innerHTML = `
                    <img src="${job.image}" alt="Imagem da Vaga">
                    <h3>${job.title}</h3>
                    <p>${job.description}</p>
                    <button class="details-button" onclick="openModal(${job.id})">Detalhes</button>
                `;
                offersGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados das vagas:', error));
});

function openModal(id) {
    fetch('jobs.json')
        .then(response => response.json())
        .then(data => {
            const job = data.find(j => j.id == id);

            if (job) {
                document.getElementById('modal-title').innerText = job.title;
                document.getElementById('modal-bolsa').innerText = job.bolsa;
                document.getElementById('modal-horario').innerText = job.horario;
                document.getElementById('modal-local').innerText = job.local;
                document.getElementById('modal-curso').innerText = job.curso;

                document.getElementById('modal').style.display = 'block';
            }
        })
        .catch(error => console.error('Erro ao carregar os detalhes da vaga:', error));
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
