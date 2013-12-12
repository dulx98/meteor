if (Package.ui) {
  var UI = Package.ui.UI;
  var HTML = Package.htmljs.HTML; // implied by `ui`
  Package.ui.Handlebars.registerHelper('markdown', UI.block(function () {
    var self = this;
    return function () {
      var text = UI.toRawText(self.__content);
      var converter = new Showdown.converter();
      return HTML.Raw(converter.makeHtml(text));
    };
  }));
}
