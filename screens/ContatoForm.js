import * as React from "react";
import {
  Card,
  Divider,
  TextInput,
  Text,
  Title,
  Paragraph,
  Button,
  List,
} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ContatoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: null,
      telefone: null,
      dataNascimento: null,
      contatoList: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let contato = {
      nome: this.state.nome,
      telefone: this.state.telefone,
      dataNascimento: this.state.dataNascimento,
    };

    if (this.state.nome) {
      this.setState({ contatoList: [...this.state.contatoList, contato] });
    }

    this.setState({
      nome: null,
      telefone: null,
      dataNascimento: null,
    });
    console.log(this.state.contatoList);
  };

  render() {
    const { route } = this.props;
    const { key, nome } = route.params;
    if (route.params) {
      console.log(key);
      console.log(nome);
    }
    return (
      <>
        <Title style={{ color: "red", textAlign: "center" }}>
          Bem Vindo {nome ? nome : ""}
        </Title>
        <TextInput
          label="Nome"
          value={this.state.nome}
          onChangeText={(text) => this.setState({ nome: text })}
        />
        <TextInput
          label="Telefone"
          value={this.state.telefone}
          onChangeText={(text) => this.setState({ telefone: text })}
        />
        <TextInput
          label="Data Nascimento"
          value={this.state.dataNascimento}
          onChangeText={(text) => this.setState({ dataNascimento: text })}
        />

        <Button mode="contained" onPress={() => this.getData()}>
          <Icon name="save"></Icon> Salvar
        </Button>

        <Button
          mode="contained"
          color="green"
          onPress={() =>
            this.props.navigation.navigate("Listagem de Contatos", {
              contatos: this.state.contatoList,
            })
          }
        >
          <Icon name="arrow-left"></Icon> Voltar
        </Button>
      </>
    );
  }
}
/* 
//exemplu usando função
function ContatoForm() {
  const [nome, setNum01] = useState(0);
  const [telefone, setNum02] = useState(0);
  const [total, setTotal] = useState(0);
  const somar = () => {
    setTotal(nome + telefone);
  };
  return (
    <View>
      <TextInput
        label="Número 01"
        name="nome"
        value={nome}
          onChange={ e => setNum01(e.target.value)}
      />
      <TextInput
        label="Número 02"
        name="nome"
        value={telefone}
        onChange={ e => setNum02(e.target.value)}
      />
      <Text>
        {total}
      </Text>
      <Button mode="contained" onPress={somar}>
        <Icon name="save" size={18} />
        Teste
      </Button>
    </View>
  );
} */