export function wfs(f,s) {
    return f*s
}
export function convert_FS_in_SI(f,s) {
    const F = f*(10**5)
    const S= s*(10**-2)
    return F*S
}
export function convert_FS_in_CGS(f,s){
    const F = f*(10**-5)
    const S= s*(10**2)
    return F*S
}