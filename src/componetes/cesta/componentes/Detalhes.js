import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../Texto";


export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imageFazenda} source={logoFazenda} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao} </Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.textpBotao}>{botao}</Texto>
            </TouchableOpacity>
        </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBlod"
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical:12
    },
    imageFazenda:{
        width: 32,
        height:32
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight:26,
         marginLeft:12,
         fontFamily: "MontserratRegular"
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight:26
    },
    preco:{
        color:"#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao:{
        marginTop: 16,
        paddingVertical: 16,
        backgroundColor: "#2A9F85",
        borderRadius: 6
    },
    textpBotao:{
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
});