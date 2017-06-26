import { Status } from "../todo/Status";

export const todoStatus = {
      inQueue: new Status("in queue", 1),
      canceled: new Status("canceled", 2),
      done: new Status("done",3)
    }