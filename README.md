Sample Extension - SAP Lumira Data Access Extension SDK V2
==========================================================
A data access extension is a plugin module that allows users to access an additional data source that is not supported out of the box in SAP Lumira. For example, using the SDK you can create data access extensions to import data from XML files, social data sources like Twitter or Facebook, or other databases like MongoDB.

This sample extension repo has code you’ll need to get started with creating your own data access extensions for Lumira 1.25 and above.

Install the Sample Extension
-----------------
* Open Extension Manager, `File > Extensions`
* Click `Manual Installation`
* Select the zip file called `com.sap.lumira.sampleextension.zip`
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
 + SAP Lumira 1.25
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
* SCN Blog post - [Coming soon](https://www.google.com/search?q=baby+cat+pics)

License
---------

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

 [1]: https://github.com/SAP/lumira-extension-da-sample
