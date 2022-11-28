import React from 'react';
import { useForm } from 'react-hook-form';
import { validateRut } from 'rutlib';
import { regionesChile } from './region-comuna';
import { Region, Comuna } from './Task';


export const App = () => {
  const { register, handleSubmit, formState:{ errors }, watch } = useForm({
    defaultValues: {
      firstName: "",
      firstSurname: "",
      secondSurname: "",
      rut: "",
      postalCode: '',
    }
  });
  const onSubmit = data => console.log(data);
  const regionSelected = watch("regionChile");
 
  //console.log(errors);
  return (
    <div>
      <h1>Ingreso de Paciente</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Nombres: </label>
          <input {...register("firstName", {required: 'Falto escribir sus nombres'})} />
          <p>{errors.firstName?.message}</p>
        </div>
        <div>
          <label htmlFor="">Primer Apellido: </label>
          <input {...register("firstSurname", {required: 'Falto escribir su apellido'})} />
          <p>{errors.firstSurname?.message}</p>
        </div>
        <div>
          <label htmlFor="">Segundo Apellido: </label>
          <input {...register("secondSurname", {required: 'Falto escribir su apellido'})} />
          <p>{errors.secondSurname?.message}</p>
        </div>
        <div>
          <label htmlFor="">Rut: </label>
          <input {...register("rut", {
            required: 'Digitar Rut',
            validate: validateRut
            })} />
          <p> {errors.rut?.message} </p>
          {errors.rut?.type === 'validate' && <p> Por favor digitar Rut correctamente</p>}
        </div>
        <div>
          <label htmlFor="">Region: </label>
          <select {...register("regionChile")}>
            { regionesChile.map( regiones => <Region key = {regiones.region} regiones= {regiones.region}/>)}                        
          </select>
        </div>
        <div>
          <label htmlFor="">Comuna: </label>
          <select {...register("ComunaRegionChile")}>
            <option value="0">Seleccione</option>
            { console.log(regionSelected)}
            {/* { regionesChile.map( comunas => <Comuna key= { comunas.region } comuna= { comunas }/>) } */}
            { console.log(Comuna(regionSelected, regionesChile))}
          </select>
        </div>
        <div>
          <label htmlFor="">Codigo Postal: </label>
          <input {...register("postalCode", {
            required: 'Escribir codigo postal',
            validate: {
              number: value => value > 999999
            }
            })} />
          <p> {errors.postalCode?.message} </p>
          {errors.postalCode?.type === 'number' && <p> Por favor digitar un codigo postal correctamente</p>}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};