$("body").on("click", "#btnExport", function() {
    html2canvas($('#tblCustomers')[0], {
        onrendered: function(canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 200
}]
                };
                pdfMake.createPdf(docDefinition).download("Table.pdf");
            }
        });
    });