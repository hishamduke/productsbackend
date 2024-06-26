import { Request } from "express";
import { TUser } from "../models/user.js";

export interface AuthenticatedRequest extends Request {
  user?: Omit<TUser, "passwordhash">;
}

export interface AuthTokenPayload {
  userId: Pick<TUser, "_id">;
}
