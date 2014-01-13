var Router = Backbone.Router.extend({
	routes: {
		"": "home"
	}
});

/*Old Example
var emailAndPassword = new EmailAndPassword();

var router = new Router;
router.on('route:home', function() {
  emailAndPassword.render();
})
*/

Backbone.history.start();