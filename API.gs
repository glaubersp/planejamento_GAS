/*
* Dados para alimentar o script 
* Divisão por grupos de anos devido às limitações de execução da versão gratuita do GDrive.
*/

var dados_EF_1={
  yearFolderName: 'FA - Planejamento - 2017',
  schoolYearNames: ['EF - 1', 'EF - 2'],
  classNames: ['A', 'B']
}

var dados_EF_2={
  yearFolderName: 'FA - Planejamento - 2017',
  schoolYearNames: ['EF - 3', 'EF - 4'],
  classNames: ['A', 'B']
}

var dados_EF_3={
  yearFolderName: 'FA - Planejamento - 2017',
  schoolYearNames: ['EF - 5', 'EF - 6'],
  classNames: ['A', 'B']
}

var dados_EF_4={
  yearFolderName: 'FA - Planejamento - 2017',
  schoolYearNames: ['EF - 7', 'EF - 8'],
  classNames: ['A', 'B']
}

var dados_EF_5={
  yearFolderName: 'FA - Planejamento - 2017',
  schoolYearNames: ['EF - 9'],
  classNames: ['A', 'B']
}

var dados_EM_1={
  yearFolderName: 'FA - Planejamento - 2017',
  schoolYearNames: ['EM - 1', 'EM - 2'],
  classNames: ['A', 'B']
}

var dados_EM_2={
  yearFolderName: 'FA - Planejamento - 2017',
  schoolYearNames: ['EM - 3'],
  classNames: ['A', 'B']
}

/*
* Prepara a estrutura anual de pastas e arquivos para turmas.
*/
function preparaEstruturaAnualEF_1(){
  createYearFolderStructureAndClassFilesEF(dados_EF_1.yearFolderName, dados_EF_1.schoolYearNames, dados_EF_1.classNames);
}

function preparaEstruturaAnualEF_2(){
  createYearFolderStructureAndClassFilesEF(dados_EF_2.yearFolderName, dados_EF_2.schoolYearNames, dados_EF_2.classNames);
}

function preparaEstruturaAnualEF_3(){
  createYearFolderStructureAndClassFilesEF(dados_EF_3.yearFolderName, dados_EF_3.schoolYearNames, dados_EF_3.classNames);
}

function preparaEstruturaAnualEF_4(){
  createYearFolderStructureAndClassFilesEF(dados_EF_4.yearFolderName, dados_EF_4.schoolYearNames, dados_EF_4.classNames);
}

function preparaEstruturaAnualEF_5(){
  createYearFolderStructureAndClassFilesEF(dados_EF_5.yearFolderName, dados_EF_5.schoolYearNames, dados_EF_5.classNames);
}

function preparaEstruturaAnualEM_1(){
  createYearFolderStructureAndClassFilesEM(dados_EM_1.yearFolderName, dados_EM_1.schoolYearNames, dados_EM_1.classNames);
}

function preparaEstruturaAnualEM_2(){
  createYearFolderStructureAndClassFilesEM(dados_EM_2.yearFolderName, dados_EM_2.schoolYearNames, dados_EM_2.classNames);
}

// =============== COPIA DADOS PRIMEIRO BIMESTRE ===========================
function copiaDadosBim1EF_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_1.yearFolderName, dados_EF_1.schoolYearNames, dados_EF_1.classNames, 1);
}

function copiaDadosBim1EF_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_2.yearFolderName, dados_EF_2.schoolYearNames, dados_EF_2.classNames, 1);
}

function copiaDadosBim1EF_3() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_3.yearFolderName, dados_EF_3.schoolYearNames, dados_EF_3.classNames, 1);
}

function copiaDadosBim1EF_4() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_4.yearFolderName, dados_EF_4.schoolYearNames, dados_EF_4.classNames, 1);
}

function copiaDadosBim1EF_5() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_5.yearFolderName, dados_EF_5.schoolYearNames, dados_EF_5.classNames, 1);
}

function copiaDadosBim1EM_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_1.yearFolderName, dados_EM_1.schoolYearNames, dados_EM_1.classNames, 1);
}

function copiaDadosBim1EM_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_2.yearFolderName, dados_EM_2.schoolYearNames, dados_EM_2.classNames, 1);
}

// =============== COPIA DADOS SEGUNDO BIMESTRE ===========================
function copiaDadosBim2EF_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_1.yearFolderName, dados_EF_1.schoolYearNames, dados_EF_1.classNames, 2);
}

function copiaDadosBim2EF_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_2.yearFolderName, dados_EF_2.schoolYearNames, dados_EF_2.classNames, 2);
}

function copiaDadosBim2EF_3() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_3.yearFolderName, dados_EF_3.schoolYearNames, dados_EF_3.classNames, 2);
}

function copiaDadosBim2EF_4() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_4.yearFolderName, dados_EF_4.schoolYearNames, dados_EF_4.classNames, 2);
}

function copiaDadosBim2EF_4() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_5.yearFolderName, dados_EF_5.schoolYearNames, dados_EF_5.classNames, 2);
}

function copiaDadosBim2EM_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_1.yearFolderName, dados_EM_1.schoolYearNames, dados_EM_1.classNames, 2);
}

function copiaDadosBim2EM_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_2.yearFolderName, dados_EM_2.schoolYearNames, dados_EM_2.classNames, 2);
}

// =============== COPIA DADOS TERCEIRO BIMESTRE ===========================
function copiaDadosBim3EF_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_1.yearFolderName, dados_EF_1.schoolYearNames, dados_EF_1.classNames, 3);
}

function copiaDadosBim3EF_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_2.yearFolderName, dados_EF_2.schoolYearNames, dados_EF_2.classNames, 3);
}

function copiaDadosBim3EF_3() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_3.yearFolderName, dados_EF_3.schoolYearNames, dados_EF_3.classNames, 3);
}

function copiaDadosBim3EF_4() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_4.yearFolderName, dados_EF_4.schoolYearNames, dados_EF_4.classNames, 3);
}

function copiaDadosBim3EF_5() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_5.yearFolderName, dados_EF_5.schoolYearNames, dados_EF_5.classNames, 3);
}

function copiaDadosBim3EM_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_1.yearFolderName, dados_EM_1.schoolYearNames, dados_EM_1.classNames, 3);
}

function copiaDadosBim3EM_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_2.yearFolderName, dados_EM_2.schoolYearNames, dados_EM_2.classNames, 3);
}

// =============== COPIA DADOS QUARTO BIMESTRE ===========================
function copiaDadosBim4EF_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_1.yearFolderName, dados_EF_1.schoolYearNames, dados_EF_1.classNames, 4);
}

function copiaDadosBim4EF_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_2.yearFolderName, dados_EF_2.schoolYearNames, dados_EF_2.classNames, 4);
}

function copiaDadosBim4EF_3() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_3.yearFolderName, dados_EF_3.schoolYearNames, dados_EF_3.classNames, 4);
}

function copiaDadosBim4EF_4() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_4.yearFolderName, dados_EF_4.schoolYearNames, dados_EF_4.classNames, 4);
}

function copiaDadosBim4EF_5() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EF_5.yearFolderName, dados_EF_5.schoolYearNames, dados_EF_5.classNames, 4);
}

function copiaDadosBim4EM_1() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_1.yearFolderName, dados_EM_1.schoolYearNames, dados_EM_1.classNames, 4);
}

function copiaDadosBim4EM_2() {
  copyPeriodDataForSpecifiedClassesInYearFolder(dados_EM_2.yearFolderName, dados_EM_2.schoolYearNames, dados_EM_2.classNames, 4);
}