
        Polymer({
            is: 'modal-custom',
            properties: {
                message: {
                    type: String,
                    value: "Yo Buddy!!",
                    notify: true
                },
                idx: {
                    type: String
                }
            },
            listeners: {
                "tap" : "_showRowData"
            },
            _showRowData: function(evt){
                this.fire("indexchanged", this.idx)
            }
        });
