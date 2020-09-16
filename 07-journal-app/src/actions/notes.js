import { db } from "firebase/firebase-config";



export const startNewNoteAction = () => {
  return async ( dispatch, getState ) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    // vamos a hacer la referencia al documento
    // en el path /{ refiere a la primer coleccion}/{refiere al documento}/{siguiente collection} ... así sucesivamente
    const document = await db.collection(`${ uid }/journal/notes`).add(newNote)
    console.log(document);
  }
}