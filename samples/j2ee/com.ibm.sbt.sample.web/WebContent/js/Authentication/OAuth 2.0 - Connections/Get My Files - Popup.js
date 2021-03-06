require([ "sbt/connections/FileService", "sbt/dom" , "sbt/config"], function(FileService, dom, config) {
	config.Properties["loginUi"] = "popup";
	dom.byId("loading").style.visibility = "visible";
    var fileService = new FileService({
        endpoint : "connectionsOA2"
    });
    fileService.getMyFiles({
        load : function(files) {
        	dom.byId("loading").style.visibility = "hidden"; 
            var content = "";
            for (counter in files) {
                content = content 
                    + "Name: " + files[counter].getName() + ", FileId: " + files[counter].getId()
                    + ", Visibility: " + files[counter].getVisibility() + ((counter == files.length - 1) ? "" : " ; ");
            }
            if (content.length == 0) {
                content = "You do not have any files.";
            }
            dom.setText("content", content);
        },
        error : function(error) {
        	dom.byId("loading").style.visibility = "hidden"; 
            dom.setText("content", "Error received. Error Code = " + error.code + ". Error Message = " + error.message);
        }
    });
});
