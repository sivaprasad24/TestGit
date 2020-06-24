LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"


Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Notes",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
OpenReport()
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	

Title=Datatable("NotesTitle",Environment.Value("ActionName"))
AccountName=Datatable("AccountName",Environment.Value("ActionName"))


fnCaptureScreenShot


If Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Exist(160) Then
   
	
	Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Set AccountName
	wait 1
	Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Click
	wait 2
	
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


If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Notes").Exist(50) Then

Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Notes").Click
fnCaptureScreenShot
wait 5
'	Reporter.ReportEvent micPass,"Notes ","Click on Notes link ."
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","Click on Notes link","Pass"
    Reporter.ReportEvent micPass, "Click on Notes link", "Pass"
	else
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","Notes link is not displayed.","Fail"
    Reporter.ReportEvent micFail, "Notes link is not displayed.", "Fail"
'	Reporter.ReportEvent micFail,"Notes  ","Notes link is not displayed."
End If



If Browser("Home | Salesforce").Page("Notes | Salesforce").WebElement("Notes").Exist(25) Then
fnCaptureScreenShot
    ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","Notes page is displayed","Pass"
    Reporter.ReportEvent micPass, "Notes page is displayed", "Pass"
'	Reporter.ReportEvent micPass,"Notes page ","Notes page is displayed"
	else
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","Notes page is not displayed","Fil"
    Reporter.ReportEvent micFail, "Notes page is not displayed", "Fail"
'	Reporter.ReportEvent micFail,"Notes page ","Notes page  is not displayed"
End If

wait 5




If Browser("Home | Salesforce").Page("Notes | Salesforce").WebButton("New").Exist(60) Then

    Browser("Home | Salesforce").Page("Notes | Salesforce").WebButton("New").Click
    fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Notes Creation ","Click on New Notes link"
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","Click on New Notes link","Pass"
    Reporter.ReportEvent micPass, "Click on New Notes link", "Pass"
	else
'	Reporter.ReportEvent micFail,"Notes Creation ","New Notes link  is not displayed"
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","New Notes link  is not displayed","Fail"
    Reporter.ReportEvent micPass, "New Notes link  is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync




If Browser("Home | Salesforce").Page("Notes | Salesforce").WebElement("Visibility Set by Record").Exist(10) Then
wait 1
fnCaptureScreenShot
'Browser("Home | Salesforce").Page("Notes | Salesforce").WebEdit("Untitled Note").Click
'wait 5
'Browser("Home | Salesforce").Page("Notes | Salesforce").WebElement("TextArea").clic
wait 5
Setting.Webpackage("ReplayType")=2
'Browser("Home | Salesforce").Page("Notes | Salesforce").WebEdit("Untitled Note").SetTOProperty "value",Title
Browser("Home | Salesforce").Page("Notes | Salesforce").WebEdit("WebEdit").Set Title
Setting.Webpackage("ReplayType")=1

	wait 10
	fnCaptureScreenShot
	Browser("Home | Salesforce").Page("Notes | Salesforce").WebElement("Done").Click

'	Reporter.ReportEvent micPass,"Notes Creation ","Notes  saved successful"
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  "&Title,"Notes page is  displayed","Pass"
    Reporter.ReportEvent micPass, "Notes  saved successful", "Pass"
	else
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  "&Title,"Notes page is not displayed","Fail"
    Reporter.ReportEvent micFail, "Notes  saved successful", "Fail"
'	Reporter.ReportEvent micFail,"Notes Creation ","Notes page is not displayed"
	
End If
Browser("Home | Salesforce").Sync








wait 5

If Browser("Home | Salesforce").Page("Notes | Salesforce").WebElement("AccountName").Exist(15) Then

	Browser("Home | Salesforce").Page("Notes | Salesforce").WebElement("AccountName").Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","Account page successful","Pass"
    Reporter.ReportEvent micPass, "Account page successful", "Pass"
'	Reporter.ReportEvent micPass,"Notes","Account page successful:   "
	else
	ReportGen_Status "Account_Notes_Creation ",Environment("ActionName"),"  ","Account page not displayed","Fail"
    Reporter.ReportEvent micFail, "Account page not displayed", "Fail"
'	Reporter.ReportEvent micFail,"Notes","Account page not successful"
	
End If






'Datatable.Value("Contract_create",Environment.Value("ActionName"))=ContractSaved


Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Notes"















'Repositoriescollection.RemoveAll
