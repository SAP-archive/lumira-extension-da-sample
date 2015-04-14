package com.sap.lumira.sampleextension;

import java.io.File;
import java.nio.file.Files;
import java.util.EnumSet;
import java.util.Set;

import com.sap.bi.da.extension.sdk.DAEWorkflow;
import com.sap.bi.da.extension.sdk.DAException;
import com.sap.bi.da.extension.sdk.IDAEAcquisitionJobContext;
import com.sap.bi.da.extension.sdk.IDAEAcquisitionState;
import com.sap.bi.da.extension.sdk.IDAEClientRequestJob;
import com.sap.bi.da.extension.sdk.IDAEDataAcquisitionJob;
import com.sap.bi.da.extension.sdk.IDAEEnvironment;
import com.sap.bi.da.extension.sdk.IDAEMetadataAcquisitionJob;
import com.sap.bi.da.extension.sdk.IDAEProgress;
import com.sap.bi.da.extension.sdk.IDAExtension;

import org.json.JSONObject;

public class SampleExtension implements IDAExtension {

    public SampleExtension() {
    }

    @Override
    public void initialize(IDAEEnvironment environment) {
    	// This function will be called when the extension is initially loaded
    	// This gives the extension to perform initialization steps, according to the provided environment
    }

    @Override
    public IDAEAcquisitionJobContext getDataAcquisitionJobContext (IDAEAcquisitionState acquisitionState) {
        return new SampleExtensionAcquisitionJobContext(acquisitionState);
    }

    @Override
    public IDAEClientRequestJob getClientRequestJob(String request) {
        return new SampleExtensionClientRequestJob(request);
    }

    private static class SampleExtensionAcquisitionJobContext implements IDAEAcquisitionJobContext {

        private IDAEAcquisitionState acquisitionState;

        SampleExtensionAcquisitionJobContext(IDAEAcquisitionState acquisitionState) {
            this.acquisitionState = acquisitionState;
        }

        @Override
        public IDAEMetadataAcquisitionJob getMetadataAcquisitionJob() {
            return new SampleExtensionMetadataRequestJob(acquisitionState);
        }

        @Override
        public IDAEDataAcquisitionJob getDataAcquisitionJob() {
            return new SampleExtensionDataRequestJob(acquisitionState);
        }

        @Override
        public void cleanup() {
        	// Called once acquisition is complete
        	// Provides the job the opportunity to perform cleanup, if needed
        	// Will be called after both job.cleanup()'s are called
        }
    }

    private static class SampleExtensionDataRequestJob implements IDAEDataAcquisitionJob
    {
        IDAEAcquisitionState acquisitionState;

        SampleExtensionDataRequestJob (IDAEAcquisitionState acquisitionState) {
            this.acquisitionState = acquisitionState;
        }

        @Override
        public File execute(IDAEProgress callback) throws DAException {
            try {
                JSONObject infoJSON = new JSONObject(acquisitionState.getInfo());
                File csv = new File(infoJSON.getString("csv"));
                return csv;
            } catch (Exception e) {
                throw new DAException("Sample Extension acquisition failed", e);
            }
        }

        @Override
        public void cancel() {
        	// Cancel is currently not supported
        }

        @Override
        public void cleanup() {
        	// Called once acquisition is complete
        }
    }

    private static class SampleExtensionMetadataRequestJob implements IDAEMetadataAcquisitionJob {
        IDAEAcquisitionState acquisitionState;

        SampleExtensionMetadataRequestJob (IDAEAcquisitionState acquisitionState) {
            this.acquisitionState = acquisitionState;
        }

        @Override
        public String execute(IDAEProgress callback) throws DAException {
            try {
                JSONObject infoJSON = new JSONObject(acquisitionState.getInfo());
                File metadataFile = new File(infoJSON.getString("metadata"));
                String metadata = new String(Files.readAllBytes(metadataFile.toPath()));
                return metadata;
            } catch (Exception e) {
                throw new DAException("Sample Extension acquisition failed", e);
            }
        }

        @Override
        public void cancel() {
        	// Cancel is currently not supported
        }

        @Override
        public void cleanup() {
        	// Called once acquisition is complete
        }
    }

    private class SampleExtensionClientRequestJob implements IDAEClientRequestJob {

        String request;

        SampleExtensionClientRequestJob(String request) {
            this.request = request;
        }

        @Override
        public String execute(IDAEProgress callback) throws DAException {
            if ("ping".equals(request)) {
                return "pong";
            }
            return null;
        }

        @Override
        public void cancel() {
        	// Cancel is currently not supported
        }

        @Override
        public void cleanup() {
        	// This function is NOT called
        }

    }

    @Override
    public Set<DAEWorkflow> getEnabledWorkflows(IDAEAcquisitionState acquisitionState) {
    	// If the extension is incompatible with the current environment, it may disable itself using this function
    	// return EnumSet.allOf(DAEWorkflow.class) to enable the extension
    	// return EnumSet.noneOf(DAEWorkflow.class) to disable the extension
    	// Partial enabling is not currently supported
        return EnumSet.allOf(DAEWorkflow.class);
    }
}
