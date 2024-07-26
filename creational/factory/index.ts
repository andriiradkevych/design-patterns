enum EFactoryType {
  oracle,
  sqlServer,
  mySql,
}

class OracleConnection {}
class SqlServerConnection {}
class MySqlConnection {}

class Factory {
  type: EFactoryType;

  constructor(type: EFactoryType) {
    this.type = type;
  }

  createFactory(type: EFactoryType) {
    if (type === EFactoryType.oracle) {
      return new OracleConnection();
    }
    if (type === EFactoryType.sqlServer) {
      return new SqlServerConnection();
    }
    if (type === EFactoryType.mySql) {
      return new MySqlConnection();
    }
  }
}
