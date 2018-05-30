var expect = require('chai').expect


describe('Notifier', function() { 
var notifier = require("../../lib/Notifier.js")

	describe('# Send()', function() { 
		it("Should accept welformed notification object", function(){
				var notificacionDummy = {
					"name": "Invoice notification",
					"channels":[
						{
							"channelName": "email", "payload": {} 
						}
					] 
				};
				var Notifier = new notifier(notificacionDummy)

				expect(Notifier).to.be.an("object")
		});
		it("Should not accept malformed notification object", function(){
				var notificacionDummy = {
					"names": "Invoice notification",
					"channel":[
						
					] 
				};			
		/*Si no se envuelve el llamado a la funcion (en este caso el constructor) en 
		*una funcion anonima, chai no captura la excepcion sino el propio Node
		*Y la prueba va a fallar
		*/
				expect(function(){ 
					var Notifier = new notifier(notificacionDummy)
				}).to.throw("malformed notification object");
		});

		/*it("Should send message through every channel especified in value object", function(){

		});

		it("Should return an Array of objects with response info for each channel used", function(){
		});
		it("Should not send message via a channel with missing payload info", function() {});

		it("Should not send message without value object", function() {});

		it("Should return propper error message for a channel with malformed payload object", function() {});

		it("Should return propper error message if a channel doesn't exist", function() {});*/

	});

});