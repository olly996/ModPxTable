
        Polymer({
            is: 'custom-table',
            properties: {
                message: {
                    type: String,
                    value: "Hi There",
                    notify: true,
                    reflectToAttribute: true
                },
                tableData: {
                    type: Array,
                    value: [{ "first": "Valentine", "last": "Meyer", "email": "valentinemeyer@scentric.com", "actions": "<modal-custom idx=0></modal-custom>" }, { "first": "Silva", "last": "Alexander", "email": "silvaalexander@gmail.com", "actions": "<modal-custom idx=1></modal-custom>" }, { "first": "Hopkins", "last": "Wong", "email": "hopkinswong@hotmail.com", "actions": "<modal-custom idx=2></modal-custom>" }, { "first": "Joe", "last": "Sherman", "email": "joejoe@yahoo.com", "actions": "<modal-custom idx=3></modal-custom>" }, { "first": "Jane", "last": "Bartlett", "email": "jane@scentric.com", "actions": "<modal-custom idx=4></modal-custom>" }],
                    notify: true,
                    reflectToAttribute: true
                }
            },
            listeners: {
                "indexchanged": "_indexChanged",
                'px-cell-click': '_updateData',
                // 'tap' : '_setcell'

            },
            _updateData: function (e) {
               
                 if (e && e.type === 'px-cell-click') {
                //     var ri = e.detail.rowIndex + 1;
                //     var c = e.detail.column.label;
                //     var ci = null;
                //     var i = 0;
                //     switch (c) {
                //         case "First":
                //             var ci = 1;
                //             break;
                //         case "Last":
                //             var ci = 2;
                //             break;
                //         case "Email":
                //             var ci = 3;
                //             break;
                //         case "Actions":
                //             var ci = 4;
                //             break;
                //     }
                var cells = this.$.datatable.querySelectorAll('px-data-table-cell');
                [].forEach.call(cells, function (cell) {
                    cell.cellEditable = true;
                });
                    //var ind = (ri * 4) - (4 - ci);  //Above logic is used to find the index of cell ri and ci being row and column indexes
                    //console.log(this.$.datatable.querySelectorAll('.cell__edit'));
                    var editcell = this.$.datatable.querySelector('.cell__edit');
                   // var cells = this.$.datatable.querySelectorAll('px-data-table-cell');     //Query for data table cell elements 
                    [].forEach.call(cells, function (cell) {
                        // i = i + 1;
                        // if(cell != editcell)
                        // {

                        //     cell.cellEditable = false;
                        // }
                         if (editcell) {
                             if(cell != editcell){
                             cell.cellEditable = false;
                             }
                         }
                        
                         
                    });
                }},

            _indexChanged: function (evt) {
                var data = this.tableData[evt.detail];
                this.message = data.first + " " + data.last;
                this.$.modal.modalButtonClicked();
            }
        });
