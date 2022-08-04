import { Router } from 'express';
import * as HomeController from "../controllers/homeController";

const router = Router();

router.get('/', HomeController.home);
router.post('/novopedido', HomeController.criarPedido);
router.get('/pedido/:id/excluir', HomeController.excluirPedido);

export default router;