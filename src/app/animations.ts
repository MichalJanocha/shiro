import { trigger, state, style, transition, animate, query, group } from '@angular/animations';

export let contentFade = trigger("contentFade", [
    state("void", style({ transform: "translateX(100%)", opacity: 0 })
    ),
    transition("void => *", [
        animate(200)
    ])
])

export let routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed' })
        , { optional: true }),
    /* 2 */ group([  // block executes in parallel
            query(':enter', [
                style({ opacity: 0 }),
                animate('0.5s ease-in-out', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                animate('0.5s ease-in-out', style({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
])

export let dropdownAnimation = trigger('dropdownState', [

    state('true', style({ transform: 'translateX(0%)', opacity: 1 })),
    state('false', style({ transform: 'translateX(-100%)', opacity: 0 })),

    transition('true <=> false', [
        animate('300ms ease-in')
    ]),

])