LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"


Browser("CreationTime:=0").Navigate "https://ap17.lightning.force.com/lightning/page/home"
'Systemutil.Run "chrome.exe","https://ap17.lightning.force.com/lightning/page/home",3



Browser("Home | Salesforce").Page("Login | Salesforce").WebEdit("username").Set "allu.prasad-lltg@force.com"
Browser("Home | Salesforce").Page("Login | Salesforce").WebEdit("pw").Set "Test@123"

Browser("Home | Salesforce").Page("Login | Salesforce").WebButton("Log In").Click
Browser("Home | Salesforce").Sync
wait 5

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","AccountCreation",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)

Accnt_Name=Datatable("Accnt_Name",Environment.Value("ActionName"))
WebSite=Datatable("WebSite",Environment.Value("ActionName"))
Descrip_tion=Datatable("Description",Environment.Value("ActionName"))
Phone_no=Datatable("Phone_no",Environment.Value("ActionName"))
Industry_type=Datatable("Industry_type",Environment.Value("ActionName"))
Employees=Datatable("Employees",Environment.Value("ActionName"))
		

fnCaptureScreenShot
Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Accounts").Click
Browser("Home | Salesforce").Sync
If Browser("Home | Salesforce").Page("Recently Viewed | Accounts").WebElement("Accounts").Exist(15) Then
'Browser("Home | Salesforce").Page("Recently Viewed | Accounts").WebElement("Accounts").Highlight
 ReportGen_Status "AccountCreation ",Environment("ActionName"),"Account Creation Page ","Account Creation  Page is displayed","Pass"
 Reporter.ReportEvent micPass, "AccountCreation page is displayed", "Pass"

'	Reporter.ReportEvent micPass,"Accounts Page","Account Page is displayed"
	else
'	Reporter.ReportEvent micFail,"Accounts Page","Account Page is displayed"
	ReportGen_Status "AccountCreation ",Environment("ActionName"),"Account Creation Page ","Account Creation  Page is not displayed","Fail"
    Reporter.ReportEvent micFail, "AccountCreation page is not displayed", "Fail"
End If 
wait 5

If Browser("Home | Salesforce").Page("Recently Viewed | Accounts").WebElement("New").Exist(60) Then
fnCaptureScreenShot
'Browser("Home | Salesforce").Page("Recently Viewed | Accounts").WebElement("New").Highlight
    Browser("Home | Salesforce").Page("Recently Viewed | Accounts").WebElement("New").Click
    Browser("Home | Salesforce").Sync
'	Reporter.ReportEvent micPass,"Accounts Page","Click on New button in Account Page"
	
	ReportGen_Status "AccountCreation ",Environment("ActionName")," ","Click on New button in Account Page","Pass"
 	Reporter.ReportEvent micPass, "Click on Newbutton in Account page" , "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Accounts Page","New button is not displayed in Account Page."
	
	ReportGen_Status "AccountCreation ",Environment("ActionName")," ","New button is not displayed in Account Page","Fail"
    Reporter.ReportEvent micFail, "New button is not displayed in Account page", "Fail"
	
End If 
wait 5
If Browser("Home | Salesforce").Page("New Account | Salesforce").WebElement("New Account").Exist(15) Then
'Browser("Home | Salesforce").Page("New Account | Salesforce").WebElement("New Account").Highlight
fnCaptureScreenShot
    ReportGen_Status "AccountCreation ",Environment("ActionName"),"   "," NewAccount window is displayed","Pass"
 	Reporter.ReportEvent micPass, "NewAccount window is  displayed" , "Pass"
'	Reporter.ReportEvent micPass,"NewAccounts Page","NewAccount window is displayed"
	else
'	Reporter.ReportEvent micFail,"NewAccounts Page","NewAccount window is not displayed"
	ReportGen_Status "AccountCreation ",Environment("ActionName"),"  ","NewAccount window is not displayed","Fail"
    Reporter.ReportEvent micFail, "NewAccount window is not displayed", "Fail"
	
End If
wait 5

Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("Accnt_Name").Set Accnt_Name
fnCaptureScreenShot
ReportGen_Status "AccountCreation ",Environment("ActionName"),""&Accnt_Name,"Account name entered as :"&Accnt_Name,"Pass"
 Reporter.ReportEvent micPass, "AccountName entered as: "&Accnt_Name, "Pass"

Browser("Home | Salesforce").Page("New Account | Salesforce").WebButton("--None--").Click
Typesel="Customer"

Browser("Home | Salesforce").Page("New Account | Salesforce").Link("name:="&Typesel&"").Click

ReportGen_Status "AccountCreation ",Environment("ActionName")," "&Typesel,"SelectionType in Account page entered as :"&Typesel,"Pass"
Reporter.ReportEvent micPass, "SelectionType entered as: "&Typesel, "Pass"

Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("WebSite").Set WebSite
fnCaptureScreenShot
ReportGen_Status "AccountCreation ",Environment("ActionName"),""&WebSite,"WebSite in Account page entered as :"&WebSite,"Pass"
Reporter.ReportEvent micPass, "WebSite in Account Page is entered as: "&WebSite, "Pass"


Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("Description").Set Descrip_tion
fnCaptureScreenShot
ReportGen_Status "AccountCreation ",Environment("ActionName")," "&Descrip_tion,"Descrip_tion in Account page entered as :"&Descrip_tion,"Pass"
Reporter.ReportEvent micPass, "Descrip_tion in Account Page is entered as: "&Descrip_tion, "Pass"

Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("Phone").Set Phone_no
fnCaptureScreenShot
ReportGen_Status "AccountCreation ",Environment("ActionName"),""&Phone_no,"Phonenumber in Account page entered as :"&Phone_no,"Pass"
Reporter.ReportEvent micPass, "Phonenumber in Account Page is entered as: "&Phone_no, "Pass"

Browser("Home | Salesforce").Page("New Account | Salesforce").WebButton("--None--_2").Click

'Industry_type="Agriculture"
'Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("Description").Set
Browser("Home | Salesforce").Page("New Account | Salesforce").Link("name:="&Industry_type&"").Click
Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("Employees").Set Employees
fnCaptureScreenShot
ReportGen_Status "AccountCreation ",Environment("ActionName")," "&Employees,"Employees in Account page entered as :"&Employees,"Pass"
Reporter.ReportEvent micPass, "Employees in Account Page is entered as: "&Employees, "Pass"

wait 2
Browser("Home | Salesforce").Page("New Account | Salesforce").WebElement("Save").Click

If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Account_Creation_Message").Exist(60) Then
fnCaptureScreenShot
	AccountMesssage=Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Account_Creation_Message").GetROProperty("innertext")
'	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Account_Creation_Message").Highlight
	Datatable.Value("AccountCreationMSg",Environment.Value("ActionName"))=AccountMesssage
	
	ReportGen_Status "AccountCreation ",Environment("ActionName"),"Account Details ","AccountCreation message is displayed as :"&AccountMesssage,"Pass"
	Reporter.ReportEvent micPass, "AccountCreation message  is displayed as: "&AccountMesssage, "Pass"
'	Reporter.ReportEvent micPass,"AccountCreation ","AccountCreation message is displayed:   "&AccountMesssage
	else
'	Reporter.ReportEvent micFail,"AccountCreation ","AccountCreation message is not displayed:  "&AccountMesssage
    ReportGen_Status "AccountCreation ",Environment("ActionName"),"Account Details ","AccountCreation message is not displayed ","Fail"
	Reporter.ReportEvent micFail, "AccountCreation message  is not displayed ", "Fail"


End If
'
wait 5
Next




Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"AccountCreation"


