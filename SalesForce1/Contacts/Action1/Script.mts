
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Contacts",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	
Fname=Datatable("Fname",Environment.Value("ActionName"))
Lname=Datatable("Lname",Environment.Value("ActionName"))
Email=Datatable("Email",Environment.Value("ActionName"))
Title=Datatable("Title",Environment.Value("ActionName"))
Phone=Datatable("Phone",Environment.Value("ActionName"))
AccountName=Datatable("AccountName",Environment.Value("ActionName"))




If Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Exist(125) Then
	fnCaptureScreenShot
	Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Set AccountName
	wait 5
	Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Click
	wait 2
	Set obj=CreateObject("Wscript.shell")
	obj.SendKeys("{ENTER}")
	Set obj=Nothing
End If
WAit 6
If Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").Exist(135) Then
	Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").ChildItem(2,2,"Link",0).Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"AccountName ","Click on AccountName: "&AccountName,"Pass"
    Reporter.ReportEvent micPass, "Click on AccountName: "&AccountName, "Pass"
    fnCaptureScreenShot
	else
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"New Contact ","AccountName  not found: "&AccountName,"Fail"
    Reporter.ReportEvent micFail, " AccountName  not found: "&AccountName, "Fail"
	
End If

wait 10


'Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").GetCellData


'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("New Contact").Highlight

If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("New Contact").Exist(20) Then

Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("New Contact").Click
fnCaptureScreenShot
wait 5
'Reporter.ReportEvent micPass,"NewContact  ","Click on New Contact link"
 ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"New Contact ","Click on New Contact link","Pass"
 Reporter.ReportEvent micPass, "Click on New Contact link", "Pass"
else
'Reporter.ReportEvent micFail,"NewContact  ","New Contact link is not displayed"
  ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"New Contact ","Click on New Contact link","Fail"
 Reporter.ReportEvent micFail, "Click on New Contact link", "Fail"	
	
End If
wait 5

If Browser("Home | Salesforce").Page("New Contact | Salesforce").WebElement("New Contact").Exist(10) Then
	Browser("Home | Salesforce").Page("New Contact | Salesforce").WebButton("--None--").Click
	Salution="Mr."
    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
    fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName")," "&Salution,"Select the Salution in NewContact:"&Salution,"Pass"
    Reporter.ReportEvent micPass, "Select the Salution in NewContact:"&Salution, "Pass"
	else
'	Reporter.ReportEvent micFail,"NewContact Creation ","Salution field is not displayed"
    ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"Contact Creation ","Salution field is not displayed","Fail"
    Reporter.ReportEvent micFail, "Salution field is not displayed", "Pass"
	
End If


Browser("Home | Salesforce").Page("New Contact | Salesforce").WebEdit("First Name").Set Fname
fnCaptureScreenShot
ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),""&Fname,"First name entered as :"&Fname,"Pass"
Reporter.ReportEvent micPass, "First Name entered as: "&Fname, "Pass"

Browser("Home | Salesforce").Page("New Contact | Salesforce").WebEdit("Last Name").Set Lname
fnCaptureScreenShot
ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),""&Lname,"Last name entered as :"&Lname,"Pass"
Reporter.ReportEvent micPass, "Last Name entered as: "&Lname, "Pass"

Browser("Home | Salesforce").Page("New Contact | Salesforce").WebEdit("Title").Set Title
fnCaptureScreenShot
ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),""&Title,"Title entered as :"&Title,"Pass"
Reporter.ReportEvent micPass, "Title entered as: "&Title, "Pass"

Browser("Home | Salesforce").Page("New Contact | Salesforce").WebEdit("Email").Set Email
fnCaptureScreenShot
ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),""&Email,"Email entered as :"&Email,"Pass"
Reporter.ReportEvent micPass, "Email entered as: "&Email, "Pass"

Browser("Home | Salesforce").Page("New Contact | Salesforce").WebEdit("Mobile").Set Phone
fnCaptureScreenShot
ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),""&Phone,"Phone entered as :"&Phone,"Pass"
Reporter.ReportEvent micPass, "Phone entered as: "&Phone, "Pass"





Browser("Home | Salesforce").Page("New Contact | Salesforce").WebElement("Save").Click
fnCaptureScreenShot
ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"","Click on Save button","Pass"
Reporter.ReportEvent micPass, "Click on Save button", "Pass"

Browser("Home | Salesforce").Sync




If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("ContactCreated").Exist(15) Then
	ContactCreate=Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("ContactCreated").GetROProperty("innertext")
	
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("ContactCreated").Highlight
	fnCaptureScreenShot
	ReportGen_Status "Account Contact_Creation ",Environment("ActionName"),"Account Contact Creation","Contact added successful  :"&ContactCreate,"Pass"
    Reporter.ReportEvent micPass, "Account Contact created successful: "&ContactCreate, "Pass"
'	Reporter.ReportEvent micPass,"NewContact Added ","NewContact added successful:   "&ContactCreate
	else
'	Reporter.ReportEvent micFail,"NewContact Added ","NewContact not added successful"
	ReportGen_Status "Account Contact_Creation ",Environment("ActionName"),"Account Contact Creation","contact not added  :","Fail"
    Reporter.ReportEvent micFail, "Account Contact_Creation  : "&ContactCreate, "Fail"
	
End If







Datatable.Value("Contact_create",Environment.Value("ActionName"))=ContactCreate


Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Contacts"


'Repositoriescollection.RemoveAll













