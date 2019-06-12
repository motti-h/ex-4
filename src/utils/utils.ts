import { Response, Request, NextFunction, RequestHandler } from 'express';
import * as validation from '../validation/common';
import joi from 'joi';
export function middleCheckId(req: Request, res: Response, next: NextFunction): any {
    const id = validation.getOrThrow<number>(req.params.id, validation.idSchema); // url params
    next();
/*
    if (isNaN(id)) {
       next(new Error('400'));
    }

    next();
*/
}

export function endError(err: any , req: Request, res: Response, next: NextFunction) {
  
  if(err.isJoi){
    res.status(400).send(err.details);
    return;
  }  
  if ( parseInt(err.message, 10) ) {
        res.sendStatus( parseInt(err.message, 10) );
    } else {
        next(err);
    }
}

