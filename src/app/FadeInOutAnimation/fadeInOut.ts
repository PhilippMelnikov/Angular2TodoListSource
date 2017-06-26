import { trigger, state, style, animate, transition } from '@angular/animations';


export function fadeInOut() {
  return trigger(
    'fadeInOut',
    [
      state('void', style({opacity: 0}) ),
      state('*', style({opacity: 1}) ),
      transition(":enter", [
        style({ opacity: 0}),
        animate('300ms ease-out', style({opacity: 1}))
      ]),
  
    ])
}