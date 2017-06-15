# Data Access Extensions - Quickstart Guide

If you already familiar with Data Access Extensions, this quick start guide may be a suitable reference. For more in-depth walkthroughs, head back to the [overview](../../README.md) or check out the Twitter extension example [tutorial](https://github.com/denzalereese/lumira-extension-da-twitter).

Install the Sample Extension
-----------------
* Open Extension Manager, `File > Extensions`
* Click `Manual Installation`
* Select the zip file from `\install-extension`
* Restart SAP Lumira
* Select `File > New Dataset`
* Select `SAP Lumira Sample Extension` from the list of connectors
* Enter the dataset name and these parameters
 + `CSV File`: File path of the CSV File in `Docs\sample-data`
 + `Metadata File`: Metadata file describing the data columns being imported in `Docs\sample-data`
* Select `OK` to import data into a new document

Environment Setup
-----------------
* Requirements
 + SAP Lumira 1.29+ & 2.x Discovery
 + Java Development Kit 7, Update 75 or later
 + Eclipse Luna IDE for Java EE Developers
* Edit `Docs\eclipse.bat`
 + Set `ECLIPSE_HOME` to your eclipse installation
 + Set `JAVA_HOME` to your JDK installation

Build the Extension
------------------
* Run `Docs\eclipse.bat` to launch Eclipse
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
* Run the executable from the `Docs` folder on a fresh copy of this repo
* Enter the name of the new extension, no spaces, ex: `GoogleDocs`
* Enter the package path, exclude the extension name, `com.sap.bi.da.extension`
* Rename the project folder and test the modified code

#### want more?
* create an issue and we’ll bake them asap :)

Resources
-----------
* Documentation - [help.sap.com/lumira](http://help.sap.com/lumira)
* Developer Guide - [SAP Lumira v2 Data Access Extension SDK Developer guide](http://help.sap.com/businessobject/product_guides/vi01/en/lum_125_dae_dev_en.pdf)