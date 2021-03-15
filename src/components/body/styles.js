import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    container: {
      marginTop: 90,
      marginBottom: 90,
    },
    list: {
      width: '100%',
      margin: 0,
    },
    itens: {
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: '#dcdcdc',
    },
    imagem_space: {
      width: 90,
    },
    imagem_itens: {
      width: '100%',
    },
    text: {
      marginLeft: 20,
    },
}));

export default styles;