Installation instructions for sampleextension
---------------------------------------------
This project will create a install-ready data access extension 
for SAP Lumira (version 1.24 and later).
This extension imports a *.csv and metadata *.txt file.
No data conversion is performed so the CSV file format must
adhere to the csv format specified in the developer guide.


Hardware and software required
------------------------------
Hardware Requirements
- Windows computer 32-bit or 64-bit, with at least 4GB RAM
- 3.5GB hard drive space for the SAP Lumira installation and data

SAP Software
- SAP Lumira 1.24 32-bit or 64-bit

Third-party Software
- Eclipse Luna Java EE IDE for Web Developers
- Java Development Kit 7, with Update 75 or later, 32-bit or 64-bit
- JavaScript resources that Eclipse adds automatically are the ECMA* libraries


Software Dependencies
---------------------
This project folder contains the JSON 3rd party library software
This project uses SAP Lumira 1.25 SDK located at 
<installation directory>SAP Lumira\Desktop\plugins\com.sap.bi.da.extension.sdk_1.25...jar


Documentation
-------------
http://help.sap.com/lumira
Data Access Extensions for SAP Lumira Developer Guide (version 1.25)


Setting path variables for Eclipse and Java JDK
-----------------------------------------------
1. Edit \workspace_SampleExtension\eclipse.bat
2. Update the ECLIPSE_HOME and JAVA_HOME variables to match your environment.
   For example:
   set ECLIPSE_HOME=C:\Program Files\eclipse
   set JAVA_HOME=C:\Program Files\Java\jdk1.7.0_75
   

Building the sample extension using Eclipse
-------------------------------------------
1. Run the batch file \workspace_SampleExtension\eclipse.bat to open Eclipse in a new window.
2. Double-click platform.target from the Eclipse Project Explorer.
3. In the platform.target window at the top right, click the link Set as Target Platform.
4. Right-click on export.xml > Run As > Ant Build.
* Note:  The Eclipse Console pane, located at the bottom right, displays the
   build progress. The Total time: will display to let you know the build is
   complete.
  
5. In Windows Explorer, verify the presence of the compiled extension at
   <Eclipse project path>\com.sap.lumira.sampleextension\target\


Installing the extension into SAP Lumira
----------------------------------------
1. In SAP Lumira, open the Extension Manager from the File > Extensions menu.
2. In the Extension Manager dialog box, click the Install Extension button
   located at the lower right.
3. In the Open dialog box, find and select the sample extension ZIP file, then
   click the Open button.
4. Close the Extension Manager and restart SAP Lumira.


Testing the sample extension in SAP Lumira
------------------------------------------
1. Start SAP Lumira and go to File > New Dataset, under Select a Source, select
   SAP Lumira Sample Extension, (blue square icon), then select Next.
2. Enter the Dataset Name, the path to the data text CSV File (for example,
   c:\Data\test.csv), and the path to the Metadata File 
   (for example, c:\Data\test.txt, and click OK.
   Note: The Ping button is an example of a simple user interface component
         added to the JavaScript code. Click the Ping button, and a pong dialog box appears.
3. To display the data, from the left-most panel MEASURES section, drag Integer
   to the X Axis under the MEASURES label, and from the left-most panel DIMENSIONS
   section, drag Number... to the Y Axis under the DIMENSIONS label, and drag
   String... or Date... to Legend Color DIMENSIONS area.
4. Test the Edit data source and Refresh document Data menu items by swapping
   the data files. Make sure the metadata text file applies to each CSV file you
   swap. Do not have the CSV file locked open by another program such as Microsoft
   Excel.


