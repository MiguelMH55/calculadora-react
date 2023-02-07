import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//funciones de la calc
function App() {
  const [a, seta] = useState(0)
  const [Operador, setOperador] = useState(0)
  const [b, setb] = useState(0)


  const FCvalor = (x) => {

    if (a == 0) {
      seta(x.target.value);
    } else {
      seta(a + x.target.value);
    }
  }

  const FCborrar = () => {
    seta(0);
    setb(0);
    setOperador(0);
  }

  const FCborrador = (props) => {
    return (
      <input type="button" value={props.value} onClick={FCborrar} />
    );
  }

  const Button = (props) => {
    if (props.value == "+") {
      return (
        <input type="button" value={props.value} onClick={Sum} />
      );

    } else if (props.value == "-") {
      return (
        <input type="button" value={props.value} onClick={Res} />
      );
    } else if (props.value == "*") {
      return (
        <input type="button" value={props.value} onClick={Mul} />
      );
    } else if (props.value == "/") {
      return (
        <input type="button" value={props.value} onClick={Div} />
      );
    } else {
      return (
        <input type="button" value={props.value} onClick={FCvalor} />
      );
    }

  }

  const FCresultado = () => {
    return (
      <input type="textfield" id="resultado" value={a} />
    );
  }

  const Sum = () => {
    if (Operador == 0) {
      setb(a);
      seta(0);
      setOperador("+");
    } else {
      setOperador("+");
    }
  }

  const Res = () => {
    if (Operador == 0) {
      setb(a);
      seta(0);
      setOperador("-");
    } else {
      setOperador("-");
    }
  }

  const Mul = () => {
    if (Operador == 0) {
      setb(a);
      seta(0);
      setOperador("*");
    } else {
      setOperador("*");
    }
  }

  const Div = () => {
    if (Operador == 0) {
      setb(a);
      seta(0);
      setOperador("/");
    } else {
      setOperador("/");
    }
  }

  const FCcalc = () => {
    if (Operador == "+") {
      seta(parseFloat(b) + parseFloat(a));
    }

    if (Operador == "-") {
      seta(parseFloat(b) - parseFloat(a));
    }

    if (Operador == "*") {
      seta(parseFloat(b) * parseFloat(a));
    }

    if (Operador == "/") {
      seta(parseFloat(b) / parseFloat(a));
    }

  }

  const FCIg = (props) => {
    return (
      <input type="button" value={props.value} onClick={FCcalc} />
    );
  }

  return (

    <table class="calculadora">
      <tr>
        <td colspan="4">

          <FCresultado />
        </td>
      </tr>
      <tr>
        <td><Button value="1" /></td>
        <td><Button value="2" /></td>
        <td><Button value="3" /></td>
        <td><Button value="+"/></td>
      </tr>
      <tr>
        <td><Button value="4"/></td>
        <td> <Button value="5"/></td>
        <td> <Button value="6"/></td>
        <td><Button value="-"/></td>
      </tr>
      <tr>
        <td><Button value="7"/></td>
        <td><Button value="8"/></td>
        <td><Button value="9"/></td>
        <td> <Button value="*"/></td>
      </tr>
      <tr>
        <td><Button value="0"/></td>
        <td><FCborrador value="AC"/></td>
        <td><Button value="/"/></td>
        <td> <FCIg value="="/></td>
      </tr>
    </table>

  )

}
export default App
