
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Groups",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	


GroupName=Datatable("GroupName",Environment.Value("ActionName"))
AccessType=Datatable("AccessType",Environment.Value("ActionName"))
GroupDesc=Datatable("GroupDesc",Environment.Value("ActionName"))



If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Groups").Exist(60) Then
	wait 1
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Groups").Click
	fnCaptureScreenShot
	wait 2
	ReportGen_Status "Groups_Creation ",Environment("ActionName"),"Groups_Creation ","Click on Groups link: ","Pass"
    Reporter.ReportEvent micPass, "Click on Groups ", "Pass"
	else
	ReportGen_Status "Groups_Creation ",Environment("ActionName"),"Groups_Creation ","Groups not found: ","Fail"
    Reporter.ReportEvent micFail, " Groups not found: ", "Fail"
End If
wait 5
if Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("New").Exist(60) Then
	wait 1
	Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("New").Click
	wait 2
	fnCaptureScreenShot
	ReportGen_Status "Groups_Creation ",Environment("ActionName")," ","Click on New link: ","Pass"
    Reporter.ReportEvent micPass, "Click on New link ", "Pass"
	else
	ReportGen_Status "Groups_Creation ",Environment("ActionName")," ","New link not displayed: ","Fail"
    Reporter.ReportEvent micFail, " New link not displayed: ", "Fail"
End If





If Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("New Group").Exist(10) Then
Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("New Group").Highlight
fnCaptureScreenShot
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
'    
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Group Creation ","New Group Window is displayed"
	ReportGen_Status "Group_Creation ",Environment("ActionName")," ","NewGroup window is displayed","Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Group_Creation ","NewGroup window is not displayed"
	ReportGen_Status "Group_Creation ",Environment("ActionName"),"Group Creation ","NewGroup window is not displayed","Fail"
	
End If




If Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebEdit("Group_Name").Exist(10) Then
Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebEdit("Group_Name").Highlight

Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebEdit("Group_Name").Set GroupName
fnCaptureScreenShot
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
'    
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Group Creation ","New Group name is created: "&GroupName
	ReportGen_Status "Group_Creation ",Environment("ActionName")," "&GroupName,"NewGroup name is created: "&GroupName,"Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Group_Creation ","NewGroup window is not created"
	ReportGen_Status "Group_Creation ",Environment("ActionName"),"Group Creation ","NewGroup window is not created","Fail"
	
End If




'Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebEdit("Description").Set
If Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebEdit("Description").Exist(10) Then
Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebEdit("Description").Highlight

Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebEdit("Description").Set GroupDesc
fnCaptureScreenShot
'	Salution="Mr."
'    Browser("Home | Salesforce").Page("New Contact | Salesforce").Link("name:="&Salution&"").Click
'    
''	Reporter.ReportEvent micPass,"NewContact Creation ","select the Salution in NewContact:"&Salution
	Reporter.ReportEvent micPass,"Group Creation ","New Group description is created: "&GroupDesc
	ReportGen_Status "Group_Creation ",Environment("ActionName")," "&GroupDesc,"NewGroup description is created: "&GroupDesc,"Pass"
	else
''	Reporter.ReportEvent micFail,"Account_Cases_Creation  ","Salution field is not displayed"
	Reporter.ReportEvent micFail,"Group_Creation ","NewGroup description is not created"
	ReportGen_Status "Group_Creation ",Environment("ActionName"),"Group Creation ","NewGroup description is not created","Fail"
	
End If
'AccessType

Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebButton("AccessType").Click
'Industry_type="Agriculture"
'Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("Description").Set
Browser("Home | Salesforce").Page("Recently Viewed | Groups").Link("name:="&AccessType&"").Click
fnCaptureScreenShot
ReportGen_Status "Group_Creation ",Environment("ActionName"),"  "&AccessType,"AccessType is selected as:"&AccessType,"Pass"
Reporter.ReportEvent micPass, "AccessType in selected as: "&AccessType, "Pass"



Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("Save & Next").Click
'Industry_type="Agriculture"
'Browser("Home | Salesforce").Page("New Account | Salesforce").WebEdit("Description").Set
'Browser("Home | Salesforce").Page("Recently Viewed | Groups").Link("name:="&AccessType&"").Click
fnCaptureScreenShot
ReportGen_Status "Group_Creation ",Environment("ActionName"),"  ","Click on save and Next","Pass"
Reporter.ReportEvent micPass, "Click on save and Next ", "Pass"




Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("Next").Click
fnCaptureScreenShot
ReportGen_Status "Group_Creation ",Environment("ActionName"),"  ","Click on Next","Pass"
Reporter.ReportEvent micPass, "Click on  Next ", "Pass"


Browser("Home | Salesforce").Page("Recently Viewed | Groups").WebElement("Done").Click
fnCaptureScreenShot
ReportGen_Status "Group_Creation ",Environment("ActionName"),"  ","Click on Done","Pass"
Reporter.ReportEvent micPass, "Click on Done", "Pass"



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("innertext:="&GroupName&"","visible:=True","index:=0").Exist(15) Then
fnCaptureScreenShot
'	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("innertext:="&GroupName&"","visible:=True").Click
	ReportGen_Status "Group_Creation ",Environment("ActionName")," "&GroupName,"Group page displayed:   "&GroupName ,"Pass"
    Reporter.ReportEvent micPass, "Group page displayed:   "&GroupName, "Pass"
    
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Group_Creation ",Environment("ActionName"),"Group_Creation  ","Group page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Group page not displayed:   ", "Fail"
	
End If


Browser("Home | Salesforce").Sync
wait 8




If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Home").Exist(15) Then
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Home").Click
fnCaptureScreenShot
	ReportGen_Status "Group_Creation ",Environment("ActionName"),"  ","HOme page displayed:   " ,"Pass"
    Reporter.ReportEvent micPass, "Home page displayed:   ", "Pass"
'	Reporter.ReportEvent micPass,"Contracts","Account page successful:   "
	else
'	Reporter.ReportEvent micFail,"Contracts","Account page not successful"
	ReportGen_Status "Group_Creation ",Environment("ActionName"),"Group_Creation  ","Home page not displayed:   " ,"Fail"
    Reporter.ReportEvent micFail, "Home page not displayed:   ", "Fail"
	
End If






'Datatable.Value("FileStatus",Environment.Value("ActionName"))=FileStatus


Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Groups"















'Repositoriescollection.RemoveAll
