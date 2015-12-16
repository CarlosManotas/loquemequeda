$(function(){
	var $btnLimpiar = $("#limpiar");
	var $formulario = $("#formulario");
	var $botonForm = $formulario.find("[type='submit']");
	var $inputVal       = $formulario.children("[data-icon]").css('background-position').substr(0,7);
	var $formulario = $("#formulario");
	var $resultado = $("#resultado");
	var hijosInput = $formulario.children("[data-icon]");
	var preparando = hijosInput.map(function(){return $(this).attr("data-icon")});	

	var objForm = {
		form : $formulario,
		yosoy: hijosInput,
		valor: function(){
			return this.yosoy.css('background-position').substr(0,7);
		}
	};
	


	$botonForm.on('click', function(e){
		e.preventDefault();
		var llenarCampos = $formulario.children("[data-icon]").map(function(){
			return $(this).val();
		});
		var a = Number(llenarCampos[0]);
		var b = Number(llenarCampos[1]);
		var c = Number(llenarCampos[2]);
		var d = Number(llenarCampos[3]);
		var e = Number(llenarCampos[4]);
		var f = Number(llenarCampos[5]);
		var g = Number(llenarCampos[6]);
		var h = Number(llenarCampos[7]);
		var todoTodo = devolverResultado(a,b,c,d,e,f,g,h)
		var template ='<div class="resultado">' +
		'<h1>ESTO ES LO QUE TE QUEDA</h1>' +
	            '<h2>:name:,<span> :centimos: </span>$</h2>'+
	            '</div>';

	    var seccionResultado = template
	    			.replace(':centimos:',"00")
					.replace(':name:',todoTodo);
		$resultado.append($(seccionResultado));
		$(".resultado").show(5000);
		$formulario[0].reset();
	});

	$btnLimpiar.click(function(){
		$resultado.find(".resultado").remove();
	});
	campo(objForm);
	


	function devolverResultado (a,b,c,d,e,f,g,h){
		return  a - (b+c+d+e+f+g+h);
		
	}
	
	function campo(objeto){
		objeto.yosoy.on('keyup',function(){
			var tamano = $(this).val().length;
			var esteValor = $(this).val();
			$(this).css({'background-position':'98% -100px'});
			if(tamano === 0){
				$(this).css({'background-position' :$inputVal});
			} 
			if(tamano !== 0){
				return esteValor;
			}
		});
	}


})
