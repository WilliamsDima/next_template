import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/index'
import { setUsers } from '../store/redusers/main/main'
import { User } from '../store/redusers/main/types'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
    const dispatch = useAppDispatch()

    return {
        setUsers: (users: User[]) => {
            dispatch(setUsers(users))
        }
    }
}