function ValidaCampo(){

    var nome = document.getElementById('campoNome');
	
	if(nome.value == '') {
		    document.getElementById("erro").innerHTML= "Favor preencher o campo Nome";
			document.getElementById('erro').className = 'style-message';
			nome.focus();
			return false;
	}

    var n1 = document.getElementById('campoNota1');

    if(n1.value == '') {
        document.getElementById("erro").innerHTML= "Favor preencher o campo Nota 1";
        document.getElementById('erro').className = 'style-message';
        n1.focus();
        return false;
    }

    var n2 = document.getElementById('campoNota2');

    if(n2.value == '') {
        document.getElementById("erro").innerHTML= "Favor preencher o campo Nota 2";
        document.getElementById('erro').className = 'style-message';
        n2.focus();
        return false;
    }

    var n3 = document.getElementById('campoNota3');

    if(n3.value == '') {
        document.getElementById("erro").innerHTML= "Favor preencher o campo Nota 3";
        document.getElementById('erro').className = 'style-message';
        n3.focus();
        return false;
    }

    var n4 = document.getElementById('campoNota4');

    if(n4.value == '') {
        document.getElementById("erro").innerHTML= "Favor preencher o campo Nota 4";
        document.getElementById('erro').className = 'style-message';
        n4.focus();
        return false;
    }



    return true;
}


function clearFields(){
	document.getElementById('erro').innerHTML = "";
}


function calcularMedia(){

    var input = document.querySelector('#campoNota1');
    var num1 = input.value;
    num1 = parseInt(num1);

    var input = document.querySelector('#campoNota2');
    var num2 = input.value;
    num2 = parseInt(num2);
    
    var input = document.querySelector('#campoNota3');
    var num3 = input.value;
    num3 = parseInt(num3);

    var input = document.querySelector('#campoNota4');
    var num4 = input.value;
    num4 = parseInt(num4);

    result = ((num1+num2+num3+num4)/4)

    if(result>=7){
        document.getElementById("situacao").innerHTML= " Aprovado "+result;
        document.getElementById('situacao').className = 'style-apr';

    
    }

    if(result<7 && result>=5){
        document.getElementById("situacao").innerHTML= " Exame "+result;
        document.getElementById('situacao').className = 'style-exm';

        
    }

    if(result<5){
        document.getElementById("situacao").innerHTML= " Reprovado "+result;
        document.getElementById('situacao').className = 'style-rep';

        
    }

    
}