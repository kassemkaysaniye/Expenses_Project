import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';


export default function Edit() {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category_id, setCategory] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updateExpense({
                name, amount,category_id,
            }, id);
            history.push('/');
        }catch {
            alert('Failed to Edit Expense');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        api.getOneExpense(id).then(res => {
            const expense = res.data;

            setName(expense.data.name);
            setAmount(expense.data.amount);
            setCategory(expense.data.category_id);
        })
    }, []);

    return (
        <AppContainer title="EDIT Category">
        <form>
            <div className="form-group">
                <label>Name</label>
                <input 
                className="form-control" 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input 
                className="form-control" 
                type="text"
                value={amount}
                onChange={e => setAmount(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Category ID</label>
                <textarea 
                className="form-control"
                value={category_id}
                onChange={e => setCategory(e.target.value)}
                ></textarea>
            </div>
            <div className="form-group">
                <button
                type="button"
                className="btn btn-success"
                onClick={onEditSubmit}
                disabled={loading}>
                    {loading? 'LOADING...' : 'EDIT'}
                </button>
            </div>
        </form>
        </AppContainer>
    );
};
