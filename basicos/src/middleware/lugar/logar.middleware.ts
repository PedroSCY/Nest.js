import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogarMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const logger = new Logger(LogarMiddleware.name);
    const {n} = req.body;

    if(n<10) {
      logger.error("Número menor do que 10")
      res.status(400).json({message: "Número menor do que 10"})
      return
    }
    logger.log("Número maior ou igual a 10 recebido!")
    next();
  }
}
