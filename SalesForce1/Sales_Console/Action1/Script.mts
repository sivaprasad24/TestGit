
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Sales_Console",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	

Account=Datatable("Account",Environment.Value("ActionName"))
LeadName=Datatable("LeadName",Environment.Value("ActionName"))
Oppurtunity=Datatable("Oppurtunity",Environment.Value("ActionName"))
Contact=Datatable("Contact",Environment.Value("ActionName"))
Groupname=Datatable("Groupname",Environment.Value("ActionName"))

Dashboard=Datatable("Dashboard",Environment.Value("ActionName"))
'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Highlight


fnCaptureScreenShot

If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Exist(60) Then
   
	
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Click
	wait 1
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button","Pass"
    Reporter.ReportEvent micPass, "Click on Sales_Console: ", "Pass"
	else
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button ","Fail"
    Reporter.ReportEvent micFail, " Sales_Console  not found: ", "Fail"
	
End If

'Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Console").Click


wait 5
If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Console").Exist(60) Then
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Console").Click
	fnCaptureScreenShot
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console ","Click on Sales_Console: ","Pass"
    Reporter.ReportEvent micPass, "Click on Sales_Console: ", "Pass"
	else
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"New Contact ","Sales_Console  not found: ","Fail"
    Reporter.ReportEvent micFail, " Sales_Console  not found: ", "Fail"
	
End If
wait 5



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sales Console").Exist(25) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sales Console").Highlight
'	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales Console  ","Sales_Console page is displayed","Pass"
    Reporter.ReportEvent micPass, "Sales_Console page is displayed", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Sales_Console page is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sales_Console page is not displayed", "Fail"
End If




wait 8





If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Exist(60) Then
  Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Click
    fnCaptureScreenShot
    ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Sections icon","Pass"
    Reporter.ReportEvent micPass, "Click on Sections icon", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Contracts_Creation  ","Sections icon is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sections icon is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync





If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Leads").Exist(10) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Leads").Click
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Leads link displayed in Sales_Console","Pass"
    Reporter.ReportEvent micPass, "Leads page is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Leads link is not displayed","Fail"
    Reporter.ReportEvent micFail, " Leads link is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8





If Browser("Home | Salesforce").Page("Recently Viewed | Leads").Link("name:="&LeadName&"","index:=0").Exist(15) Then	
 Browser("Home | Salesforce").Page("Recently Viewed | Leads").Link("name:="&LeadName&"","index:=0").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "Leads Validation ",Environment("ActionName"),"Leads Validation  ","Leadname displayed successful:   "&LeadName ,"Pass"
    Reporter.ReportEvent micPass, "LeadName  displayed: "&LeadName, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Leads Validation ",Environment("ActionName"),"Leads Validation  ","Leadname not displayed :   "&LeadName ,"Fail"
    Reporter.ReportEvent micFail, "LeadName not displayed:  "&LeadName, "Fail"
	
End If




If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Exist(60) Then
  Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Click
    fnCaptureScreenShot
    ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Sections icon","Pass"
    Reporter.ReportEvent micPass, "Click on Sections icon", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Contracts_Creation  ","Sections icon is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sections icon is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync







If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Accounts").Exist(10) Then
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Accounts").Highlight
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Accounts").Click
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Account link displayed in Sales_Console","Pass"
    Reporter.ReportEvent micPass, "Account page is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Account link is not displayed","Fail"
    Reporter.ReportEvent micFail, " Account link is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8



If Browser("Home | Salesforce").Page("Recently Viewed | Accounts").Link("name:="&Account&"").Exist(15) Then	
 Browser("Home | Salesforce").Page("Recently Viewed | Accounts").Link("name:="&Account&"").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "AccountName Validation ",Environment("ActionName"),"AccountName Validation  ","AccountName displayed successful:   "&Account ,"Pass"
    Reporter.ReportEvent micPass, "AccountName  displayed: "&Account, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "AccountName Validation ",Environment("ActionName"),"AccountName Validation  ","AccountName not displayed :   "&Account ,"Fail"
    Reporter.ReportEvent micFail, "AccountName not displayed:  "&Account, "Fail"
	
End If



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Exist(60) Then
  Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Click
    fnCaptureScreenShot
    ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Sections icon","Pass"
    Reporter.ReportEvent micPass, "Click on Sections icon", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Contracts_Creation  ","Sections icon is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sections icon is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync




If Browser("Home | Salesforce").Page("abc | Salesforce").Link("Contacts").Exist(10) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").Link("Contacts").Highlight
Browser("Home | Salesforce").Page("abc | Salesforce").Link("Contacts").Click
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Contact link displayed in Sales_Console","Pass"
    Reporter.ReportEvent micPass, "Contact page is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Contact link is not displayed","Fail"
    Reporter.ReportEvent micFail, " Contact link is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8






If Browser("Home | Salesforce").Page("Recently Viewed | Contacts").Link("name:="&Contact&"","index:=0").Exist(15) Then	
Browser("Home | Salesforce").Page("Recently Viewed | Contacts").Link("name:="&Contact&"","index:=0").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "Contact Validation ",Environment("ActionName"),"Contact Validation  ","Contact displayed successful:   "&Contact ,"Pass"
    Reporter.ReportEvent micPass, "Contact  displayed: "&Contact, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Contact Validation ",Environment("ActionName"),"Contact Validation  ","Contact not displayed :   "&Contact ,"Fail"
    Reporter.ReportEvent micFail, "Contact not displayed:  "&Contact, "Fail"
	
End If




If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Exist(60) Then
  Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Click
    fnCaptureScreenShot
    ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Sections icon","Pass"
    Reporter.ReportEvent micPass, "Click on Sections icon", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Contracts_Creation  ","Sections icon is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sections icon is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync




If Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Exist(10) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Highlight
Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Click
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Oppurtunities link displayed in Sales_Console","Pass"
    Reporter.ReportEvent micPass, "Oppurtunities link is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Oppurtunities link is not displayed","Fail"
    Reporter.ReportEvent micFail, " Oppurtunities link is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8






If Browser("Home | Salesforce").Page("Recently Viewed | Opportunitie").Link("name:="&Oppurtunity&"","index:=0").Exist(15) Then	
Browser("Home | Salesforce").Page("Recently Viewed | Opportunitie").Link("name:="&Oppurtunity&"","index:=0").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "Oppurtunity Validation ",Environment("ActionName"),"Oppurtunity Validation  ","Oppurtunity displayed successful:   "&Oppurtunity ,"Pass"
    Reporter.ReportEvent micPass, "Oppurtunity  displayed: "&Oppurtunity, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Oppurtunity Validation ",Environment("ActionName"),"Oppurtunity Validation  ","Oppurtunity not displayed :   "&Oppurtunity ,"Fail"
    Reporter.ReportEvent micFail, "Oppurtunity not displayed:  "&Oppurtunity, "Fail"
	
End If









If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Exist(60) Then
  Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Click
    fnCaptureScreenShot
    ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Sections icon","Pass"
    Reporter.ReportEvent micPass, "Click on Sections icon", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Contracts_Creation  ","Sections icon is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sections icon is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync




If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Groups").Exist(10) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Groups").Click
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Groups link displayed in Sales_Console","Pass"
    Reporter.ReportEvent micPass, "Groups link is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Groups link is not displayed","Fail"
    Reporter.ReportEvent micFail, " Groups link is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8







If Browser("Home | Salesforce").Page("Recently Viewed | Groups").Link("name:="&Groupname&"","index:=0").Exist(15) Then	
Browser("Home | Salesforce").Page("Recently Viewed | Groups").Link("name:="&Groupname&"","index:=0").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "Groupname Validation ",Environment("ActionName"),"Groupname Validation  ","Groupname displayed successful:   "&Groupname ,"Pass"
    Reporter.ReportEvent micPass, "Groupname  displayed: "&Groupname, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Groupname Validation ",Environment("ActionName"),"Groupname Validation  ","Groupname not displayed :   "&Groupname ,"Fail"
    Reporter.ReportEvent micFail, "Groupname not displayed:  "&Groupname, "Fail"
	
End If








If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Exist(60) Then
  Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sections").Click
    fnCaptureScreenShot
    ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Sections icon","Pass"
    Reporter.ReportEvent micPass, "Click on Sections icon", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Contracts_Creation  ","Sections icon is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sections icon is not displayed", "Fail"
End If

Browser("Home | Salesforce").Sync





If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Dashboards").Exist(10) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Dashboards").Click
	 ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Click on Dashboard link displayed in Sales_Console","Pass"
    Reporter.ReportEvent micPass, "Dashboard link is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Console ",Environment("ActionName"),"Sales_Console  ","Dashboard link is not displayed","Fail"
    Reporter.ReportEvent micFail, " Dashboard link is not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8






If Browser("Home | Salesforce").Page("Recently Viewed | Opportunitie").Link("name:="&Dashboard&"","index:=0").Exist(15) Then	
Browser("Home | Salesforce").Page("Recently Viewed | Opportunitie").Link("name:="&Dashboard&"","index:=0").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "Dashboard Validation ",Environment("ActionName"),"Dashboard Validation  ","Dashboard displayed successful:   "&Dashboard ,"Pass"
    Reporter.ReportEvent micPass, "Dashboard  displayed: "&Dashboard, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Dashboard Validation ",Environment("ActionName"),"Dashboard Validation  ","Dashboard not displayed :   "&Dashboard ,"Fail"
    Reporter.ReportEvent micFail, "Dashboard not displayed:  "&Dashboard, "Fail"
	
End If



Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Sales_Console"












'Repositoriescollection.RemoveAll
