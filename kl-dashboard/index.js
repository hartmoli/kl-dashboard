/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('1997f583-fca1-4bd3-bfc6-485ca92d1a1a', config);	//Inventory Visibility
	var app1 = qlik.openApp('3b99cd27-9ee1-4a79-88f1-51949d536c67', config); //KL Dashboard Finance
	var app1 = qlik.openApp('3b99cd27-9ee1-4a79-88f1-51949d536c67', config); //KL Dashboard Finance

	//get objects -- inserted here --
	app.getObject('QV01','2c6dd09a-5680-493b-933d-f6d40a728e80');	//Inventory Filter
	app.getObject('QV02','mvCmjQS');								//Inventory Line Chart 1
	app.getObject('QV03','5bfedb4c-331d-4891-9e07-df4ba939e43f');	//Inventory Line Chart 2

	app.getObject('QV04','715b351a-7af0-4473-b889-c6c32f16ac88');	//Doh Filter
	app.getObject('QV05','dwtdJ'); 									//DoH Delta Chart
	app.getObject('QV06','Qysdhpf'); 								//DoH Actuals Chart
	
	app1.getObject('QV07','d29cd580-39b5-435f-b4f5-4a39a99f38a7');	//Finanace Filter
	app1.getObject('QV08','vMQwa');									//ROIC Container
	//create cubes and lists -- inserted here --

} );