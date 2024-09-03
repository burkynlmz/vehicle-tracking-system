const sequelize = require("../db");

// get all cars
const listAllCars = async (req,res) => {
    try {
        const allCars = await sequelize.query("SELECT * FROM car");
        res.status(200).json(allCars[0]);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

// get a car
const listCarById = async (req,res) => {
    try {
        const { id } = req.params;
        const car = await sequelize.query("SELECT * FROM car WHERE id=:id",{
            replacements:{
                id,
            }
        });
        res.status(200).json(car[0]);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

// create a car
const newCar = async (req,res) =>{
    try {
        const { new_plate } = req.body;
        const { new_user } = req.body;
        const { new_brand } = req.body;
        const { new_model } = req.body;
        const { new_traffic_insurance_expiry_date } = req.body;
        const { new_model_year } = req.body;
        const { new_inspection_end_date } = req.body;
        const { new_purchase_or_rental_date } = req.body;
        const { new_arvento_id } = req.body;
        const { new_annual_km_limit } = req.body;
        const { new_expense } = req.body;
        const { new_telephone_no } = req.body;
        const { new_kasko_expiration_date } = req.body;

        const newCar = await sequelize.query('INSERT INTO car (plate, "user" , brand, model, traffic_insurance_expiry_date, model_year, inspection_end_date, purchase_or_rental_date, arvento_id, annual_km_limit, expense, telephone_no, kasko_expiration_date) VALUES(:new_plate, :new_user, :new_brand, :new_model, :new_traffic_insurance_expiry_date, :new_model_year, :new_inspection_end_date, :new_purchase_or_rental_date, :new_arvento_id, :new_annual_km_limit, :new_expense, :new_telephone_no, :new_kasko_expiration_date)',{
           replacements:{
            new_plate,
            new_user,
            new_brand,
            new_model,
            new_traffic_insurance_expiry_date,
            new_model_year,
            new_inspection_end_date,
            new_purchase_or_rental_date,
            new_arvento_id,
            new_annual_km_limit,
            new_expense,
            new_telephone_no,
            new_kasko_expiration_date,
           } 
        });

        res.status(200).send({
            message:"new car added."
        });
        
    } catch (err) {
        res.status(404).json(err.message);
    }
};

// edit a car
const editCar = async (req,res) => {
    try {
        const { id } = req.params;
        const { new_plate, new_user, new_brand, new_model, new_traffic_insurance_expiry_date, new_model_year, new_inspection_end_date, new_purchase_or_rental_date, new_arvento_id, new_annual_km_limit, new_expense, new_telephone_no, new_kasko_expiration_date} = req.body;
        const editCar = await sequelize.query('UPDATE car SET plate =:new_plate , "user" =:new_user , brand =:new_brand , model =:new_model , traffic_insurance_expiry_date =:new_traffic_insurance_expiry_date , model_year =:new_model_year , inspection_end_date =:new_inspection_end_date , purchase_or_rental_date =:new_purchase_or_rental_date , arvento_id =:new_arvento_id , annual_km_limit =:new_annual_km_limit , expense =:new_expense , telephone_no =:new_telephone_no , kasko_expiration_date =:new_kasko_expiration_date WHERE id =:id',{
            replacements:{
                id,
                new_plate,
                new_user,
                new_brand,
                new_model,
                new_traffic_insurance_expiry_date,
                new_model_year,
                new_inspection_end_date,
                new_purchase_or_rental_date,
                new_arvento_id,
                new_annual_km_limit,
                new_expense,
                new_telephone_no,
                new_kasko_expiration_date
            }
        });

        res.status(200).json("Car was updated");

    } catch (err) {
        res.status(404).json(err.message);
    }
};

// delete a car
const deleteCar = async (req,res) => {
    try {
        const { id } = req.params;
        const deleteCar = await sequelize.query('DELETE FROM car WHERE id =:id',{
            replacements:{
                id
            }
        });

        res.status(200).json("Car was deleted");

    } catch (err) {
        res.status(404).json(err.message);
    }
};



module.exports ={
    listAllCars,
    listCarById,
    newCar,
    editCar,
    deleteCar
};