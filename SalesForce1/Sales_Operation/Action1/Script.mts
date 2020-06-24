
LoadFunctionLibrary "D:\SalesForce\ReportResult.qfl"

Datatable.AddSheet Environment.Value("ActionName")

Datatable.ImportSheet "D:\SalesForce\SalesForce_Data.xlsx","Sales_Operation",Environment.Value("ActionName")
'Datatable.Import "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\SalesForce_Data.xlsx"
Rcnt=Datatable.GetSheet(Environment.Value("ActionName")).GetRowCount
'Repositoriescollection.Add "C:\Users\PRASAD\Documents\Unified Functional Testing\SalesForce\Repository.tsr"
OpenReport()
For i = 1 To Rcnt Step 1
	Datatable.SetCurrentRow(i)
	
	
	


PrdtName=Datatable("PrdtName",Environment.Value("ActionName"))
PrdtDesc=Datatable("PrdtDesc",Environment.Value("ActionName"))
Dashboard=Datatable("Dashboard",Environment.Value("ActionName"))

Group=Datatable("Group",Environment.Value("ActionName"))
'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Contracts").Highlight

fnCaptureScreenShot


If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Exist(60) Then
   
	
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("App Launcher").Click
	wait 1
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button","Pass"
    Reporter.ReportEvent micPass, "Click on Leads_Generation: ", "Pass"
	else
	ReportGen_Status "App_Launcher ",Environment("ActionName"),"App_Launcher ","Click on App_Launcher button ","Fail"
    Reporter.ReportEvent micFail, " Leads_Generation  not found: ", "Fail"
	
End If

'Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Console").Click

wait 5
If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Operations").Exist(60) Then
	Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Sales Operations").Click
	fnCaptureScreenShot
	ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations ","Click on Sales_Operations: ","Pass"
    Reporter.ReportEvent micPass, "Click on Sales_Operations: ", "Pass"
	else
	ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations ","Sales_Operations  not found: ","Fail"
    Reporter.ReportEvent micFail, " Sales_Operations   not found: ", "Fail"
	
End If
wait 15



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sales Operations").Exist(60) Then
fnCaptureScreenShot
Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Sales Operations").Highlight
'	Reporter.ReportEvent micPass,"Contracts page ","Contracts page is displayed"
	ReportGen_Status "Sales_Operations ",Environment("ActionName")," Sales_Operations  ","Sales_Operations  page is displayed","Pass"
    Reporter.ReportEvent micPass, "Sales_Operations  page is displayed", "Pass"
	else
'	Reporter.ReportEvent micFail,"Contracts page ","Contracts page  is not displayed"
	ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","Sales_Operations  page is not displayed","Fail"
    Reporter.ReportEvent micFail, "Sales_Operations  page is not displayed", "Fail"
End If




wait 8
'




If Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Products").Exist(60) Then
  Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Products").Highlight
'    Browser("Home | Salesforce").Page("Contracts | Salesforce").WebElement("New").Click
   Browser("Home | Salesforce").Page("Home | Salesforce").WebElement("Products").Click
    fnCaptureScreenShot
    ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","Click on Products link","Pass"
    Reporter.ReportEvent micPass, "Click on Products link", "Pass"
'	Reporter.ReportEvent micPass,"Oppurtunities Creation ","Click on New Contract link"
	else
'	Reporter.ReportEvent micFail,"Oppurtunities Creation ","New Contract link  is not displayed"
	 ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","Products link is not displayed","Fail"
    Reporter.ReportEvent micFail, "Products link is not displayed", "Fail"
End If




If Browser("Home | Salesforce").Page("Recently Viewed | Products").WebElement("New").Exist(10) Then
Browser("Home | Salesforce").Page("Recently Viewed | Products").WebElement("New").Highlight
fnCaptureScreenShot
Browser("Home | Salesforce").Page("Recently Viewed | Products").WebElement("New").Click
	 ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","Click on new link displayed in Products","Pass"
    Reporter.ReportEvent micPass, "Click on new link displayed in Products", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","new link not displayed in Products","Fail"
    Reporter.ReportEvent micFail, " New link not displayed in Products", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8




If Browser("Home | Salesforce").Page("New Product | Salesforce").WebElement("New Product").Exist(10) Then
Browser("Home | Salesforce").Page("New Product | Salesforce").WebElement("New Product").Highlight

Browser("Home | Salesforce").Page("New Product | Salesforce").WebEdit("ProductName").Set PrdtName

Browser("Home | Salesforce").Page("New Product | Salesforce").WebEdit("ProdcutDesc").Set PrdtDesc
fnCaptureScreenShot


'    Browser("Home | Salesforce").Page("New Campaign | Salesforce").WebEdit("Campaign_Name").Set Campaign_Name
	 ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","Enter the product details:","Pass"
    Reporter.ReportEvent micPass, " Enter the product details :", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","New product page not displayed","Fail"
    Reporter.ReportEvent micFail, " New product page not displayed", "Fail"
	
End If
Browser("Home | Salesforce").Sync
wait 8

If Browser("Home | Salesforce").Page("New Product | Salesforce").WebElement("Save").Exist(10) Then
fnCaptureScreenShot
    Browser("Home | Salesforce").Page("New Product | Salesforce").WebElement("Save").Click
	 ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","Click on save product","Pass"
    Reporter.ReportEvent micPass, " Click on save product", "Pass"
'	Reporter.ReportEvent micPass,"NewContract Creation ","New Contract page is displayed"
	else
'	Reporter.ReportEvent micFail,"NewContract Creation ","New Contract page is not displayed"
	ReportGen_Status "Sales_Operations ",Environment("ActionName"),"Sales_Operations  ","Products page not  displayed","Fail"
    Reporter.ReportEvent micFail, " Product page  not displayed", "Fail"
	
End If

'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Campaign Influence").Click






'Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("CampaignCreated").Click



If Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Product created.").Exist(15) Then
	ProductCreate=Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Product created.").GetROProperty("innertext")
	fnCaptureScreenShot
	Browser("Home | Salesforce").Page("abc | Salesforce").WebElement("Product created.").Highlight
	ReportGen_Status " Sales_Operations ",Environment("ActionName"),"Product Creation","Product Created successful  "&ProductCreate,"Pass"
    Reporter.ReportEvent micPass, "Product Created successful  "&ProductCreate, "Pass"
'	Reporter.ReportEvent micPass,"NewContact Added ","NewContact added successful:   "&ContactCreate
	else
'	Reporter.ReportEvent micFail,"NewContact Added ","NewContact not added successful"
	ReportGen_Status " Sales_Operations ",Environment("ActionName"),"Product Creation","Product Created not successful  ","Fail"
    Reporter.ReportEvent micFail, "Product Created not successful  : ", "Fail"
	
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









Datatable.Value("ProductCreate",Environment.Value("ActionName"))=ProductCreate









Next

Datatable.ExportSheet "D:\SalesForce\SalesForce_Data.xlsx",Environment.Value("ActionName"),"Sales_Operation"






'Repositoriescollection.RemoveAll
