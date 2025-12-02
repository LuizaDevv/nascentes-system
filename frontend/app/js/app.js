// ============================================
// SUPABASE CONFIG
// ============================================
const SUPABASE_URL = 'https://zuvmmtcjllnvpzrrrpkj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Wy1F5cpBP_CuNAMKArBqCA_H7eGmOOt';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let modulo = 0;
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
    aspecto_visual: [],
    condicao_observada: [],
    vazao: '',
    uso: [],
    analise_relevo: '',
    migracao_ferro: '',
    cobertura_solo: '',
    formacao_canal: '',
    esgoto_deposito: '',
    acesso: '',
    area_verde: '',
    fotos_qtd: 0
};

// ============================================
// OPÇÕES DOS FORMULÁRIOS (SEM "NÃO SEI")
// ============================================
const opcoes = {
    temCuidador: [
        { icon: '✓', text: 'Sim' },
        { icon: '✗', text: 'Não' },
        { icon: '❓', text: 'Potencial' }
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

// ============================================
// RENDERIZAR OPÇÕES
// ============================================
function renderOpcoes(containerId, tipo, tipo_input = 'radio') {
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
        });
    });
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
            if (dados.aspecto_visual.length === 0) erro = '⚠️ Escolha pelo menos um Aspecto Visual';
            break;
        case 6:
            if (dados.condicao_observada.length === 0) erro = '⚠️ Escolha a Condição Observada';
            if (!dados.vazao) erro = '⚠️ Escolha a Vazão';
            break;
        case 7:
            if (dados.uso.length === 0) erro = '⚠️ Escolha pelo menos um Uso';
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
            if (!dados.area_verde && dados.area_verde !== false) erro = '⚠️ Indique se está em área verde';
            break;
    }

    if (erro) {
        mostrarFeedback(erro);
        return false;
    }
    return true;
}

// ============================================
// NAVEGAÇÃO
// ============================================
function proximoModulo() {
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
        const isSim = e.target.value === 'Sim' || e.target.value === 'Potencial';
        document.getElementById('cuidadorInfoGroup').style.display = isSim ? 'block' : 'none';
        document.getElementById('cuidadorTelefoneGroup').style.display = isSim ? 'block' : 'none';
    }
});

// ============================================
// RESUMO
// ============================================
function mostrarResumo() {
    const summary = document.getElementById('summaryContent');
    let html = '';

    for (const [key, value] of Object.entries(dados)) {
        if (value && value !== '0' && value !== '' && value.length > 0) {
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
// ENVIAR PARA SUPABASE
// ============================================
async function enviarFormulario() {
    dados.responsavel_nome = document.getElementById('responsavel_nome').value;
    dados.responsavel_telefone = document.getElementById('responsavel_telefone').value;
    dados.endereco = document.getElementById('endereco').value;
    dados.ponto_referencia = document.getElementById('ponto_referencia').value;
    dados.data_registro = document.getElementById('data_registro').value;
    dados.cuidador_nome = document.getElementById('cuidador_nome').value;
    dados.cuidador_telefone = document.getElementById('cuidador_telefone').value;

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

// ============================================
// GPS
// ============================================
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

// ============================================
// FOTOS
// ============================================
function adicionarFoto() {
    if (dados.fotos_qtd < 3) {
        dados.fotos_qtd++;
        document.getElementById('fotoInfo').textContent = `Fotos: ${dados.fotos_qtd}/3`;
    } else {
        mostrarFeedback('⚠️ Máximo de 3 fotos permitidas');
    }
}

// ============================================
// MODAL
// ============================================
function mostrarFeedback(msg) {
    document.getElementById('feedbackMessage').textContent = msg;
    document.getElementById('feedbackModal').classList.add('show');
}

function fecharModal() {
    document.getElementById('feedbackModal').classList.remove('show');
}

// ============================================
// INICIALIZAR
// ============================================
document.addEventListener('DOMContentLoaded', () => {
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
