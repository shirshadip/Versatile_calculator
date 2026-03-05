export function gravitationalforce (mass1,mass2,distance){
    return 6.67430*10**11*((mass1*mass2)/distance**2)
}
export function convertgravitationalforce(mass1,mass2,distance){
    return 6.67430*10**8*((mass1,mass2,distance))
}
export function electricforce(q1,q2,distance) {
    return 9*10**9*((q1*q2)/distance**2)
}
export function convertelectricforce(q1,q2,distance){
    return ((q1*q2)/distance**2)
}