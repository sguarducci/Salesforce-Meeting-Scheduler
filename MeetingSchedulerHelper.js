({
	handleClick : function(component) {
		var searchText = component.find('searchText').get('v.value');
        var action = component.get('c.BusinessSearch');
       
        action.setParams({searchText: searchText});
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if(state === 'SUCCESS'){
                var data = JSON.parse(response.getReturnValue());
            	component.set("v.recordBusinesses", data.businesses);
                var theArray = [data.businesses.length];
                var i = 0;
               	for(; i < data.businesses.length; i++){
                    var obj = {location:{Street: data.businesses[i].location.address1, 
                                         City: data.businesses[i].location.city, 
                                         State: data.businesses[i].location.state, 
                                         Country: data.businesses[i].location.country},title:data.businesses[i].name};
                    theArray[i] = obj;
                }
                
                component.set("v.mapMarkers", theArray);
                component.set('v.zoomLevel', 10);
        		  component.set('v.markersTitle', 'Businesses');
        		  component.set('v.listView', "visible");
            	console.log("The Data", data);    
            }
  
        });
        $A.enqueueAction(action);
	}
})
