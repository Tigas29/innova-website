/**
 * INNOVA MOVIMENTO — Google Apps Script Web App
 * Recebe leads do site e salva na planilha "Leads — INNOVA MOVIMENTO"
 *
 * PLANILHA: https://docs.google.com/spreadsheets/d/1BD7THUqgEZdtIHBByeZtSaPn_0-c2lIR95XLCFU3J2U/edit
 *
 * COMO USAR:
 * 1. Abra a planilha acima
 * 2. Clique em Extensões > Apps Script
 * 3. Delete o código existente e cole este arquivo inteiro
 * 4. Clique em Implantar > Nova implantação
 * 5. Tipo: App Web | Executar como: Eu | Acesso: Qualquer pessoa
 * 6. Copie a URL gerada e cole em: src/pages/PilatesAds/constants.js (SHEETS_WEBHOOK_URL)
 * 7. Republique o site no Vercel
 */

var SHEET_ID = '1BD7THUqgEZdtIHBByeZtSaPn_0-c2lIR95XLCFU3J2U';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    sheet.appendRow([
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      data.nome     || '',
      data.whatsapp || '',
      data.email    || '',
      data.objetivo || '',
      data.origem   || '',
      data.pagina   || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Endpoint de saúde — GET /webhook para confirmar que está no ar
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', app: 'INNOVA MOVIMENTO Leads' }))
    .setMimeType(ContentService.MimeType.JSON);
}
