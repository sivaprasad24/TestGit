

LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"
Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Leads",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	
	
Fname=Datatable("Fname",Environment.Value("ActionName"))
	Lname=Datatable("Lname",Environment.Value("ActionName"))
	company=Datatable("company",Environment.Value("ActionName"))
	Title=Datatable("Title",Environment.Value("ActionName"))
	Email=Datatable("Email",Environment.Value("ActionName"))
	Phone=Datatable("Phone",Environment.Value("ActionName"))
	






Browser("Home | Salesforce").Sync
if Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Leads").Exist(15) Then
Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Leads").Highlight
fnCaptureScreenShot
Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Leads").Click

'Browser("Home | Salesforce").Page("Recently Viewed | Accounts").WebElement("Accounts").Highlight
 ReportGen_Status "Lead Page ",Environment("ActionName"),"Leads Page ","Leads  Page is displayed","Pass"
 Reporter.ReportEvent micPass, "Leads page is displayed", "Pass"

'	Reporter.ReportEvent micPass,"Accounts Page","Account Page is displayed"
	else
'	Reporter.ReportEvent micFail,"Accounts Page","Account Page is displayed"
	ReportGen_Status "Lead Page ",Environment("ActionName"),"Leads Page ","Leads Page is not displayed","Fail"
    Reporter.ReportEvent micFail, "LeadCreation page is not displayed", "Fail"
End If 
wait 5


If Browser("Home | Salesforce").Page("Recently Viewed | Leads").WebElement("New").Exist(60) Then

Browser("Home | Salesforce").Page("Recently Viewed | Leads").WebElement("New").Highlight
    Browser("Home | Salesforce").Page("Recently Viewed | Leads").WebElement("New").Click
    fnCaptureScreenShot
    Browser("Home | Salesforce").Sync
'	Reporter.ReportEvent micPass,"Accounts Page","Click on New button in Account Page"
	
	ReportGen_Status "LeadCreation ",Environment("ActionName")," ","Click on New button in Leads Page","Pass"
 	Reporter.ReportEvent micPass, "Click on Newbutton in Leads page" , "Pass"
	
	else
'	Reporter.ReportEvent micFail,"Accounts Page","New button is not displayed in Account Page."
	
	ReportGen_Status "LeadCreation ",Environment("ActionName"),"Leads Creation Page ","New button is not displayed in Leads Page","Fail"
    Reporter.ReportEvent micFail, "New button is not displayed in Leads page", "Fail"
	
End If 
wait 1






If Browser("Home | Salesforce").Page("New Lead | Salesforce").WebElement("New Lead").Exist(10) Then
Browser("Home | Salesforce").Page("New Lead | Salesforce").WebElement("New Lead").Highlight
fnCaptureScreenShot
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
'    
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Lead Creation ","NewLead Window is displayed"
	ReportGen_Status "Lead_Creation ",Environment("ActionName")," ","NewLead window is displayed","Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Lead_Creation ","NewLead window is not displayed"
	ReportGen_Status "Lead_Creation ",Environment("ActionName"),"Lead Creation ","NewLead window is not displayed","Fail"
	
End If




If Browser("Home | Salesforce").Page("New Lead | Salesforce").WebElement("New Lead").Exist(10) Then
	Browser("Home | Salesforce").Page("New Lead | Salesforce").WebButton("--None--").Click
	Salution="Mr."
    Browser("Home | Salesforce").Page("New Lead | Salesforce").Link("name:="&Salution&"").Click
    fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	ReportGen_Status "Leads_Creation ",Environment("ActionName"),""&Salution,"Select the Salution in NewLead:"&Salution,"Pass"
    Reporter.ReportEvent micPass, "Select the Salution in NewContact:"&Salution, "Pass"
	else
'	Reporter.ReportEvent micFail,"NewContact Creation ","Salution field is not displayed"
    ReportGen_Status "Leads_Creation ",Environment("ActionName")," ","Salution field is not displayed","Fail"
    Reporter.ReportEvent micFail, "Salution field is not displayed", "Pass"
	
End If





Browser("Home | Salesforce").Page("New Lead | Salesforce").WebEdit("First Name").Set Fname
fnCaptureScreenShot
ReportGen_Status "Leads_Creation ",Environment("ActionName")," "&Fname,"First name entered as :"&Fname,"Pass"
Reporter.ReportEvent micPass, "First Name entered as: "&Fname, "Pass"

Browser("Home | Salesforce").Page("New Lead | Salesforce").WebEdit("Last Name").Set Lname
fnCaptureScreenShot
ReportGen_Status "Leads_Creation ",Environment("ActionName")," "&Lname,"Last name entered as :"&Lname,"Pass"
Reporter.ReportEvent micPass, "Last Name entered as: "&Lname, "Pass"

Browser("Home | Salesforce").Page("New Lead | Salesforce").WebEdit("Company").Set company
fnCaptureScreenShot
ReportGen_Status "Leads_Creation ",Environment("ActionName"),""&company,"Company entered as :"&company,"Pass"
Reporter.ReportEvent micPass, "Company name  entered as: "&company, "Pass"



Browser("Home | Salesforce").Page("New Lead | Salesforce").WebEdit("Title").Set Title
fnCaptureScreenShot
ReportGen_Status "Leads_Creation ",Environment("ActionName"),""&Title,"Title entered as :"&Title,"Pass"
Reporter.ReportEvent micPass, "Title entered as: "&Title, "Pass"

'Browser("Home | Salesforce").Page("New Lead | Salesforce").WebEdit("Email").Set

Browser("Home | Salesforce").Page("New Lead | Salesforce").WebEdit("Email").Set Email
fnCaptureScreenShot
ReportGen_Status "Leads_Creation ",Environment("ActionName"),""&Email,"Email entered as :"&Email,"Pass"
Reporter.ReportEvent micPass, "Email entered as: "&Email, "Pass"

Browser("Home | Salesforce").Page("New Lead | Salesforce").WebEdit("Phone").Set Phone
fnCaptureScreenShot
ReportGen_Status "Leads_Creation ",Environment("ActionName"),""&Phone,"Phone entered as :"&Phone,"Pass"
Reporter.ReportEvent micPass, "Phone entered as: "&Phone, "Pass"

'Browser("Home | Salesforce").Page("New Contact | Salesforce").WebElement("Save").Click
wait 3

Browser("Home | Salesforce").Page("New Lead | Salesforce").WebElement("Save").Click



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Lead created.").Exist(15) Then
	LeadStatus=Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Lead created.").GetROProperty("innertext")
	fnCaptureScreenShot
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Lead created.").Highlight
	ReportGen_Status "Leads_Creation ",Environment("ActionName"),""&LeadStatus,"Leads added successful  :"&LeadStatus,"Pass"
    Reporter.ReportEvent micPass, "Leads added successful: "&LeadStatus, "Pass"
'	Reporter.ReportEvent micPass,"NewContact Added ","NewContact added successful:   "&ContactCreate
	else
'	Reporter.ReportEvent micFail,"NewContact Added ","NewContact not added successful"
	ReportGen_Status "Leads_Creation ",Environment("ActionName"),"Lead Creation","Lead not added  :","Fail"
    Reporter.ReportEvent micFail, "Leads_Creation  : "&LeadStatus, "Fail"
	
End If

wait 4


If Browser("Home | Salesforce").Page("Recently Viewed | Leads").WebElement("Home").Exist(15) Then
	Browser("Home | Salesforce").Page("Recently Viewed | Leads").WebElement("Home").Click
	fnCaptureScreenShot
'	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Lead created.").Highlight
	ReportGen_Status "Home Page ",Environment("ActionName")," Home Page","Home Page displayed   :","Pass"
    Reporter.ReportEvent micPass, "Home Page  displayed  ", "Pass"
'	Reporter.ReportEvent micPass,"NewContact Added ","NewContact added successful:   "&ContactCreate
	else
'	Reporter.ReportEvent micFail,"NewContact Added ","NewContact not added successful"
	ReportGen_Status "Home Page ",Environment("ActionName"),"Lead Creation","Home Page not displayed :","Fail"
    Reporter.ReportEvent micFail, "Home Page not displayed  ", "Fail"
	
End If



Datatable.Value("Leads_create",Environment.Value("ActionName"))=LeadStatus



Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Leads"


'Repositoriescollection.RemoveAll



'2,1

'
'AccountName="Account103"
'contact="johnn dane"
'Browser("Home | Salesforce").Page("New Case | Salesforce").WebEdit("Search Contacts...").Click
'
'Browser("Home | Salesforce").Page("New Case | Salesforce").WebEdit("Search Contacts...").Set contact
'wait 2
'Set obj=CreateObject("Wscript.Shell")
'obj.SendKeys("{ENTER}")
'Set obj=Nothing
'wait 2
'rownum=Browser("Home | Salesforce").Page("New Case | Salesforce").WebTable("Sort Name").GetRowWithCellText(contact)
'acntname=Browser("Home | Salesforce").Page("New Case | Salesforce").WebTable("Sort Name").GetCellData(rownum,2)
'
'If ucase(trim(acntnme))=ucase(trim(AccountName)) Then
'	Browser("Home | Salesforce").Page("New Case | Salesforce").WebTable("Sort Name").ChildItem(rownum,1,"Link",0).click
'	wait 10
'	
'	
'End If




