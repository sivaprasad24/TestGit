
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Sales_LeaderShip",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	
	
	


Oppurtunity=Datatable("Oppurtunity",Environment.Value("ActionName"))
Dashboard=Datatable("Dashboard",Environment.Value("ActionName"))
Group=Datatable("Group",Environment.Value("ActionName"))
Account=Datatable("Account",Environment.Value("ActionName"))
Leads=Datatable("Leads",Environment.Value("ActionName"))
'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Highlight

fnCaptureScreenShot


If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Exist(60) Then
   
	
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Click
	wait 1
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button","Pass"
    Reporter.ReportEvent micPass, "Click on Sales Leadership: ", "Pass"
	else
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button ","Fail"
    Reporter.ReportEvent micFail, " Sales Leadership  not found: ", "Fail"
	
End If

'Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Console").Click

wait 5
If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Leadership").Exist(60) Then
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Leadership").Click
	fnCaptureScreenShot
	ReportGen_Status "Sales Leadership ",Environment("ActionName"),"Sales Leadership ","Click on Sales Leadership: ","Pass"
    Reporter.ReportEvent micPass, "Click on Sales Leadership: ", "Pass"
	else
	ReportGen_Status "Sales Leadership ",Environment("ActionName"),"Sales Leadership ","Sales Leadership  not found: ","Fail"
    Reporter.ReportEvent micFail, " Sales Leadership   not found: ", "Fail"
	
End If
wait 15




If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sales Leadership").Exist(60) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sales Leadership").Highlight
'	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
	ReportGen_Status "Sales Leadership ",Environment("ActionName")," Sales Leadership  ","Sales Leadership  page is displayed","Pass"
    Reporter.ReportEvent micPass, "Sales Leadership  page is displayed", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
	ReportGen_Status "Sales Leadership ",Environment("ActionName"),"Sales Leadership  ","Sales Leadership  page is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sales Leadership  page is not displayed", "Fail"
End If




wait 8
'



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Accounts").Exist(15) Then
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Accounts").Highlight
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Accounts").Click
	fnCaptureScreenShot
	ReportGen_Status "AccountName Validation ",Environment("ActionName"),"AccountName Validation  ","Click on AccountName :   " ,"Pass"
    Reporter.ReportEvent micPass, "AccountName  displayed: "&Account, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "AccountName Validation ",Environment("ActionName"),"AccountName Validation  ","Account link not displayed :   " ,"Fail"
    Reporter.ReportEvent micFail, "Account link not displayed  "&Account, "Fail"
End If



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





If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Leads").Exist(15) Then
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Leads").Highlight
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Leads").Click
	fnCaptureScreenShot
	ReportGen_Status "Leads Validation ",Environment("ActionName"),"Leads Validation  ","Click on Leaads link   " ,"Pass"
    Reporter.ReportEvent micPass, "Click on Leads  link: ", "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Leads Validation ",Environment("ActionName"),"Leads Validation  ","Leads link not displayed :   " ,"Fail"
    Reporter.ReportEvent micFail, "Leads link not displayed  "&Account, "Fail"
End If




If Browser("Home | Salesforce").Page("Recently Viewed | Leads").Link("name:="&Leads&"").Exist(15) Then	
Browser("Home | Salesforce").Page("Recently Viewed | Leads").Link("name:="&Leads&"").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "Leads Validation ",Environment("ActionName"),"Leads Validation  ","Leads displayed successful:   "&Leads ,"Pass"
    Reporter.ReportEvent micPass, "Leads  displayed: "&Contact, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Leads Validation ",Environment("ActionName"),"Leads Validation  ","Leads not displayed :   "&Leads ,"Fail"
    Reporter.ReportEvent micFail, "Leads not displayed:  "&Contact, "Fail"
	
End If







If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Groups").Exist(15) Then
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Groups").Click
	fnCaptureScreenShot
	ReportGen_Status "Groups Validation ",Environment("ActionName"),"Groups Validation  ","Click on Groups link   " ,"Pass"
    Reporter.ReportEvent micPass, "Click on Groups  link: ", "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Groups Validation ",Environment("ActionName"),"Groups Validation  ","Groups link not displayed :   " ,"Fail"
    Reporter.ReportEvent micFail, "Groups link not displayed  "&Account, "Fail"
End If





If Browser("Home | Salesforce").Page("Recently Viewed | Groups").Link("name:="&Group&"","index:=0").Exist(15) Then	
Browser("Home | Salesforce").Page("Recently Viewed | Groups").Link("name:="&Group&"","index:=0").Highlight
'	Reporter.ReportEvent micPass,"Contract Added","Contract saved successful:   "&ContractSaved
	fnCaptureScreenShot
	ReportGen_Status "Groupname Validation ",Environment("ActionName"),"Groupname Validation  ","Groupname displayed successful:   "&Group ,"Pass"
    Reporter.ReportEvent micPass, "Groupname  displayed: "&Group, "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Groupname Validation ",Environment("ActionName"),"Groupname Validation  ","Groupname not displayed :   "&Group ,"Fail"
    Reporter.ReportEvent micFail, "Groupname not displayed:  "&Group, "Fail"
	
End If



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Dashboards").Exist(10) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Dashboards").Highlight
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





If Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Exist(10) Then
Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Highlight
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Click
	 ReportGen_Status "Oppurtunity Validation ",Environment("ActionName"),"Sales_Console  ","Click on Oppurtunities link displayed in Sales_Console","Pass"
    Reporter.ReportEvent micPass, "Oppurtunities link is displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Oppurtunity Validation ",Environment("ActionName"),"Sales_Console  ","Oppurtunities link is not displayed","Fail"
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







Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Sales_LeaderShip"






'Repositoriescollection.RemoveAll
