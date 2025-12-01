```javascript
let modulo = 0;
const modulosTotal = 12;

// ============================================
// SUPABASE CONFIG
// ============================================
const SUPABASE_URL = 'https://seu-projeto.supabase.co'; // SUBSTITUA
const SUPABASE_KEY = 'eyJ0eXAi...'; // SUBSTITUA COM SUA CHAVE

// Inicializar Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let dados = {
    nome: '',
    telefone: '',
    data: '',
    bacia: '',
    latitude: '',
    longitude: '',
    referencia: '',
    terreno: '',
    volume: '',
    formato: '',
    temporalidade: '',
    aparencia: [],
    solo: '',
    uso: [],
    acesso: '',
    esgoto: '',
    ferrugem: '',
    qualidade: [],
    fotos: 0,
    cuidador: ''
};

// OPÇÕES
const opcoes = {
    bacia: [
        { icon: '🌊', text: 'Arrudas' },
        { icon: '🌊', text: 'Imbiruçu' },
        { icon: '🌊', text: 'Pampulha' },
        { icon: '🌊', text: 'Vargem das Flores' },
        { icon: '?', text: 'Outro' },
        { icon: '👤', text: 'Não sei' }
    ],
    terreno: [
        { icon: '🏔️', text: 'Talvegue' },
        { icon: '💧', text: 'Olho d\'água' },
        { icon: '🔧', text: 'Afloramento' },
        { icon: '⚫', text: 'Duto' },
        { icon: '🌱', text: 'Brejo' },
        { icon: '?', text: 'Outro' },
        { icon: '👤', text: 'Não sei' }
    ],
    volume: [
        { icon: '💧', text: 'Mínima', subtext: 'poquíssimo' },
        { icon: '💧💧', text: 'Pouca' },
        { icon: '💧💧💧', text: 'Média' },
        { icon: '💧💧💧💧', text: 'Significativa' },
        { icon: '💧💧💧💧💧', text: 'Grande', subtext: 'muita água' },
        { icon: '👤', text: 'Não sei' }
    ],
    formato: [
        { icon: '💧', text: 'Pontual', subtext: 'ponto único' },
        { icon: '🌊', text: 'Difusa', subtext: 'espalhada' },
        { icon: '👤', text: 'Não sei' }
    ],
    temporalidade: [
        { icon: '🔄', text: 'Perene', subtext: 'o ano todo' },
        { icon: '⏰', text: 'Intermitente', subtext: 'seca às vezes' },
        { icon: '👤', text: 'Não sei' }
    ],
    aparencia: [
        { icon: '🌿', text: 'Natural' },
        { icon: '🚧', text: 'Drenada' },
        { icon: '🏢', text: 'Confinada' },
        { icon: '🚜', text: 'Aterrada' },
        { icon: '?', text: 'Outro' },
        { icon: '👤', text: 'Não sei' }
    ],
    solo: [
        { icon: '🌱', text: 'Permeável', subtext: 'terra, grama' },
        { icon: '🏗️', text: 'Impermeável', subtext: 'cimento, pedra' },
        { icon: '?', text: 'Outro' },
        { icon: '👤', text: 'Não sei' }
    ],
    uso: [
        { icon: '🚿', text: 'Manutenção do corpo hídrico' },
        { icon: '🏊', text: 'Recreação' },
        { icon: '🌾', text: 'Aquicultura' },
        { icon: '🌍', text: 'Paisagismo' },
        { icon: '🚽', text: 'Afastamento de esgotos' },
        { icon: '💧', text: 'Consumo humano' },
        { icon: '🏠', text: 'Uso Doméstico' },
        { icon: '🐴', text: 'Dessedentação animal' },
        { icon: '💧', text: 'Irrigação' },
        { icon: '?', text: 'Outra' },
        { icon: '👤', text: 'Não sei' }
    ],
    acesso: [
        { icon: '✓', text: 'Fácil' },
        { icon: '➖', text: 'Médio' },
        { icon: '✗', text: 'Difícil' },
        { icon: '👤', text: 'Não sei' }
    ],
    esgoto: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' },
        { icon: '👤', text: 'Não sei' }
    ],
    ferrugem: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' },
        { icon: '👤', text: 'Não sei' }
    ],
    qualidade: [
        { icon: '✨', text: 'Limpa' },
        { icon: '🟢', text: 'Poluída' },
        { icon: '📦', text: 'Com materiais sólidos', subtext: 'fixo' },
        { icon: '?', text: 'Outra' },
        { icon: '👤', text: 'Não sei' }
    ],
    cuidador: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' },
        { icon: '❓', text: 'Indefinido' }
    ]
};

// RENDERIZAR OPÇÕES
function renderOpcoes(containerId, tipo, tipo_input = 'radio') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = opcoes[tipo].map((opt, idx) => `
        <label class="choice-btn">
            <input type="${tipo_input}" name="${tipo}" value="${opt.text}">
            <span class="choice-icon">${opt.icon}</span>
            <div class="choice-text">
                <div>${opt.text}</div>
                ${opt.subtext ? `<div class="choice-subtext">${opt.subtext}</div>` : ''}
            </div>
        </label>
    `).join('');

    container.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', function() {
            container.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('selected'));
            if (this.type === 'radio') {
                this.parentElement.classList.add('selected');
                dados[tipo] = this.value;
            } else {
                document.querySelectorAll(`input[name="${tipo}"]:checked`).forEach(cb => {
                    cb.parentElement.classList.add('selected');
                });
                dados[tipo] = Array.from(document.querySelectorAll(`input[name="${tipo}"]:checked`)).map(cb => cb.value);
            }
        });
    });
}

// NAVEGAÇÃO
function proximoModulo() {
    if (modulo === 0) {
        modulo = 1;
    } else if (modulo < modulosTotal) {
        modulo++;
    } else if (modulo === modulosTotal) {
        modulo = modulosTotal + 1;
    } else {
        modulo = modulosTotal + 2;
    }
    atualizarModulo();
}

function voltarModulo() {
    if (modulo > 1) modulo--;
    atualizarModulo();
}

function atualizarModulo() {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    
    if (modulo === 0) {
        document.getElementById('module-inicial').classList.add('active');
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('etapaAtual').textContent = '0';
    } else if (modulo <= modulosTotal) {
        document.getElementById(`module-${modulo}`).classList.add('active');
        document.getElementById('progressFill').style.width = (modulo / (modulosTotal + 2)) * 100 + '%';
        document.getElementById('etapaAtual').textContent = modulo;
    } else if (modulo === modulosTotal + 1) {
        document.getElementById('module-resumo').classList.add('active');
        document.getElementById('progressFill').style.width = '90%';
        document.getElementById('etapaAtual').textContent = '15';
        mostrarResumo();
    } else {
        document.getElementById('module-sucesso').classList.add('active');
        document.getElementById('progressFill').style.width = '100%';
        document.getElementById('etapaAtual').textContent = '16';
    }
    
    window.scrollTo(0, 0);
}

// RESUMO
function mostrarResumo() {
    const summary = document.getElementById('summaryContent');
    let html = '';
    
    for (const [key, value] of Object.entries(dados)) {
        if (value && value !== '0' && value !== '') {
            let displayValue = Array.isArray(value) ? value.join(', ') : value;
            html += `<div class="summary-item">
                <div class="summary-label">${key}</div>
                <div class="summary-value">${displayValue}</div>
            </div>`;
        }
    }
    
    summary.innerHTML = html;
}

// ENVIAR PARA SUPABASE
async function enviarFormulario() {
    dados.nome = document.getElementById('nome').value;
    dados.telefone = document.getElementById('telefone').value;
    dados.data = document.getElementById('data').value;
    dados.referencia = document.getElementById('referencia').value;
    
    // Validação
    if (!dados.nome || !dados.telefone) {
        mostrarFeedback('⚠️ Preencha NOME e TELEFONE!');
        return;
    }
    
    try {
        // Enviar para Supabase
        const { data, error } = await supabase
            .from('nascentes')
            .insert([dados]);
        
        if (error) {
            console.error('Erro Supabase:', error);
            mostrarFeedback('❌ Erro ao enviar: ' + error.message);
            return;
        }
        
        // Sucesso!
        localStorage.setItem('nascentes_data', JSON.stringify(dados));
        localStorage.setItem('lastSync', new Date().toLocaleString('pt-BR'));
        modulo = modulosTotal + 2;
        atualizarModulo();
        
    } catch (error) {
        console.error('Erro:', error);
        mostrarFeedback('❌ Erro inesperado: ' + error.message);
    }
}

// GPS
function obterGPS() {
    if (!navigator.geolocation) {
        alert('GPS não disponível neste dispositivo');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(pos => {
        dados.latitude = pos.coords.latitude.toFixed(6);
        dados.longitude = pos.coords.longitude.toFixed(6);
        document.getElementById('coordenadas').value = `${dados.latitude}, ${dados.longitude}`;
    });
}

// FOTOS
function adicionarFoto() {
    dados.fotos++;
    document.getElementById('fotoInfo').textContent = `Fotos: ${dados.fotos}`;
}

// MODAL
function mostrarFeedback(msg) {
    document.getElementById('feedbackMessage').textContent = msg;
    document.getElementById('feedbackModal').classList.add('show');
}

function fecharModal() {
    document.getElementById('feedbackModal').classList.remove('show');
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('data').valueAsDate = new Date();
    
    renderOpcoes('baciaChoices', 'bacia');
    renderOpcoes('terrainyChoices', 'terreno');
    renderOpcoes('volumeChoices', 'volume');
    renderOpcoes('formatoChoices', 'formato');
    renderOpcoes('temporalidadeChoices', 'temporalidade');
    renderOpcoes('aparenciaChoices', 'aparencia', 'checkbox');
    renderOpcoes('soloChoices', 'solo');
    renderOpcoes('usoChoices', 'uso', 'checkbox');
    renderOpcoes('acessoChoices', 'acesso');
    renderOpcoes('esgotoChoices', 'esgoto');
    renderOpcoes('ferrugemChoices', 'ferrugem');
    renderOpcoes('qualidadeChoices', 'qualidade', 'checkbox');
    renderOpcoes('cuidadorChoices', 'cuidador');
    
    atualizarModulo();
});
```
