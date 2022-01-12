import Event from "../models/eventModel.js";
 
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getEventById = async (req, res) => {
    debugger;
    try {
        const event = await Event.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(event[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 

export const createEvent = async (req, res) => {
    const {title,         
        fullDesc,
        location,
        date,
        category,
        organizerId,
        subcatType,
        subcatEntry,
        website} = req.body;

        const file = req.file.filename;

    // console.log(req.body);

    const eventsBody = {
        title,
        full_desc: fullDesc,
        location,
        date,
        category,
        organizer_id: organizerId,
        subcat_type: subcatType,
        subcat_entry:subcatEntry,
        website,
        img_url: file
    }

    console.log(eventsBody);

    
    try {
        await Event.create(eventsBody);

        res.json({
            "message": "Event Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  

    console.log();

}
 
export const updateEvent = async (req, res) => {
    try {
        await Event.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Event Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteEvent = async (req, res) => {
    try {
        await Event.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Event Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}