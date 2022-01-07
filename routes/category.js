import express from "express";
 
import { 
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
} from "../controllers/Category.js";
 
const router = express.Router();
 
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);
 
export default router;