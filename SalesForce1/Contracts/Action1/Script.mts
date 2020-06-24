
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Contracts",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	

AccountName=Datatable("AccountName",Environment.Value("ActionName"))

fnCaptureScreenShot
'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Highlight



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
wait 6
If Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").Exist(160) Then
	Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").ChildItem(2,2,"Link",0).Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"AccountName ","Click on AccountName: "&AccountName,"Pass"
    Reporter.ReportEvent micPass, "Click on AccountName: "&AccountName, "Pass"
	else
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"New Contact ","AccountName  not found: "&AccountName,"Fail"
    Reporter.ReportEvent micFail, " AccountName  not found: "&AccountName, "Fail"
	
End If
wait 5





If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Exist(50) Then
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Click
wait 8
fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Contracts ","Click on Contracts link ."
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Click on Contracts link","Pass"
    Reporter.ReportEvent micPass, "Click on Contracts link", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts  ","Contracts link is not displayed."
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Contracts link is not displayed.","Fail"
    Reporter.ReportEvent micFail, "Contracts link is not displayed.", "Fail"
End If
Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("Contracts").Highlight

If Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("Contracts").Exist(25) Then
fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"  ","Contracts page is displayed","Pass"
    Reporter.ReportEvent micPass, "Contracts page is displayed", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Contracts page is not displayed","Fail"
    Reporter.ReportEvent micFail, "Contracts page is not displayed", "Fail"
End If




wait 8
If Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("name:=New","visible:=True").Exist(60) Then
  Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("name:=New","visible:=True").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("name:=New","visible:=True").Click
    fnCaptureScreenShot
    ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"  ","Click on New Contract link","Pass"
    Reporter.ReportEvent micPass, "Click on New Contract link", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","New Contract link  is not displayed","Fail"
    Reporter.ReportEvent micFail, "New Contract link  is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync
If Browser("Home | Salesforce").Page("New Contract | Salesforce").WebElement("New Contract").Exist(10) Then
fnCaptureScreenShot
	 ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"  ","New Contract page is displayed","Pass"
    Reporter.ReportEvent micPass, "New Contract page is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"  ","New Contract page is not displayed","Fail"
    Reporter.ReportEvent micFail, "New Contract page is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8

sDate=Date+2

Browser("Home | Salesforce").Page("New Contract | Salesforce").WebEdit("ContractDate").Set Month(sDate)&"/"&Day(sDate)&"/"&Year(sDate)
fnCaptureScreenShot
ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName")," "&Date+2,"Contract Date is Entered:  "&Date+2 ,"Pass"
Reporter.ReportEvent micPass, "Contract Date is Entered: "&Date+2, "Pass"
    
    
Browser("Home | Salesforce").Page("New Contract | Salesforce").WebEdit("ContractTerm").Set 8
fnCaptureScreenShot
ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"  8","Contract Term is Entered:  8" ,"Pass"
Reporter.ReportEvent micPass, "Contract Term is Entered: 8", "Pass"
wait 5
Browser("Home | Salesforce").Page("New Contract | Salesforce").WebButton("--None--").Click

Notice_Expiry="15 Days"



Browser("Home | Salesforce").Page("New Contract | Salesforce").Link("name:="&Notice_Expiry&"").Click
fnCaptureScreenShot
ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName")," "&Notice_Expiry,"Contract Expiry is Entered:  "&Notice_Expiry ,"Pass"
Reporter.ReportEvent micPass, "Contract Expiry is Entered: "&Notice_Expiry, "Pass"

fnCaptureScreenShot

Browser("Home | Salesforce").Page("New Contract | Salesforce").WebButton("Save").Click

'Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebElement("Save").Click


'Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("OpportunitySaved").Click



If Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("Contract Created").Exist(15) Then
	ContractSaved=Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("Contract Created").GetROProperty("innertext")
	fnCaptureScreenShot
	Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("Contract Created").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"  "&ContractSaved,"Contract saved successful:   "&ContractSaved ,"Pass"
    Reporter.ReportEvent micPass, "Contract saved successful: "&ContractSaved, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Contract not saved successful:   " ,"Fail"
    Reporter.ReportEvent micFail, "Contract not saved successful: ", "Fail"
	
End If
Browser("Home | Salesforce").Sync

wait 5


fnCaptureScreenShot

'If Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("AccountName").Exist(15) Then
'	Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("AccountName").Click
'	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Account page displayed:   " ,"Pass"
'    Reporter.ReportEvent micPass, "Account page displayed:   ", "Pass"
''	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
'	else
''	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
'	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Account page not displayed:   " ,"Fail"
'    Reporter.ReportEvent micFail, "Account page not displayed:   ", "Fail"
'	
'End If

If Browser("Home | Salesforce").Page("Contracts | Salesforce").Link("innertext:="&AccountName&"","visible:=True").Exist(15) Then
	Browser("Home | Salesforce").Page("Contracts | Salesforce").Link("innertext:="&AccountName&"","visible:=True").Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Account page displayed:   " ,"Pass"
    Reporter.ReportEvent micPass, "Account page displayed:   ", "Pass"
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Account_Contracts_Creation ",Environment("ActionName"),"Contracts_Creation  ","Account page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Account page not displayed:   ", "Fail"
	
End If





Datatable.Value("Contract_create",Environment.Value("ActionName"))=ContractSaved


Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Contracts"












'Repositoriescollection.RemoveAll
