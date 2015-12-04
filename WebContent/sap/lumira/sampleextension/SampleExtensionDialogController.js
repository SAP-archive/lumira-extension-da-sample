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

        /*
        Create dialog controls
        */
        var dLayout = new sap.ui.commons.layout.MatrixLayout({
            layoutFixed : true,
            columns : 2,
            width : "570px",
            widths : [ "20%", "80%" ]
        });

        var datasetNameTxt = new sap.ui.commons.TextField({
            width : '100%',
            value : "",
            enabled : workflow === "CREATE"
        });

        var datasetNameLbl = new sap.ui.commons.Label({
            text : "Dataset Name:",
            labelFor : datasetNameTxt
        });

        dLayout.createRow({
            height : "30px"
        }, datasetNameLbl, datasetNameTxt);

        // These paths correspond to the included sample data if the workspace was unzipped to the C drive
        var datasetTxt = new sap.ui.commons.TextField({
            width : '100%',
            value : 'C:\\lumira-extension-da-sample-master\\docs\\sample-data\\data1.csv'
        });

        var datasetLbl = new sap.ui.commons.Label({
            text : "CSV File:",
            labelFor : datasetTxt
        });

        dLayout.createRow({
            height : "30px"
        }, datasetLbl, datasetTxt);
        
        //button to browse csv file
        var csvBrowseFile = function(datasetTxt, oEvent) {
            var ext = window.viMessages.getText("CSV") + "\0*.csv";
            var filePath = app.fileOpenDialog(ext);
            if (filePath){
            	datasetTxt.setValue(filePath);
            	var filename = filePath.replace(/^.*[\\\/]/, '');
            	filename = filename.substr(0, filename.lastIndexOf('.'));
            	datasetNameTxt.setValue(filename);
                //this.inputChanged(oEvent);
            }
        };
        
        var CSVImportButton = new sap.ui.commons.Button({
            press : csvBrowseFile.bind(this, datasetTxt),
            text : "Browse CSV File",
            tooltip : "Browse CSV File"
        }).addStyleClass(sap.ui.commons.ButtonStyle.Emph);

        var CSVBrowseButtonLbl = new sap.ui.commons.Label({
            text : "",
            labelFor : CSVImportButton
        });
        
        dLayout.createRow({
            height: "30px"
        }, CSVBrowseButtonLbl, CSVImportButton);
        

        var metadataTxt = new sap.ui.commons.TextField({
            width : '100%',
            value : 'C:\\lumira-extension-da-sample-master\\docs\\sample-data\\metadata.txt'
        });

        var metadataLbl = new sap.ui.commons.Label({
            text : "Metadata File:",
            labelFor : metadataTxt
        });

        dLayout.createRow({
            height : "30px"
        }, metadataLbl, metadataTxt);
        
        // button to browse metadata.txt file
        var metadataBrowseFile = function(metadataTxt, oEvent) {
            var ext = window.viMessages.getText("txt") + "\0*.txt";
            var filePath = app.fileOpenDialog(ext);
            if (filePath){
            	metadataTxt.setValue(filePath);
                //this.inputChanged(oEvent);
            }
        };
        
        var MetadataImportButton = new sap.ui.commons.Button({
            press : metadataBrowseFile.bind(this, metadataTxt),
            text : "Browse Metadata File",
            tooltip : "Browse Metadata File"
        }).addStyleClass(sap.ui.commons.ButtonStyle.Emph);

        var MetadataBrowseButtonLbl = new sap.ui.commons.Label({
            text : "",
            labelFor : MetadataImportButton
        });
        
        dLayout.createRow({
            height: "30px"
        }, MetadataBrowseButtonLbl, MetadataImportButton);

        // Client request call example
        var pingBtn = new sap.ui.commons.Button({
            press : [ function() {
                fServiceCall("ping", function(response) {
                    sap.ui.commons.MessageBox.alert(response);
                }, function(actionRequired, errorMessage, fullErrorObject) {
                    sap.ui.commons.MessageBox.alert(errorMessage);
                });
            }, this ],
            text : "Ping",
            enabled : true
        }).addStyleClass("button_ellipsis");

        dLayout.createRow({
            height : "30px"
        }, pingBtn);

        /*
        Button press events
        */
        var buttonCancelPressed = function() {
        	oDeferred.reject(); //promise fail
            dialog.close(); // dialog is hoisted from below
        };

        var buttonOKPressed = function() {
            var info = {};
            info.csv = datasetTxt.getValue();
            info.metadata = metadataTxt.getValue();
            info.datasetName =  datasetNameTxt.getValue();
            acquisitionState.info = JSON.stringify(info);
            oDeferred.resolve(acquisitionState, datasetNameTxt.getValue());
            dialog.close();
        };

        var okButton = new sap.ui.commons.Button({
            press : [ buttonOKPressed, this ],
            text : "OK",
            tooltip : "OK"
        }).setStyle(sap.ui.commons.ButtonStyle.Accept);

        var cancelButton = new sap.ui.commons.Button({
            press : [ buttonCancelPressed, this ],
            text : "Cancel",
            tooltip : "Cancel"
        }).addStyleClass(sap.ui.commons.ButtonStyle.Default);

        var onClosed = function() {
            if (oDeferred.state() === "pending") {
            	this.destroy();
                oDeferred.reject();
            }
        };

        /*
        Modify controls based on acquisitionState
        */
        var envProperties = acquisitionState.envProps;
        if (acquisitionState.info) {
            var info = JSON.parse(acquisitionState.info);
            datasetTxt.setValue(info.csv);
            metadataTxt.setValue(info.metadata);
            envProperties.datasetName = info.datasetName;
        }
        datasetNameTxt.setValue(envProperties.datasetName);

        /*
        Create the dialog
        */
        var dialog = new sap.ui.commons.Dialog({
            width : "720px",
            height : "480px",
            modal : true,
            resizable : false,
            closed : function () {
            	this.destroy();
            	oDeferred.reject();
            },
            content: [dLayout],
            buttons : [okButton, cancelButton]
        });
        dialog.setTitle("Sample Extension:" + workflow + ": " + envProperties.datasetName);

        this.showDialog = function() {
            dialog.open();
        };
    };

    return SampleExtensionDialogController;
});