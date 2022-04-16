import bcrypt from 'bcrypt';
import db from '../database';
import User from '../types/user.type';

class Model {
  constructor(public table: string) {}
  // create
  async create(user: User): Promise<User> {
    try {
      // open connection with DB
      const connection = await db.connect();
      const data = Object.keys(user);
      const sql = `INSERT INTO ${this.table} (${data.join(',')})
        values (${Array.from(
          { length: data.length },
          (e, i) => `$${i + 1}`
        )}) returning *`;
      // run query
      const result = await connection.query(sql, Object.values(user));
      // release connection
      connection.release();
      // return created
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to create ${this.table.slice(0, -1)}`);
    }
  }

  // get all
  async getAll(): Promise<User[]> {
    try {
      const connection = await db.connect();
      const sql = `SELECT * FROM ${this.table}`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Unable to get ${this.table}: ${(error as Error).message}`
      );
    }
  }

  // get specific one
  async getOne(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `SELECT * FROM ${this.table} WHERE id=($1)`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to get ${this.table.slice(0, -1)}:${id}, ${
          (error as Error).message
        }`
      );
    }
  }

  // update one
  async updateOne(id: string, u: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `
      UPDATE ${this.table}
      SET ${Object.keys(u)
        .map((e, i) => `${e}=$${i + 1}`)
        .join(',')}
      
      WHERE id=${id}
      RETURNING *`;
      const result = await connection.query(sql, Object.values(u));
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to update ${this.table.slice(0, -1)}:${u.firstName} ${
          u.lastName
        }, ${(error as Error).message} `
      );
    }
  }

  // delete one
  async deleteOne(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM ${this.table}
      WHERE id=$1
      RETURNING *`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to delete ${this.table.slice(0, -1)}: ${id}, ${
        (error as Error).message
      };
    )`);
    }
  }

  // authenticate user
  // hash Password
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
}

export default Model;
