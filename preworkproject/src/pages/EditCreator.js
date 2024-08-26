import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { supabase } from './client';

const EditCreator = () => {
  const { id } = useParams();
  const history = useHistory();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setCreator(data);
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
      .from('creators')
      .update(creator)
      .eq('id', id);
    history.push('/showcreators');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={creator.name} onChange={handleChange} placeholder="Name" />
      <input name="url" value={creator.url} onChange={handleChange} placeholder="URL" />
      <input name="description" value={creator.description} onChange={handleChange} placeholder="Description" />
      <input name="imageURL" value={creator.imageURL} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Update Creator</button>
    </form>
  );
};

export default EditCreator;
