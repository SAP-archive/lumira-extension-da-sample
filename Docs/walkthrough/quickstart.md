#Data Access Extensions - Quickstart

Install the Sample Extension
-----------------
* Open Extension Manager, `File > Extensions`
* Click `Manual Installation`
* Select the zip file from `\docs`
* Restart SAP Lumira Desktop
* Select `File > New Dataset`
* Select `SAP Lumira Sample Extension` from the list of connectors
* Enter the dataset name and these parameters
 + `CSV File`: File path of the CSV File in `docs\sample-data`
 + `Metadata File`: Metadata file describing the data columns being imported in `docs\sample-data`
* Select `OK` to import data into a new document

Environment Setup
-----------------
* Requirements
 + SAP Lumira 1.29+ & Discovery
 + Java Development Kit 7, Update 75 or later
 + Eclipse Luna IDE for Java EE Developers
* Edit `docs\eclipse.bat`
 + Set `ECLIPSE_HOME` to your eclipse installation
 + Set `JAVA_HOME` to your JDK installation

Build the Extension
------------------
* Run `docs\eclipse.bat` to launch Eclipse
* Import this Sample Extension project into eclipse
 + Open the file `platform.target`
 + Click `Set as Target Platform` button in the top right
 + Ignore any errors displayed on `plugin.xml` 
* Run `export.xml` using Ant `Run As > Ant Build`
* Install the extension zip generated in the `target` folder 

Adding third-party libraries
-------------------
* Place a copy of the JAR in `/lib` folder
* In `META-INF/manifest.mf`, add `lib/<jar-file-name.jar>` to `Bundle-Classpath`
* Note: ensure you don’t remove the `,.` at the end of `Bundle-Classpath`

Goodies!
-------
####docs/rename-dae.exe
Script to replace text, rename files and folders to match a new extension name
* Run the executable from the `docs` folder on a fresh copy of this repo
* Enter the name of the new extension, no spaces, ex: `GoogleDocs`
* Enter the package path, exclude the extension name, ex: `com.companyname.bi.da`
* Rename the project folder and test the modified code

#### want more?
* create an issue and we’ll bake them asap :)

Resources
-----------
* Documentation - [help.sap.com/lumira](http://help.sap.com/lumira)
* Developer Guide - [SAP Lumira v2 Data Access Extension SDK Developer guide](http://help.sap.com/businessobject/product_guides/vi01/en/lum_125_dae_dev_en.pdf)
* SCN Blog post - [Getting Started with the V2 Data Access Extension SDK](http://scn.sap.com/community/lumira/blog/2015/06/18/get-started-with-the-sap-lumira-v2-data-access-extension-sdk)
* Webinar - [Introduction to the Version 2 DAE SDK](https://youtu.be/_ERmzCqhUN0)