module.exports = function(sequelize, DataTypes) {
  
  var Item = sequelize.define("Item", {
	  uuid: {
		  type: DataTypes.UUID,
		  defaultValue: DataTypes.UUIDV1,
		  primaryKey: true,
		  isUUID: 4,
	  },
	  groupID: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  validate: {
			  len: {
				  args: [1, 255],
				  msg: "groupID length is not in range of 1-255"
			  }
		  },
		  defaultValue: false
	  },
	  name: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  validate: {
			  len: {
				  args: [1, 255],
				  msg: "Name length is not in range of 1-255"
			  }
		  },
		  defaultValue: false
	  },
	  description: {
		  type: DataTypes.TEXT,
		  allowNull: true,
		  defaultValue: false
	  },
	  category: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  validate: {
			  len: {
				  args: [1, 255],
				  msg: "category length is not in range of 1-255"
			  }
		  },
		  defaultValue: "other"
	  },
	  quantity: {
		  type: DataTypes.INTEGER					 ,
		  allowNull: false,
		  defaultValue: 0
	  },
	  expirationDate: {
		  type: DataTypes.DATE,
		  allowNull: true,
		  isDate: true
	  },
	  waiteTimeOnOrderHours: {
		  type: DataTypes.INTEGER,
		  allowNull: true
	  }

  },{
	  freezeTableName: true
  });
  return Item;
};
  