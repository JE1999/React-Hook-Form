# React-Hook-Form

## Reutilizando componentes


### `Input edad`

Para manejar los errores en los **inputs** hay un objecto llamado `errors` en cual se va a encargar de
validar el tipo de error que el input presente en ese momento.

### `Ejemplo`

En el objecto errors hay una propiedad llamada age la cual cuenta con un **type**, este te informara sobre
el tipo de error que el input presente en el momento, ya sea si es un campo obligatorio tendra el **type : "required"**,
si es menor de edad entonces este sera **type : "min"**