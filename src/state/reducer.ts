
type InitialStateType = {
    minCount: number
    maxCount: number
    count: number
    editing: boolean
}

const minLocalStorageValue = localStorage.getItem('minCount')
const maxLocalStorageValue = localStorage.getItem('maxCount')

const initialState: InitialStateType = {
    minCount: minLocalStorageValue ? +minLocalStorageValue : 0,
    maxCount: maxLocalStorageValue ? +maxLocalStorageValue : 5,
    count: minLocalStorageValue ? +minLocalStorageValue : 0,
    editing: false
}

export const reducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'CHANGE-MIN-COUNT':
            return {...state, minCount: action.payload.minCount}
        case 'CHANGE-MAX-COUNT':
            return {...state, maxCount: action.payload.maxCount}
        case 'CHANGE-COUNT':
            return {...state, count: action.payload.count}
        case 'CHANGE-EDITING':
            return {...state, editing: action.payload.editing}
        default:
            return state
    }
}
type ActionsType = ChangeMinCountActionType
    | ChangeMaxCountActionType
    | ChangeCountActionType
    | ChangeEditingActionType

export type ChangeMinCountActionType = ReturnType<typeof changeMinCountAC>
export const changeMinCountAC = (minCount: number) => {
    return {
        type: 'CHANGE-MIN-COUNT',
        payload: {minCount}
    } as const
}

export type ChangeMaxCountActionType = ReturnType<typeof changeMaxCountAC>
export const changeMaxCountAC = (maxCount: number) => {
    return {
        type: 'CHANGE-MAX-COUNT',
        payload: {maxCount}
    } as const
}

export type ChangeCountActionType = ReturnType<typeof changeCountAC>
export const changeCountAC = (count: number) => {
    return {
        type: 'CHANGE-COUNT',
        payload: {count}
    } as const
}

export type ChangeEditingActionType = ReturnType<typeof changeEditingAC>
export const changeEditingAC = (editing: boolean) => {
    return {
        type: 'CHANGE-EDITING',
        payload: {editing}
    } as const
}