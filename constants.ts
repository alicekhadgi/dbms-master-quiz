import { Question, QuizConfig, TableData } from './types';

// ... (previous questions remain the same, adding new ones below)

const DBMS_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which of the following best defines data?",
    options: [
      "Processed facts used for decision-making",
      "Raw, unorganized facts without meaning",
      "Facts always stored in a database",
      "Processed facts with a specific purpose"
    ],
    correctAnswer: "Raw, unorganized facts without meaning"
  },
  {
    id: 2,
    text: "Which of these is an example of information rather than data?",
    options: [
      "90, 85, 76, 88",
      "A list of student names",
      "The average age of a society is 44.7",
      "Random symbols on a page"
    ],
    correctAnswer: "The average age of a society is 44.7"
  },
  {
    id: 3,
    text: "What is the main difference between data and information?",
    options: [
      "Data is always meaningful, while information is not",
      "Data is raw facts, information is processed data with meaning",
      "Information is random and unorganized, while data is structured",
      "Data is stored digitally, information is stored physically"
    ],
    correctAnswer: "Data is raw facts, information is processed data with meaning"
  },
  {
    id: 4,
    text: "Which of the following is a weakness of file processing systems?",
    options: [
      "Easy data sharing",
      "High scalability",
      "Redundant and isolated data",
      "Strong enforcement of standards"
    ],
    correctAnswer: "Redundant and isolated data"
  },
  {
    id: 5,
    text: "In a manual file system, files were traditionally organized based on?",
    options: [
      "The programming language used",
      "The database structure",
      "Data's expected use",
      "The number of users accessing the data"
    ],
    correctAnswer: "Data's expected use"
  },
  {
    id: 6,
    text: "Which operation is not a basic file operation?",
    options: [
      "Opening a file",
      "Writing data into a file",
      "Designing a database schema",
      "Reading data from a file"
    ],
    correctAnswer: "Designing a database schema"
  },
  {
    id: 7,
    text: "Hierarchical and network models were introduced to?",
    options: [
      "Increase redundancy",
      "Reduce relationships between data",
      "Reduce redundancy by introducing relationships",
      "Replace relational databases completely"
    ],
    correctAnswer: "Reduce redundancy by introducing relationships"
  },
  {
    id: 8,
    text: "A database is:",
    options: [
      "A collection of separate, unrelated files",
      "A collection of interrelated data stored together with minimal redundancy",
      "A manual system of storing data in cabinets",
      "A group of application programs for file storage"
    ],
    correctAnswer: "A collection of interrelated data stored together with minimal redundancy"
  },
  {
    id: 9,
    text: "Which of the following is not an advantage of databases over file systems?",
    options: [
      "Centralized and related data",
      "High redundancy",
      "Easier data sharing",
      "Better scalability"
    ],
    correctAnswer: "High redundancy"
  },
  {
    id: 10,
    text: "The purpose of a Database Management System (DBMS) is to",
    options: [
      "Replace hardware in a system",
      "Allow users to directly manipulate hardware",
      "Act as an interface between users and the database",
      "Only perform backup and recovery tasks"
    ],
    correctAnswer: "Act as an interface between users and the database"
  },
  {
    id: 11,
    text: "Which feature allows multiple users to access data concurrently without conflict?",
    options: [
      "Data Security",
      "Data Dictionary Management",
      "Multi-user Access Control",
      "Metadata"
    ],
    correctAnswer: "Multi-user Access Control"
  },
  {
    id: 12,
    text: "Which of the following is a function of a DBMS?",
    options: [
      "Data Dictionary Management",
      "Hardware installation",
      "Writing raw data manually",
      "File folder organization"
    ],
    correctAnswer: "Data Dictionary Management"
  },
  {
    id: 13,
    text: "Metadata in a database refers to:",
    options: [
      "Actual data values stored in the database",
      "Description of the structure of the database",
      "Backup files stored for recovery",
      "Hardware used to store data"
    ],
    correctAnswer: "Description of the structure of the database"
  },
  {
    id: 14,
    text: "A collection of logically connected fields that describe something is called a:",
    options: [
      "Field",
      "File",
      "Record",
      "Database"
    ],
    correctAnswer: "Record"
  },
  {
    id: 15,
    text: "Which of the following best describes Oracle Database Express Edition (XE)?",
    options: [
      "A premium paid version for enterprises",
      "A free, lightweight version for small-scale development and education",
      "A hardware component used to store database files",
      "A networking tool for database sharing"
    ],
    correctAnswer: "A free, lightweight version for small-scale development and education"
  },
  {
    id: 16,
    text: "Which of the following best describes the purpose of database architecture?",
    options: [
      "To define how hardware components are manufactured",
      "To describe how data is stored, managed, and accessed in a DBMS",
      "To help users write application programs",
      "To convert data into machine code"
    ],
    correctAnswer: "To describe how data is stored, managed, and accessed in a DBMS"
  },
  {
    id: 17,
    text: "In the 1-Tier architecture, the database and application are:",
    options: [
      "Located on different remote servers",
      "Communicating through a middle application server",
      "Usually on the same machine",
      "Always hosted on cloud platforms"
    ],
    correctAnswer: "Usually on the same machine"
  },
  {
    id: 18,
    text: "The main goal of the 3-Tier architecture is to:",
    options: [
      "Increase data redundancy",
      "Reduce security between layers",
      "Improve scalability, security, and maintainability",
      "Remove the need for a database server"
    ],
    correctAnswer: "Improve scalability, security, and maintainability"
  },
  {
    id: 19,
    text: "In the ANSI-SPARC 3-level architecture, the External Level is concerned with:",
    options: [
      "Physical storage of data blocks",
      "Hardware used for disk management",
      "How each user views the data",
      "How DBMS handles indexing internally"
    ],
    correctAnswer: "How each user views the data"
  },
  {
    id: 20,
    text: "Which part of DBMS architecture defines the logical structure of the entire database?",
    options: [
      "Internal Level",
      "External Level",
      "Conceptual Level",
      "Hardware Level"
    ],
    correctAnswer: "Conceptual Level"
  },
  {
    id: 21,
    text: "Physical Data Independence allows changes in:",
    options: [
      "Table relationships",
      "Attributes in user views",
      "Storage techniques without affecting applications",
      "Database schema without affecting physical storage"
    ],
    correctAnswer: "Storage techniques without affecting applications"
  },
  {
    id: 22,
    text: "Which DBMS feature ensures that users can view and use data without knowing how it is stored?",
    options: [
      "Data Redundancy",
      "Data Abstraction",
      "Data Duplication",
      "Data Visualization"
    ],
    correctAnswer: "Data Abstraction"
  },
  {
    id: 23,
    text: "In Oracle, which user account has full administrative privileges, including all system operations?",
    options: [
      "USER",
      "SYSTEM",
      "SYS",
      "ALL_USERS"
    ],
    correctAnswer: "SYS"
  },
  {
    id: 24,
    text: "Logical Data Independence allows",
    options: [
      "Changing the physical storage without affecting logical schema",
      "Modifying logical structure without affecting user applications",
      "Changing hardware without changing SQL queries",
      "Rewriting DBMS code to add new indexes"
    ],
    correctAnswer: "Modifying logical structure without affecting user applications"
  },
  {
    id: 25,
    text: "What is the main purpose of Data Independence in a DBMS?",
    options: [
      "To allow users to change hardware easily",
      "To separate data storage from data usage so applications aren’t affected by storage changes",
      "To duplicate data across multiple storage locations",
      "To store all user views in physical memory"
    ],
    correctAnswer: "To separate data storage from data usage so applications aren’t affected by storage changes"
  }
];

const RELATIONAL_ALGEBRA_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which operator is used to filter rows in relational algebra?",
    options: [
      "π",
      "σ",
      "∪",
      "×"
    ],
    correctAnswer: "σ"
  },
  {
    id: 2,
    text: "π Name, Dept (Employee) performs:",
    options: [
      "Filtering rows",
      "Selecting columns",
      "Joining relations",
      "Removing duplicates only"
    ],
    correctAnswer: "Selecting columns"
  },
  {
    id: 3,
    text: "A × B (Cartesian product) returns:",
    options: [
      "Only common rows",
      "All possible combinations of tuples",
      "Joins based on keys",
      "Rows with matching values"
    ],
    correctAnswer: "All possible combinations of tuples"
  },
  {
    id: 4,
    text: "For union (A ∪ B), the relations must be:",
    options: [
      "Key compatible",
      "Order compatible",
      "Union compatible",
      "Value compatible"
    ],
    correctAnswer: "Union compatible"
  },
  {
    id: 5,
    text: "Intersection (A ∩ B) returns:",
    options: [
      "Rows that appear in both A and B",
      "Rows only in A",
      "Rows only in B",
      "All rows from both"
    ],
    correctAnswer: "Rows that appear in both A and B"
  },
  {
    id: 6,
    text: "Which operation removes rows present in A but not in B?",
    options: [
      "A ∩ B",
      "A ∪ B",
      "A − B",
      "A × B"
    ],
    correctAnswer: "A − B"
  },
  {
    id: 7,
    text: "Suppose A has 4 rows and B has 3 rows. How many rows will A × B have?",
    options: [
      "4",
      "3",
      "12",
      "7"
    ],
    correctAnswer: "12"
  },
  {
    id: 8,
    text: "In Relational Algebra, Natural join removes:",
    options: [
      "Duplicate columns",
      "Duplicate rows",
      "All unmatched tuples",
      "All NULL values"
    ],
    correctAnswer: "Duplicate columns"
  },
  {
    id: 9,
    text: "In Left Outer Join A ⟕ B, unmatched rows from A will:",
    options: [
      "Disappear",
      "Be joined with B using NULLs",
      "Create infinite rows",
      "Move to B"
    ],
    correctAnswer: "Be joined with B using NULLs"
  },
  {
    id: 10,
    text: "Which operator is most useful for \"students who took ALL courses\"?",
    options: [
      "Join",
      "Intersection",
      "Division",
      "Projection"
    ],
    correctAnswer: "Division"
  },
  {
    id: 11,
    text: "Set operations (∪, ∩, −) require:",
    options: [
      "Equal number of attributes",
      "Same domains",
      "Same datatypes",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 12,
    text: "Which of the following is a derived operator?",
    options: [
      "Projection",
      "Selection",
      "Join",
      "Cartesian Product"
    ],
    correctAnswer: "Join"
  },
  {
    id: 13,
    text: "Which join returns unmatched rows from BOTH sides?",
    options: [
      "Left outer join",
      "Right outer join",
      "Full outer join",
      "Natural join"
    ],
    correctAnswer: "Full outer join"
  },
  {
    id: 14,
    text: "Given table Student(Student_ID, Course_ID) And table Course(Course_ID, Course_Name). Which Relational Algebra expression gives names of courses taken by Student 1?",
    options: [
      "π Course_Name (σ Student_ID=1 (Student ⨝ Course))",
      "σ Student_ID=1 (Course ⨝ Student)",
      "π Student_ID (σ Course_ID='C1' (Course))",
      "Student × Course"
    ],
    correctAnswer: "π Course_Name (σ Student_ID=1 (Student ⨝ Course))"
  },
  {
    id: 15,
    text: "Given Employee(Eid, Dept), Department(Dept, Location). Which expression returns employees working in 'IT' department?",
    options: [
      "π Eid (σ Location='IT' (Department))",
      "σ Dept='IT' (Employee)",
      "Employee − Department",
      "Employee × Department"
    ],
    correctAnswer: "σ Dept='IT' (Employee)"
  },
  {
    id: 16,
    text: "Given tables: Student(Sid, Name), Enroll(Sid, Cid), Course(Cid, Cname). Find all student names enrolled in DBMS.",
    options: [
      "π Name (Student)",
      "π Name (σ Cname='DBMS' (Student × Course))",
      "π Name ((Student ⨝ Enroll ⨝ Course) σ Cname='DBMS')",
      "Student ∩ Course"
    ],
    correctAnswer: "π Name ((Student ⨝ Enroll ⨝ Course) σ Cname='DBMS')"
  },
  {
    id: 17,
    text: "Given tables: Employee(Eid, DeptID), Department(DeptID, DeptName). Which query lists all employees with department names?",
    options: [
      "Employee × Department",
      "Employee ⨝ Employee.DeptID = Department.DeptID Department",
      "σ Employee.DeptID = Department.DeptID (Employee)",
      "π DeptName(Employee)"
    ],
    correctAnswer: "Employee ⨝ Employee.DeptID = Department.DeptID Department"
  },
  {
    id: 18,
    text: "Given table: Project(PID, DeptID), Department(DeptID, Manager). Find managers of departments running projects.",
    options: [
      "π Manager (Department ⨝ Project)",
      "π DeptID (Project)",
      "Project − Department",
      "Department × Project"
    ],
    correctAnswer: "π Manager (Department ⨝ Project)"
  },
  {
    id: 19,
    text: "Given Staff(SID, Salary) and Branch(SID, BranchName): Find branch names of staff earning more than 50,000.",
    options: [
      "σ Salary > 50000 (Branch)",
      "π BranchName (Staff ⨝ Branch)",
      "π BranchName ((σ Salary > 50000 (Staff)) ⨝ Branch)",
      "Staff × Branch"
    ],
    correctAnswer: "π BranchName ((σ Salary > 50000 (Staff)) ⨝ Branch)"
  },
  {
    id: 20,
    text: "Which of the following is TRUE about Relational Algebra?",
    options: [
      "It is a procedural query language",
      "It always produces a single numeric output",
      "It is used only for NoSQL databases",
      "It cannot be used to describe SQL queries"
    ],
    correctAnswer: "It is a procedural query language"
  },
  {
    id: 21,
    text: "Which of the following best describes the Projection (π) operator?",
    options: [
      "It reorders attributes",
      "It eliminates unwanted columns",
      "It adds new attributes",
      "It combines two relations"
    ],
    correctAnswer: "It eliminates unwanted columns"
  },
  {
    id: 22,
    text: "In relational algebra, the result of an operation is always:",
    options: [
      "A single tuple",
      "A view",
      "Another relation",
      "A permanent table"
    ],
    correctAnswer: "Another relation"
  },
  {
    id: 23,
    text: "Which of the following statements is TRUE about JOINs in relational algebra?",
    options: [
      "JOIN is a fundamental operator",
      "JOIN can be expressed using selection + Cartesian product",
      "JOIN requires both relations to be union-compatible",
      "JOIN removes unmatched rows by default"
    ],
    correctAnswer: "JOIN can be expressed using selection + Cartesian product"
  },
  {
    id: 24,
    text: "In Relational Algebra, which statement about SELECT (σ) is correct?",
    options: [
      "It can only compare numeric attributes",
      "It filters tuples based on a Boolean condition",
      "It removes duplicate columns",
      "It always requires two relations"
    ],
    correctAnswer: "It filters tuples based on a Boolean condition"
  },
  {
    id: 25,
    text: "Which statement about full outer joins is TRUE?",
    options: [
      "Left outer join returns only unmatched rows from the right relation",
      "Full outer join returns unmatched rows from both relations",
      "Right outer join excludes matched rows",
      "Outer joins remove duplicates automatically"
    ],
    correctAnswer: "Full outer join returns unmatched rows from both relations"
  }
];

const SQL_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "SQL is mainly used for:",
    options: [
      "Designing operating systems",
      "Storing, manipulating, and retrieving data",
      "Writing web pages",
      "Compressing files"
    ],
    correctAnswer: "Storing, manipulating, and retrieving data"
  },
  {
    id: 2,
    text: "Which SQL command retrieves data from a table?",
    options: [
      "INSERT",
      "DELETE",
      "SELECT",
      "DROP"
    ],
    correctAnswer: "SELECT"
  },
  {
    id: 3,
    text: "In SQL, keywords are:",
    options: [
      "Case-sensitive",
      "Not case-sensitive",
      "Only uppercase",
      "Only lowercase"
    ],
    correctAnswer: "Not case-sensitive"
  },
  {
    id: 4,
    text: "What does DDL stand for?",
    options: [
      "Data Derived List",
      "Data Defination Languages",
      "Data Definition Language",
      "Data Display Language"
    ],
    correctAnswer: "Data Definition Language"
  },
  {
    id: 5,
    text: "Which SQL command is used to add a new column?",
    options: [
      "INSERT",
      "UPDATE",
      "ALTER TABLE",
      "CREATE"
    ],
    correctAnswer: "ALTER TABLE"
  },
  {
    id: 6,
    text: "Which SQL statement will add a new column Email_ID to the Student table?",
    options: [
      "ADD COLUMN Students Email_ID VARCHAR2(50);",
      "ALTER TABLE Students INSERT Email_ID VARCHAR2(50);",
      "ALTER TABLE Students ADD (Email_ID VARCHAR2(50));",
      "MODIFY TABLE Students ADD Email_ID;"
    ],
    correctAnswer: "ALTER TABLE Students ADD (Email_ID VARCHAR2(50));"
  },
  {
    id: 7,
    text: "Which of the following is a DML command?",
    options: [
      "CREATE",
      "ALTER",
      "DELETE",
      "TRUNCATE"
    ],
    correctAnswer: "DELETE"
  },
  {
    id: 8,
    text: "A NULL value means:",
    options: [
      "Zero and has a meaning",
      "Empty string",
      "Unknown, inapplicable or Missing value",
      "Space character"
    ],
    correctAnswer: "Unknown, inapplicable or Missing value"
  },
  {
    id: 9,
    text: "Which operator is used for concatenation in SQL?",
    options: [
      "+",
      "&",
      "||",
      "<>"
    ],
    correctAnswer: "||"
  },
  {
    id: 10,
    text: "Which query changes the capital of Brazil to 'Rio de Janeiro'?",
    options: [
      "UPDATE Country SET Capital = \"Rio de Janeiro\" WHERE Name = 'Brazil';",
      "CHANGE Countries Capital = 'Rio de Janeiro' TO 'Brazil';",
      "UPDATE Countries SET Capital_City = 'Rio de Janeiro' WHERE Country_name = 'Brazil';",
      "MODIFY Countries Capital_City = 'Rio de Janeiro' Where Country_name = 'Brazli';"
    ],
    correctAnswer: "UPDATE Countries SET Capital_City = 'Rio de Janeiro' WHERE Country_name = 'Brazil';"
  },
  {
    id: 11,
    text: "Which clause filters rows in a SELECT statement?",
    options: [
      "FROM",
      "WHERE",
      "SELECT",
      "ORDER"
    ],
    correctAnswer: "WHERE"
  },
  {
    id: 12,
    text: "Which constraint ensures that a column has unique values?",
    options: [
      "CHECK",
      "UNIQUE",
      "NOT NULL",
      "FOREIGN KEY"
    ],
    correctAnswer: "UNIQUE"
  },
  {
    id: 13,
    text: "Which statement correctly adds a NOT NULL constraint to a column Major in Students table?",
    options: [
      "ALTER TABLE Student MODIFY Majors NOT NULL;",
      "MODIFY TABLE Students Majors NOT NULL;",
      "ALTER TABLE Students MODIFY Major NOT NULL;",
      "ALTER TABLE Students ADD Majors NOT NULL;"
    ],
    correctAnswer: "ALTER TABLE Students MODIFY Major NOT NULL;"
  },
  {
    id: 14,
    text: "Which query retrieves students from Student Table enrolled in class 'A'?",
    options: [
      "SELECT * FROM Student WHERE Class = 'A';",
      "SEARCH Student Class = 'A';",
      "GET Student IF Class='A';",
      "DISPLAY Student WHERE Class = 'A';"
    ],
    correctAnswer: "SELECT * FROM Student WHERE Class = 'A';"
  },
  {
    id: 15,
    text: "What happens if the WHERE clause is omitted in an UPDATE statement?",
    options: [
      "Only one row is updated",
      "Error occurs",
      "All rows are updated",
      "No row is updated"
    ],
    correctAnswer: "All rows are updated"
  },
  {
    id: 16,
    text: "Which DDL command deletes a table structure permanently?",
    options: [
      "ERASE",
      "DROP",
      "REMOVE",
      "TRUNCATE"
    ],
    correctAnswer: "DROP"
  },
  {
    id: 17,
    text: "TRUNCATE does which of the following?",
    options: [
      "Deletes rows and structure",
      "Deletes all rows but keeps structure",
      "Deletes selected rows only",
      "Removes constraints"
    ],
    correctAnswer: "Deletes all rows but keeps structure"
  },
  {
    id: 18,
    text: "Which of the following is TRUE about SQL literals?",
    options: [
      "Character literals must use double quotes",
      "Character literals must use single quotes",
      "Numbers must be placed in quotes",
      "NULL must use double quotes"
    ],
    correctAnswer: "Character literals must use single quotes"
  },
  {
    id: 19,
    text: "Which query retrieves all distinct continents from country table?",
    options: [
      "SELECT ALL Continent FROM Country;",
      "SELECT DISTINCT Continent FROM Country;",
      "SELECT UNIQUE Continent FROM Country;",
      "SELECT ONLY Continent FROM Country;"
    ],
    correctAnswer: "SELECT DISTINCT Continent FROM Country;"
  },
  {
    id: 20,
    text: "Which command renames a table?",
    options: [
      "RENAME TABLE old TO new;",
      "ALTER TABLE old RENAME new;",
      "ALTER TABLE old RENAME TO new;",
      "MODIFY TABLE old RENAME new;"
    ],
    correctAnswer: "ALTER TABLE old RENAME TO new;"
  },
  {
    id: 21,
    text: "To modify the data type of a column, which statement is correct?",
    options: [
      "CHANGE TABLE XYZ MODIFY column datatype;",
      "ALTER TABLE XYZ MODIFY column datatype;",
      "ALTER TABLE XYZ CHANGE datatype;",
      "MODIFY TABLE XYZ ALTER datatype;"
    ],
    correctAnswer: "ALTER TABLE XYZ MODIFY column datatype;"
  },
  {
    id: 22,
    text: "Which statement inserts a row into the COURSE table?",
    options: [
      "INSERT COURSE VALUES (...);",
      "INSERT INTO COURSE VALUES (...);",
      "ADD INTO COURSE (...);",
      "NEW COURSE (...);"
    ],
    correctAnswer: "INSERT INTO COURSE VALUES (...);"
  },
  {
    id: 23,
    text: "A foreign key refers to:",
    options: [
      "A unique column in the same table",
      "A column in the parent table’s primary key",
      "Any non-nullable column",
      "A column with numeric values"
    ],
    correctAnswer: "A column in the parent table’s primary key"
  },
  {
    id: 24,
    text: "Which ALTER TABLE statement correctly adds a foreign key referencing Course_Details table?",
    options: [
      "ALTER TABLE Student ADD FK(course_no) REFERENCES Course_Details;",
      "ALTER TABLE Student ADD FOREIGN KEY course_no;",
      "ALTER TABLE Student ADD (course_no VARCHAR2(10) CONSTRAINT fk_course REFERENCES Course_Details(course_number));",
      "MODIFY TABLE Student ADD course_no FOREIGN KEY;"
    ],
    correctAnswer: "ALTER TABLE Student ADD (course_no VARCHAR2(10) CONSTRAINT fk_course REFERENCES Course_Details(course_number));"
  },
  {
    id: 25,
    text: "Which of the following SQL statements will fail? Given Table: Student (Class contains 'XI', 'XII')",
    options: [
      "ALTER TABLE Student MODIFY Class NUMBER;",
      "ALTER TABLE Student MODIFY Class VARCHAR2(10);",
      "ALTER TABLE Student MODIFY Majors NOT NULL;",
      "ALTER TABLE Student ADD Email VARCHAR2(50);"
    ],
    correctAnswer: "ALTER TABLE Student MODIFY Class NUMBER;"
  }
];

const DATABASE_DESIGN_QUESTIONS: Question[] = [
  // ... existing questions from previous step ...
  {
    id: 1,
    text: "Which level of abstraction describes how data is physically stored?",
    options: ["Logical level", "Physical level", "View level", "Conceptual level"],
    correctAnswer: "Physical level"
  },
  {
    id: 2,
    text: "In an ER diagram, a relationship is represented by a:",
    options: ["Diamond", "Oval", "Rectangle", "Triangle"],
    correctAnswer: "Diamond"
  },
  {
    id: 3,
    text: "Which SQL operator is used to sort rows?",
    options: ["GROUP BY", "HAVING", "ORDER BY", "SORT"],
    correctAnswer: "ORDER BY"
  },
  {
    id: 4,
    text: "The wildcard % in SQL LIKE condition represents:",
    options: ["One character", "No characters", "Zero or many characters", "Only alphabetic characters"],
    correctAnswer: "Zero or many characters"
  },
  {
    id: 5,
    text: "IS NULL is used in SQL to:",
    options: ["Compare numeric values", "Test for missing values", "Sort values", "Replace NULLs"],
    correctAnswer: "Test for missing values"
  },
  {
    id: 6,
    text: "In the database design process, converting ERD into relational tables happens in:",
    options: ["Conceptual design", "Physical design", "Logical design", "User-level design"],
    correctAnswer: "Logical design"
  },
  {
    id: 7,
    text: "A multi-valued attribute is represented in ERD by:",
    options: ["A double oval", "A dotted oval", "A rectangle", "A diamond"],
    correctAnswer: "A double oval"
  },
  {
    id: 8,
    text: "Which of the following relationships supports many-to-many?",
    options: ["Hierarchical model", "Network model", "Relational model only", "None"],
    correctAnswer: "Network model"
  },
  {
    id: 9,
    text: "Which SQL condition checks whether a value is within a specific list?",
    options: ["LIKE", "BETWEEN", "IN", "EXISTS"],
    correctAnswer: "IN"
  },
  {
    id: 10,
    text: "Which SQL query displays all employees with salary between 30,000 and 50,000?",
    options: [
      "SELECT * FROM employee WHERE salary IN (30000,50000);",
      "SELECT * FROM employee WHERE salary LIKE '30000-50000';",
      "SELECT * FROM employee WHERE salary BETWEEN 30000 AND 50000;",
      "SELECT * FROM employee WHERE salary = 30000 AND 50000;"
    ],
    correctAnswer: "SELECT * FROM employee WHERE salary BETWEEN 30000 AND 50000;"
  },
  {
    id: 11,
    text: "Which abstraction level hides unnecessary details and shows relevant data to each user?",
    options: ["Physical", "Logical", "View", "Conceptual"],
    correctAnswer: "View"
  },
  {
    id: 12,
    text: "In ERD, an Entity is represented by a:",
    options: ["Diamond", "Circle", "Triangle", "Rectangle"],
    correctAnswer: "Rectangle"
  },
  {
    id: 13,
    text: "What does the following SQL statement do? SELECT * FROM Students WHERE City = '&EnterCity';",
    options: [
      "Searches only Kathmandu students",
      "Uses substitution variable to accept runtime input",
      "Updates the city value",
      "Creates a new table"
    ],
    correctAnswer: "Uses substitution variable to accept runtime input"
  },
  {
    id: 14,
    text: "Which SQL operator requires both conditions to be true?",
    options: ["OR", "NOT", "AND", "LIKE"],
    correctAnswer: "AND"
  },
  {
    id: 15,
    text: "Which model organizes data in a tree-like parent–child structure?",
    options: ["Network", "Hierarchical", "Object-oriented", "Graph"],
    correctAnswer: "Hierarchical"
  },
  {
    id: 16,
    text: "A derived attribute is:",
    options: [
      "Always NULL",
      "Calculated from other attributes",
      "Stored physically",
      "Mandatory"
    ],
    correctAnswer: "Calculated from other attributes"
  },
  {
    id: 17,
    text: "Which SQL statement sorts data by salary descending and name ascending?",
    options: [
      "ORDER BY salary, name DESC",
      "ORDER BY salary DESC, name ASC",
      "ORDER BY salary ASC, name DESC",
      "ORDER BY name, salary DESC"
    ],
    correctAnswer: "ORDER BY salary DESC, name ASC"
  },
  {
    id: 18,
    text: "Which condition returns rows where Name starts with ‘S’?",
    options: ["Name LIKE '%S'", "Name LIKE 'S%'", "Name LIKE 'S'", "Name LIKE '%S%'"],
    correctAnswer: "Name LIKE 'S%'"
  },
  {
    id: 19,
    text: "The NOT operator in SQL:",
    options: ["Reverses a condition", "Sorts data", "Creates a new table", "Returns NULL values"],
    correctAnswer: "Reverses a condition"
  },
  {
    id: 20,
    text: "Which part of design defines entities, attributes, relationships?",
    options: ["Logical design", "Physical design", "Conceptual design", "Implementation design"],
    correctAnswer: "Conceptual design"
  },
  {
    id: 21,
    text: "Given table EMP(emp_id, name, dept_id), which query shows employees of dept 10?",
    options: [
      "SELECT dept_id FROM emp;",
      "SELECT * FROM emp WHERE dept_id = 10;",
      "SELECT name FROM emp;",
      "SELECT emp_id FROM emp WHERE name LIKE '10';"
    ],
    correctAnswer: "SELECT * FROM emp WHERE dept_id = 10;"
  },
  {
    id: 22,
    text: "Which of the following is TRUE about many-to-many relationships?",
    options: [
      "Directly implementable in relational tables",
      "Must be broken into two 1:M relationships using associative entity",
      "Can be created using foreign keys only",
      "Stored as single table"
    ],
    correctAnswer: "Must be broken into two 1:M relationships using associative entity"
  },
  {
    id: 23,
    text: "A weak entity:",
    options: [
      "Has its own primary key",
      "Depends on a strong entity",
      "Always has multi-value attributes",
      "Must be many-to-many"
    ],
    correctAnswer: "Depends on a strong entity"
  },
  {
    id: 24,
    text: "Given table Orders(order_id, customer, amount). Which statement retrieves orders with amount NOT between 1000 and 5000, sorted by amount descending?",
    options: [
      "SELECT * FROM Orders WHERE amount OUT(1000,5000) ORDER BY amount DESC;",
      "SELECT * FROM Orders WHERE amount NOT BETWEEN 1000 AND 5000 ORDER BY amount DESC;",
      "SELECT * FROM Orders WHERE NOT(amount BETWEEN 1000 AND 5000) SORT amount DESC;",
      "SELECT * FROM Orders WHERE amount BETWEEN NOT 1000 AND 5000 ORDER BY amount;"
    ],
    correctAnswer: "SELECT * FROM Orders WHERE amount NOT BETWEEN 1000 AND 5000 ORDER BY amount DESC;"
  },
  {
    id: 25,
    text: "Which substitution variable keeps the value without re-prompting in SQL*Plus?",
    options: ["&", "$$", "&&", "@"],
    correctAnswer: "&&"
  }
];

const ADVANCED_MODELING_QUESTIONS: Question[] = [
  // ... existing questions ...
  {
    id: 1,
    text: "In ER modelling, a relationship represents:",
    options: ["A table", "A set of associations among entities", "A column in a table", "A key attribute"],
    correctAnswer: "A set of associations among entities"
  },
  {
    id: 2,
    text: "A One-to-Many relationship means:",
    options: ["One instance of A is related to one instance of B", "Many instances of A are related to one instance of B", "One instance of A may be related to many instances of B", "No relationship exists"],
    correctAnswer: "One instance of A may be related to many instances of B"
  },
  {
    id: 3,
    text: "Which SQL function converts text to uppercase?",
    options: ["LOWER()", "UPPER()", "INITCAP()", "CAPITALIZE()"],
    correctAnswer: "UPPER()"
  },
  {
    id: 4,
    text: "Connectivity of a relationship describes:",
    options: ["Number of tables", "Mapping of entity instances", "Data types", "Primary key definition"],
    correctAnswer: "Mapping of entity instances"
  },
  {
    id: 5,
    text: "Which is NOT a valid relationship type?",
    options: ["One-to-One", "One-to-Many", "Many-to-Many", "Many-to-None"],
    correctAnswer: "Many-to-None"
  },
  {
    id: 6,
    text: "In a 1:1 relationship, each instance of Entity A is associated with:",
    options: ["Many instances of Entity B", "Only one instance of Entity B", "No instance", "All instances"],
    correctAnswer: "Only one instance of Entity B"
  },
  {
    id: 7,
    text: "The unary relationship refers to:",
    options: ["Relationship among two entities", "Entity related to itself", "Relationship among three entities", "No relationship"],
    correctAnswer: "Entity related to itself"
  },
  {
    id: 8,
    text: "A fan trap occurs when:",
    options: ["Two or more 1:M relationships fan out from the same entity", "Participation is mandatory", "A relationship is missing", "An attribute is duplicated"],
    correctAnswer: "Two or more 1:M relationships fan out from the same entity"
  },
  {
    id: 9,
    text: "A chasm trap arises due to:",
    options: ["Composite keys", "Optional participation", "Circular involvement", "Overlapping hierarchies"],
    correctAnswer: "Optional participation"
  },
  {
    id: 10,
    text: "Which SQL query returns the number of distinct department IDs?",
    options: ["SELECT COUNT(department_id) FROM employees;", "SELECT DISTINCT COUNT(department_id) FROM employees;", "SELECT COUNT(DISTINCT department_id) FROM employees;", "SELECT UNIQUE(department_id) FROM employees;"],
    correctAnswer: "SELECT COUNT(DISTINCT department_id) FROM employees;"
  },
  {
    id: 11,
    text: "Which function truncates digits after a decimal?",
    options: ["CUT()", "TRUNC()", "REMOVE()", "ROUND()"],
    correctAnswer: "TRUNC()"
  },
  {
    id: 12,
    text: "Which is valid for GROUP BY?",
    options: ["Columns in SELECT must all be aggregated", "You cannot group by multiple columns", "Every non-aggregate column must appear in GROUP BY", "HAVING is used before GROUP BY"],
    correctAnswer: "Every non-aggregate column must appear in GROUP BY"
  },
  {
    id: 13,
    text: "Which function returns the last date of the month?",
    options: ["END_DATE()", "LAST_DATE()", "LASTDAY()", "LAST_DAY()"],
    correctAnswer: "LAST_DAY()"
  },
  {
    id: 14,
    text: "Which SQL statement correctly gets months between two dates?",
    options: ["MONTH_DIFF(date1, date2)", "MONTH_BETWEEN(date1, date2)", "MONTHS_BETWEEN(date1, date2)", "DIFF_MONTH(date1, date2)"],
    correctAnswer: "MONTHS_BETWEEN(date1, date2)"
  },
  {
    id: 15,
    text: "Which clause is used to filter groups?",
    options: ["WHERE", "HAVING", "GROUP", "FILTER"],
    correctAnswer: "HAVING"
  },
  {
    id: 16,
    text: "Identify the correct reason many-to-many relationships must be decomposed:",
    options: ["They violate 1NF", "They cannot be directly implemented in relational tables", "They cause fan traps", "They eliminate keys"],
    correctAnswer: "They cannot be directly implemented in relational tables"
  },
  {
    id: 17,
    text: "Given table Orders(Order_ID, OrderDate, Amount). Which SQL statement will add a new column Discount to the Orders table?",
    options: ["ALTER Orders ADD COLUMN Discount;", "ALTER TABLE Orders ADD Discount NUMBER;", "UPDATE Orders ADD Discount NUMBER;", "MODIFY TABLE Orders ADD Discount NUMBER;"],
    correctAnswer: "ALTER TABLE Orders ADD Discount NUMBER;"
  },
  {
    id: 18,
    text: "Which statement correctly displays employee_id, hire_date, and next Friday after hire_date?",
    options: ["SELECT employee_id, hire_date, NEXT(hire_date,'FRIDAY') FROM employees;", "SELECT employee_id, hire_date, NEXT_DAY('FRIDAY', hire_date) FROM employees;", "SELECT employee_id, hire_date, NEXT_DAY(hire_date,'FRIDAY') FROM employees;", "SELECT NEXT_DAY(employee_id, hire_date,'FRI') FROM employees;"],
    correctAnswer: "SELECT employee_id, hire_date, NEXT_DAY(hire_date,'FRIDAY') FROM employees;"
  },
  {
    id: 19,
    text: "Which query displays each department_id and the number of employees, but only for departments having more than 5 employees?",
    options: ["SELECT department_id, COUNT(*) FROM employees WHERE COUNT(*) > 5 GROUP BY department_id;", "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 5;", "SELECT department_id, COUNT(*) HAVING COUNT(*) > 5 FROM employees GROUP BY department_id;", "SELECT department_id, COUNT(*) FROM employees HAVING COUNT(*) > 5;"],
    correctAnswer: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 5;"
  },
  {
    id: 20,
    text: "Which SQL query lists total salary per job, ordered from highest to lowest?",
    options: ["SELECT job_id, SUM(salary) FROM employees ORDER BY salary DESC GROUP BY job_id;", "SELECT job_id, SUM(salary) FROM employees GROUP BY job_id ORDER BY SUM(salary) DESC;", "SELECT job_id, SUM(salary) ORDER BY SUM(salary) DESC GROUP BY job_id;", "SELECT job_id, salary FROM employees GROUP BY job_id ORDER BY salary DESC;"],
    correctAnswer: "SELECT job_id, SUM(salary) FROM employees GROUP BY job_id ORDER BY SUM(salary) DESC;"
  },
  {
    id: 21,
    text: "Which query correctly filters groups of departments whose average salary is below 4000?",
    options: ["SELECT department_id, AVG(salary) FROM employees WHERE AVG(salary) < 4000 GROUP BY department_id;", "SELECT department_id, AVG(salary) FROM employees GROUP BY department_id HAVING AVG(salary) < 4000;", "SELECT department_id, AVG(salary) HAVING AVG(salary) < 4000 FROM employees GROUP BY department_id;", "SELECT AVG(salary) FROM employees HAVING AVG(salary) < 4000;"],
    correctAnswer: "SELECT department_id, AVG(salary) FROM employees GROUP BY department_id HAVING AVG(salary) < 4000;"
  },
  {
    id: 22,
    text: "Which SQL statement displays each job_id and the minimum salary, but only for jobs where the minimum salary is greater than 3000, sorted by job_id ascending?",
    options: ["SELECT job_id, MIN(salary) FROM employees HAVING MIN(salary) > 3000 GROUP BY job_id ORDER BY job_id;", "SELECT job_id, MIN(salary) HAVING MIN(salary) > 3000 ORDER BY job_id GROUP BY job_id;", "SELECT job_id, MIN(salary) FROM employees ORDER BY job_id HAVING MIN(salary) > 3000 GROUP BY job_id;", "SELECT job_id, MIN(salary) FROM employees GROUP BY job_id AND MIN(salary) > 3000 ORDER BY job_id;"],
    correctAnswer: "SELECT job_id, MIN(salary) FROM employees HAVING MIN(salary) > 3000 GROUP BY job_id ORDER BY job_id;"
  },
  {
    id: 23,
    text: "What does the following query extract? SELECT SUBSTR('I am a Student', INSTR('I am from Nepal.', 'Nepal'), 5) FROM dual;",
    options: ["'Nepal'", "'udent'", "'t'", "'udent '"],
    correctAnswer: "'t'"
  },
  {
    id: 24,
    text: "What will the following query extract? SELECT SUBSTR('I am a Student', INSTR('I am from Nepal.', 'I am'), 6) FROM dual;",
    options: ["'I am a'", "'I am S'", "'I am'", "'am a S'"],
    correctAnswer: "'I am a'"
  },
  {
    id: 25,
    text: "What does the following query return? SELECT INSTR( SUBSTR('I am a Student. I am from Nepal.', 8, 12), 'am' ) FROM dual;",
    options: ["1", "3", "0", "5"],
    correctAnswer: "0"
  }
];

const NORMALIZATION_QUESTIONS: Question[] = [
  // ... existing questions ...
  {
    id: 1,
    text: "What is the main purpose of Normalisation?",
    options: ["Increase redundancy", "Reduce anomalies & redundancy", "Make tables bigger", "Remove primary keys"],
    correctAnswer: "Reduce anomalies & redundancy"
  },
  {
    id: 2,
    text: "Which anomaly occurs when changing data requires updating multiple rows?",
    options: ["Insertion anomaly", "Update anomaly", "Deletion anomaly", "Functional anomaly"],
    correctAnswer: "Update anomaly"
  },
  {
    id: 3,
    text: "A relation is in 1NF when:",
    options: ["It has no transitive dependencies", "It has no partial dependencies", "It has no repeating groups", "It has a foreign key"],
    correctAnswer: "It has no repeating groups"
  },
  {
    id: 4,
    text: "Which dependency is indirect and involves three attributes (A → B → C)?",
    options: ["Partial dependency", "Full dependency", "Transitive dependency", "Composite dependency"],
    correctAnswer: "Transitive dependency"
  },
  {
    id: 5,
    text: "Which of the following best describes Data Redundancy?",
    options: ["Intentional removal of attributes", "Storing the same data in multiple places", "Using multiple primary keys", "Using composite attributes"],
    correctAnswer: "Storing the same data in multiple places"
  },
  {
    id: 6,
    text: "Which anomaly occurs when deleting a row removes useful information unintentionally?",
    options: ["Update anomaly", "Delete anomaly", "Insert anomaly", "Redundancy anomaly"],
    correctAnswer: "Delete anomaly"
  },
  {
    id: 7,
    text: "Full Functional Dependency means:",
    options: ["Value of attribute B depends on only part of a composite key", "Value of attribute B depends on whole keys", "B determines A", "A is derived from B"],
    correctAnswer: "Value of attribute B depends on whole keys"
  },
  {
    id: 8,
    text: "Given: STUDENT-ID, ACTIVITY → PROFICIENCY. This is an example of:",
    options: ["Partial Dependency", "Full Functional Dependency", "Transitive Dependency", "Composite anomaly"],
    correctAnswer: "Full Functional Dependency"
  },
  {
    id: 9,
    text: "A relation is in 2NF if:",
    options: ["It has no repeating groups", "It has no partial dependencies", "It has no transitive dependencies", "It has a composite key"],
    correctAnswer: "It has no partial dependencies"
  },
  {
    id: 10,
    text: "In which normal form do we remove transitive dependencies?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: "3NF"
  },
  {
    id: 11,
    text: "Which of the following is a Partial Dependency?",
    options: ["A composite key determines all columns", "Only one part of composite key determines a non-key attribute", "A → B → C", "A determines B"],
    correctAnswer: "Only one part of composite key determines a non-key attribute"
  },
  {
    id: 12,
    text: "Consider the relation: ORDER (order-no, prod-no, prod-desc, unit-price). Which FD indicates a partial dependency?",
    options: ["order-no → prod-desc", "prod-no → prod-desc", "order-no, prod-no → prod-desc", "prod-desc → unit-price"],
    correctAnswer: "prod-no → prod-desc"
  },
  {
    id: 13,
    text: "In UNF, which of the following is usually present?",
    options: ["Only atomic values", "Repeating groups", "No functional dependencies", "Only foreign keys"],
    correctAnswer: "Repeating groups"
  },
  {
    id: 14,
    text: "Which is true about 3NF relations?",
    options: ["No repeating groups", "No partial dependencies", "No transitive dependencies", "All attributes depend on part of key"],
    correctAnswer: "No transitive dependencies"
  },
  {
    id: 15,
    text: "In 1NF transformation, what must be removed?",
    options: ["Foreign keys", "Primary keys", "Repeating groups", "Functional dependencies"],
    correctAnswer: "Repeating groups"
  },
  {
    id: 16,
    text: "Transitive Dependency leads to:",
    options: ["Simple retrieval", "Data redundancy", "Primary key duplication", "Lossless join"],
    correctAnswer: "Data redundancy"
  },
  {
    id: 17,
    text: "Which of the following ensures a relation is already in 2NF automatically?",
    options: ["No primary key", "Single attribute primary key", "Composite key with dependencies", "Presence of repeating groups"],
    correctAnswer: "Single attribute primary key"
  },
  {
    id: 18,
    text: "Which of the following indicates that a relation is NOT in 3NF?",
    options: ["A → B, B → C", "A → B, C → D", "A, B → C", "A → B"],
    correctAnswer: "A → B, B → C"
  },
  {
    id: 19,
    text: "If a relation is in 3NF, which of the following is ALWAYS true?",
    options: ["It has no foreign keys", "It has no partial or transitive dependencies", "It cannot have composite keys", "It must contain repeating groups"],
    correctAnswer: "It has no partial or transitive dependencies"
  },
  {
    id: 20,
    text: "Which of the following best describes an Insertion Anomaly?",
    options: ["Need to insert extra unnecessary data to add a new record", "Cannot update a value because too many rows are linked", "Deleting one row deletes required information", "Two attributes determine each other"],
    correctAnswer: "Need to insert extra unnecessary data to add a new record"
  },
  {
    id: 21,
    text: "What usually causes Update Anomalies in a table?",
    options: ["Transitive dependencies", "Foreign keys", "Data redundancy", "Composite primary keys"],
    correctAnswer: "Data redundancy"
  },
  {
    id: 22,
    text: "Consider the relation: EMP(emp_id, emp_name, dept_no, dept_location). Which anomaly occurs if dept_location is stored in every row?",
    options: ["Delete anomaly", "Update anomaly", "Insert anomaly", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 23,
    text: "Which normal form removes insertion, update, and deletion anomalies MOST effectively?",
    options: ["1NF", "2NF", "3NF", "UNF"],
    correctAnswer: "3NF"
  },
  {
    id: 24,
    text: "Which of these is an example of a Delete Anomaly?",
    options: ["Adding a new customer requires entering order details", "Updating a price requires changing multiple rows", "Removing the last student in a class also removes the class information", "Cannot determine salary without grade"],
    correctAnswer: "Removing the last student in a class also removes the class information"
  },
  {
    id: 25,
    text: "What is the main reason deletion anomalies occur?",
    options: ["Relation is in BCNF", "Lack of primary keys", "Multiple tables without relationships", "Storing unrelated attributes in the same table"],
    correctAnswer: "Storing unrelated attributes in the same table"
  }
];

const MIXED_REVIEW_QUESTIONS: Question[] = [
  // ... existing questions ...
  {
    id: 1,
    text: "Who introduced the Relational Model for databases?",
    options: ["Agar F. Codd", "Charles Bachman", "Edgar F. Codd", "C. Edgar"],
    correctAnswer: "Edgar F. Codd"
  },
  {
    id: 2,
    text: "In Relational Algebra, the SELECT (σ) operation is used to:",
    options: ["Choose specific columns", "Choose specific rows based on condition", "Combine two relations", "Rename attributes"],
    correctAnswer: "Choose specific rows based on condition"
  },
  {
    id: 3,
    text: "Which clause is used to restrict rows in SQL?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "DISTINCT"],
    correctAnswer: "WHERE"
  },
  {
    id: 4,
    text: "Which operator is used to match a character pattern in SQL?",
    options: ["BETWEEN", "LIKE", "IN", "EXISTS"],
    correctAnswer: "LIKE"
  },
  {
    id: 5,
    text: "The default sorting order in SQL is:",
    options: ["DESC", "RANDOM", "ASC", "NONE"],
    correctAnswer: "ASC"
  },
  {
    id: 6,
    text: "Which wildcard in LIKE represents many characters?",
    options: ["_", "%", "*", "?"],
    correctAnswer: "%"
  },
  {
    id: 7,
    text: "Which condition is TRUE for IS NULL?",
    options: ["Checks 0 value", "Checks blank space", "Checks empty string", "Checks absence of value"],
    correctAnswer: "Checks absence of value"
  },
  {
    id: 8,
    text: "What does the BETWEEN operator include?",
    options: ["Only Lower limit", "Only Upper limit", "Both limits", "Neither"],
    correctAnswer: "Both limits"
  },
  {
    id: 9,
    text: "What does the IN condition check?",
    options: ["Pattern matches", "Range matches", "Value in a list", "Null values"],
    correctAnswer: "Value in a list"
  },
  {
    id: 10,
    text: "Which symbol is used for SQL substitution variable?",
    options: ["-", "@", "$", "&"],
    correctAnswer: "&"
  },
  {
    id: 11,
    text: "Which step sorts data in SQL queries?",
    options: ["SORT BY", "ORDER", "ODER BY", "ORDER BY"],
    correctAnswer: "ORDER BY"
  },
  {
    id: 12,
    text: "Data modeling creates a ____ representation of data.",
    options: ["Physical", "Visual", "Binary", "Numeric"],
    correctAnswer: "Visual"
  },
  {
    id: 13,
    text: "Which is NOT a database model?",
    options: ["Hierarchical", "Relational", "Object-Oriented", "Spreadsheet Model"],
    correctAnswer: "Spreadsheet Model"
  },
  {
    id: 14,
    text: "In a hierarchical model, each child has:",
    options: ["Many parents", "One parent", "No parent", "Unlimited parents"],
    correctAnswer: "One parent"
  },
  {
    id: 15,
    text: "Which model supports many-to-many relationships?",
    options: ["Hierarchical", "Network", "Flat-file", "None"],
    correctAnswer: "Network"
  },
  {
    id: 16,
    text: "In ERD, an entity is represented by:",
    options: ["Circle", "Diamond", "Rectangle", "Square box"],
    correctAnswer: "Rectangle"
  },
  {
    id: 17,
    text: "Which attribute type can be broken into smaller parts?",
    options: ["Multi-valued", "Derived", "Composite", "Key"],
    correctAnswer: "Composite"
  },
  {
    id: 18,
    text: "\"Students enrolls in Courses” is an example of:",
    options: ["1:1", "1:M", "M:N", "Unary"],
    correctAnswer: "M:N"
  },
  {
    id: 19,
    text: "A ternary relationship has:",
    options: ["One entity connecting to itself", "Two entities maximum", "Three entities", "3 Relationships"],
    correctAnswer: "Three entities"
  },
  {
    id: 20,
    text: "Fan trap occurs when:",
    options: ["Two or more 1:M relationships start from same entity", "Optional relationships exist", "No key attribute exists", "When there is many to many relationship unresolved"],
    correctAnswer: "Two or more 1:M relationships start from same entity"
  },
  {
    id: 21,
    text: "Chasm trap occurs due to:",
    options: ["Mandatory participation", "Missing relationships", "Too many keys", "Composite attributes"],
    correctAnswer: "Missing relationships"
  },
  {
    id: 22,
    text: "Entity-Relationship Diagram is used in which design phase?",
    options: ["Physical design", "Conceptual design", "Implementation phase", "Testing phase"],
    correctAnswer: "Conceptual design"
  },
  {
    id: 23,
    text: "Given table Employees(..., Salary). Query: SELECT Employee_ID, last_name FROM employees WHERE salary BETWEEN 3000 AND 6000;",
    options: ["Employees with salary less than 3000", "Employees equal to 3000 or 6000", "Employees whose salary is between 3000 and 6000 (inclusive)", "Employees with salary greater than 3000"],
    correctAnswer: "Employees whose salary is between 3000 and 6000 (inclusive)"
  },
  {
    id: 24,
    text: "Given table Employees(..., First_Name). Query: SELECT first_name FROM employees WHERE First_Name LIKE 'S%';",
    options: ["Names ending with S", "Names containing S", "Names with length 1", "Names starting with S"],
    correctAnswer: "Names starting with S"
  },
  {
    id: 25,
    text: "Given table Employees(..., Manager_ID). Query: SELECT ... FROM employees WHERE manager_id IS NULL;",
    options: ["Employees whose manager_id is 0", "Employees with no manager", "Employees whose manager_id is NOT NULL", "All employees"],
    correctAnswer: "Employees with no manager"
  },
  {
    id: 26,
    text: "Given table Employees. Query: SELECT first_name FROM employees WHERE first_name LIKE '_a%';",
    options: ["Names starting with “a”", "Names ending with “a”", "Names where second letter is ‘a’", "Names containing \"a\" anywhere"],
    correctAnswer: "Names where second letter is ‘a’"
  },
  {
    id: 27,
    text: "Which SQL statement will produce an error?",
    options: [
        "SELECT employee_id, last_name FROM employees WHERE salary >= 3000;",
        "SELECT last_name, job_id FROM employees WHERE hire_date = '12-MAR-23';",
        "SELECT first_name AS \"Employee Name\" FROM employees;",
        "SELECT last_name salary FROM employees;"
    ],
    correctAnswer: "SELECT last_name salary FROM employees;"
  },
  {
    id: 28,
    text: "In Relational Algebra, the PROJECT (π) operation is used to:",
    options: ["Select specific tuples", "Select specific attributes", "Combine tables", "Filter rows"],
    correctAnswer: "Select specific attributes"
  },
  {
    id: 29,
    text: "The JOIN (⨝) operation in Relational Algebra:",
    options: ["Combines related tuples from two relations", "Removes duplicate records", "Renames attributes", "Selects all columns"],
    correctAnswer: "Combines related tuples from two relations"
  },
  {
    id: 30,
    text: "Two relations are union compatible when:",
    options: ["Same number of rows & columns", "Same attributes and same data types", "Same number of columns", "Same total data"],
    correctAnswer: "Same attributes and same data types"
  },
  {
    id: 31,
    text: "DIVISION (÷) in Relational Algebra is used to:",
    options: ["Divide numbers", "Find tuples related to ALL values in another relation", "Perform Cartesian product", "Rename attributes"],
    correctAnswer: "Find tuples related to ALL values in another relation"
  },
  {
    id: 32,
    text: "UNION (∪) operation in Relational Algebra:",
    options: ["Combines tuples & removes duplicates", "Finds common tuples", "Finds difference", "Joins vertically"],
    correctAnswer: "Combines tuples & removes duplicates"
  },
  {
    id: 33,
    text: "In SQL, CREATE TABLE belongs to:",
    options: ["DML", "DDL", "DCL", "TCL"],
    correctAnswer: "DDL"
  },
  {
    id: 34,
    text: "Which SQL command is used to add new data into a table?",
    options: ["UPDATE", "INSERT", "ALTER", "ADD"],
    correctAnswer: "INSERT"
  },
  {
    id: 35,
    text: "SQL Command to modify existing data in table is:",
    options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
    correctAnswer: "UPDATE"
  },
  {
    id: 36,
    text: "SQL Command to change a column name or data type:",
    options: ["MODIFY", "UPDATE", "ALTER", "CHANGE"],
    correctAnswer: "ALTER"
  },
  {
    id: 37,
    text: "DROP TABLE command in SQL:",
    options: ["Deletes rows only", "Removes structure & data permanently", "Deletes specific rows", "Removes structure only"],
    correctAnswer: "Removes structure & data permanently"
  },
  {
    id: 38,
    text: "TRUNCATE TABLE command in SQL:",
    options: ["Deletes all rows but keeps table structure", "Drops table permanently", "Deletes selected rows", "Modifies column"],
    correctAnswer: "Deletes all rows but keeps table structure"
  },
  {
    id: 39,
    text: "Which clause removes duplicate rows from result?",
    options: ["UNIQUE", "DESC", "DISTINCT", "NO_DUPLICATE"],
    correctAnswer: "DISTINCT"
  },
  {
    id: 40,
    text: "Alias in SQL is used to:",
    options: ["Change structure", "Rename a column or table temporarily", "Remove duplicates", "Delete data"],
    correctAnswer: "Rename a column or table temporarily"
  },
  {
    id: 41,
    text: "Which operator in SQL is used to combine conditions:",
    options: ["+", "AND, OR, NOT", "LIKE", "%"],
    correctAnswer: "AND, OR, NOT"
  },
  {
    id: 42,
    text: "Oracle concatenation operator is:",
    options: ["&", "+", "CONCAT", "||"],
    correctAnswer: "||"
  },
  {
    id: 43,
    text: "Literal character string refers to:",
    options: ["Text in single quotes", "A number", "A table name", "Null"],
    correctAnswer: "Text in single quotes"
  },
  {
    id: 44,
    text: "Which SQL statement is used to rename a table:",
    options: ["MODIFY TABLE old TO new", "CHANGE TABLE old TO new", "RENAME TABLE old TO new", "ALTER TABLE old TO new"],
    correctAnswer: "RENAME TABLE old TO new"
  },
  {
    id: 45,
    text: "Which SQL statement is used to Retrieve all columns from STUDENT:",
    options: ["SELECT STUDENT FROM *;", "SELECT ALL FROM STUDENT;", "SELECT * FROM STUDENT;", "SELECT * FROM STUDENTS;"],
    correctAnswer: "SELECT * FROM STUDENT;"
  },
  {
    id: 46,
    text: "From Given SQL Query: SELECT Student_Name, City FROM Student WHERE City = Kathmandu; What is the error here?",
    options: ["Missing semicolon", "String literal not enclosed in quotes", "Incorrect Keyword", "Extra comma"],
    correctAnswer: "String literal not enclosed in quotes"
  },
  {
    id: 47,
    text: "Display student names from Kathmandu: Given table Students(Student_ID, St_Name, City)",
    options: ["SELECT Student_Name FROM Student WHERE City = 'Kathmandu';", "SELECT * FROM Student WHERE Student_Name = 'Kathmandu';", "SELECT Student_Name = 'Kathmandu' FROM Student;", "SELECT St_Name FROM Students WHERE City = 'Kathmandu';"],
    correctAnswer: "SELECT St_Name FROM Students WHERE City = 'Kathmandu';"
  },
  {
    id: 48,
    text: "Given table Students(Student_ID, Student_Name, City). Which SQL statement will add a new column Email_ID to the Student table?",
    options: ["ALTER TABLE ADD COLUMN Email_ID VARCHAR2(30);", "ALTER TABLE Students ADD (Email VARCHAR2(30));", "UPDATE Students ADD COLUMN Email_ID VARCHAR2(30);", "ALTER TABLE Students ADD (Email _ID VARCHAR2(30));"],
    correctAnswer: "ALTER TABLE Students ADD (Email VARCHAR2(30));"
  },
  {
    id: 49,
    text: "Given table Student(Student_ID, Student_Name, City). If R1 = σ City = 'Kathmandu' (Student) & R2 = π Student_Name (R1) then What does R2 represent?",
    options: ["Names of all students", "Names of students from Kathmandu", "All details of Kathmandu students", "Names of students from Pokhara"],
    correctAnswer: "Names of students from Kathmandu"
  },
  {
    id: 50,
    text: "Given two tables Student(Student_ID, Course_ID) and Course(Course_ID, Course_Name). Which Relational Algebra expression finds student-course pairs?",
    options: ["Student ⨝ Course", "Student - Course", "Student ÷ Course", "Student π Course"],
    correctAnswer: "Student ⨝ Course"
  }
];

// Tables for Scenario 1
const SCENARIO_1_TABLES: TableData[] = [
  {
    title: "Customer",
    columns: ["ID", "Name", "City", "Phone"],
    rows: [
      ["C01", "Aman Shrestha", "Kathmandu", "9812345678"],
      ["C02", "Bina Lama", "Lalitpur", "9841122334"],
      ["C03", "Raju Rai", "Bhaktapur", "9807654321"],
      ["C04", "Sanu Karki", "Pokhara", "9865012345"]
    ]
  },
  {
    title: "Technician",
    columns: ["ID", "Name", "Skill", "Years"],
    rows: [
      ["T01", "Kumar Basnet", "Electrical", 5],
      ["T02", "Nirmal Thapa", "Plumbing", 3],
      ["T03", "Deepak KC", "Electrical", 7],
      ["T04", "Ritesh Mahat", "Carpentry", 2]
    ]
  },
  {
    title: "Booking",
    columns: ["ID", "Cust_ID", "Tech_ID", "Type", "Status"],
    rows: [
      ["B01", "C01", "T01", "Wiring", "Completed"],
      ["B02", "C02", "T03", "Repair", "Pending"],
      ["B03", "C03", "T02", "Pipe Fix", "Completed"],
      ["B04", "C01", "T02", "Leak", "Cancelled"],
      ["B05", "C04", "T01", "Install", "Completed"]
    ]
  }
];

const SCENARIO_2_TABLES: TableData[] = [
  {
    title: "Component",
    columns: ["Comp_ID", "Comp_Name", "Category", "Price"],
    rows: [
      ["C01", "Processor i5", "Processor", 250],
      ["C02", "HDD 1TB", "Storage", 60],
      ["C03", "RAM 8GB", "Memory", 40],
      ["C04", "SSD 500GB", "Storage", 80]
    ]
  },
  {
    title: "Supplier",
    columns: ["Sup_ID", "Sup_Name", "Region"],
    rows: [
      ["S01", "Tech World", "Kathmandu"],
      ["S02", "Electro Hub", "Lalitpur"],
      ["S03", "Global Parts", "Kathmandu"]
    ]
  },
  {
    title: "Supply",
    columns: ["Sup_ID", "Comp_ID"],
    rows: [
      ["S01", "C01"],
      ["S01", "C02"],
      ["S02", "C03"],
      ["S03", "C01"]
    ]
  }
];

const PRACTICAL_SCENARIO_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "List names of all customers living in Kathmandu.",
    options: [
      "Aman Shrestha",
      "Bina Lama, Raju Rai",
      "Sanu Karki",
      "Aman Shrestha, Raju Rai"
    ],
    correctAnswer: "Aman Shrestha",
    tables: SCENARIO_1_TABLES,
    explanation: "Looking at the Customer table, only row C01 (Aman Shrestha) has City = 'Kathmandu'."
  },
  {
    id: 2,
    text: "Retrieve Technician_Name and Skill of all electricians.",
    options: [
      "Kumar Basnet (Electrical), Nirmal Thapa (Plumbing)",
      "Kumar Basnet (Electrical), Deepak KC (Electrical)",
      "Deepak KC (Electrical), Ritesh Mahat (Carpentry)",
      "Kumar Basnet (Electrical)"
    ],
    correctAnswer: "Kumar Basnet (Electrical), Deepak KC (Electrical)",
    tables: SCENARIO_1_TABLES,
    explanation: "Filter the Technician table where Skill is 'Electrical'. T01 (Kumar Basnet) and T03 (Deepak KC) match."
  },
  {
    id: 3,
    text: "Display Booking_ID and Service_Type for bookings with status 'Completed'.",
    options: [
      "B01 (Wiring), B03 (Pipe Fix), B05 (Install)",
      "B02 (Repair), B04 (Leak Check)",
      "B01 (Wiring), B05 (Install)",
      "B03 (Pipe Fix), B04 (Leak Check)"
    ],
    correctAnswer: "B01 (Wiring), B03 (Pipe Fix), B05 (Install)",
    tables: SCENARIO_1_TABLES,
    explanation: "In the Booking table, rows B01, B03, and B05 have Status = 'Completed'."
  },
  {
    id: 4,
    text: "List all technicians with the bookings assigned to them (include technicians with no bookings).",
    options: [
      "T01, T02, T03",
      "T01, T02, T03, T04",
      "T01, T03",
      "T02, T04"
    ],
    correctAnswer: "T01, T02, T03, T04",
    tables: SCENARIO_1_TABLES,
    explanation: "This requires a Left Outer Join or just listing all technicians. T04 (Ritesh) has no booking but must be included."
  },
  {
    id: 5,
    text: "Find customers who have bookings with ALL Electrical technicians (Kumar and Deepak).",
    options: [
      "C01",
      "C02",
      "C04",
      "None"
    ],
    correctAnswer: "None",
    tables: SCENARIO_1_TABLES,
    explanation: "Electrical techs are T01 and T03. \nC01 booked T01 and T02. \nC02 booked T03. \nC04 booked T01. \nNo single customer booked BOTH T01 and T03."
  },
  {
    id: 6,
    text: "Find customers who have NOT made any bookings.",
    options: [
      "C01",
      "C02",
      "C03",
      "None"
    ],
    correctAnswer: "None",
    tables: SCENARIO_1_TABLES,
    explanation: "Checking the Booking table Cust_ID column: C01, C02, C03, C04 appear. Everyone has made a booking."
  },
  {
    id: 7,
    text: "Find technician IDs who have handled BOTH Completed and Pending bookings.",
    options: [
      "T01",
      "T02",
      "T03",
      "None"
    ],
    correctAnswer: "None",
    tables: SCENARIO_1_TABLES,
    explanation: "T01: Completed, Completed.\nT02: Completed, Cancelled.\nT03: Pending.\nNo one handled both Completed AND Pending."
  },
  {
    id: 8,
    text: "Write an SQL statement to add a column 'Email' VARCHAR2(50) to the CUSTOMER table.",
    options: [
      "ALTER TABLE CUSTOMER ADD Email VARCHAR2(50);",
      "UPDATE TABLE CUSTOMER ADD Email VARCHAR2(50);",
      "MODIFY TABLE CUSTOMER ADD Email VARCHAR2(50);",
      "INSERT INTO CUSTOMER COLUMN Email VARCHAR2(50);"
    ],
    correctAnswer: "ALTER TABLE CUSTOMER ADD Email VARCHAR2(50);",
    tables: SCENARIO_1_TABLES,
    explanation: "ALTER TABLE is the DDL command to add a column."
  },
  {
    id: 9,
    text: "Write an SQL statement to Update the status of booking B02 to Completed.",
    options: [
      "UPDATE Booking SET Status = 'Completed' WHERE Booking_ID = 'B02';",
      "MODIFY Booking SET Status = 'Completed' WHERE Booking_ID = 'B02';",
      "ALTER Booking SET Status = 'Completed' WHERE Booking_ID = 'B02';",
      "CHANGE Booking SET Status = 'Completed' WHERE Booking_ID = 'B02';"
    ],
    correctAnswer: "UPDATE Booking SET Status = 'Completed' WHERE Booking_ID = 'B02';",
    tables: SCENARIO_1_TABLES,
    explanation: "UPDATE ... SET ... WHERE is the standard syntax for modifying data."
  },
  {
    id: 10,
    text: "Write a query to find the total number of bookings with Service_Type = 'Repair'.",
    options: [
      "SELECT COUNT(*) FROM Booking WHERE Service_Type = 'Repair';",
      "SELECT SUM(*) FROM Booking WHERE Service_Type = 'Repair';",
      "SELECT TOTAL(*) FROM Booking WHERE Service_Type = 'Repair';",
      "SELECT COUNT(Service_Type) FROM Booking;"
    ],
    correctAnswer: "SELECT COUNT(*) FROM Booking WHERE Service_Type = 'Repair';",
    tables: SCENARIO_1_TABLES,
    explanation: "COUNT(*) counts the rows that match the condition."
  },
  {
    id: 11,
    text: "Retrieve Component_Name of all components priced above 300.",
    options: [
      "Processor i5",
      "HDD 1TB",
      "SSD 500GB",
      "None"
    ],
    correctAnswer: "None",
    tables: SCENARIO_2_TABLES,
    explanation: "Prices are: 250, 60, 40, 80. No component is priced above 300."
  },
  {
    id: 12,
    text: "List Supplier_Name of all suppliers located in the 'Kathmandu' region.",
    options: [
      "Tech World, Global Parts",
      "Electro Hub",
      "Tech World",
      "Global Parts"
    ],
    correctAnswer: "Tech World, Global Parts",
    tables: SCENARIO_2_TABLES,
    explanation: "S01 (Tech World) and S03 (Global Parts) are in Kathmandu."
  },
  {
    id: 13,
    text: "Display Component_ID and Category of components belonging to the category 'Storage'.",
    options: [
      "C02 (Storage), C04 (Storage)",
      "C01 (Processor)",
      "C03 (Memory)",
      "C02 (Storage)"
    ],
    correctAnswer: "C02 (Storage), C04 (Storage)",
    tables: SCENARIO_2_TABLES,
    explanation: "C02 is HDD (Storage), C04 is SSD (Storage)."
  },
  {
    id: 14,
    text: "Find suppliers who supply ALL components under the category 'Processor'.",
    options: [
      "S01, S03",
      "S01 only",
      "S02",
      "None"
    ],
    correctAnswer: "S01, S03",
    tables: SCENARIO_2_TABLES,
    explanation: "Processor is C01. S01 supplies C01. S03 supplies C01. Both supply all (one) processor."
  },
  {
    id: 15,
    text: "Find Component_IDs supplied by BOTH Supplier 'S01' and Supplier 'S02'.",
    options: [
      "C01",
      "C02",
      "C03",
      "None"
    ],
    correctAnswer: "None",
    tables: SCENARIO_2_TABLES,
    explanation: "S01 supplies C01, C02. S02 supplies C03. There is no overlap."
  },
  {
    id: 16,
    text: "Write an SQL statement to delete component C04 from the COMPONENT table.",
    options: [
      "DELETE FROM COMPONENT WHERE Component_ID = 'C04';",
      "REMOVE FROM COMPONENT WHERE Component_ID = 'C04';",
      "DROP FROM COMPONENT WHERE Component_ID = 'C04';",
      "ERASE FROM COMPONENT WHERE Component_ID = 'C04';"
    ],
    correctAnswer: "DELETE FROM COMPONENT WHERE Component_ID = 'C04';",
    tables: SCENARIO_2_TABLES,
    explanation: "DELETE FROM is the correct command for removing rows."
  },
  {
    id: 17,
    text: "Write an SQL query to display categories that have more than 1 component.",
    options: [
      "SELECT Category FROM Component GROUP BY Category HAVING COUNT(*) > 1;",
      "SELECT Category FROM Component WHERE COUNT(*) > 1;",
      "SELECT Category FROM Component GROUP BY Category WHERE COUNT(*) > 1;",
      "SELECT COUNT(*) FROM Component GROUP BY Category;"
    ],
    correctAnswer: "SELECT Category FROM Component GROUP BY Category HAVING COUNT(*) > 1;",
    tables: SCENARIO_2_TABLES,
    explanation: "HAVING is used to filter aggregated groups. 'Storage' appears twice."
  },
  {
    id: 18,
    text: "Write an SQL statement to update the Price of component C01 to 500.",
    options: [
      "UPDATE COMPONENT SET Price = 500 WHERE Component_ID = 'C01';",
      "MODIFY COMPONENT SET Price = 500 WHERE Component_ID = 'C01';",
      "ALTER COMPONENT SET Price = 500 WHERE Component_ID = 'C01';",
      "CHANGE COMPONENT SET Price = 500 WHERE Component_ID = 'C01';"
    ],
    correctAnswer: "UPDATE COMPONENT SET Price = 500 WHERE Component_ID = 'C01';",
    tables: SCENARIO_2_TABLES,
    explanation: "UPDATE works on data (rows). ALTER works on structure (columns)."
  }
];

export const QUIZZES: QuizConfig[] = [
  {
    id: 'dbms-concepts',
    title: 'DBMS Concepts',
    description: 'Data definitions, File systems vs DBMS, Architecture (3-Tier, ANSI-SPARC), and Data Independence.',
    questions: DBMS_QUESTIONS
  },
  {
    id: 'relational-algebra',
    title: 'Relational Algebra',
    description: 'Relational operators (σ, π, ⨝), Joins, Set operations, and Query logic.',
    questions: RELATIONAL_ALGEBRA_QUESTIONS
  },
  {
    id: 'sql-mastery',
    title: 'SQL Mastery',
    description: 'Master SQL commands, constraints, data manipulation, and schema modifications.',
    questions: SQL_QUESTIONS
  },
  {
    id: 'database-design',
    title: 'Database Design & SQL',
    description: 'ER Diagrams, Normalization, Data Models, and Advanced SQL queries.',
    questions: DATABASE_DESIGN_QUESTIONS
  },
  {
    id: 'advanced-modeling',
    title: 'Advanced Modeling & SQL',
    description: 'ER relationships, Fan/Chasm traps, SQL aggregation, dates, and string functions.',
    questions: ADVANCED_MODELING_QUESTIONS
  },
  {
    id: 'normalization',
    title: 'Normalization & Anomalies',
    description: 'Normal Forms (1NF, 2NF, 3NF), Anomalies (Insert, Update, Delete), and Dependencies.',
    questions: NORMALIZATION_QUESTIONS
  },
  {
    id: 'practical-scenarios',
    title: 'Practical SQL & Relational Algebra',
    description: 'Solve real-world problems using Booking and Inventory scenarios with visible data tables.',
    questions: PRACTICAL_SCENARIO_QUESTIONS
  },
  {
    id: 'mixed-review',
    title: 'Comprehensive Review',
    description: 'A 50-question challenge covering SQL, Relational Algebra, and Database Design concepts.',
    questions: MIXED_REVIEW_QUESTIONS
  }
];

export const QUESTIONS = DBMS_QUESTIONS;
