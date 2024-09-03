const sequelize = require("../db");

// get all services
const listAllServices = async (req,res) => {
    try {
        const allServices = await sequelize.query("SELECT * FROM service");
        res.json(allServices[0]);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

// get a service
const listServiceById = async (req,res) => {
    try {
        const { car_id } = req.params;
        console.log(req.para)
        console.log(car_id)
        const service = await sequelize.query("SELECT * FROM service WHERE car_id=:car_id",{
            replacements:{
                car_id,
            }
        });
        res.json(service[0]);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

// create a service
const newService = async (req,res) => {
    try {
        const { new_car_id, new_service_name, new_date, new_current_km, new_transaction_made, new_additional_note} = req.body;
        const newService = await sequelize.query('INSERT INTO service (car_id, service_name, date, current_km, transaction_made, additional_note) VALUES(:new_car_id, :new_service_name, :new_date, :new_current_km, :new_transaction_made, :new_additional_note)',{
            replacements:{
                new_car_id,
                new_service_name,
                new_date,
                new_current_km,
                new_transaction_made,
                new_additional_note
            }
        });
        
        res.status(200).json("New service added");
        
    } catch (err) {
        res.status(404).json(err.message);
    }
};

// edit a service
const editService = async (req,res) => {
    try {
        const { id } = req.params;
        const { new_service_name, new_date, new_current_km, new_transaction_made, new_additional_note} = req.body;
        const editService = await sequelize.query('UPDATE service SET service_name =:new_service_name , date =:new_date , current_km =:new_current_km , transaction_made =:new_transaction_made , additional_note =:new_additional_note WHERE id=:id',{
            replacements:{
                id,
                new_service_name,
                new_date,
                new_current_km,
                new_transaction_made,
                new_additional_note
            }
        });

        res.status(200).json("Service updated");
        
    } catch (err) {
        res.status(404).json(err.message);
    }
};

//delete a service
const deleteService = async (req,res) => {
    try {
        const { id } = req.params;
        const deleteService = await sequelize.query('DELETE FROM service WHERE id =:id',{
            replacements:{
                id
            }
        });

        res.status(200).json("Service deleted")

    } catch (err) {
        res.status(404).json(err.message);
    }
};



module.exports = {
    listAllServices,
    listServiceById,
    newService,
    editService,
    deleteService
}