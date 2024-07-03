//Those are action creators it.

export function deposit(amount: string) {
    return { type: "deposit", payload: amount }
}

export function withdraw(amount: string) {
    return { type: "withdraw", payload: amount }
}

export function nameUpdate(fullName: string) {
    return { type: "nameUpdate", payload: fullName }
}

export function mobileUpdate(mobile: string) {
    return { type: "mobileUpdate", payload: mobile }
}

export function reset() {
    return { type: "reset" }
}

