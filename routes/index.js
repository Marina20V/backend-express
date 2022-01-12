import express from "express";
 
import { 
    getAllEvents,
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent
} from "../controllers/Events.js";
 
import uploadImg from '../multer.js';
const router = express.Router();
 
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', uploadImg.single('file'), createEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);
 
export default router;