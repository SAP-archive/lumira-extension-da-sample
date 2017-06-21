/*
Copyright 2015, SAP SE

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
       http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

define(function() {
    "use strict";

    var SampleExtensionDialogController = function(acquisitionState, oDeferred, fServiceCall, workflow) {

    	//Create dialog

        //button to close the dialog
        var closeDialogButton = new sap.m.Button({
            text: "Close",
            type: "Reject",
            width: "100px",
            press: function() {
                if (oDeferred.state() == "pending") {
                    this.destroy();
                    oDeferred.reject();
                }
                dialog.close();
            }
        });

        var dialog = new sap.m.Dialog({
            contentWidth: "720px",
            contentHeight: "480px",
            title: "Sample Extension",
            endButton: closeDialogButton
        });


        //Create dialog controls and add them to the dialog

        var datasetNameLabel = new sap.m.Label({
            text: "Dataset Name:",
            labelFor: datasetNameText
        });

        dialog.addContent(datasetNameLabel);

        var datasetNameText = new sap.m.Input({
            width: "100%",
            placeholder: "My Dataset"
        });

        dialog.addContent(datasetNameText);

        var csvFileLabel = new sap.m.Label({
            text: "CSV File:",
            labelFor: csvFileText
        });

        dialog.addContent(csvFileLabel);

        var csvFileText = new sap.m.Input({
            width: "100%",
            placeholder: "C:\\lumira-extension-da-sample\\docs\\sample-data\\data1.csv"
        });

        dialog.addContent(csvFileText);

        //opens the file explorer for the user to browse their computer for a csv file
        var browseForCSV = function(csvFileText, oEvent) {
            var ext = window.viMessages.getText("CSV") + "\0*.csv";
            var filePath = app.fileOpenDialog(ext);
            if (filePath) {
                csvFileText.setValue(filePath);
                var fileName = filePath.replace(/^.*[\\\/]/, '');
                fileName = fileName.substr(0, fileName.lastIndexOf('.'));
                datasetNameTxt.setValue(fileName);
            }
        };

        var browseCSVButton = new sap.m.Button({
            text: "Browse CSV File",
            press: browseForCSV.bind(this, csvFileText)
        }).addStyleClass("sample-da-button");

        dialog.addContent(browseCSVButton);

        var metadataFileLabel = new sap.m.Label({
            text: "Metadata File:",
            labelFor: metadataFileText
        });

        dialog.addContent(metadataFileLabel);

        var metadataFileText = new sap.m.Input({
            width: "100%",
            placeholder: "C:\\lumira-extension-da-sample\\docs\\sample-data\\metadata.txt"
        });

        dialog.addContent(metadataFileText);

        //opens the file explorer for the user to browse their computer for metadata txt file
        var browseForMetadata = function(metadataFileText, oEvent) {
            var ext = window.viMessages.getText("txt") + "\0*.txt";
            var filePath = app.fileOpenDialog(ext);
            if (filePath) {
                metadataFileText.setValue(filePath);
            }
        };

        var browseMetadataButton = new sap.m.Button({
            text: "Browse Metadata File",
            press: browseForMetadata.bind(this, metadataFileText)
        }).addStyleClass("sample-da-button");

        dialog.addContent(browseMetadataButton);

        function okButtonPressed() {
            var info = {};
            info.csv = csvFileText.getValue();
            info.metadata = metadataFileText.getValue();
            info.datasetName = datasetNameText.getValue();
            acquisitionState.info = JSON.stringify(info);
            oDeferred.resolve(acquisitionState, datasetNameText.getValue());
            dialog.close();
        };

        var okButton = new sap.m.Button({
            text: "Ok",
            type: "Accept",
            width: "100px",
            press: okButtonPressed
        }).addStyleClass("sample-da-button");

        dialog.addContent(okButton);
        
        //sends a request to the backend and receives a response
        var pingButton = new sap.m.Button({
            text: "Ping",
            press: function() {
                fServiceCall("ping", function(response) {
                	//Lumira 1.x does not have sap.m.MessageBox: so here we first check if it is present, 
                	//and use the sap.ui.commons.MessageBox if not
                    sap.m.MessageBox ? sap.m.MessageBox.alert(response) : sap.ui.commons.MessageBox.alert(response);
                }, function(actionRequired, errorMessage, fullErrorObject) {
                    sap.m.MessageBox ? sap.m.MessageBox.alert(errorMessage) : sap.ui.commons.MessageBox.alert(response);
                });
            }
        }).addStyleClass("sample-da-button");

        dialog.addContent(pingButton);

        this.showDialog = function() {
            dialog.open();
            
            //adds custom css
            $(".sample-da-button").css("display", "block");
            $(".sample-da-button").css("margin-bottom", "2%");
        };
    };


    return SampleExtensionDialogController;
});