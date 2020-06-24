
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Filess",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	


'Title=Datatable("Title",Environment.Value("ActionName"))
AccountName=Datatable("AccountName",Environment.Value("ActionName"))

fnCaptureScreenShot



If Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Exist(160) Then
   
	
	Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Set AccountName
	wait 1
	Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Click
	wait 5
	
	Set obj=CreateObject("Wscript.shell")
	wait 2
	obj.SendKeys("{ENTER}")
	wait 2
	Set obj=Nothing
End If
wait 5
If Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").Exist(160) Then
	Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").ChildItem(2,2,"Link",0).Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"AccountName ","Click on AccountName: "&AccountName,"Pass"
    Reporter.ReportEvent micPass, "Click on AccountName: "&AccountName, "Pass"
	else
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"New Contact ","AccountName  not found: "&AccountName,"Fail"
    Reporter.ReportEvent micFail, " AccountName  not found: "&AccountName, "Fail"
	
End If
wait 10






'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Highlight

If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Files").Exist(50) Then
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Files").Click
wait 8
fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Contracts ","Click on Contracts link ."
	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"  ","Click on Files link","Pass"
    Reporter.ReportEvent micPass, "Click on Files link", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts  ","Contracts link is not displayed."
	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"  ","Files link is not displayed.","Fail"
    Reporter.ReportEvent micFail, "Files link is not displayed.", "Fail"
End If

'Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Add Files").Highlight


If Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Add Files").Exist(25) Then
Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Add Files").Highlight
Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Add Files").Click
fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"  ","Add File page is displayed","Pass"
    Reporter.ReportEvent micPass, "Add File page is displayed", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts page ","Contracts apage  is not displayed"
	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"  ","Add File page is not displayed","Fail"
    Reporter.ReportEvent micFail, "Add File page  is not displayed", "Fail"
End If





wait 8
If Browser("Home | Salesforce").Page("Files | Salesforce").WebButton("Upload Files").Exist(60) Then
  Browser("Home | Salesforce").Page("Files | Salesforce").WebButton("Upload Files").Highlight
  Setting.Webpackage("ReplayType")=2
    Browser("Home | Salesforce").Page("Files | Salesforce").WebButton("Upload Files").Click
    Setting.Webpackage("ReplayType")=1
    fnCaptureScreenShot
    ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"  ","Click on Upload Files button","Pass"
    Reporter.ReportEvent micPass, "Click on New Contract link", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"Upload Files  ","Upload Files button  is not displayed","Fail"
    Reporter.ReportEvent micFail, "Upload Files button  is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync








If Window("Google Chrome").Dialog("Open").WinEdit("File name:").Exist(10) Then
wait 5
Window("Google Chrome").Dialog("Open").WinEdit("File name:").Set "D:\SalesForce\Documents\Desert.jpg"
wait 5
Window("Google Chrome").Dialog("Open").WinObject("Open").Click
fnCaptureScreenShot
	 ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"D:\SalesForce\Documents\Desert.jpg ","Enter the Filename in field","Pass"
    Reporter.ReportEvent micPass, "Enter the filename", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"  ","Filename field is not displayed","Fail"
    Reporter.ReportEvent micFail, "Filename field is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 25

If Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Done").Exist(150) Then
Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Done").Highlight
wait 20
	Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Done").Click
End If



If Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("file was added to Account.").Exist(60) Then
wait 2
Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("file was added to Account.").Highlight
FileStatus=Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("file was added to Account.").GetROProperty("innertext")
fnCaptureScreenShot
	 ReportGen_Status "Account_Files_Creation ",Environment("ActionName")," "&FileStatus,"File added to account:"&FileStatus,"Pass"
    Reporter.ReportEvent micPass, "File added to account: "&FileStatus, "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"Uploadfile  ","File not added","Fail"
    Reporter.ReportEvent micFail, "File not added", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8

If Browser("Home | Salesforce").Page("Cases | Salesforce").Link("innertext:="&AccountName&"","visible:=True").Exist(15) Then
	Browser("Home | Salesforce").Page("Cases | Salesforce").Link("innertext:="&AccountName&"","visible:=True").Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Case_Creation ",Environment("ActionName"),"  ","Account page displayed:   " ,"Pass"
    Reporter.ReportEvent micPass, "Account page displayed:   ", "Pass"
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Account_Case_Creation ",Environment("ActionName"),"  ","Account page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Account page not displayed:   ", "Fail"
	
End If



'If Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Accountname").Exist(15) Then
'	Browser("Home | Salesforce").Page("Files | Salesforce").WebElement("Accountname").Click
'	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"Files_Creation  ","Account page displayed:   " ,"Pass"
'    Reporter.ReportEvent micPass, "Account page displayed:   ", "Pass"
''	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
'	else
''	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
'	ReportGen_Status "Account_Files_Creation ",Environment("ActionName"),"Files_Creation  ","Account page not displayed:   " ,"Fail"
'    Reporter.ReportEvent micFail, "Account page not displayed:   ", "Fail"
'	
'End If






Datatable.Value("FileStatus",Environment.Value("ActionName"))=FileStatus


Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Filess"















'Repositoriescollection.RemoveAll
