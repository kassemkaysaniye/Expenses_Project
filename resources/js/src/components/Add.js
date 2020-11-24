import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';


export default function Add() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category_id, setCategory] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            console.log("hi")
            await api.addExpense({
                name, amount,category_id,
            });
            history.push('/')
        }catch {
            alert('Failed to Add Expense');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="ADD Expense">
        <form>
            <div className="form-group">
                <label>Expense Name</label>
                <input 
                className="form-control" 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Expense Amount</label>
                <input 
                className="form-control" 
                type="text"
                value={amount}
                onChange={e => setAmount(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Category ID</label>
                <input 
                className="form-control" 
                type="text"
                value={category_id}
                onChange={e => setCategory(e.target.value)}/>
            </div>
            {/* <div className="form-group">
                <label>Description</label>
                <textarea 
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
                ></textarea>
            </div> */}
            <div className="form-group">
                <button
                type="button"
                className="btn btn-success"
                onClick={onAddSubmit}
                disabled={loading}>
                    {loading? 'LOADING...' : 'ADD'}
                </button>
            </div>
        </form>
        </AppContainer>
    );
};
