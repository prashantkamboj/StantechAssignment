import { store } from '../redux/store';
import { setStudents } from '../Screens/ScreenHome/redux/sliceHome';
import DatabaseInstance from './databaseInstance';
import { Student } from './databaseTypes';

// For creating table initially
export const createInitialyTable = () => {
  const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
  console.log(db);
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            marks INTEGER NOT NULL,
            city TEXT NOT NULL
          );`,
      [],
      (_, result) => {
        console.log('Table created successfully:', result);
      },
      (_, error) => {
        console.error('Error creating table:', error);
      },
    );
  });
};


// For getting students
export const getStudents = () => {
    const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
   db.transaction(tx => {
    tx.executeSql(
     'SELECT * FROM students;',
      [],
      (_, result) => {
        console.log('data get successfully:', result.rows.raw());
        const data = result.rows.raw();
        store.dispatch(setStudents(data));
      },
      (_, error) => {
        console.error('Error getting data:', error);
      },
    );
  });

};

// For inserting students
export const insertStudents = (students: Student) => {
    const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO students (name, age, marks, city) VALUES (?, ?, ?, ?);',
      [students.name, students.age, students.marks, students.city],
      (_, result) => {
        console.log('Insert Data  successfully:', result);
      },
      (_, error) => {
        console.error('Error inserting Data:', error);
      },
    );
  });
};

// For updating students
export const updateStudents = (students: Student) => {
    const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE students SET name = ?, age = ?, marks = ?, city = ? WHERE id = ?;',
      [students.name, students.age, students.marks, students.city, students.id],
      (_, result) => {
        console.log('Updated Student successfully:', result);
      },
      (_, error) => {
        console.error('Error Updating Student:', error);
      },
    );
  });
};

// For deleting student
export const deleteStudents = (id: number) => {
    const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM students WHERE id = ?;',
      [id],
      (_, result) => {
        console.log('Student Deleted successfully:', result);
        getStudents();
      },
      (_, error) => {
        console.error('Error Error Deleting Student', error);
      },
    );
  });
};
