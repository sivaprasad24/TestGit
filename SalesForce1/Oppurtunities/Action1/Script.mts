
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Oppurtunities",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	
oppurtunity_name=Datatable("Name",Environment.Value("ActionName"))
Type_oppurtnity=Datatable("Type_oppurtunity",Environment.Value("ActionName"))
Stage_Oppurtunity=Datatable("Stage",Environment.Value("ActionName"))
AccountName=Datatable("AccountName",Environment.Value("ActionName"))


fnCaptureScreenShot


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

If Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").Exist(135) Then
	Browser("Home | Salesforce").Page("Account102 - Search |").WebTable("Item Number").ChildItem(2,2,"Link",0).Click
	fnCaptureScreenShot
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"AccountName ","Click on AccountName: "&AccountName,"Pass"
    Reporter.ReportEvent micPass, "Click on AccountName: "&AccountName, "Pass"
	else
	ReportGen_Status "Account_Contact_Creation ",Environment("ActionName"),"New Contact ","AccountName  not found: "&AccountName,"Fail"
    Reporter.ReportEvent micFail, " AccountName  not found: "&AccountName, "Fail"
	
End If
wait 5


'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Opportunities").Highlight

If Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Exist(60) Then

Browser("Home | Salesforce").Page("abc | Salesforce").Link("Opportunities").Click
fnCaptureScreenShot
wait 5

ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","Click on Oppurtunities link","Pass"
Reporter.ReportEvent micPass, "Click on Oppurtunities", "Pass"
else

ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  "," Oppurtunities link is not displayed","Fail"
Reporter.ReportEvent micFail, "Click on Oppurtunities", "Fail"
	
End If

If Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("Opportunities").Exist(25) Then
fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Oppurtunities page ","Oppurtunities page is displayed"
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","Oppurtunities page is displayed","Pass"
    Reporter.ReportEvent micPass, "Oppurtunities page is displayed", "Pass"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities page ","Oppurtunities page  is not displayed"
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  "," Oppurtunities page  is not displayed","Fail"
	Reporter.ReportEvent micFail, "Oppurtunities page  is not displayed", "Fail"
End If



If Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("New").Exist(25) Then
'Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("New").Highlight
Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("New").Click
fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Oppurtunities link"
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","Click on New Oppurtunities link","Pass"
    Reporter.ReportEvent micPass, "Click on New Oppurtunities link", "Pass"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Oppurtunities link  is not displayed"
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","New Oppurtunities link  is not displayed","Fail"
    Reporter.ReportEvent micFail, "New Oppurtunities link  is not displayed", "Fail"
End If

If Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebElement("New Opportunity").Exist(10) Then
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","New Opportunity page is displayed","Pass"
    Reporter.ReportEvent micPass, "New Opportunity page is displayed", "Pass"
    fnCaptureScreenShot

'	Reporter.ReportEvent micPass,"NewContact Creation ","New Opportunity page is displayed"
	else
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","New Oppurtunities Pgae  is not displayed","Fail"
    Reporter.ReportEvent micFail, "New Oppurtunities Page  is not displayed", "Fail"

'	Reporter.ReportEvent micFail,"NewContact Creation ","New Opportunity page is not displayed"
	
End If
Browser("Home | Salesforce").Sync
wait 5
Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebEdit("Name").Set oppurtunity_name
ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"  "&oppurtunity_name,"Opportunity name is entered :"&oppurtunity_name,"Pass"
Reporter.ReportEvent micPass, " Opportunity name is entered:"&oppurtunity_name, "Pass"
fnCaptureScreenShot
sDate=Date+30

Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebEdit("ClosedDate").Set Month(sDate)&"/"&Day(sDate)&"/"&Year(sDate)
ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"  "&Date+30,"ClosedDate is entered :"&Date+30,"Pass"
Reporter.ReportEvent micPass, " ClosedDate is entered:"&Date+30, "Pass"
fnCaptureScreenShot
Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebButton("--None--").Click

Oppurtunity=Type_oppurtnity

Browser("Home | Salesforce").Page("New Opportunity | Salesforce").Link("name:="&Oppurtunity&"").Click
ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName")," "&Oppurtunity,"Oppurtunity_Type is entered :"&Oppurtunity,"Pass"
Reporter.ReportEvent micPass, " Oppurtunity_Type is entered:"&Oppurtunity, "Pass"
fnCaptureScreenShot


Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebButton("--None--_2").Click


Stage=Stage_Oppurtunity

Browser("Home | Salesforce").Page("New Opportunity | Salesforce").Link("name:="&Stage&"").Click
ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName")," "&Stage,"Stage is entered :"&Stage,"Pass"
Reporter.ReportEvent micPass, " Stage is entered:"&Stage, "Pass"
fnCaptureScreenShot

Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebEdit("Amount").Set "40000"

wait 4

Browser("Home | Salesforce").Page("New Opportunity | Salesforce").WebElement("Save").Click


'Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("OpportunitySaved").Click


If Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("OpportunitySaved").Exist(15) Then
	OppurtunitySaved=Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("OpportunitySaved").GetROProperty("innertext")
	Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("OpportunitySaved").Highlight
	fnCaptureScreenShot
'	Reporter.ReportEvent micPass,"Oppurtunity Added","Oppurtunity saved successful:   "&OppurtunitySaved
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName")," "&OppurtunitySaved,"Oppurtunity saved successful: "&OppurtunitySaved,"Pass"
    Reporter.ReportEvent micPass, " Oppurtunity saved successful: "&OppurtunitySaved, "Pass"

	else
'	Reporter.ReportEvent micFail,"Oppurtunity Added ","Oppurtunity not added successful"
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","Oppurtunity not added successful ","Fail"
    Reporter.ReportEvent micFail, " Oppurtunity not added successful: ", "Fail"

	
End If
Browser("Home | Salesforce").Sync
Browser("Home | Salesforce").Page("Opportunities | Salesforce").WebElement("Accountname").Click
wait 5

If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Campaign Influence").Exist(50) Then
'	Reporter.ReportEvent micPass,"AccountHomepage","Account HomePage displayed "
    fnCaptureScreenShot
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","Account HomePage displayed","Pass"
    Reporter.ReportEvent micPass, " Account HomePage displayed ", "Pass"

	else
'	Reporter.ReportEvent micFail,"AccountHomepage ","Account HomePage displayed"
	ReportGen_Status "Account_Oppurtunities_Creation ",Environment("ActionName"),"Oppurtunities  ","Account HomePage not displayed","Fail"
    Reporter.ReportEvent micFail, " Account HomePage not displayed ", "Fail"

End If





Datatable.Value("Oppurtunity_create",Environment.Value("ActionName"))=OppurtunitySaved


Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Oppurtunities"













