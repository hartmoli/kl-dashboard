/*
 * Bootstrap-based responsive mashup
 * @owner Andrew
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

//Need to define a prefix for the java scripts. We need to go from the Resources folder over to our app folder....
var jsprefix = '../../extensions/kl-dashboard/js/';

//Standard Config to current server
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};

//Config to other server
var configBIProd = {
	host: "biprod.staubli.com",
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};

require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik","jquery"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	// qlik.theme.apply('1b1d46c9-e141-47f4-a372-9e261d55eac0'); //Try the name of the theme

	/*
// Callbacks -- inserted here --

// Open apps -- inserted here --
var appInventory = qlik.openApp('294eeb53-8da5-4c1a-9928-ae1ba2177697', config);				//Inventory Visibility
//var appOTIF = qlik.openApp('d7f07a02-9c5e-4259-945f-3474174488ca', configBIProd);						// OTIF App
var appFinance = qlik.openApp('c8448af3-aa1b-4461-9825-bce62fa3fbd6', config);					// Finance
var appNPS = qlik.openApp('87d461a1-4996-4991-9b20-0899ba0052d4', config);						// NPS
//var appBusiness = qlik.openApp('4f4b6850-2b06-4125-b2a6-b32508a76483', config);					// Revenue Growth by Business

// Get objects -- inserted here --
	//Get the current selections to build the selection bar
	appNPS.getObject('CurrentSelections','CurrentSelections');

// -- Inv Visibility --
	// -- Inventory --
	appInventory.getObject('InventoryFilter', 'bc13724a-a7dd-4637-9928-9b68ded17798');			// Inventory Filter
	appInventory.getObject('InventoryFilter1', 'b1b33013-baa7-4499-9eab-943232f976ec');			// Inventory Filter
	appInventory.getObject('InventoryBarChart1', 'mvCmjQS');									// Inventory Line Chart 1
	appInventory.getObject('FXTypeButton', '81f4a3a4-0d30-4bda-ac22-8e157b7f8dab');			// Inventory Line Chart 2
	// -- DoH --
	appInventory.getObject('DohFilter', '715b351a-7af0-4473-b889-c6c32f16ac88');				// DoH Filter
	appInventory.getObject('DohLineChart1', 'dwtdJ');											// DoH Delta Chart
	appInventory.getObject('DohLineChart2', 'Qysdhpf');										// DoH Actuals Chart

// -- OTIF -- 
	// appOTIF.getObject('otifFilter1', '32870be7-c4ef-489c-a006-b33c85205bf0');			// OTIF Filter
	// appOTIF.getObject('otifFilter2', 'c7707b0f-853f-4c50-ae40-4bbc98da08df');			// OTIF Filter
	// appOTIF.getObject('otifFilter3', '2f191523-1c74-4fe1-91db-80cf489799d5');			// OTIF Filter
	// appOTIF.getObject('otifFilter4', '57cb8301-11ca-40a8-a847-01fcd5ead267');			// OTIF Filter

	// appOTIF.getObject('otifLineContainer', '4332cd9d-4208-4c97-bf38-10fadaa83fdd');		// OTIF Line Chart 1
	// appOTIF.getObject('otifLineChart', 'KyGLqP');										// OTIF Line Chart 2
	// appOTIF.getObject('otifBarChart1', 'yDqqzC');										// OTIF Line Chart 2
	// appOTIF.getObject('otifBarChart2', 'UEmRLS');										// OTIF Line Chart 2

	// -- COPS -- Not yet complete
// var appCOPS = qlik.openApp('', config);				// COPS App
// 	appCOPS.getObject('copsFilter1', '32870be7-c4ef-489c-a006-b33c85205bf0');			
// 	appCOPS.getObject('copsFilter2', 'c7707b0f-853f-4c50-ae40-4bbc98da08df');			
// 	appCOPS.getObject('copsFilter3', '2f191523-1c74-4fe1-91db-80cf489799d5');			
// 	appCOPS.getObject('copsFilter3', '57cb8301-11ca-40a8-a847-01fcd5ead267');			
// 	appCOPS.getObject('copsLineContainer', '4332cd9d-4208-4c97-bf38-10fadaa83fdd');		
// 	appCOPS.getObject('copsLineChart', 'KyGLqP');										
// 	appCOPS.getObject('copsBarChart1', 'yDqqzC');										
// 	appCOPS.getObject('copsBarChart2', 'UEmRLS');										

// -- Finance --
	// -- Filters --
	appFinance.getObject('finSelectKPI', 'JkSEmf');													// Filters - Panes: Select KPI
	appFinance.getObject('finPeriod1', '1b85899d-faee-428c-88c8-6541ba20c9cd');						// Filters - Panes: Period 1
	appFinance.getObject('finQuarter', '67588589-9a88-4f55-ac65-419b9b1a4cf5');						// Filters - Panes: Quarter
	appFinance.getObject('finPeriod2', 'd5a69d38-d34b-4e9b-813f-42ebecae0b19');						// Filters - Panes: Period 2
	appFinance.getObject('finQuarter2', 'b7e09809-7bcc-4609-b633-c5c33b98bfc2');					// Filters - Panes: Quarter 2
	appFinance.getObject('finECSButton', 'jLJbmM');													// Filter Buttons: ECS
	appFinance.getObject('finFCSButton', 'PRuz');													// Filter Buttons: FCS
	appFinance.getObject('finROBButton', 'ZwmPyUV');												// Filter Buttons: ROB
	appFinance.getObject('finTEXButton', 'yCCJ');													// Filter Buttons: TEX
	appFinance.getObject('finD9Button', 'djBUv');													// Filter Buttons: D9
	appFinance.getObject('finICElimButton', 'FuwMDX');												// Filter Buttons: IC-ELIM
	// -- Revenue Growth --
	appFinance.getObject('revgrowTreemapDivision', 'afbpZm');											// Treemap Division
	appFinance.getObject('revgrowBarchartDeviationByDivision', 'bbba4c0f-07d6-41e9-bf90-f3a8a45b5394');	// Barchart Deviation by Division
	appFinance.getObject('revgrowPivotTable', 'bed4caf0-3221-4046-a5b1-8e15db127acc')
	// -- ROIC --
	appFinance.getObject('roicVizlibPivotTableTotal', 'ec14d8e9-3d6b-42f5-a1ef-1e77608b26c8');		// Vizlib Pivot Table TOTAL
	appFinance.getObject('roicROICLightYTD', '22565faf-84da-4df5-a3bc-31cc848b55ff');				// ROIC Light YTD
	// -- MPI --
	appFinance.getObject('mpiTrendByDivisionBarChart', 'yLvu');									// Bar-Chart "Trend by division"
	appFinance.getObject('mpiPivotTable', '7dbc3a9d-419d-4b3e-a361-67652cad8a78');				// Pivot Table

// -- NPS --
	// -- Filters --
	appNPS.getObject('npsECSButton', 'xmEhC');														// Filter Buttons: ECS
	appNPS.getObject('npsFCSButton', 'nAbwDUv');		
	appNPS.getObject('npsROBButton', 'emPGEM');														// Filter Buttons: ECS
	appNPS.getObject('npsTEXButton', 'UFEpvrP');	
	appNPS.getObject('npsQuestionsFilter', 'PXPVem');	
	appNPS.getObject('npsCampaignCodeFilter', 'YMbfMM');
	// -- NPS --
	appNPS.getObject('npsKPINPSScore', 'CnKRezR');													// Object KPI NPS Score
	appNPS.getObject('npsKPIResponseTime', 'XMpe');													// Object KPI Response Time
	appNPS.getObject('npsPieChartNPSScore', 'jbWQum');												// Object Pie-Chart NPS Score
	appNPS.getObject('npsNPSByDivision', 'jSpCjKA');												// Object NPS Score by Division
	appNPS.getObject('npsNPSByQuestion', 'xVdzrbR');												// Object NPS by Question	

// -- Revenue Growth by Business-- Access Is Denied
	// appBusiness.getObject('bizPeriodFilter', '20816d5b-1b3e-4666-99bd-a602f10be0b2');					// Filter - Panes: Period
	// appBusiness.getObject('bizQuarterFilter', '35097989-dc6a-4902-baba-040479aceac0');					// Filter - Panes: Quarter
	// appBusiness.getObject('bizECSButton', '89451718-392e-43f0-b8d6-44074ac6eda3');						// Filter Buttons: ECS
	// appBusiness.getObject('bizFCSButton', 'd1b2d58c-c093-40ea-a7a5-e29420e993c7');						// Filter Buttons: FCS
	// appBusiness.getObject('bizROBButton', 'e9dbc2f4-93ef-40d3-a3da-dad0c9217174');						// Filter Buttons: ROB
	// appBusiness.getObject('bizTEXButton', 'c175b820-dac3-4f23-91c4-6fbe5fdf87cb');						// Filter Buttons: TEX
	// appBusiness.getObject('bizD9Button', '2af27626-e743-44c5-8621-71abe2209225');						// Filter Buttons: D9
	// appBusiness.getObject('bizICElimButton', 'b03ad32b-f3f8-43f4-8529-15038b9be41c');					// Filter Buttons: IC-ELIM
	// // -- Revenue Growth by Business--
	// appBusiness.getObject('bizTotalRevenueByBusinessAndProduct', 'LWJpaPC');							// Object Total Revenue by Business and Product	

	//create cubes and lists -- inserted here --
	*/
} );