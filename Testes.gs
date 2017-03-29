// =================== PREENCHIMENTO DE EXEMPLOS NO ATPC =============
// Mudar o ano escolhido e a turma, uma para EF e outra para EM

var dados_ATPC_EF={
  yearFolderName: '2017',
  schoolYearNames: ['EF - 9'],
  classNames: ['A']
}

function teste_ATPC_EF(){
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EF.yearFolderName, dados_ATPC_EF.schoolYearNames, dados_ATPC_EF.classNames, 1);
  //copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EF.yearFolderName, dados_ATPC_EF.schoolYearNames, dados_ATPC_EF.classNames, 2);
  //copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EF.yearFolderName, dados_ATPC_EF.schoolYearNames, dados_ATPC_EF.classNames, 3);
  //copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EF.yearFolderName, dados_ATPC_EF.schoolYearNames, dados_ATPC_EF.classNames, 4);
}

var dados_ATPC_EM={
  yearFolderName: '2017',
  schoolYearNames: ['EM - 1'],
  classNames: ['A']
}

function teste_ATPC_EM(){
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EM.yearFolderName, dados_ATPC_EM.schoolYearNames, dados_ATPC_EM.classNames, 1);
  //copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EM.yearFolderName, dados_ATPC_EM.schoolYearNames, dados_ATPC_EM.classNames, 2);
  //copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EM.yearFolderName, dados_ATPC_EM.schoolYearNames, dados_ATPC_EM.classNames, 3);
  //copyPeriodDataForSpecifiedClassesInYearFolder(dados_ATPC_EM.yearFolderName, dados_ATPC_EM.schoolYearNames, dados_ATPC_EM.classNames, 4);
}

/*
* Dados para alimentar o script 
* Divisão por grupos de anos devido às limitações de execução da versão gratuita do GDrive.
*/
var dados_teste_EF = {
  yearFolderName: 'Teste',
  schoolYearNames: ['EF - 1'],
  classNames: ['A', 'B']
}

var dados_teste_EM = {
  yearFolderName: 'Teste',
  schoolYearNames: ['EM - 1'],
  classNames: ['A', 'B']
}

/*
* Teste completo com dados gerados.
* Separado por criação e preenchimento.
*/

function test_EF_criacao(){
  createYearFolderStructureAndClassFilesEF(dados_teste_EF.yearFolderName, dados_teste_EF.schoolYearNames, dados_teste_EF.classNames, true);
}

function test_EF_preenchimento(){
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EF.yearFolderName, dados_teste_EF.schoolYearNames, dados_teste_EF.classNames, 1);
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EF.yearFolderName, dados_teste_EF.schoolYearNames, dados_teste_EF.classNames, 2);
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EF.yearFolderName, dados_teste_EF.schoolYearNames, dados_teste_EF.classNames, 3);
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EF.yearFolderName, dados_teste_EF.schoolYearNames, dados_teste_EF.classNames, 4);
}

function test_EM_criacao(){
  createYearFolderStructureAndClassFilesEM(dados_teste_EM.yearFolderName, dados_teste_EM.schoolYearNames, dados_teste_EM.classNames, true);
}

function test_EM_preenchimento(){
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EM.yearFolderName, dados_teste_EM.schoolYearNames, dados_teste_EM.classNames, 1);
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EM.yearFolderName, dados_teste_EM.schoolYearNames, dados_teste_EM.classNames, 2);
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EM.yearFolderName, dados_teste_EM.schoolYearNames, dados_teste_EM.classNames, 3);
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_teste_EM.yearFolderName, dados_teste_EM.schoolYearNames, dados_teste_EM.classNames, 4);
}

function protectSheetsInFolder(){
  var rootFolder = getRootFolder();
  var yearFolder = rootFolder.getFoldersByName('2017').next();
  var classFolder = yearFolder.getFoldersByName('EF - 9A').next();
  protectSpreadsheetsInFolder(classFolder)
}
