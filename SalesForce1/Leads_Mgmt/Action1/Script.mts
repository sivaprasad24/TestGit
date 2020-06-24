
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Leads_Mgmt",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	

Campaign_Name=Datatable("Campaign_Name",Environment.Value("ActionName"))
Account=Datatable("Account",Environment.Value("ActionName"))
Contact=Datatable("Contact",Environment.Value("ActionName"))
Leads=Datatable("Leads",Environment.Value("ActionName"))
Group=Datatable("Group",Environment.Value("ActionName"))
'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Highlight




If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Exist(60) Then
   
	
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Click
	fnCaptureScreenShot
	wait 1
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button","Pass"
    Reporter.ReportEvent micPass, "Click on Leads_Generation: ", "Pass"
	else
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button ","Fail"
    Reporter.ReportEvent micFail, " Leads_Generation  not found: ", "Fail"
	
End If

'Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Console").Click

wait 5
If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Lead Generation").Exist(60) Then
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Lead Generation").Click
	fnCaptureScreenShot
	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation ","Click on Leads Generation: ","Pass"
    Reporter.ReportEvent micPass, "Click on Leads Generation: ", "Pass"
	else
	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"New Contact ","Leads Generation  not found: ","Fail"
    Reporter.ReportEvent micFail, " Leads Generation  not found: ", "Fail"
	
End If
wait 15



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Lead Generation").Exist(60) Then

Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Lead Generation").Highlight
fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
	ReportGen_Status "Leads_Generation ",Environment("ActionName")," Leads_Generation  ","Lead Generation page is displayed","Pass"
    Reporter.ReportEvent micPass, "Lead Generation page is displayed", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Lead Generation page is not displayed","Fail"
    Reporter.ReportEvent micFail, "Lead Generation page is not displayed", "Fail"
End If




wait 8
'
'If Browser("Home | Salesforce").Page("Home | Salesforce").Link("Chatter").Exist(25) Then
'fnCaptureScreenShot
'Browser("Home | Salesforce").Page("Home | Salesforce").Link("Chatter").Highlight
'Browser("Home | Salesforce").Page("Home | Salesforce").Link("Chatter").Click
''	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
'	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation   ","Click on Chatter link","Pass"
'    Reporter.ReportEvent micPass, "Click on Chatter link", "Pass"
'	else
''	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
'	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Click on Chatter link","Fail"
'    Reporter.ReportEvent micFail, "Click on Chatter link", "Fail"
'End If
'
'
'
'
'
'
'If Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebEdit("Write a comment").Exist(60) Then
'fnCaptureScreenShot
''Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebEdit("Write a comment","index:=0").Highlight
'Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebEdit("Write a comment").Set "This is for test"
'wait 5
'Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebButton("Comment").Click
'
''	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
'	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation   ","comments entered succesful","Pass"
'    Reporter.ReportEvent micPass, "comments entered succesful", "Pass"
'	else
''	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
'	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","comments field not dsiplayed ","Fail"
'    Reporter.ReportEvent micFail, "comments field not dsiplayed", "Fail"
'End If
'
'
'
'If Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebElement("Comments").Exist(60) Then
'fnCaptureScreenShot
'
'
''	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
'	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation   ","comments validation  succesful","Pass"
'    Reporter.ReportEvent micPass, "comments validation succesful", "Pass"
'	else
''	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
'	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","comments field not dsiplayed ","Fail"
'    Reporter.ReportEvent micFail, "comments field not dsiplayed", "Fail"
'End If
'
'
If Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebElement("Campaigns").Exist(60) Then
  Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebElement("Campaigns").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("Chatter Home | Salesforce").WebElement("Campaigns").Click
    fnCaptureScreenShot
    ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Click on Campaigns link","Pass"
    Reporter.ReportEvent micPass, "Click on Campaigns link", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Campaigns link is not displayed","Fail"
    Reporter.ReportEvent micFail, "Campaigns link is not displayed", "Fail"
End If



If Browser("Home | Salesforce").Page("Recently Viewed | Campaigns").WebElement("New").Exist(10) Then

Browser("Home | Salesforce").Page("Recently Viewed | Campaigns").WebElement("New").Highlight
Browser("Home | Salesforce").Page("Recently Viewed | Campaigns").WebElement("New").Click
fnCaptureScreenShot
	 ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Click on new link displayed in Campaigns","Pass"
    Reporter.ReportEvent micPass, "Click on new link displayed in Campaigns", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","new link not displayed in Campaigns","Fail"
    Reporter.ReportEvent micFail, " New link not displayed in Campaigns", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8



If Browser("Home | Salesforce").Page("New Campaign | Salesforce").WebElement("New Campaign").Exist(10) Then

Browser("Home | Salesforce").Page("New Campaign | Salesforce").WebElement("New Campaign").Highlight
fnCaptureScreenShot
	 ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","New Campaign page displayed ","Pass"
    Reporter.ReportEvent micPass, " New Campaign page displayed", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","New Campaign page not displayed","Fail"
    Reporter.ReportEvent micFail, " New Campaign page not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8

If Browser("Home | Salesforce").Page("New Campaign | Salesforce").WebEdit("Campaign_Name").Exist(10) Then

    Browser("Home | Salesforce").Page("New Campaign | Salesforce").WebEdit("Campaign_Name").Set Campaign_Name
    fnCaptureScreenShot
	 ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Enter the campaign name:"&Campaign_Name,"Pass"
    Reporter.ReportEvent micPass, " Enter the campaign name:"&Campaign_Name, "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","New Campaign page not displayed","Fail"
    Reporter.ReportEvent micFail, " New Campaign page not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8

If Browser("Home | Salesforce").Page("New Campaign | Salesforce").WebElement("Save").Exist(10) Then

    Browser("Home | Salesforce").Page("New Campaign | Salesforce").WebElement("Save").Click
    fnCaptureScreenShot
	 ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Click on save campaign","Pass"
    Reporter.ReportEvent micPass, " Click on save campaign", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Leads_Generation ",Environment("ActionName"),"Leads_Generation  ","Save Campaign  not displayed","Fail"
    Reporter.ReportEvent micFail, " save Campaign  not displayed", "Fail"
	
End If

'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Campaign Influence").Click





'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("CampaignCreated").Click



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("CampaignCreated").Exist(15) Then
	CampaignCreate=Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("CampaignCreated").GetROProperty("innertext")
	
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("CampaignCreated").Highlight
	fnCaptureScreenShot
	ReportGen_Status " Leads_Generation ",Environment("ActionName"),"Campaign Creation","Campaign Created successful  "&CampaignCreate,"Pass"
    Reporter.ReportEvent micPass, "Campaign Created successful  "&CampaignCreate, "Pass"
'	Reporter.ReportEvent micPass,"NewContact Added ","NewContact added successful:   "&ContactCreate
	else
'	Reporter.ReportEvent micFail,"NewContact Added ","NewContact not added successful"
	ReportGen_Status " Leads_Generation ",Environment("ActionName"),"Campaign Creation","Campaign Created not successful  ","Fail"
    Reporter.ReportEvent micFail, "Campaign Created not successful  : ", "Fail"
	
End If

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


If Browser("Home | Salesforce").Page("abc | Salesforce").Link("Contacts").Exist(15) Then
Browser("Home | Salesforce").Page("abc | Salesforce").Link("Contacts").Highlight
	Browser("Home | Salesforce").Page("abc | Salesforce").Link("Contacts").Click
	fnCaptureScreenShot
	ReportGen_Status "Contact Validation ",Environment("ActionName"),"Contact Validation  ","Click on Contact link   " ,"Pass"
    Reporter.ReportEvent micPass, "Click on Contact  link: ", "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Contract Added ","Contract not added successful"
	ReportGen_Status "Contact Validation ",Environment("ActionName"),"Contact Validation  ","Contact link not displayed :   " ,"Fail"
    Reporter.ReportEvent micFail, "contact link not displayed  "&Account, "Fail"
End If




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
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Groups").Highlight
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





Datatable.Value("Campaign_create",Environment.Value("ActionName"))=CampaignCreate









Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Leads_Mgmt"






'Repositoriescollection.RemoveAll
