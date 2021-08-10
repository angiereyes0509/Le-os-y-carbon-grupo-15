import React, { Component, useState, useEffect } from "react";
//import "./RegistroProvisional.css";
import { firestore } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function RegistroProvisional() {
  const [modalInsertar, updateStateInsert] = useState(false);
  const [modalEditar, updateStateEdit] = useState(false);
  const [platos, setPlatos] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  const getPlatos = async () => {
    firestore.collection("dishes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPlatos(docs);
    });
  };

  const peticionPost = async() => {
    await firestore.collection("dishes").doc().set(form);
    updateStateInsert(false);
  };

  useEffect(() => {
    getPlatos();
  }, []);
  return (
    <div className="App">
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          updateStateInsert(true);
        }}
      >
        Insertar
      </button>
      <br />
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre Plato</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {platos.map((plato) => (
            <tr key={plato.id}>
              <td>{plato.name}</td>
              <td>{plato.price}</td>
              <td>{plato.category}</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>Insertar Registro</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label> Nombre Plato: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
            <br />
            <label>Precio: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={handleChange}
            />
            <br />
            <label> Categoría </label>
            <br />
            <select onChange={handleChange} name="category">
              <option value=""></option>
              <option value="entradas">ENTRADAS</option>
              <option value="sandwiches">SANDWICHES</option>
              <option value="res">RES</option>
              <option value="pollo">POLLO</option>
              <option value="pescados">PESCADOS</option>
              <option value="cerdo">CERDO</option>
              <option value="parrilleros">PARRILLEROS</option>
              <option value="cotidianos">COTIDIANOS</option>
              <option value="bebidas">BEBIDAS</option>
              <option value="postres">POSTRES</option>
            </select>
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>{peticionPost()}}>Insertar</button>
          {"   "}
          <button
            className="btn btn-danger"
            onClick={() => {
              updateStateInsert(false);
            }}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Registro</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nombre Plato:</label>
            <br />
            <input type="text" className="form-control" name="name" value="" />
            <br />
            <label>Precio: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="precio"
              value=""
            />
            <br />
            <label>Categoría </label>
            <br />
            <select>
              <option value="entradas">ENTRADAS</option>
              <option value="sandwiches">SANDWICHES</option>
              <option value="res">RES</option>
              <option value="pollo">POLLO</option>
              <option value="pescados">PESCADOS</option>
              <option value="cerdo">CERDO</option>
              <option value="parrilleros">PARRILLEROS</option>
              <option value="cotidianos">COTIDIANOS</option>
              <option value="bebidas">BEBIDAS</option>
              <option value="postres">POSTRES</option>
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={() => this.peticionPut()}
          >
            Editar
          </button>
          {"   "}
          <button
            className="btn btn-danger"
            onClick={() => this.setState({ modalEditar: false })}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RegistroProvisional;
