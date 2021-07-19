import { db } from "../firebase/firebase-confing";

export const loadNotes = async (uid) => {
  const noteSnapp = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  noteSnapp.forEach((snapHijo) => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  console.log(notes);

  return notes;
};
