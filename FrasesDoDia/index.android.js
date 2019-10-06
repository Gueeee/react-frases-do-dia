import React from 'react';
import {Text,AppRegistry, View, TouchableOpacity, Image, Alert} from 'react-native';

const Estilos = {
	principal: {
		flex: 1
	},
	topo: {
		flex: 1.5,
		fontSize: 24,
		color: 'rgb(31,72,106)',
		backgroundColor: 'rgb(75,156,222)',
		paddingTop: 24,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	conteudo: {
		flex: 13,
		backgroundColor: 'rgb(228,243,255)',
		alignItems: 'center',
	},
	rodape: {
		flex: 1,
		backgroundColor: 'rgb(75,156,222)'
	},
		principalb: {
		paddingTop: 40
	},
	botao: {
		backgroundColor: 'rgb(75,156,222)',
		padding:  10,
	},

	textoBotao: {
		color: 'rgb(31,72,106)',
		fontSize: 16,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	image: {
		backgroundColor: 'rgb(208,208,255)',
		width: 200,
		height: 200,
	}
};

const gerarNovaFrase = ()=>{
	var numeroAleatorio = Math.random();
	numeroAleatorio = Math.floor(numeroAleatorio*3);

	var temas = Array();
	temas[0] ='Futurista';
	temas[1] ='Escolar';
	temas[2] ='Medieval';

	var fraseEscolhida = temas[numeroAleatorio];

	Alert.alert('Tema de Roleplay',fraseEscolhida);
}
//Criar o componente
const App = () => {
	const{principal,topo,conteudo,rodape,botao,textoBotao,imagem} = Estilos;

	return(
		<View style={principal}>

			<Text style={topo}>Gerador de temas de Roleplay</Text>

			<View style={conteudo}>
				<Image style={imagem} source={require('./imgs/logo.png')}/>
				<TouchableOpacity onPress={gerarNovaFrase} style={botao}>
					<Text style={textoBotao}>Toque aqui para uma nova frase</Text>
				</TouchableOpacity>
			</View>

			<Text style={rodape}></Text>

		</View>
	);
};


AppRegistry.registerComponent('FrasesDoDia', ()=>App);