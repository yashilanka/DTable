(function (DTableModule, $) {

    DTableModule.newModule(DTableModule.MODULE_FORMATTER_WIDGET, "partial", {
        init: function (options, dtable) {
            this._super(options, dtable);

            if (this.options.template == undefined || this.options.template == false)
            {
                throw "partial widget requires template option";
            }

            this.templateName = "partial_" + this.options.column_id;
            this.dtable.template.addTemplate(this.templateName, this.options.template);

            this.template = false;
        },
        getDefaults: function () {
            return {
                template: false
            };
        },
        format: function (columnId, value, values) {

            if (this.template === false)
            {
                this.template = this.dtable.template.getTemplate(this.templateName);
            }

            return this.template.render({
                value: value,
                column_id: columnId,
                values: values,
                xy: function(){ return "a"}
            });
        }
    });

}(DTableModule, jQuery));
