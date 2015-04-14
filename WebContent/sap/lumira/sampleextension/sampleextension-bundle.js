define([], function() {
    return sap.bi.framework.declareBundle({
        "id" : "sap.lumira.sampleextension",
        "version" : "REPLACE_VERSION",
         "components" : [{
            "id" : "sap.lumira.sampleextension",
            "provide" : "sap.bi.da.extension.client",
            "module" : "SampleExtension",
            "customProperties" : {
                "displayName" : "SAP Lumira Sample Extension",
                "description" : "for SAP Lumira Data Acquisition Framework"
            }
        }],
        "dependencies": ["sap.bi.da.extension.sdk.clientRequestService"]
    });
});
