window.addEventListener('load', function(){
	//
	var fields = $('#calculator-headerSize, #calculator-clients, #calculator-timeout');
	fields.on('change', function(event){
		$(event.target.form).submit();
	})

	$('#calculator').on('submit', function calculateBandWidth(event){
		event.preventDefault();
		var form = event.target;
		var values = {};
		$.each(form.getElementsByTagName('input'), function(index, input){
			var variable = input.name.replace('calculator-','');;
			values[variable] = input.value;
		});
		var result = values.headerSize * values.clients * 1000 / values.timeout;

		var outputs = form.getElementsByTagName('output');
		outputs[0].value = Math.round(result);
		outputs[1].value = Math.round( result*8/1024 * 10 ) / 10;
		return false;
	}).submit();
}, false);
