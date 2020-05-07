({
    init:function(component,event,helper){
        if(event.which == 13){
          helper.handleClick(component);  
        }
    },
    updateSearch:function(component,event,helper){
        helper.handleClick(component);
    },
    
    /*autoComplete:function(component,event,helper){
        var searchText = component.find('autoComplete').get('v.value');
        console.log(searchText.length);
        if(searchText.length >2){
        	var action = component.get('c.AutoCompleteCallout');
        	action.setParams({searchText: searchText});
        	action.setCallback(this, function(response){
            	var state = response.getState();
            
            	if(state === 'SUCCESS'){
                	var data = JSON.parse(response.getReturnValue());
                	component.set("v.autoComplete", data.businesses);
                	console.log("AutoComplete Data:", data.businesses);
            	}
        	});
        $A.enqueueAction(action);  
        }
        
    },*/
       
    submit:function(component,event,helper){
        var businessName = component.find('businessName').get('v.value');
    	var theDateTime = component.find('theDateTime').get('v.value');
        var phoneNumber = component.find('phoneNumber').get('v.value');
        var action = component.get('c.storeInfo');
        action.setParams({businessName: businessName, theDateTime: theDateTime, phoneNumber: phoneNumber});
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if(state === 'SUCCESS'){
            	console.log("SUCCESSFULL INSERTION");    
            }
  
        });
        $A.enqueueAction(action);
	}
})
