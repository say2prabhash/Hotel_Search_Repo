$(document).ready(function(){ 
$("#rooms").on("change",function(){
	 				$("#rooms-info").empty();
	 				 val=$("#rooms option:selected").val();
	 				 	for(i=1;i<=val;i++)
	 				{
	 				 var appendRooms="<div id=\"room-info-flex\">\
	 				 <p id=\"adultsText\" class=\"text-info\">Adults(18+)</p>\
	 				 <p id=\"childenText\" class=\"text-info\">Children(0-17)</p>\
	 				 </div>";
	 				 var appendRoomInfo="<div id=\"room-input-box\">\
                    <select id=\"adults\">\
                        <option value=\"1\">1</option>\
                        <option value=\"2\">2</option>\
                        <option value=\"3\">3</option>\
                        <option value=\"4\">4</option>\
                        <option value=\"5\">5</option>\
                        <option value=\"6\">6</option>\
                    </select>";

                    appendRoomInfo+="<select id=\"children" +i+"\">";
                        appendRoomInfo+="<option value=\"0\">0</option>\
                        <option value=\"1\">1</option>\
                        <option value=\"2\">2</option>\
                        <option value=\"3\">3</option>\
                        <option value=\"4\">4</option>\
                        <option value=\"5\">5</option>\
                        <option value=\"6\">6</option>\
                    </select>\
                    </div>";
	 			
	 					 var individualRoom = "<div id=roomNumber"+(i)+"><p>Room " + (i) + "</p></div>";
	 					$("#rooms-info").append(individualRoom);
	 					$("#rooms-info").append(appendRooms);
  						$("#rooms-info").append(appendRoomInfo);
  						}
	 });

	});