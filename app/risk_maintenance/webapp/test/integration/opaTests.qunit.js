sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmaintenance/test/integration/FirstJourney',
		'riskmaintenance/test/integration/pages/RiskList',
		'riskmaintenance/test/integration/pages/RiskObjectPage'
    ],
    function(JourneyRunner, opaJourney, RiskList, RiskObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmaintenance') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRiskList: RiskList,
					onTheRiskObjectPage: RiskObjectPage
                }
            },
            opaJourney.run
        );
    }
);