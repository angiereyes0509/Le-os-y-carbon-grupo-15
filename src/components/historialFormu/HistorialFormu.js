import React, { useState } from "react";
import HistorialFiltro from "../historialFiltro/HistorialFiltro";
import "./HistorialFormu.css";

const HistorialFormu = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [status, setStatus] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangedHanlder = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHanlder = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitMadeHandler = (event) => {
    event.preventDefault();
    console.log(event);
    const expenseData = {
      id: Math.random(),
      title: enteredTitle,
      expenseAmount: enteredAmount,
      expenseDate: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onExpenseAdded(expenseData);
    changeFormStatus();
    console.log(expenseData);
  };

  const changeFormStatus = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  const submitStateChangeHandler = (event) => {
    event.preventDefault();
    changeFormStatus();
  };

  return (
    <form>
      <div className="contenidoFormulario">
      <HistorialFiltro/>

        <div className="casillasFormu">
          <label>FECHA DE INICIO</label>
          <input type="date" min="2019-01-01" step="2022-12-31" value="" />
        </div>
        <div className="casillasFormu">
          <label>FECHA FIN</label>
          <input type="date" min="2019-01-01" step="2022-12-31" value="" />
        </div>
      </div>
      <div className=" btn BotonFormuBuscar">
        <button type="submit">Hacer búsqueda</button>
      </div>


    </form>
  );
};

export default HistorialFormu;

//      <button onClick={submitStateChangeHandler}>Cancel</button> botón para cancelar una acción.
