/**
 * @description:
 * Cross-browser @media (height/width)
 *
 * 1. window.innerWidth/Width
 * 1.1. gets CSS viewport @media (height/width) which include scrollbars
 * 1.2. initial-scale and zoom variations may cause mobile values to
 *      wrongly scale down to what PPK calls the visual
 *      viewport and be smaller than the @media values
 *  1.3. zoom may cause values to be 1px off due to native rounding
 *
 *  2. document.documentElement.clientHeight/Width
 *  2.1. equals CSS viewport width minus scrollbar width
 *  2.2. matches @media (height) when there is no scrollbar
 *  2.3. available cross-browser
 *  2.4. inaccurate if doctype is missing
 */
export declare function tuiGetViewportHeight({ document, innerHeight }: Window): number;
export declare function tuiGetViewportWidth({ document, innerWidth }: Window): number;
