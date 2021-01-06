import React from 'react';

export default function Saludar(props) {
  if (props.userInfo && props.saludarFn) {
    const { userInfo, saludarFn } = props;
    const { name = "Anonimo" } = userInfo;
  }
  console.log(props);
  return(
    <div>
      {props.name && <h2>Hola {props.name}, tiene {props.age} años</h2>}
      {props.userInfo && <p>
        Hi {props.userInfo.name},
        has {props.userInfo.age} years,
        his favorite color is {props.userInfo.color}
      </p>}
      {props.saludarFn && <button onClick={()=>props.saludarFn(props.userInfo.name)}>Salute</button>}
    </div>
  );
}
