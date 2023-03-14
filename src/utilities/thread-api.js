import { getToken } from "./users-service"

export function indexThread() {
    const token = getToken()
    return fetch("/api/thread", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function createThread(data) {
    const token = getToken()
    return fetch("/api/thread/new",{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
}

export function deleteThread(threadId) {
    const token = getToken()
    return fetch(`/api/thread/${threadId}`, {
        method: "DELETE",
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
}

export function updateThread(data, threadId) {
    const token = getToken()
    return fetch(`/api/thread/${threadId}`, {
        method: "PATCH",
        headers : {
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
}




export function showThread(threadId) {
    const token = getToken()
    return fetch(`/api/thread/${threadId}`, {
        method: "GET",
        headers : {
            Authorization: `Bearer ${token}`,
        }
    })
}