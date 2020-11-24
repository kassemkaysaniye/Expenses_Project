import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';


export default function AddC() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addCategory({
                name,
            });
            history.push('/')
        }catch {
            alert('Failed to Add Category');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="ADD Category">
        <form>
            <div className="form-group">
                <label>Category Name</label>
                <input 
                className="form-control" 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
          
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
