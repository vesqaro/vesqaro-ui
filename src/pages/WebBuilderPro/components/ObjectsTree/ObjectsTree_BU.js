/*var body = JSON.parse(getvar("body"));
var resultsObj = '"IncompleteApplictions":[';
var targetFolder = "icm://Interactive/CrumForster/WFDs/PolicyFulfillment/Data Save/Incomplete Fulfillments/*";
var returnToDC = "";
var fileInICM = "icm://Interactive/CrumForster/WFDs/PolicyFulfillment/Data Save/Incomplete Fulfillments/"+body.SelectedPlanNameForAction+".txt";

if(body.ActionValue == "delete"){
    var fileRemovalResult = icm.remove(fileInICM);
    if(fileRemovalResult == true)
        returnToDC = '"MessageFromScaler":"Fulfillment '+body.SelectedPlanNameForAction+' has been deleted"';
    else
        returnToDC = '"MessageFromScaler":"Problem deleting fulfillment '+body.SelectedPlanNameForAction+'. Please contact the adminstrator"';
    //console.log(fileRemovalResult);
    var results = icm.list(targetFolder)
for(var i=0; i<results.length; i++){
    var d = new Date(results[i].modifyTime);
    var date  = results[i].modifyTime;
    d = d.toString();
    d = d.substr(0, d.indexOf(" G"))
   resultsObj+= '{"Name":"'+results[i].name + '","Date":"'+d+'","DateFormat":"'+date+'"},';
}
    resultsObj = resultsObj.substring(0, resultsObj.length - 1);
    resultsObj+="]";
    resultsObj = resultsObj.replace(/\.txt/g, "");

    if(results.length == 0)
        resultsObj = '"IncompleteApplictions":[]';

    returnToDC = '{'+returnToDC+','+resultsObj+'}'
}

else {
    try {
        var jobDir = getvar("sys.job-dir");
        var currentDataVersion = "1";
        var currentDataFileInICMPath = fileInICM;
        var metadata = icm.getMetadata(currentDataFileInICMPath);
        var keys = metadata.keySet();
        keys.forEach(function(key) {
            var values = metadata[key];
            var valuesAsJavascriptArray = Java.from(values);
            valuesAsJavascriptArray.forEach(function print(value) {
                if(key == "DataVersion")
                    currentDataVersion = value;
            })
        });

        var newDataInfoFileInICMPath = "icm://Interactive/CrumForster/WFDs/PolicyFulfillment/Data Save/newDataInfo.txt";
        var newDataInfoFilePath = jobDir + "/newDataInfo.json";
        fs.writeStream(newDataInfoFilePath, icm.download(newDataInfoFileInICMPath));
        var newDataInfoFileContent = JSON.parse(fs.read(newDataInfoFilePath));
        var isDataUpdated = parseInt(currentDataVersion) < parseInt(newDataInfoFileContent.dataVersion);

        var finalDataFilePath = jobDir + "/finalFile.json";
        var finalDataContent;

        if(isDataUpdated) {
            var currentDataFilePath = jobDir + "/currentData.json";
            fs.writeStream(currentDataFilePath, icm.download(currentDataFileInICMPath));
            var currentDataFileContent = JSON.parse(fs.read(currentDataFilePath));

            var newDataFileInICMPath = newDataInfoFileContent.newFilePath;
            var newDataFilePath = jobDir + "/newData.json";
            fs.writeStream(newDataFilePath, icm.download(newDataFileInICMPath));
            var newDataFileContent = JSON.parse(fs.read(newDataFilePath));
            finalDataContent = JSON.parse(JSON.stringify(currentDataFileContent));
            finalDataContent["Forms-Sections"] = [];

            for(var i=0; i<newDataFileContent["Forms-Sections"].length; i++){
                var newItem = newDataFileContent["Forms-Sections"][i];
                var flag1 = false;
                var flag2 = false;
                var flag3 = false;

                for(var k=0; k<currentDataFileContent["Forms-Sections"].length; k++){
                    var sectionItem = {
                      FormElements: []
                    };
                    var currentItem = currentDataFileContent["Forms-Sections"][k];

                    if(newItem.SectionName == currentItem.SectionName){
                        flag1 = true;
                        //sectionItem = JSON.parse(JSON.stringify(currentItem));
                        //sectionItem.FormElements = [];

                        for(var l=0; l<newItem.FormElements.length; l++){
                            var newElement = newItem.FormElements[l];

                            for(var m=0; m<currentItem.FormElements.length; m++){
                               var currentElement = currentItem.FormElements[m];

                               if(newElement.IDNumber == currentItem.IDNumber){
                                   flag2 = true;
                                   sectionItem.FormElements.push(currentItem);
                                   sectionItem.FormElements.NestedFormElementsArray = [];
                                   sectionItem.FormElements.NestedFormElementsArrayOPTIONAL = [];

                                   for(var n=0; n<newElement.NestedFormElementsArray; n++){
                                      var newNestedElement = newElement.NestedFormElementsArray[n];

                                      for(var o=0; o<currentElement.NestedFormElementsArray; o++){
                                        var currentNestedElement = currentElement.NestedFormElementsArray[o];

                                        if(newNestedElement.IDNumber == currentNestedElement.IDNumber){
                                          sectionItem.FormElements.NestedFormElementsArray.push(currentNestedElement);
                                          sectionItem.FormElements.NestedFormElementsArrayOPTIONAL.push(currentNestedElement);
                                        }
                                      }

                                      if(!flag3){
                                        sectionItem.FormElements.NestedFormElementsArray.push(newNestedElement);
                                        sectionItem.FormElements.NestedFormElementsArrayOPTIONAL.push(newNestedElement);
                                      }

                                      flag3 = false;
                                   }
                               }
                            }

                            if(!flag2)
                              sectionItem.FormElements.push(newElement);

                            flag2 = false;
                        }
                      }
                        //finalDataContent["Forms-Sections"].push(currentItem);
                        finalDataContent["Forms-Sections"].push(sectionItem);
                    }
                }

                if(!flag1)
                    finalDataContent["Forms-Sections"].push(newItem);

                flag1 = false;
            }

            var archivePath = "icm://temp/archive/oldData-v" + currentDataVersion + "-" + currentDataFileInICMPath.split("/")[currentDataFileInICMPath.split("/").length-1];
            //var finalFileICMPath = "icm://temp/finaLLLL.json";
            fs.write(finalDataFilePath, JSON.stringify(finalDataContent), "UTF-8");
            icm.move(currentDataFileInICMPath, archivePath);
            icm.uploadBytes(fs.read(finalDataFilePath).bytes, currentDataFileInICMPath);


            var metadata = {"DataVersion": [newDataInfoFileContent.dataVersion]};
            var merging = true;
            var metadataUpdateResult = icm.setMetadata(currentDataFileInICMPath, metadata, merging);

            if(metadataUpdateResult){
                console.log("The metadata has been updated successfully.");
            }
            else{
                job.fail("Failed to update metadata.");
            }
        }



        var stream = icm.download(fileInICM);
        var fileInJobDir = getvar("sys.job-dir") + fs.separator() + "Data.txt";
        fs.writeStream(fileInJobDir, stream);
        var returnToDC = fs.read(fileInJobDir).text;
        fs.delete(fileInJobDir);
    }

    catch(e) {
        console.error("ERROR: " + e.message);
    }
}


console.log("returnToDC: " + returnToDC);
setvar("ResponseFromScaler", returnToDC);

var files = fs.list(jobDir + "/");
        for(var i=0; i<files.length; i++)
            console.log("File: " + files[i].name + " has been deleted: " + fs.delete(jobDir + "/" + files[i].name));
*/
