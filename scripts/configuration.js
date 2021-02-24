// **************************************************
// Global Config
// **************************************************

var globalSettings = new Object();

globalSettings.debuggingEnabled      = true;
globalSettings.debuggingUserVorname  = 'Max'
globalSettings.debuggingUserNachname = 'Mustermann'
globalSettings.debuggingObjectID     = 'ExampleID';


// **************************************************
// xAPI / LRS Config
// **************************************************

var lrsSettings = new Object();

lrsSettings.endpointUrl = 'https://example.com/data/xAPI/statements';
lrsSettings.version     = '1.0.3';
lrsSettings.user        = 'USER';
lrsSettings.password    = 'PASSWORD';
