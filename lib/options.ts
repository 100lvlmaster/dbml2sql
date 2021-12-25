import { ConvertOption } from "./types";
// {'mysql'|'postgres'|'dbml'|'schemarb'|'mssql'|'json'}

const options: ConvertOption[] = [
  {
    title: "MySQL",
    value: "mysql",
  },
  {
    title: "PostgresSQL",
    value: "postgres",
  },
  {
    title: "DBML",
    value: "dbml",
  },
  {
    title: "MsSQL",
    value: "mssql",
  },
  {
    title: "JSON",
    value: "json",
  },
];

export { options };
