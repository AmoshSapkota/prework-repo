import React, { useState } from 'react';
import { supabase } from './client';
import { useHistory } from 'react-router-dom';

const AddCreator = () => {
  const history = useHistory();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
      .from('creators')
      .insert([creator]);
    history.push('/showcreators');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={creator.name} onChange={handleChange} placeholder="Name" />
      <input name="url" value={creator.url} onChange={handleChange} placeholder="URL" />
      <input name="description" value={creator.description} onChange={handleChange} placeholder="Description" />
      <input name="imageURL" value={creator.imageURL} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;
