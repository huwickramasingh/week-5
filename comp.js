/// initialising new vue app
var app = new Vue({
    el: "#app",
    data: {
        time: null,
        // name shown on dashboard
        Name: "Peter",
        // temporary storage space for current entries
        message: null,
    
        // location check
        locate: 0,

        NoPlate: "BHZ2345",
   },
    methods: {
        // submit qurise
        submit: function () {
            console.log("mybutton");
            if (app.message != null) {
                var newEntry = {
                    text: app.message,
                    slider: app.slider
                    
                };
                app.entries.unshift(newEntry);
                app.message = null;
            } else {
                alert("You should enter something befor submit")
            }
        },
        // display time
        displayTime: function () {
            var n = new Date().toLocaleTimeString();
            time = n;
            return time;
        },
        // display date
        displayDate: function () {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            return today;
        },
          
        // LOCATION
        showPosition: function () { 
            if (!this.locate) {
                this.locate = 1;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (pos) {
                        var posInfo = "Latitude: " + pos.coords.latitude + "," + "\n" + "Longitude: " + pos.coords.longitude;
                        document.getElementById("result").innerHTML = posInfo;
                    });
                } else {
                    alert("Your browser does not support HTML5 geolocation, Sorry");
                }
            }
        },

    }
});