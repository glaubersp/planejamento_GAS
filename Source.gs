// --------------- File/Folder creation -------------------------

/*
* Gets the folder where this script is placed
*/
function getScriptFolder() {
  var thisFileID = ScriptApp.getScriptId();
  var thisFile = DriveApp.getFileById(thisFileID);
  var parentFolder = thisFile.getParents().next();
  return parentFolder;
}

/*
* Gets the root folder
* ATM, the superfolder of the script folder.
*/
function getRootFolder() {
  var scriptfolder = getScriptFolder();
  var rootFolder = scriptfolder.getParents().next();
  return rootFolder;
}

/*
* Gets the folder that contains the model files
* ATM, a subfolder named 'Modelos' inside the script folder.
*/
function getModelFolder() {
  var scriptfolder = getScriptFolder();
  var modelFolder = scriptfolder.getFoldersByName('Modelos').next();
  return modelFolder;
}

/*
* Gets the folder for the test files
* ATM, a subfolder named 'Testes' inside the script folder
*/
function getTestFolder() {
  var scriptfolder = getScriptFolder();
  var testFolder = scriptfolder.getFoldersByName('Testes').next();
  return testFolder;
}

/*
* Copy to a source folder from a targer folder
*/
function copyFolder(source, target) {
  
  var folders = source.getFolders();
  var files   = source.getFiles();
  
  while(files.hasNext()) {
    var file = files.next();
    // TODO Remove before copy so files get replaced.
    file.makeCopy(file.getName(), target);
  }
  
  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    var targetFolder = target.createFolder(folderName);
    copyFolder(subFolder, targetFolder);
  }  
}

/*
* Get a folder with needed files for one class of Ensino Fundamental
*/
function getModelFolderEF(runningInTestMode){
  var modelFolder
  if(runningInTestMode){
    modelFolder = getTestFolder()
  }else{
    modelFolder = getModelFolder()
  }
  modelFolderEF = modelFolder.getFoldersByName('EF_Folder')
  
  if(modelFolderEF.hasNext()){
    modelFolderEF = modelFolderEF.next()
  }else{
    var montlyModel = modelFolder.getFilesByName('Fundamental_Bimestral').next()
    var yearlyModel = modelFolder.getFilesByName('Fundamental_Anual').next()
    var targetFolder = modelFolder.createFolder('EF_Folder');
    generateFilesForOneClass(modelFolder, targetFolder, 'Fundamental_Bimestral', 'Fundamental_Anual')
    modelFolderEF = targetFolder
  }
  return modelFolderEF
}

/*
* Get a folder with needed files for one class of Ensino Médio
*/
function getModelFolderEM(runningInTestMode){
  var modelFolder
  if(runningInTestMode){
    modelFolder = getTestFolder()
  }else{
    modelFolder = getModelFolder()
  }
  modelFolderEF = modelFolder.getFoldersByName('EM_Folder')
  if(modelFolderEF.hasNext()){
    modelFolderEF = modelFolderEF.next()
  }else{
    var montlyModel = modelFolder.getFilesByName('Medio_Bimestral').next()
    var yearlyModel = modelFolder.getFilesByName('Medio_Anual').next()
    var targetFolder = modelFolder.createFolder('EM_Folder');
    generateFilesForOneClass(modelFolder, targetFolder, 'Medio_Bimestral', 'Medio_Anual')
    modelFolderEF = targetFolder
  }
  return modelFolderEF
}

// --------------- Data creation -------------------------

/*
* Given a class folder and optional models names for montly and yearly spreadsheets, generate the files for a school class
*/
function generateFilesForOneClass(modelFolder, targetFolder, montlyTemplateName, yearlyTemplateName) {
  var montlyModel = modelFolder.getFilesByName(montlyTemplateName).next()
  var yearlyModel = modelFolder.getFilesByName(yearlyTemplateName).next()
  
  montlyModel.makeCopy('Bim 1', targetFolder)
  montlyModel.makeCopy('Bim 2', targetFolder)
  montlyModel.makeCopy('Bim 3', targetFolder)
  montlyModel.makeCopy('Bim 4', targetFolder)
  yearlyModel.makeCopy('Anual', targetFolder)
}


/*
* Create the complete folder structure with needed files for all the specified  Ensino Fundamental classes for the given year
*/
function createYearFolderStructureAndClassFilesEF(yearFolderName, schoolYearNames, classNames, runningInTestMode) {
  var rootFolder = getRootFolder();
  
  var yearFolder = rootFolder.getFoldersByName(yearFolderName);
  if (yearFolder.hasNext()) {
    yearFolder = yearFolder.next();
  } else {
    yearFolder = rootFolder.createFolder(yearFolderName);
  }
  
  for (school = 0; school < schoolYearNames.length; school++) {
    for (class = 0; class < classNames.length; class++) {
      var folderName = schoolYearNames[school] + classNames[class]
      var targetFolder = yearFolder.getFoldersByName(folderName);
      if (targetFolder.hasNext()) {
        targetFolder = targetFolder.next();
      } else {
        targetFolder = yearFolder.createFolder(folderName);
      }
      copyFolder(getModelFolderEF(runningInTestMode), targetFolder)
      // Append folder name in each fileName to make it easy to distinguish the spreadsheets when more than one is opened
      filesInTargetFolder = targetFolder.getFiles()
      while(filesInTargetFolder.hasNext()){
        file = filesInTargetFolder.next();
        var actualName = file.getName()
        var newName = folderName + ' - ' + actualName
        file.setName(newName)
      }
    }
  }
}

/*
* Create the complete folder structure with needed files for all the specified Ensino Médio classes for the given year
*/
function createYearFolderStructureAndClassFilesEM(yearFolderName, schoolYearNames, classNames, runningInTestMode) {
  var rootFolder = getRootFolder();
  
  var yearFolder = rootFolder.getFoldersByName(yearFolderName);
  if (yearFolder.hasNext()) {
    yearFolder = yearFolder.next();
  } else {
    yearFolder = rootFolder.createFolder(yearFolderName);
  }
  
  for (school = 0; school < schoolYearNames.length; school++) {
    for (class = 0; class < classNames.length; class++) {
      var folderName = schoolYearNames[school] + classNames[class]
      var targetFolder = yearFolder.getFoldersByName(folderName);
      if (targetFolder.hasNext()) {
        targetFolder = targetFolder.next();
      } else {
        targetFolder = yearFolder.createFolder(folderName);
      }
      // Makes a copy of the files inside the model folder to the targetFolder
      copyFolder(getModelFolderEM(runningInTestMode), targetFolder)
      // Append folder name in each fileName to make it easy to distinguish the spreadsheets when more than one is opened
      filesInTargetFolder = targetFolder.getFiles()
      while(filesInTargetFolder.hasNext()){
        file = filesInTargetFolder.next();
        var actualName = file.getName()
        var newName = folderName + ' - ' + actualName
        file.setName(newName)
      }
    }
  }
}

// --------------- Data updating -------------------------
/*
* Iterage through the year folder structure and, for the specified classes, copy data from each period spreadsheet to the yearly one
*/
function copyPeriodDataForSpecifiedClassesInYearFolder(yearFolderName, schoolYearNames, classNames, periodNumber) {
  var rootFolder = getRootFolder();
  var yearFolder = rootFolder.getFoldersByName(yearFolderName).next();
  
  for (school = 0; school < schoolYearNames.length; school++) {
    for (class = 0; class < classNames.length; class++) {
      var folderName = schoolYearNames[school] + classNames[class]
      var folder = yearFolder.getFoldersByName(folderName).next();
      
      fillPeriodInYearlySpreadsheet(periodNumber, folder.getId());
    }
  }
}

/*
* Iterage through the year folder structure and, for all existing classes, copy data from each period spreadsheet to the yearly one
*/
function copyPeriodDataForAllClassesInYearFolder(yearFolderName, periodNumber) {
  var rootFolder = getRootFolder();
  var yearFolder = rootFolder.getFoldersByName(yearFolderName).next();
  
  schoolYearFolders = yearFolder.getFolders();
  while(schoolYearFolders.hasNext()){
    schoolYearFolder = schoolYearFolders.next();
    fillPeriodInYearlySpreadsheet(periodNumber, schoolYearFolder.getId());
  }
}

/*
* Copy data from montly ss to yearly ss for the specified period and folder.
*/
function fillPeriodInYearlySpreadsheet(periodNumber, classFolderId) {
  /* Retrieve the desired folder */
  var classFolder = DriveApp.getFolderById(classFolderId);
  
  if (periodNumber >= 1 && periodNumber <= 4) {
    /* Get all the needed spreadsheets */
    var bimSS = SpreadsheetApp.open(classFolder.getFilesByName('Bimestre ' + periodNumber.toString()).next());
    var yearSS = SpreadsheetApp.open(classFolder.getFilesByName('Anual').next());
    
    //Percorre cada DISCIPLINA (folha da planilha Anual) e preenche com dados bimestrais
    var subjectSheets = yearSS.getSheets();
    for (subject = 0; subject < subjectSheets.length; subject++) {
      var subjectSheet = subjectSheets[subject];
      
      // Índices para acessar a folha de disciplinas, para a qual são copiados os dados
      var subjectR_week = 8 + (periodNumber - 1) * 11,
        subjectC = 2;
      
      // Índices para o vetor de dados semanais, de onde provêm os dados
      var weekR_subject = 2,
          weekC = 2;
      
      // Copia os objetivos bimestrais
      var destino = {
        1:'B60',
        2:'B61',
        3:'B62',
        4:'B63'
      };
      
      //Copia dado da bimestral para célula temporária na anual
      subjectSheet.getRange(destino[periodNumber]).setValue(periodNumber +" Bimestre: "+bimSS.getSheets()[0].getRange(weekR_subject + subject, weekC).getValue())
      
      // Copia células temporárias para a célula definitiva
      subjectSheet.getRange(4,2,1,1).setValue(subjectSheet.getRange('B60:B63').getDisplayValues().join(" / "))
      
      //Percorre as SEMANAS (folhas da planilha) do Bimestre e copia os dados para a planilha anual
      for (week = 0; week < 9; week++) {
        subjectSheet.getRange(subjectR_week + week, subjectC, 1, 2).setValues(
          // Ignorar a primeira folha (Descrição)
          bimSS.getSheets()[week + 1].getRange(weekR_subject + subject, weekC, 1, 2).getValues()
        );
      }
    }
  }
}

//=================== EDITING PROTECTION FOR SHEETS =========================

function fixEditors(protection){
  // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
  // permission comes from a group, the script will throw an exception upon removing the group.
  var me = Session.getEffectiveUser();
  protection.addEditor(me);
  protection.removeEditors(protection.getEditors());
  if (protection.canDomainEdit()) {
    protection.setDomainEdit(false);
  }
  protection.addEditors(['tel.amiel@gmail.com', 'glauber.sp@gmail.com', 'cicero.alex@gmail.com'])
}

function removeAllSheetProtections(sheet){
  // Remove all SHEET protections from a sheet
  var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  for (var i = 0; i < protections.length; i++) {
    var protection = protections[i];
    if (protection.canEdit()) {
      protection.remove();
    }
  }
}

function protectYearlySpreadsheet(yearlySS){
  // Protect sheets except B3, then remove all other users from the list of editors.
  var sheets = yearlySS.getSheets();
  sheets.forEach(function(sheet, index){
    var protection = sheet.protect().setDescription(sheet.getName());
    var unprotected = sheet.getRange('B3');
    protection.setUnprotectedRanges([unprotected]);  
    fixEditors(protection)
  })
}

function protectBimSpreadsheet(bimSS){
  var sheets = bimSS.getSheets();
  
  // Protect and fix list of editors for first sheet except B2:B9
  var firstSheet = sheets.shift()
  removeAllSheetProtections(firstSheet)
  var firstProtection = firstSheet.protect().setDescription(firstSheet.getName());
  var firstUnprotected = firstSheet.getRange('B2:B9');
  firstProtection.setUnprotectedRanges([firstUnprotected]);  
  fixEditors(firstProtection)
  
  // Protect and fix list of editors for all other sheets except B2:T13
  sheets.forEach(function(sheet, index){
    removeAllSheetProtections(sheet)
    var protection = sheet.protect().setDescription(sheet.getName());
    var unprotected = sheet.getRange('B2:T13');
    protection.setUnprotectedRanges([unprotected]);  
    fixEditors(protection)
  })
}

function protectSpreadsheetsInFolder(folder){
  folderName = folder.getName()
  
  yearlySS = SpreadsheetApp.open(folder.getFilesByName(folderName + ' - Anual').next());
  protectYearlySpreadsheet(yearlySS)
  
  bim1SS = SpreadsheetApp.open(folder.getFilesByName(folderName + ' - Bim 1').next())
  protectBimSpreadsheet(bim1SS)
  
  bim2SS = SpreadsheetApp.open(folder.getFilesByName(folderName + ' - Bim 2').next())
  protectBimSpreadsheet(bim2SS)
  
  bim3SS = SpreadsheetApp.open(folder.getFilesByName(folderName + ' - Bim 3').next())
  protectBimSpreadsheet(bim3SS)
  
  bim4SS = SpreadsheetApp.open(folder.getFilesByName(folderName + ' - Bim 4').next())
  protectBimSpreadsheet(bim4SS)
}