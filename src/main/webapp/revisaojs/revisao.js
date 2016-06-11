function exibeNome(){
			var elNome = document.getElementById('txtNome');	
			var strNome = elNome.value;
			var elDisplay = document.getElementById("display");
			elDisplay.innerText = strNome;

}

function novoContato(){
			var elListaContatos = document.getElementById("listaContatos");
			var inputContato  = document.createElement("input");
			
			//<label> Contato :</label>
			var labelContato  = document.createElement("label");
			labelContato.innerText="Contato:";
			
			//<br>
			var br  = document.createElement("br");
			
			//<input type="button">
			var btnExc  = document.createElement("input");
			btnExc.setAttribute("type","button");
			btnExc.setAttribute("value","-");
			btnExc.onclick=function (){
				elListaContatos.removeChild(divLinha);
			};
			//<div> ... </div>
			var divLinha =  document.createElement("div");	
			divLinha.appendChild(labelContato);
			divLinha.appendChild(inputContato);
			divLinha.appendChild(btnExc);
			divLinha.appendChild(br);

			elListaContatos.appendChild(divLinha);


			//console.log(elNome);
}	

	
			
