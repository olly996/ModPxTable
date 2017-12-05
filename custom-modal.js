Polymer({
            is: 'custom-modal',
            properties: {
                data: {
                    type: Array,
                    value: '[{"first":"Valentine","last":"Meyer","email":"valentinemeyer@scentric.com"},{"first":"Silva","last":"Alexander","email":"silvaalexander@gmail.com"},{"first":"Hopkins","last":"Wong","email":"hopkinswong@hotmail.com"},{"first":"Joe","last":"Sherman","email":"joejoe@yahoo.com"},{"first":"Jane","last":"Bartlett","email":"jane@scentric.com"}]',
                    notify: true,
                    reflectToAttribute: true
                },
                ind: {
                    type: Number,
                    value: null,
                    notify: true,
                    reflectToAttribute: true

                }
            },attached:function(){
                 var a = this.data[this.ind].first;
                 var chnuge = Polymer.dom(this.root).querySelector('span');
                 chnuge.textContent = a;
                 console.log(a);

            },
            GetMod: function (e) {
                console.log("Hey there, Icon clicked");
                var chnage = Polymer.dom(this.root).querySelector('div');
               
                console.log(chnage);
                chnage.textContent = "Hello " + this.data[this.ind].first;

            }
        });