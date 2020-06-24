

LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"
Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Cases",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	
	
CaseContact=Datatable("CaseContact",Environment.Value("ActionName"))
	Subject=Datatable("Subject",Environment.Value("ActionName"))
	Descrition=Datatable("Descrition",Environment.Value("ActionName"))
	Comments=Datatable("Comments",Environment.Value("ActionName"))
	Company=Datatable("Company",Environment.Value("ActionName"))
	AccountName=Datatable("AccountName",Environment.Value("ActionName"))
	
fnCaptureScreenShot



If Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Exist(160) Then
   
	
	Browser("Home | Salesforce").Page("Account_Salesforce").WebEdit("Search_Accounts").Set AccountName
	wait 2
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





If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Cases").Exist(60) Then
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Cases").Highlight

Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Cases").Click
wait 5
fnCaptureScreenShot
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","Click on Cases link","Pass"
 Reporter.ReportEvent micPass, "Click on  Cases link", "Pass"
'Reporter.ReportEvent micPass,"Cases  ","Click on Cases link"
else
'Reporter.ReportEvent micFail,"Cases  ","Cases  link is not displayed"
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","Cases link is not displayed","Fail"
 Reporter.ReportEvent micFail, "Cases link is not displayed", "Fail"
	
End If


wait 5
If Browser("Home | Salesforce").Page("Cases | Salesforce").WebButton("New").Exist(25) Then
    Browser("Home | Salesforce").Page("Cases | Salesforce").WebButton("New").Highlight
    Browser("Home | Salesforce").Page("Cases | Salesforce").WebButton("New").Click
    fnCaptureScreenShot
	Reporter.ReportEvent micPass,"Account_Cases_Creation ","Click on Cases link"
	ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","Click on Cases link","Pass"
' Reporter.ReportEvent micPass, "Click on  Cases link", "Pass"
	else
	Reporter.ReportEvent micFail,"Account_Cases_Creation ","New Case link  is not displayed"
	ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","New Case link  is not displayed","Fail"
'	Reporter.ReportEvent micFail,"Cases Creation ","New Case link  is not displayed"
End If




If Browser("Home | Salesforce").Page("New Case | Salesforce").WebElement("New Case").Exist(10) Then
'	Browser("Home | Salesforce").Page("New Contact | Salesforce").WebButton("--None--").Click
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
    fnCaptureScreenShot
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Account_Cases_Creation ","NewCase Window is displayed"
	ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"  ","NewCase window is displayed","Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Account_Cases_Creation ","NewCase window is not displayed"
	ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","NewCase window is not displayed","Fail"
	
End If


'Browser("Home | Salesforce").Page("New Case | Salesforce").WebElement("FirstContact").Click
wait 5
'Browser("Home | Salesforce").Page("New Case | Salesforce").Link("name:="&CaseContact&".*","index:=1").Click


'contact=Browser("Home | Salesforce").Page("New Case | Salesforce").WebElement("FirstContact").GetROProperty("innertext")
'Reporter.ReportEvent micPass,"Account_Cases_Creation ","Select the contact as: "&contact
'ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","Select the contact as: "&contact,"Pass"
'
'wait 5


'Account="abay alan"
 rcnt=Browser("Home | Salesforce").Page("New Case | Salesforce").WebList("SearchContact").GetROProperty("items count") 
 fnCaptureScreenShot
' msgbox rcnt
 For j = 1 To rcnt Step 1
 contact= Browser("Home | Salesforce").Page("New Case | Salesforce").WebList("SearchContact").GetItem(j)
 If instr(1,contact,CaseContact)>0 Then
 	Browser("Home | Salesforce").Page("New Case | Salesforce").WebList("SearchContact").Select contact
 	fnCaptureScreenShot
 	Reporter.ReportEvent micPass,"Account_Cases_Creation ","Select the contact as: "&contact
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName")," "&contact,"Select the contact as: "&contact,"Pass"
 Exit For	
 End If
 	
 Next
 
 
'Browser("Home | Salesforce").Page("New Case | Salesforce").WebList("SearchContact").Select







Browser("Home | Salesforce").Page("New Case | Salesforce").WebButton("--None--").Click
wait 5

Case_Origin="Phone"

Browser("Home | Salesforce").Page("New Case | Salesforce").Link("name:="&Case_Origin&"").Click
fnCaptureScreenShot
Reporter.ReportEvent micPass,"Account_Cases_Creation ","Select the Case Origin as: "&Case_Origin
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName")," "&Case_Origin,"Select the Case Origin as: "&Case_Origin,"Pass"


Browser("Home | Salesforce").Page("New Case | Salesforce").WebEdit("Subject").Set Subject
fnCaptureScreenShot
Reporter.ReportEvent micPass,"Account_Cases_Creation ","Enter the subject: "&Subject
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),""&Subject,"Enter the Case subject as: "&Subject,"Pass"


Browser("Home | Salesforce").Page("New Case | Salesforce").WebEdit("Description").Set Descrition
fnCaptureScreenShot
Reporter.ReportEvent micPass,"Account_Cases_Creation ","Enter the Description: "&Descrition
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName")," "&Descrition,"Enter the Case Description as: "&Descrition,"Pass"


Browser("Home | Salesforce").Page("New Case | Salesforce").WebEdit("Internal_Commnets").Set Comments
fnCaptureScreenShot
Reporter.ReportEvent micPass,"Account_Cases_Creation ","Enter the Comments: "&Comments
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),""&Comments,"Enter the Case Comments as: "&Comments,"Pass"


Browser("Home | Salesforce").Page("New Case | Salesforce").WebEdit("WebMail").Set "Test.TEst1@yopmail.com"


Browser("Home | Salesforce").Page("New Case | Salesforce").WebEdit("WebCompany").Set Company
fnCaptureScreenShot
Reporter.ReportEvent micPass,"Account_Cases_Creation ","Enter the WebCompany: "&Company
ReportGen_Status "Account_Cases_Creation ",Environment("ActionName")," "&Company,"Enter the WebCompany as: "&Company,"Pass"


Browser("Home | Salesforce").Page("New Case | Salesforce").WebElement("Save").Click




Browser("Home | Salesforce").Sync
fnCaptureScreenShot

If Browser("Home | Salesforce").Page("Cases | Salesforce").WebElement("Casecreated.").Exist(15) Then
	CaseCreate=Browser("Home | Salesforce").Page("Cases | Salesforce").WebElement("Casecreated.").GetROProperty("innertext")
	fnCaptureScreenShot
	Browser("Home | Salesforce").Page("Cases | Salesforce").WebElement("Casecreated.").Highlight
'	Reporter.ReportEvent micPass,"Case Added ","Case added successful:   "&CaseCreate
	Reporter.ReportEvent micPass,"Account_Cases_Creation ","Case added successful: "&CaseCreate
    ReportGen_Status "Account_Cases_Creation ",Environment("ActionName")," "&CaseCreate,"Case added successful: "&CaseCreate,"Pass"

	else
'	Reporter.ReportEvent micFail,"Case Added ","Case not added successful"
	Reporter.ReportEvent micFail,"Account_Cases_Creation ","Case not added successful: "
    ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","Case not added successful: ","Fail"

End If
wait 8
'
'If Browser("Home | Salesforce").Page("Cases | Salesforce").WebElement("AccountName").Exist(60) Then
'	Browser("Home | Salesforce").Page("Cases | Salesforce").WebElement("AccountName").Click
''	Reporter.ReportEvent micPass,"Cases","Account page successful:   "
'	Reporter.ReportEvent micPass,"Account_Cases_Creation ","Account page successful: "
'    ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","Account page successful: ","Pass"
'
'	
'	else
''	Reporter.ReportEvent micFail,"Cases","Account page not successful"
'	Reporter.ReportEvent micFail,"Account_Cases_Creation ","AccountPage not displayed : "
'    ReportGen_Status "Account_Cases_Creation ",Environment("ActionName"),"Case Creation ","AccountPage not displayed : ","Fail"
'	
'End If
'
If Browser("Home | Salesforce").Page("Cases | Salesforce").Link("innertext:="&AccountName&"","visible:=True").Exist(15) Then

	Browser("Home | Salesforce").Page("Cases | Salesforce").Link("innertext:="&AccountName&"","visible:=True").Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Case_Creation ",Environment("ActionName"),"Case_Creation  ","Account page displayed:   " ,"Pass"
    Reporter.ReportEvent micPass, "Account page displayed:   ", "Pass"
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Account_Case_Creation ",Environment("ActionName"),"Case_Creation  ","Account page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Account page not displayed:   ", "Fail"
	
End If







Datatable.Value("Case_create",Environment.Value("ActionName"))=CaseCreate



Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Cases"




 @@ script infofile_;_ZIP::ssf1.xml_;_

