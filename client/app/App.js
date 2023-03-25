import { AuthController } from './Controllers/AuthController.js';
import { CommentsController } from "./Controllers/CommentsController.js";
import { ComplaintsController } from "./Controllers/ComplaintsController.js";
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  complaintsController = new ComplaintsController()

  commentsController = new CommentsController()
}

// @ts-ignore
window.app = new App()
