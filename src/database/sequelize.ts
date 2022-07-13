import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    "mysql://root:pedrinho22@localhost:3306/classicmodels",
    {
        define: {
            freezeTableName: true,
            timestamps: false,
        },
        logging: false,
    }
);

export default sequelize;