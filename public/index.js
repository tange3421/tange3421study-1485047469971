var taClient = new TradeoffAnalytics('ta');

ta.Client.start(function(){
//jsonファイルの取得
  $.getJSON('problem.json'),function(){
    ta.Client.show(data);
    });

  // subscribe to events
  taClient.subscribe('onError', function (error) {
    console.log('TA Widget Sent Error: ' + error);
  });

  taClient.subscribe('doneClicked', function (op) {
    console.log('final decision is ' + op.name);
  });

  taClient.subscribe('compareClicked', function(ops) {
    console.log('comparing options:' + ops.map(function(op){return op.name;}));
  });

  taClient.subscribe('problemResolved', function(dillema) {
    var opOps = dillema.resolution.solutions.filter(function(s){return s.status=='FRONT';});
    console.log('Problem Resolved. '+ opOps.length + ' Top options.' );
  });

  var clk = taClient.subscribe('optionClicked', function(op) {
    console.log('Clicked. '+ op.name);
  });
  
});
