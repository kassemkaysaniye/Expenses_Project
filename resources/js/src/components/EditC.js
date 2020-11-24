import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';


export default function Edit() {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');


    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updateCategory({
                name,
            }, id);
            history.push('/');
        }catch {
            alert('Failed to Edit Category');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        api.getOneCategory(id).then(res => {
            const category = res.data;

            setName(category.data.name);
            
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
