
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Dashboards",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	
DashboardName=Datatable("DashboardName",Environment.Value("ActionName"))

DashboardFolder=Datatable("DashboardFolder",Environment.Value("ActionName"))

DashboardDescription=Datatable("DashboardDescription",Environment.Value("ActionName"))

'DashboardName=Datatable("DashboardName",Environment.Value("ActionName"))
'
'AccessType=Datatable("AccessType",Environment.Value("ActionName"))
'GroupDesc=Datatable("GroupDesc",Environment.Value("ActionName"))
'


If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Dashboards").Exist(160) Then
	wait 1
	
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Dashboards").Click
	fnCaptureScreenShot
	wait 2
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation ","Click on Dashboards link: ","Pass"
    Reporter.ReportEvent micPass, "Click on Dashboards ", "Pass"
	else
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation ","Dashboards not found: ","Fail"
    Reporter.ReportEvent micFail, " Dashboards not found: ", "Fail"
End If
wait 5
if Browser("Home | Salesforce").Page("Dashboards | Salesforce").WebElement("New Dashboard").Exist(160) Then
	wait 1
	
	Browser("Home | Salesforce").Page("Dashboards | Salesforce").WebElement("New Dashboard").Click
	fnCaptureScreenShot
	wait 2
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation ","Click on NewDashboard link: ","Pass"
    Reporter.ReportEvent micPass, "Click on NewDashboard link ", "Pass"
	else
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation ","NewDashboard link not displayed: ","Fail"
    Reporter.ReportEvent micFail, " NewDashboard link not displayed: ", "Fail"
End If

'If Browser("Home | Salesforce").Page("Dashboards | Salesforce").Frame("Frame").WebEdit("Dashboard_Name").Exist(60) Then
	
Browser("Home | Salesforce").Page("Dashboards | Salesforce").Frame("Frame").WebEdit("Dashboard_Name").Set DashboardName
fnCaptureScreenShot
ReportGen_Status "Dashboards_Creation ",Environment("ActionName")," "&DashboardName,"Enter the Dashboard:"&DashboardName,"Pass"
Reporter.ReportEvent micPass, "Enter the Dashboard "&DashboardName, "Pass"

'End If
wait 5



Browser("Home | Salesforce").Page("Dashboards | Salesforce").Frame("Frame").WebEdit("Description").Set DashboardDescription
fnCaptureScreenShot
ReportGen_Status "Dashboards_Creation ",Environment("ActionName")," "&DashboardDescription,"Enter the Dashboard description:"&DashboardDescription,"Pass"
Reporter.ReportEvent micPass, "Enter the Dashboard description: "&DashboardDescription, "Pass"

'Browser("Home | Salesforce").Page("Dashboards | Salesforce").WebButton("Select Folder").Click



If Browser("Home | Salesforce").Page("Dashboards | Salesforce").WebButton("Select Folder").Exist(60) Then
'Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("New Group").Highlight
Browser("Home | Salesforce").Page("Dashboards | Salesforce").WebButton("Select Folder").Click
fnCaptureScreenShot
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
'    
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Dashboard Creation ","Click on SelectFolder"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName")," ","Click on SelectFolder","Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Dashboards_Creation ","SelectFolder is not displayed"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation ","SelectFolder is not displayed","Fail"
	
End If
wait 15

'Browser("Home | Salesforce").Page("Dashboards | Salesforce").Frame("Frame").WebEdit("Dashboard_Name").Set

'DashboardFolder="sales and marketing dashb"

'Setting.Webpackage("ReplayType")=2
Browser("Home | Salesforce").Page("Dashboards | Salesforce").WebEdit("Search folders").Set DashboardFolder
'Setting.Webpackage("ReplayType")=1
fnCaptureScreenShot
ReportGen_Status "Dashboards_Creation ",Environment("ActionName")," "&DashboardFolder,"Enter the Dashboard folder:"&DashboardFolder,"Pass"
Reporter.ReportEvent micPass, "Enter the Dashboard folder: "&DashboardFolder, "Pass"




If Browser("Home | Salesforce").Page("Dashboards | Salesforce").Link("Sales and Marketing Dashboards").Exist(10) Then
'Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("New Group").Highlight
Browser("Home | Salesforce").Page("Dashboards | Salesforce").Link("Sales and Marketing Dashboards").Click
fnCaptureScreenShot
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
'    
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Dashboard Creation ","Click on Dashboard sales and Marketing"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"  ","Click on Dashboard sales and Marketing","Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Dashboards_Creation ","Dashboard sales and Marketing is not displayed"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creatio ","Dashboard sales and Marketing is not displayed","Fail"
	
End If





wait 15






If Browser("Home | Salesforce").Page("Dashboards | Salesforce").Frame("Frame").WebButton("Create").Exist(10) Then
'Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("New Group").Highlight
Browser("Home | Salesforce").Page("Dashboards | Salesforce").Frame("Frame").WebButton("Create").Click
fnCaptureScreenShot
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
'    
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Dashboard Creation ","Click on Create button"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"  ","Click on Create","Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Dashboards_Creation ","create button is not displayed"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation ","Create button is not displayed","Fail"
	
End If
wait 15





If Browser("Home | Salesforce").Page("abc | Salesforce").WebButton("Done").Exist(60) Then
Browser("Home | Salesforce").Page("abc | Salesforce").WebButton("Done").Click
fnCaptureScreenShot
'	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("innertext:="&GroupName&"","visible:=True").Click
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"  ","Click on Done " ,"Pass"
    Reporter.ReportEvent micPass, "Click on Done  ", "Pass"
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation  ","Dashboard page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Dashboard page not displayed:   ", "Fail"
	
End If

If Browser("Home | Salesforce").Page("Dashboards | Salesforce").WebElement("innertext:="&DashboardName&"","index:=0").Exist(60) Then
fnCaptureScreenShot
'	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("innertext:="&GroupName&"","visible:=True").Click
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"  "&DashboardName,"Dashboard page displayed:   "&DashboardName ,"Pass"
    Reporter.ReportEvent micPass, "Dashboards_Creation displayed:   "&DashboardName, "Pass"
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation  ","Dashboard page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Dashboard page not displayed:   ", "Fail"
	
End If


Browser("Home | Salesforce").Sync
wait 8




If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Home").Exist(15) Then

	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Home").Click
fnCaptureScreenShot
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation  ","HOme page displayed:   " ,"Pass"
    Reporter.ReportEvent micPass, "Home page displayed:   ", "Pass"
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Dashboards_Creation ",Environment("ActionName"),"Dashboards_Creation  ","Home page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Home page not displayed:   ", "Fail"
	
End If






'Datatable.Value("FileStatus",Environment.Value("ActionName"))=FileStatus


Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Dashboards"












'Repositoriescollection.RemoveAll
