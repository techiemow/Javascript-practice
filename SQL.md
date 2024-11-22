# SQL (Structured Query Language)

SQL is a standard programming language specifically designed for managing and manipulating relational databases. It allows users to interact with databases by performing tasks such as:

- **Data Querying**: Retrieve specific data from a database.
- **Data Manipulation**: Insert, update, and delete records.
- **Data Definition**: Create and modify database schema (e.g., tables, indexes).
- **Access Control**: Define permissions for database users.

SQL is the backbone of relational database management systems (RDBMS), providing a consistent interface to work with data across various database platforms.

---

## Types of SQL Commands

### **DDL (Data Definition Language)**
- Defines the structure of the database.
- **Commands**: 
  - `CREATE`: To create new tables, databases, etc.
  - `ALTER`: To modify existing tables.
  - `DROP`: To delete tables or databases.
  - `TRUNCATE`: To remove all records from a table.

### **DML (Data Manipulation Language)**
- Handles data within the tables.
- **Commands**:
  - `SELECT`: To retrieve data.
  - `INSERT`: To add new data.
  - `UPDATE`: To modify existing data.
  - `DELETE`: To remove data.

### **DCL (Data Control Language)**
- Manages user permissions.
- **Commands**:
  - `GRANT`: To provide user access rights.
  - `REVOKE`: To remove user access rights.

### **TCL (Transaction Control Language)**
- Manages transactions in a database.
- **Commands**:
  - `COMMIT`: To save changes.
  - `ROLLBACK`: To undo changes.
  - `SAVEPOINT`: To set a transaction save point.

### **DQL (Data Query Language)**
- Focused on querying data.
- **Command**: 
  - `SELECT`: To retrieve data from the database.

---

## Different Types of Database Systems

### **1. Relational Databases (RDBMS)**
- **Definition**: Stores data in tables (rows and columns) with predefined relationships.
- **Examples**:
  - MySQL
  - PostgreSQL
  - Microsoft SQL Server
  - Oracle Database
- **Use Cases**:
  - Web applications.
  - Enterprise systems.
  - Data warehousing.
- **Advantages**:
  - Structured schema.
  - Strong data integrity and consistency.
  - SQL support.

### **2. NoSQL Databases**
- **Definition**: Designed to handle unstructured or semi-structured data; does not use a fixed schema.
- **Examples**:
  - MongoDB (Document-oriented)
  - Cassandra (Wide-column store)
  - Redis (Key-value store)
  - Neo4j (Graph database)
- **Use Cases**:
  - Big data applications.
  - Real-time systems.
  - Social networks.
- **Advantages**:
  - High scalability.
  - Flexible schema.
  - Handles large volumes of diverse data types.


# MySQL

MySQL is an open-source, relational database management system (RDBMS) based on SQL (Structured Query Language). It is widely used for web applications, enterprise systems, and data storage solutions due to its reliability, scalability, and ease of use.

---

## Features of MySQL

1. **Open-Source**: Freely available under the GNU General Public License.
2. **Cross-Platform Support**: Runs on various platforms, including Windows, Linux, and macOS.
3. **Scalability**: Handles small to large-scale databases efficiently.
4. **High Performance**: Optimized for speed and supports multi-threading.
5. **Security**: Provides user authentication and access control for secure data management.
6. **Replication**: Allows data to be duplicated across multiple servers for high availability.
7. **ACID Compliance**: Ensures data consistency and integrity for transactional operations.
8. **Extensive Language Support**: Compatible with languages like PHP, Python, Java, and C++.
9. **Community Support**: Backed by a large community and extensive documentation.

---

## Common MySQL Commands

### **1. Database Management**
- **Create a Database**:
  ```sql
  CREATE DATABASE my_database;



# Explanation of MySQL Commands

## 1. Complex Joins

```sql
SELECT 
    users.name, 
    orders.order_date, 
    products.product_name
FROM 
    users
INNER JOIN 
    orders ON users.id = orders.user_id
INNER JOIN 
    products ON orders.product_id = products.id
WHERE 
    orders.order_date > '2024-01-01';


```

Purpose
Retrieve data from multiple related tables.

Explanation
INNER JOIN: Combines rows from both tables where there’s a match in the ON condition.
users, orders, and products: These are the tables being joined.
WHERE clause: Filters results to include only orders placed after January 1, 2024.
2. Subqueries
sql
Copy code
SELECT name, email 
FROM users 
WHERE id IN (
    SELECT user_id 
    FROM orders 
    WHERE order_date > '2024-01-01'
);
Purpose
Use the result of one query inside another.

Explanation
Inner Query: Retrieves user_id values for users who placed orders after January 1, 2024.
Outer Query: Retrieves name and email of these users from the users table.
IN Clause: Filters rows in the outer query based on the results of the inner query.
3. Aggregation with Grouping
sql
Copy code
SELECT 
    user_id, 
    COUNT(order_id) AS total_orders, 
    SUM(order_amount) AS total_spent
FROM 
    orders
GROUP BY 
    user_id
HAVING 
    total_spent > 500;
Purpose
Summarize data using aggregate functions.

Explanation
COUNT(order_id): Counts the number of orders per user.
SUM(order_amount): Calculates the total amount spent by each user.
GROUP BY user_id: Groups rows with the same user_id for aggregation.
HAVING: Filters groups where the total_spent exceeds 500.
4. Case Statement
sql
Copy code
SELECT 
    name, 
    age,
    CASE 
        WHEN age < 18 THEN 'Minor'
        WHEN age BETWEEN 18 AND 60 THEN 'Adult'
        ELSE 'Senior'
    END AS age_group
FROM 
    users;
Purpose
Apply conditional logic within SQL queries.

Explanation
CASE: Functions like an if-else statement to categorize users based on age.
THEN: Specifies the output for each condition.
AS age_group: Assigns a custom column name to the result.
5. Window Functions
sql
Copy code
SELECT 
    name, 
    order_date, 
    SUM(order_amount) OVER (PARTITION BY user_id ORDER BY order_date) AS running_total
FROM 
    orders;
Purpose
Perform calculations across rows without collapsing them into groups.

Explanation
SUM(order_amount) OVER: Calculates a running total of orders for each user.
PARTITION BY user_id: Resets the running total for each user.
ORDER BY order_date: Ensures the running total is calculated in the order of dates.
6. Full-Text Search
sql
Copy code
SELECT 
    name, 
    email 
FROM 
    users
WHERE 
    MATCH(name, email) AGAINST('Alice' IN NATURAL LANGUAGE MODE);
Purpose
Search for patterns in text-based columns.

Explanation
MATCH: Specifies the columns to search.
AGAINST: Defines the search term (Alice) and search mode.
NATURAL LANGUAGE MODE: Searches for natural language matches, considering relevance.
7. Recursive Query (Common Table Expression)
sql
Copy code
WITH RECURSIVE employee_hierarchy AS (
    SELECT id, name, manager_id
    FROM employees
    WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy;
Purpose
Handle hierarchical or recursive data structures.

Explanation
WITH RECURSIVE: Declares a recursive query.
Base Case: Retrieves employees with no manager (manager_id IS NULL).
Recursive Case: Iteratively retrieves subordinates of each employee.
UNION ALL: Combines base and recursive cases.
Summary
MySQL’s Capabilities
Joins: For relationships between tables.
Subqueries: For conditional filtering.
Grouping: To summarize large datasets.
Window Functions: For advanced analytics.
Recursive Queries: To handle hierarchical data.
Full-Text Search: To efficiently search large text datasets.
Mastering these commands is essential for building robust, high-performance applications!