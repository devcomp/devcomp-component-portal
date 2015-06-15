
exports.main = function (API) {

	var exports = {};

	exports.turn = function (resolvedConfig) {

		API.insight.debug("DEVCOMP CLIENT MAIN APP github.com~devcomp~org.devcomp.portal.ComponentTree~0 !!!!");


		function loadScript(url, callback) {
		    var script = document.createElement("script")
		    script.type = "text/javascript";
		    if (script.readyState) {  //IE
		        script.onreadystatechange = function() {
		            if (
		            	script.readyState == "loaded" ||
	                    script.readyState == "complete"
	                ) {
		                script.onreadystatechange = null;
		                callback();
		            }
		        };
		    } else {  // Others
		        script.onload = function(){
		            callback();
		        };
		    }
		    script.src = url;
		    document.getElementsByTagName("head")[0].appendChild(script);
		}

API.insight.debug("Load Script !!!!");

		loadScript('http://127.0.0.1:8083/org.devcomp.portal.ComponentTree/assets.js', function () {

API.insight.debug("assets.js Loaded !!!!");

			loadScript('http://127.0.0.1:8084/org.devcomp.portal.ComponentTree/components/bundle.js', function () {

API.insight.debug("components/bundle.js Loaded !!!!");

	        });
		});
	




/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Goodybag Lunchroom</title>
    <script>
		var el = document.createElement("link");
        el.setAttribute("rel", "stylesheet");
        el.setAttribute("type", "text/css");
        el.setAttribute("media", "all");
        el.setAttribute("href", '//' + window.location.hostname + ':8083/lunchroom-mockup/assets/semantic-ui-css/semantic.css');
        document.getElementsByTagName("head")[0].appendChild(el);

		function loadScript(url, callback) {
		    var script = document.createElement("script")
		    script.type = "text/javascript";
		    if (script.readyState) {  //IE
		        script.onreadystatechange = function() {
		            if (
		            	script.readyState == "loaded" ||
	                    script.readyState == "complete"
	                ) {
		                script.onreadystatechange = null;
		                callback();
		            }
		        };
		    } else {  // Others
		        script.onload = function(){
		            callback();
		        };
		    }
		    script.src = url;
		    document.getElementsByTagName("head")[0].appendChild(script);
		}

		loadScript('//' + window.location.hostname + ':8083/lunchroom-mockup/assets.js', function () {
	        head.load([
	        	('//' + window.location.hostname + ':8083/lunchroom-mockup/assets/semantic-ui-css/semantic.min.js'),
	        	('//' + window.location.hostname + ':8084/lunchroom-mockup/components/bundle.js')
			]);
		});
    </script>
</head>
<body class="site">

    <div class="ui basic segment" id="GBL_DEV_Views">
    </div>

</body>
</html>
*/

	}

	return exports;
}
