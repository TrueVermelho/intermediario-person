/* Menu toggle */
function toggleMenu() { document.getElementById('sidebar').classList.toggle('open'); }

/* Dados iniciais - exemplo */
let transactions = [
  { desc: 'Recebimento - Residencial Aurora', tipo: 'entrada', cat: 'Recebimento de cliente', valor: 27400.00, date: '2025-11-10', status: 'pago' },
  { desc: 'Compra de cimento', tipo: 'saida', cat: 'Materiais', valor: 4500.35, date: '2025-11-05', status: 'pago' },
  { desc: 'Pagamento equipe', tipo: 'saida', cat: 'Mão de obra', valor: 8200.00, date: '2025-11-12', status: 'pago' },
  { desc: 'Adiantamento - Loja Center', tipo: 'entrada', cat: 'Recebimento de cliente', valor: 10000.00, date: '2025-11-20', status: 'areceber' },
  { desc: 'Compra de tinta', tipo: 'saida', cat: 'Materiais', valor: 1200.00, date: '2025-11-22', status: 'pago' }
];

/* Formatação monetária */
const fmt = v => {
  const n = Number(v) || 0;
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/* Render tabela e cards */
function render() {
  const tbody = document.getElementById('finance-tbody');
  tbody.innerHTML = '';
  const from = document.getElementById('filter-from').value;
  const to = document.getElementById('filter-to').value;
  const type = document.getElementById('filter-type').value;
  const search = document.getElementById('filter-search').value.toLowerCase().trim();

  let shown = transactions.filter(t => {
    if (from && t.date < from) return false;
    if (to && t.date > to) return false;
    if (type !== 'all' && t.tipo !== type) return false;
    if (search) {
      const s = (t.desc + ' ' + t.cat).toLowerCase();
      if (!s.includes(search)) return false;
    }
    return true;
  });

  let totalDisplayed = 0;
  let faturamento = 0, despesas = 0, aReceber = 0;

  shown.forEach(t => {
    const tr = document.createElement('tr');
    const tipoBadge = `<span class="type-in ${t.tipo === 'entrada' ? 'type-entrada' : 'type-saida'}">${t.tipo === 'entrada' ? 'Entrada' : 'Saída'}</span>`;
    tr.innerHTML = `
      <td>${t.desc}</td>
      <td>${tipoBadge}</td>
      <td>${t.cat}</td>
      <td>${fmt(t.valor)}</td>
      <td>${t.date}</td>
      <td>${t.status === 'pago' ? 'Pago' : 'A receber'}</td>
    `;
    tbody.appendChild(tr);

    totalDisplayed += t.tipo === 'entrada' ? t.valor : -t.valor;
  });

  // Totais (considerando todo o mês filtrado)
  const allFiltered = transactions.filter(t => {
    if (from && t.date < from) return false;
    if (to && t.date > to) return false;
    return true;
  });
  allFiltered.forEach(t => {
    if (t.tipo === 'entrada') {
      faturamento += t.valor;
      if (t.status === 'areceber') aReceber += t.valor;
    } else {
      despesas += t.valor;
    }
  });

  document.getElementById('card-faturamento').textContent = fmt(faturamento);
  document.getElementById('card-despesas').textContent = fmt(despesas);
  document.getElementById('card-lucro').textContent = fmt(faturamento - despesas);
  document.getElementById('card-areceber').textContent = fmt(aReceber);

  document.getElementById('rows-count').textContent = shown.length;
  document.getElementById('total-exibido').textContent = fmt(totalDisplayed);
}

/* Filtros */
function applyFilters() { render(); }

/* Modal */
function openNewTransaction() {
  document.getElementById('m-desc').value = '';
  document.getElementById('m-tipo').value = 'entrada';
  document.getElementById('m-cat').value = '';
  document.getElementById('m-valor').value = '';
  document.getElementById('m-data').value = new Date().toISOString().slice(0, 10);
  document.getElementById('m-status').value = 'pago';
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() { document.getElementById('modal').style.display = 'none'; }

/* Salvar transação */
function saveTransaction() {
  const desc = document.getElementById('m-desc').value.trim();
  const tipo = document.getElementById('m-tipo').value;
  const cat = document.getElementById('m-cat').value.trim();
  const valor = parseFloat(document.getElementById('m-valor').value) || 0;
  const date = document.getElementById('m-data').value;
  const status = document.getElementById('m-status').value;

  if (!desc || !cat || !valor || !date) {
    alert('Preencha todos os campos corretamente.');
    return;
  }

  transactions.unshift({ desc, tipo, cat, valor, date, status });
  closeModal();
  render();
}

/* Export CSV (Excel compatível) */
function exportCSV() {
  // Cabeçalho
  const header = ['Descrição', 'Tipo', 'Categoria', 'Valor', 'Data', 'Status'];
  // Usar os itens atualmente filtrados
  const from = document.getElementById('filter-from').value;
  const to = document.getElementById('filter-to').value;
  const type = document.getElementById('filter-type').value;
  const search = document.getElementById('filter-search').value.toLowerCase().trim();

  const rows = transactions.filter(t => {
    if (from && t.date < from) return false;
    if (to && t.date > to) return false;
    if (type !== 'all' && t.tipo !== type) return false;
    if (search) {
      const s = (t.desc + ' ' + t.cat).toLowerCase();
      if (!s.includes(search)) return false;
    }
    return true;
  }).map(t => [t.desc, t.tipo, t.cat, t.valor.toFixed(2).replace('.', ','), t.date, t.status]);

  let csvContent = header.join(';') + '\n';
  rows.forEach(r => { csvContent += r.join(';') + '\n'; });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'financeiro_export.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* Inicializa */
render();
