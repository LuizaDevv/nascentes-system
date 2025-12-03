// ============================================
// SUPABASE CONFIG
// ============================================
const SUPABASE_URL = 'https://zuvmmtcjllnvpzrrrpkj.supabase.co';
<<<<<<< HEAD
const SUPABASE_KEY = 'sb_publishable_Wy1F5cpBP_CuNAMKArBqCA_H7eGmOOt';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

=======
const SUPABASE_KEY = 'sb_secret_jkyABX7aItZaHcI9A68VeA_rpprrK3a';
// Inicializar Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
>>>>>>> 44cae79 (Update app.js)
// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let modulo = 0;
<<<<<<< HEAD
const modulosTotal = 10;

let dados = {
    responsavel_nome: '',
    responsavel_telefone: '',
    tem_cuidador: '',
    cuidador_nome: '',
    cuidador_telefone: '',
    latitude: '',
    longitude: '',
    endereco: '',
    ponto_referencia: '',
    data_registro: '',
    bacia: '',
    regional: '',
    forma: '',
    aspectoVisual: [],
    condicaoObservada: [],
    vazao: '',
    uso: [],
    analise_relevo: '',
    migracao_ferro: '',
    cobertura_solo: '',
    formacao_canal: '',
    esgoto_deposito: '',
    acesso: '',
    area_verde: '',
    fotos_qtd: 0,
    informacoes_adicionais: ''
};

=======
const modulosTotal = 12;
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
>>>>>>> 44cae79 (Update app.js)
// ============================================
// OPÇÕES DOS FORMULÁRIOS
// ============================================
const opcoes = {
<<<<<<< HEAD
    temCuidador: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' }
    ],
    bacia: [
        { icon: '🌊', text: 'Arrudas' },
        { icon: '🌊', text: 'Imbiruçu' },
        { icon: '🌊', text: 'Pampulha' },
        { icon: '🌊', text: 'Vargem das Flores' },
        { icon: '?', text: 'Outro' }
    ],
    regional: [
        { icon: '🏘️', text: 'Eldorado' },
        { icon: '🏭', text: 'Industrial' },
        { icon: '🛣️', text: 'Nacional' },
        { icon: '🌳', text: 'Petrolândia' },
        { icon: '🏞️', text: 'Ressaca' },
        { icon: '💧', text: 'Riacho' },
        { icon: '🏢', text: 'Sede' },
        { icon: '🌲', text: 'Vargem das Flores' },
        { icon: '?', text: 'Outro' }
    ],
    forma: [
        { icon: '💧', text: 'Pontual', subtext: 'ponto único' },
        { icon: '🌊', text: 'Difusa', subtext: 'espalhada' },
        { icon: '?', text: 'Outro' }
    ],
    aspectoVisual: [
        { icon: '✨', text: 'Limpa' },
        { icon: '🟢', text: 'Poluída' },
        { icon: '📦', text: 'Presença de materiais sólidos' },
        { icon: '?', text: 'Outro' }
    ],
    condicaoObservada: [
        { icon: '🌿', text: 'Natural' },
        { icon: '🚧', text: 'Drenada' },
        { icon: '🏢', text: 'Confinada' },
        { icon: '🚜', text: 'Aterrada' },
        { icon: '?', text: 'Outra' }
    ],
    vazao: [
        { icon: '💧', text: 'Mínima', subtext: 'poquíssimo' },
        { icon: '💧💧', text: 'Pouca' },
        { icon: '💧💧💧', text: 'Média' },
        { icon: '💧💧💧💧', text: 'Significativa' },
        { icon: '💧💧💧💧💧', text: 'Grande', subtext: 'muita água' },
        { icon: '?', text: 'Outro' }
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
        { icon: '?', text: 'Outra' }
    ],
    analiseRelevo: [
        { icon: '🏔️', text: 'Talvegue' },
        { icon: '💧', text: 'Olho d\'água' },
        { icon: '🔧', text: 'Afloramento' },
        { icon: '⚫', text: 'Duto' },
        { icon: '🌱', text: 'Brejo' },
        { icon: '?', text: 'Outra' }
    ],
    migracaoFerro: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' },
        { icon: '?', text: 'Outro' }
    ],
    coberturaSolo: [
        { icon: '🌱', text: 'Permeável', subtext: 'terra, grama' },
        { icon: '🏗️', text: 'Impermeável', subtext: 'cimento, pedra' },
        { icon: '?', text: 'Outro' }
    ],
    formacaoCanal: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' },
        { icon: '?', text: 'Outro' }
    ],
    esgoroDeposito: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' },
        { icon: '?', text: 'Outro' }
    ],
    acesso: [
        { icon: '✓', text: 'Fácil' },
        { icon: '➖', text: 'Médio' },
        { icon: '✗', text: 'Difícil' },
        { icon: '?', text: 'Outro' }
    ],
    areaVerde: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' }
    ]
};

=======
bacia: [
{ icon: '🌊', text: 'Arrudas' },
🔧 ARQUIVO app.js CORRIGIDO E COMPLETO
{ icon: '🌊', text: 'Imbiruçu' },
{ icon: '🌊', text: 'Pampulha' },
{ icon: '🌊', text: 'Vargem das Flores' },
{ icon: '?', text: 'Outro' },
{ icon: '👤', text: 'Não sei' }
],
terreno: [
{ icon: '🏔️', text: 'Talvegue' },
{ icon: '💧', text: 'Olho d'água' },
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
>>>>>>> 44cae79 (Update app.js)
// ============================================
// RENDERIZAR OPÇÕES
// ============================================
function renderOpcoes(containerId, tipo, tipo_input = 'radio') {
<<<<<<< HEAD
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = opcoes[tipo].map(opt => `
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
        input.addEventListener('change', function () {
            container.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('selected'));
            if (this.type === 'radio') {
                this.parentElement.classList.add('selected');
                dados[tipo] = this.value;
            } else {
                document.querySelectorAll(`input[name="${tipo}"]:checked`).forEach(cb => {
                    cb.parentElement.classList.add('selected');
                });
                dados[tipo] = Array.from(
                    document.querySelectorAll(`input[name="${tipo}"]:checked`)
                ).map(cb => cb.value);
            }
            // Monitora campos Outro
            monitorarOutro(tipo, tipo_input);
        });
    });
}

// ============================================
// MONITORAR CAMPOS OUTRO DINÂMICOS
// ============================================
function monitorarOutro(nomeCampo, tipoInput) {
    const selecionados = Array.isArray(dados[nomeCampo]) 
        ? dados[nomeCampo] 
        : (dados[nomeCampo] ? [dados[nomeCampo]] : []);
    
    const temOutro = selecionados.some(val => val === 'Outro' || val === 'Outra');
    const groupId = `${nomeCampo}OutroGroup`;
    const inputId = `${nomeCampo}Outro`;
    
    const group = document.getElementById(groupId);
    if (group) {
        group.style.display = temOutro ? 'block' : 'none';
    }
    
    // Limpar se desmarcar Outro
    if (!temOutro) {
        const input = document.getElementById(inputId);
        if (input) input.value = '';
    }
}

// ============================================
// VALIDAÇÃO POR MÓDULO
// ============================================
function validarModuloAtual() {
    let erro = '';

    switch (modulo) {
        case 1:
            if (!document.getElementById('responsavel_nome').value.trim()) erro = '⚠️ Preencha o Nome do Responsável';
            if (!document.getElementById('responsavel_telefone').value.trim()) erro = '⚠️ Preencha o Telefone';
            if (!dados.tem_cuidador) erro = '⚠️ Indique se há cuidador';
            break;
        case 2:
            if (!document.getElementById('endereco').value.trim()) erro = '⚠️ Preencha o Endereço';
            if (!document.getElementById('ponto_referencia').value.trim()) erro = '⚠️ Preencha o Ponto de Referência';
            if (!document.getElementById('data_registro').value) erro = '⚠️ Escolha a Data';
            if (!dados.latitude || !dados.longitude) erro = '⚠️ Preencha as Coordenadas (use o botão de GPS)';
            break;
        case 3:
            if (!dados.bacia) erro = '⚠️ Escolha a Bacia Hidrográfica';
            break;
        case 4:
            if (!dados.regional) erro = '⚠️ Escolha a Regional Administrativa';
            break;
        case 5:
            if (!dados.forma) erro = '⚠️ Escolha a Forma';
            if (!Array.isArray(dados.aspectoVisual) || dados.aspectoVisual.length === 0) {
                erro = '⚠️ Escolha pelo menos um Aspecto Visual';
            }
            break;
        case 6:
            if (!Array.isArray(dados.condicaoObservada) || dados.condicaoObservada.length === 0) {
                erro = '⚠️ Escolha a Condição Observada';
            }
            if (!dados.vazao) erro = '⚠️ Escolha a Vazão';
            break;
        case 7:
            if (!Array.isArray(dados.uso) || dados.uso.length === 0) {
                erro = '⚠️ Escolha pelo menos um Uso';
            }
            if (!dados.analise_relevo) erro = '⚠️ Escolha a Análise do Relevo';
            break;
        case 8:
            if (!dados.migracao_ferro) erro = '⚠️ Indique sobre Migração de Ferro';
            if (!dados.cobertura_solo) erro = '⚠️ Escolha a Cobertura do Solo';
            if (!dados.formacao_canal) erro = '⚠️ Indique sobre Formação de Canal';
            break;
        case 9:
            if (!dados.esgoto_deposito) erro = '⚠️ Indique sobre Deposição de Esgoto';
            if (!dados.acesso) erro = '⚠️ Escolha o Acesso';
            if (!dados.area_verde) erro = '⚠️ Indique se está em área verde';
            break;
        case 10:
            // Módulo 10 não tem validação obrigatória
            break;
    }

    if (erro) {
        mostrarFeedback(erro);
        return false;
    }
    return true;
}

=======
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
container.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remov
if (this.type === 'radio') {
this.parentElement.classList.add('selected');
dados[tipo] = this.value;
} else {
document.querySelectorAll(`input[name="${tipo}"]:checked`).forEach(cb
cb.parentElement.classList.add('selected');
});
dados[tipo] = Array.from(document.querySelectorAll(`input[name="${tip
}
});
});
}
>>>>>>> 44cae79 (Update app.js)
// ============================================
// NAVEGAÇÃO
// ============================================
function proximoModulo() {
<<<<<<< HEAD
    if (modulo > 0) {
        const valido = validarModuloAtual();
        if (!valido) {
            return;
        }
    }

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
        document.getElementById('moduloAtual').textContent = modulo;
    } else if (modulo === modulosTotal + 1) {
        document.getElementById('module-resumo').classList.add('active');
        document.getElementById('progressFill').style.width = '90%';
        document.getElementById('etapaAtual').textContent = '11';
        mostrarResumo();
    } else {
        document.getElementById('module-sucesso').classList.add('active');
        document.getElementById('progressFill').style.width = '100%';
        document.getElementById('etapaAtual').textContent = '11';
    }

    window.scrollTo(0, 0);
}

// ============================================
// MONITORA CUIDADOR
// ============================================
document.addEventListener('change', function (e) {
    if (e.target.name === 'temCuidador') {
        dados.tem_cuidador = e.target.value;
        const isSim = e.target.value === 'Sim';
        document.getElementById('cuidadorInfoGroup').style.display = isSim ? 'block' : 'none';
        document.getElementById('cuidadorTelefoneGroup').style.display = isSim ? 'block' : 'none';
    }
});

=======
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
document.getElementById('progressFill').style.width = (modulo / (modulosTot
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
>>>>>>> 44cae79 (Update app.js)
// ============================================
// RESUMO
// ============================================
function mostrarResumo() {
<<<<<<< HEAD
    const summary = document.getElementById('summaryContent');
    let html = '';

    for (const [key, value] of Object.entries(dados)) {
        if (value && value !== '0' && value !== '' && (!Array.isArray(value) || value.length > 0)) {
            const displayValue = Array.isArray(value) ? value.join(', ') : value;
            const label = key
                .replace(/_/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
            html += `
                <div class="summary-item">
                    <div class="summary-label">${label}</div>
                    <div class="summary-value">${displayValue}</div>
                </div>
            `;
        }
    }

    summary.innerHTML = html;
}

// ============================================
// PROCESSAR CAMPOS OUTRO ANTES DE ENVIAR
// ============================================
function processarOutros() {
    // Lista de campos que têm opção Outro
    const camposComOutro = [
        'bacia', 'regional', 'forma', 'aspectoVisual', 
        'condicaoObservada', 'vazao', 'uso', 'analiseRelevo',
        'migracaoFerro', 'coberturaSolo', 'formacao_canal',
        'esgoto_deposito', 'acesso'
    ];

    camposComOutro.forEach(campo => {
        const inputOutro = document.getElementById(`${campo}Outro`);
        if (inputOutro && inputOutro.value.trim()) {
            const valor = inputOutro.value.trim();
            
            if (Array.isArray(dados[campo])) {
                // Para checkboxes (arrays)
                if (!dados[campo].includes(valor)) {
                    dados[campo].push(valor);
                }
            } else if (dados[campo] === 'Outro' || dados[campo] === 'Outra') {
                // Para radio buttons (strings)
                dados[campo] = valor;
            }
        }
    });
}

=======
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
>>>>>>> 44cae79 (Update app.js)
// ============================================
// ENVIAR PARA SUPABASE
// ============================================
async function enviarFormulario() {
<<<<<<< HEAD
    dados.responsavel_nome = document.getElementById('responsavel_nome').value;
    dados.responsavel_telefone = document.getElementById('responsavel_telefone').value;
    dados.endereco = document.getElementById('endereco').value;
    dados.ponto_referencia = document.getElementById('ponto_referencia').value;
    dados.data_registro = document.getElementById('data_registro').value;
    dados.cuidador_nome = document.getElementById('cuidador_nome').value;
    dados.cuidador_telefone = document.getElementById('cuidador_telefone').value;
    dados.informacoes_adicionais = document.getElementById('informacoes_adicionais').value;

    // Processar campos Outro antes de enviar
    processarOutros();

    if (!dados.responsavel_nome || !dados.responsavel_telefone) {
        mostrarFeedback('⚠️ Dados incompletos. Por favor, volte e verifique.');
        return;
    }

    try {
        const { error } = await supabase.from('nascentes').insert([dados]);
        if (error) {
            console.error('Erro Supabase:', error);
            mostrarFeedback('❌ Erro ao enviar: ' + error.message);
            return;
        }

        localStorage.setItem('nascentes_data', JSON.stringify(dados));
        localStorage.setItem('lastSync', new Date().toLocaleString('pt-BR'));
        modulo = modulosTotal + 2;
        atualizarModulo();
    } catch (error) {
        console.error('Erro inesperado:', error);
        mostrarFeedback('❌ Erro inesperado: ' + error.message);
    }
}

=======
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
>>>>>>> 44cae79 (Update app.js)
// ============================================
// GPS
// ============================================
function obterGPS() {
<<<<<<< HEAD
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

=======
if (!navigator.geolocation) {
alert('GPS não disponível neste dispositivo');
return;
}
navigator.geolocation.getCurrentPosition(pos => {
dados.latitude = pos.coords.latitude.toFixed(6);
dados.longitude = pos.coords.longitude.toFixed(6);
document.getElementById('coordenadas').value = `${dados.latitude}, ${dados.
});
}
>>>>>>> 44cae79 (Update app.js)
// ============================================
// FOTOS
// ============================================
function adicionarFoto() {
<<<<<<< HEAD
    if (dados.fotos_qtd < 3) {
        dados.fotos_qtd++;
        document.getElementById('fotoInfo').textContent = `Fotos: ${dados.fotos_qtd}/3`;
    } else {
        mostrarFeedback('⚠️ Máximo de 3 fotos permitidas');
    }
}

=======
dados.fotos++;
document.getElementById('fotoInfo').textContent = Fotos: ${dados.fotos};
}
>>>>>>> 44cae79 (Update app.js)
// ============================================
// MODAL
// ============================================
function mostrarFeedback(msg) {
<<<<<<< HEAD
    document.getElementById('feedbackMessage').textContent = msg;
    document.getElementById('feedbackModal').classList.add('show');
}

function fecharModal() {
    document.getElementById('feedbackModal').classList.remove('show');
}

=======
document.getElementById('feedbackMessage').textContent = msg;
document.getElementById('feedbackModal').classList.add('show');
}
function fecharModal() {
document.getElementById('feedbackModal').classList.remove('show');
}
>>>>>>> 44cae79 (Update app.js)
// ============================================
// INICIALIZAR
// ============================================
document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    document.getElementById('data_registro').valueAsDate = new Date();

    renderOpcoes('temCuidadorChoices', 'temCuidador');
    renderOpcoes('baciaChoices', 'bacia');
    renderOpcoes('regionalChoices', 'regional');
    renderOpcoes('formaChoices', 'forma');
    renderOpcoes('aspectoVisualChoices', 'aspectoVisual', 'checkbox');
    renderOpcoes('condicaoObservadaChoices', 'condicaoObservada', 'checkbox');
    renderOpcoes('vazaoChoices', 'vazao');
    renderOpcoes('usoChoices', 'uso', 'checkbox');
    renderOpcoes('analiseReleveChoices', 'analiseRelevo');
    renderOpcoes('migracaoFerroChoices', 'migracaoFerro');
    renderOpcoes('coberturaSoloChoices', 'coberturaSolo');
    renderOpcoes('formacaoCanalChoices', 'formacaoCanal');
    renderOpcoes('esgoroDepositoChoices', 'esgoroDeposito');
    renderOpcoes('acessoChoices', 'acesso');
    renderOpcoes('areaVerdeChoices', 'areaVerde');

    atualizarModulo();
});
=======
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
>>>>>>> 44cae79 (Update app.js)
