What is SAP Lumira Data Access Extension V2 SDK?
------------------------------------------------
A data access extension is a plugin module created by SAP or other developers
that allows users to access an additional data source. For example, data can be
imported from XML files, social data sources like Twitter or Facebook, or other
big data sources such as Google Big Query.

The V2 data access extension framework was released with SAP Lumira 1.24. The
new architecture is faster uses the new Extension Manager to install the plugins.
In the future, extensions that follow the developer guidelines may be used on
the SAP Lumira Server and Cloud.

The V1 DA *.exe style extensions will still work. Be sure to use the prior version
of the Data Access Extensions for SAP Lumira Developer Guide version 1.17.

SAP Lumira is SAP’s self-service analytics and visualization tool. SAP Lumira can
be downloaded as a personal edition for free from saplumira.com (or purchased
for enterprise usage). It allows to import data (local, DB, BI and more),
prepare and cleanse it, visualize and finally publish & share the data in
form of ‘stories’ and ‘info graphics’.

SAP delivers various visualizations out of the box (e.g., bar & bubble charts,
cloud tags and many more). 

SAP datasource support out of the box includes the following:
* Microsoft Excel
* Text (.csv, .txt, .log, .prn, .tsv)
* Copy from Clipboard
* Connect to SAP HANA
* Download from SAP HANA
* Universe
* Query with SQL
* Connect to SAP Business Warehouse

SAP Lumira comes with an SDK. This lets you build custom extensions, which is
typically done for specific use cases. Extensions built that way are simply
copied into the folder structure of an SAP Lumira installation (desktop or
server), and can then be used.


Features
--------
* Installs easily using the Extension Manager
* Imports CSV data from a local file, sample data supplied
* Metafile for column descriptions sample data supplied
* JSON library included
* Customize your own icons
* Java and Javascript example of calling backend code from the JavaScript file
* File path declaration to the CSV data file and Metadata file


Try it!
-----------
Check out our SAP Lumira Data Access Extension Library. 
This library contains data access extension developed using the SAP Lumira V2 data access framework SDK. 

List of current V2 data access extensions in the repository
* Sample Extension


Get it!
-----------
It's free. Go to the folder of each extension in this repo and get the complete source code and .profile
and readme containing link to the SCN blog. Read the SCN blog to understand how the
custom extension works with the help of a use case.



Hack it!
-----------
You can download these custom extensions and modify further to adapt to specific use cases. You can then publish your
modified data access extensions to github to share them.



