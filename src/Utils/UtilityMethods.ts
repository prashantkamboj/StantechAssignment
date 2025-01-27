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
export const getSudents = () => {
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
        console.error('Error creating table:', error);
      },
    );
  });

};

// For inserting students
export const insertSudents = (students: Student) => {
    const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO students (name, age, marks, city) VALUES (?, ?, ?, ?);',
      [students.name, students.age, students.marks, students.city],
      (_, result) => {
        console.log('Table created successfully:', result);
      },
      (_, error) => {
        console.error('Error creating table:', error);
      },
    );
  });
};

// For updating students
export const updateSudents = (students: Student) => {
    const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE students SET name = ?, age = ?, marks = ?, city = ? WHERE id = ?;',
      [students.name, students.age, students.marks, students.city, students.id],
      (_, result) => {
        console.log('Table created successfully:', result);
      },
      (_, error) => {
        console.error('Error creating table:', error);
      },
    );
  });
};

// For deleting student
export const deleteSudents = (id: number) => {
    const database = DatabaseInstance.getInstance();
  const db = database.getDatabase();
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM students WHERE id = ?;',
      [id],
      (_, result) => {
        console.log('Table created successfully:', result);
        getSudents();
      },
      (_, error) => {
        console.error('Error creating table:', error);
      },
    );
  });
};
