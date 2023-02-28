
import { get, post } from './http'

export const addUser = p => post('/user/add', p)

export const userLogin = p => get('/user/login', p)

export const addCategory = p => post('/category/add', p)

export const queryAllCategory = p => get('/category/list', p)

export const deleteCategoryWithId = p => get('/category/delete', p)

export const updateCategory = p => post('/category/update', p)

export const addQuestion = p => post('/question/add', p)

export const deleteQuestion = p => post('/question/delete', p)

export const queryQuestionByCategory = p => get('/question/list', p)

export const updateAnswerContent = p => post('/question/updateAnswerContent', p)
