import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

class DatabaseInstance {
  private static instance: DatabaseInstance; // Static instance of the class
  private database: SQLiteDatabase; // Holds the SQLiteDatabase instance

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.database = SQLite.openDatabase(
      {
        name: 'students.db',
        location: 'default',
      },
      () => {
        console.log('Database opened successfully');
      },
      error => {
        console.error('Error opening database:', error);
      }
    );
  }

  // Public method to access the singleton instance
  public static getInstance(): DatabaseInstance {
    if (!DatabaseInstance.instance) {
      DatabaseInstance.instance = new DatabaseInstance();
    }
    return DatabaseInstance.instance;
  }

  // Public method to get the database instance
  public getDatabase(): SQLiteDatabase {
    return this.database;
  }
}

export default DatabaseInstance;
