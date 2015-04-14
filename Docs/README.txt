SAP Lumira Sample Extension
for Data Acquisition Extension Framework

Requirements:
SAP Lumira 1.24 or later
JDK 1.7+
Eclipse

Instructions:

1.	Edit eclipse.bat
	- set ECLIPSE_HOME to your eclipse install location
	- set JAVA_HOME to your JDK install location (must be JDK, not JRE)
	Run eclipse.bat to launch eclipse and import the com.sap.lumira.sampleextension project
	
2.	Within Eclipse, open platform.target using Target Editor
	Click the 'Set as Target Platform' button in the top right
	(It is fine if plugin.xml still shows an error)
	
3.	To build the extension, run export.xml using ant (Run As > Ant Build)
	This will create a folder called target within the project
	The compiled extension zip will be located here, along with other build artifacts
	
4.	In SAP Lumira 1.24 or later, use the Extension Manaager to install the extension.
  	Test the extension using the sample data and metadata file.
  	
