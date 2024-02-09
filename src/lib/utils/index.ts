// IMPORTED DEP-UTILS
import { v4 } from 'uuid';

// -- UTILS -- //

export const generateId = v4;

export const sleep = (timeout: number) => new Promise((res) => setTimeout(res, timeout));
