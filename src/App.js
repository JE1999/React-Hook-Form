import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Container from "./components/Container";
import Form from "./components/Form";
import Input from './components/Input'
import InputMaskForm from "./components/InputMask";
import Button from "./components/Button";

const schema = yup.object().shape({
  FirstName: yup.string().required().trim(),
  LastName: yup.string().trim(),
  Cedula: yup.string().required(),
  Age: yup.number().positive().integer().required().moreThan(17),
});

export default function App() {
  
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  console.log(errors)

  const onSubmit = data => {

    if(data.Cedula.length < 13){
      alert('Debe completar la Cédula')
      return
    }
    console.log(data);
    alert(JSON.stringify(data))
  }

  return (
    <Container
      classContainer="container mt-5 p-5 border rounded shadow-sm bg-white"
    >

      <div className="mb-5">
        <h1 className="text-muted">React-Hook-Form</h1>
        <p className="text-muted">Reutilizando componentes</p>
      </div>

      <Form 
        handleSubmit={handleSubmit} 
        onSubmit={onSubmit}
      >
        <Input 
          label="Nombre" 
          name="FirstName" 
          register={register} 
          messageError={errors.FirstName?.message && 'Nombre es obligatorio'}
        />

        <Input 
          label="Apellido" 
          name="LastName" 
          register={register} 
          messageError={errors.LastName?.message && 'Apellido es obligatorio'}
        />

        <Input 
          label="Edad" 
          name="Age" 
          type="number"
          register={register}
          messageError={errors.Age?.message && 'La edad es obligatorio, debe ser un número y ser mayor de edad'}
        />

        <InputMaskForm
          mask="999-9999999-9"
          label="Cédula" 
          name="Cedula"
          register={register} 
          messageError={errors.Cedula?.message && 'La Cédula es obligatorio'}
        />

        <Button />

      </Form>

    </Container>
  );
}