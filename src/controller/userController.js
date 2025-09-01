import { createUserService,getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";

// standardized response function
const handleResponse = (res, statusCode,message, data=null) => {
    res.status(statusCode).json({
        status: statusCode === 200 ? 'success' : 'error',
        message,
        data
    });
};


export const createUser = async (req, res, next) => {
    const {name, email} = req.body;
    try {
        const user = await createUserService({name, email});
        handleResponse(res, 200, 'User created successfully', user);
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService();
        handleResponse(res, 200, 'Users retrieved successfully', users);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if (!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User retrieved successfully', user);
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const user = await updateUserService(req.params.id, req.body);
        if (!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User updated successfully', user);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await deleteUserService(req.params.id);
        if (!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User deleted successfully', user);
    } catch (error) {
        next(error);
    }
};
