 window.onload = function () {
            var el = document.querySelector('custompxtable-element');
          

            for (var i = 0; i < el.di.length; i++) {
                console.log(document.querySelector('#' + el.di[i]));
            
            }

            el.GetMod();


        },
            Polymer({
                is: 'custompxtable-element',
                properties: {
                    message: {
                        type: String,
                        value: "Hi There",
                        notify: true,
                        reflectToAttribute: true
                    },
                    data2: {
                        type: Array,
                        value: []
                    },
                    data: {
                        type: Array,
                        value: '[{"first":"Valentine","last":"Meyer","email":"valentinemeyer@scentric.com", "actions" : "<custom-modal ind=0></custom-modal>"},{"first":"Silva","last":"Alexander","email":"silvaalexander@gmail.com",  "actions" : "<custom-modal ind=1></custom-modal>"},{"first":"Hopkins","last":"Wong","email":"hopkinswong@hotmail.com", "actions" : "<custom-modal ind=2></custom-modal>"},{"first":"Joe","last":"Sherman","email":"joejoe@yahoo.com", "actions" : "<custom-modal ind=3></custom-modal>"},{"first":"Jane","last":"Bartlett","email":"jane@scentric.com", "actions" : "<custom-modal ind=4></custom-modal>"}]',
                        notify: true,
                        reflectToAttribute: true
                    },
                    di: {
                        type: Array,
                        value: ["d1", "d2", "d3", "d4", "d5"]
                    }
                },
                
                tapped: function () {
                    console.log(this.$.table1.querySelector('#myContent'));
                    console.log("Icon Tapped");
                },
               
                GetMod: function () {
                   
                    console.log(this.di.length);
                    for (var i = 0; i < this.di.length; i++) {
                        this.$.table1.querySelector('#' + this.di[i]).textContent = "Hello " + this.data[i].first;
                    }

                }
               
            });