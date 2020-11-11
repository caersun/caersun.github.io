module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true }
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Contact;
};